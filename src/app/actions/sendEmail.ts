"use server";

import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/features/contact/contact.schema";

export type SendContactEmailResponse =
  | { success: true }
  | { success: false; error: string };

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const emailHost = process.env.EMAIL_HOST;
const emailPort = Number(process.env.EMAIL_PORT ?? "0");
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

if (!emailHost || !emailPort || !emailUser || !emailPass) {
  throw new Error(
    "Missing required email environment variables: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS.",
  );
}

const transporter = nodemailer.createTransport({
  host: emailHost,
  port: emailPort,
  secure: emailPort === 465,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export async function sendContactEmail(
  values: Pick<ContactFormValues, "name" | "email" | "subject" | "message" | "phone">
): Promise<SendContactEmailResponse> {
  const safeName = escapeHtml(values.name.trim());
  const safeEmail = escapeHtml(values.email.trim());
  const safeSubject = escapeHtml(values.subject.trim());
  const safeMessage = escapeHtml(values.message.trim()).replace(/\n/g, "<br />");
  const safePhone = escapeHtml(values.phone?.trim() ?? "Not provided");

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${emailUser}>`,
      to: "satishprajapati930@gmail.com",
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeSubject}`,
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111827; line-height: 1.6;">
          <h1 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: #111827;">New contact form submission</h1>
          <section style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.75rem; background: #f9fafb;">
            <p style="margin: 0 0 0.5rem; font-weight: 700;">Sender details</p>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li><strong>Name:</strong> ${safeName}</li>
              <li><strong>Email:</strong> ${safeEmail}</li>
              <li><strong>Phone:</strong> ${safePhone}</li>
              <li><strong>Subject:</strong> ${safeSubject}</li>
            </ul>
          </section>
          <section style="margin-top: 1rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.75rem; background: #ffffff;">
            <p style="margin: 0 0 0.5rem; font-weight: 700;">Message</p>
            <div style="white-space: pre-wrap;">${safeMessage}</div>
          </section>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send contact email due to an unknown server error.";
    return { success: false, error: message };
  }
}
