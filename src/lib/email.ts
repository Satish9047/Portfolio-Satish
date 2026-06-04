
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
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: Number(process.env.EMAIL_PORT || 587) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(values: ContactFormValues) {
  const { email, subject, message } = values;

  console.log("Attempting to send email...");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS set:", !!process.env.EMAIL_PASS);

  const info = await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
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