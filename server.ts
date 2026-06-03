import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import { Webhook } from "svix";
import dotenv from "dotenv";

dotenv.config({ override: true });

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Redirect HTTP to HTTPS in production
  app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production" && req.headers["x-forwarded-proto"] === "http") {
      return res.redirect(308, `https://${req.headers.host}${req.url}`);
    }
    next();
  });

  // Webhook for Resend needs the raw body
  app.post("/api/webhooks/resend", express.raw({ type: 'application/json' }), (req, res) => {
    const secret = process.env.RESEND_WEBHOOK_SECRET;
    const payload = req.body.toString();

    if (!secret) {
      console.log("Resend Webhook received (unverified, missing secret):", payload);
      return res.status(200).send("OK");
    }

    try {
      const wh = new Webhook(secret);
      const msg = wh.verify(payload, req.headers as Record<string, string>);
      console.log("Verified Resend webhook:", msg);
      res.status(200).send("OK");
    } catch (err) {
      console.error("Webhook verification failed:", err);
      res.status(400).send("Webhook verification failed");
    }
  });

  app.use(express.json());

  // Security headers
  app.use((req, res, next) => {
    const scriptSrc = process.env.NODE_ENV === "production" ? "'self'" : "'self' 'unsafe-inline' 'unsafe-eval'";
    res.setHeader(
      "Content-Security-Policy",
      `default-src 'self'; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; connect-src 'self' wss: https:; frame-src 'self' https://maps.google.com https://www.google.com; frame-ancestors 'self'; require-trusted-types-for 'script';`
    );
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
  });

  // Wait to initialize resend dynamically so server doesn't crash on boot if env var isn't set
  let resendArgs: Resend | null = null;
  const getResend = () => {
    if (!resendArgs) {
      // Use the provided API key if the env variable is the invalid old one or empty
      const apiKey = process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("eea03") 
        ? process.env.RESEND_API_KEY 
        : "re_BB4DQfR7_JrdAQ7j7W9FNd1av74bWstGU";
      resendArgs = new Resend(apiKey);
    }
    return resendArgs;
  };

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      const resend = getResend();
      if (!resend) {
        return res.status(500).json({ error: "Server is not configured for email sending (Missing RESEND_API_KEY)." });
      }

      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const toEmail = process.env.RESEND_TO_EMAIL || "miha@komuskic.com";

      if (!fromEmail) {
        return res.status(500).json({ error: "Server is not configured for email sending (Missing FROM email)." });
      }

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `Novo sporočilo s spletne strani - ${name}`,
        text: `
          Ime: ${name}
          E-pošta: ${email}
          Telefon: ${phone}
          
          Sporočilo:
          ${message}
        `,
      });

      if (error) {
        return res.status(400).json({ error: error.message || JSON.stringify(error) });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: "Failed to send message." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
