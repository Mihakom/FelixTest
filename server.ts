import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Wait to initialize resend dynamically so server doesn't crash on boot if env var isn't set
  let resendArgs: Resend | null = null;
  const getResend = () => {
    if (!resendArgs && process.env.RESEND_API_KEY) {
      resendArgs = new Resend(process.env.RESEND_API_KEY);
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

      if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
        return res.status(500).json({ error: "Server is not configured for email sending (Missing FROM/TO emails)." });
      }

      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.RESEND_TO_EMAIL],
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
        return res.status(400).json({ error });
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
