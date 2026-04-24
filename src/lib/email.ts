
import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/features/contact/contact.schema";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(values: ContactFormValues) {
  const { email, subject, message } = values;

  console.log("Attempting to send email...");
  console.log("SMTP_USER:", process.env.SMTP_USER);
  console.log("SMTP_PASS set:", !!process.env.SMTP_PASS);

  const info = await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: "satishprajapati930@gmail.com",
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });
  return info;
}