import type { Handler } from '@netlify/functions';
import { Resend } from 'resend';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  try {
    const { name, email, phone, message } = JSON.parse(event.body || '{}');

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "REST API KEY missing on server. Prosim dodaj RESEND_API_KEY v Netlify Environment variables." })
      };
    }
    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.RESEND_TO_EMAIL || "miha.komuskic@gmail.com";

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
      return {
        statusCode: 400,
        body: JSON.stringify({ error: error.message || JSON.stringify(error) })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send message." })
    };
  }
};
