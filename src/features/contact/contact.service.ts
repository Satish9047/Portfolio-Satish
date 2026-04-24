import type { ContactFormValues } from "@/features/contact/contact.schema";

export async function submitContactForm(values: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = (await response.json()) as { message?: string };

  if (!response.ok) {
    throw new Error(data.message ?? "Unable to send your message.");
  }

  return data;
}
