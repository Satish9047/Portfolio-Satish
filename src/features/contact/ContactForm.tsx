"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  type ContactFormErrors,
  type ContactFormValues,
  sanitizeContactForm,
  validateContactForm,
} from "@/features/contact/contact.schema";
import { submitContactForm } from "@/features/contact/contact.service";
import { cn } from "@/lib/utils";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null;
  }

  return <p className="text-sm text-red-500">{error}</p>;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));

      if (errors[field]) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [field]: undefined,
        }));
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitizedValues = sanitizeContactForm(values);
    const nextErrors = validateContactForm(sanitizedValues);

    setValues(sanitizedValues);
    setErrors(nextErrors);
    setStatus({ type: "idle", message: "" });

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(sanitizedValues);
      setValues(initialValues);
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Name</span>
          <input
            value={values.name}
            onChange={handleChange("name")}
            className="surface rounded-2xl px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            name="name"
            autoComplete="name"
            disabled={isSubmitting}
          />
          <FieldError error={errors.name} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Email</span>
          <input
            value={values.email}
            onChange={handleChange("email")}
            className="surface rounded-2xl px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            name="email"
            type="email"
            autoComplete="email"
            disabled={isSubmitting}
          />
          <FieldError error={errors.email} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Phone</span>
          <input
            value={values.phone}
            onChange={handleChange("phone")}
            className="surface rounded-2xl px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            name="phone"
            autoComplete="tel"
            disabled={isSubmitting}
          />
          <FieldError error={errors.phone} />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Subject</span>
          <input
            value={values.subject}
            onChange={handleChange("subject")}
            className="surface rounded-2xl px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            name="subject"
            disabled={isSubmitting}
          />
          <FieldError error={errors.subject} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold">Message</span>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          className="surface min-h-40 rounded-[1.5rem] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
          name="message"
          disabled={isSubmitting}
        />
        <FieldError error={errors.message} />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex min-w-36 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-transform duration-200 hover:-translate-y-0.5",
            isSubmitting && "cursor-not-allowed opacity-70 hover:translate-y-0",
          )}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>

        {status.type !== "idle" ? (
          <p
            className={cn(
              "text-sm",
              status.type === "success" ? "text-emerald-600" : "text-red-500",
            )}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
