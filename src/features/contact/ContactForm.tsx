"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  type ContactFormErrors,
  type ContactFormValues,
  sanitizeContactForm,
  validateContactForm,
} from "@/features/contact/contact.schema";
import { sendContactEmail } from "@/app/actions/sendEmail";
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

  return <p className="text-[10px] font-bold uppercase tracking-wide text-swiss-red mt-1">{error}</p>;
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
      const result = await sendContactEmail(sanitizedValues);
      
      if (result.success) {
        setValues(initialValues);
        setStatus({
          type: "success",
          message: "Message sent successfully.",
        });
      } else {
        setStatus({
          type: "error",
          message: result.error,
        });
      }
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
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</span>
          <input
            value={values.name}
            onChange={handleChange("name")}
            className="w-full border-b border-[var(--foreground)] bg-transparent rounded-none py-2 text-sm font-semibold outline-none focus:border-swiss-red transition-colors duration-150 text-[var(--foreground)]"
            name="name"
            autoComplete="name"
            disabled={isSubmitting}
          />
          <FieldError error={errors.name} />
        </label>

        <label className="grid gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</span>
          <input
            value={values.email}
            onChange={handleChange("email")}
            className="w-full border-b border-[var(--foreground)] bg-transparent rounded-none py-2 text-sm font-semibold outline-none focus:border-swiss-red transition-colors duration-150 text-[var(--foreground)]"
            name="email"
            type="email"
            autoComplete="email"
            disabled={isSubmitting}
          />
          <FieldError error={errors.email} />
        </label>

        <label className="grid gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone</span>
          <input
            value={values.phone}
            onChange={handleChange("phone")}
            className="w-full border-b border-[var(--foreground)] bg-transparent rounded-none py-2 text-sm font-semibold outline-none focus:border-swiss-red transition-colors duration-150 text-[var(--foreground)]"
            name="phone"
            autoComplete="tel"
            disabled={isSubmitting}
          />
          <FieldError error={errors.phone} />
        </label>

        <label className="grid gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject</span>
          <input
            value={values.subject}
            onChange={handleChange("subject")}
            className="w-full border-b border-[var(--foreground)] bg-transparent rounded-none py-2 text-sm font-semibold outline-none focus:border-swiss-red transition-colors duration-150 text-[var(--foreground)]"
            name="subject"
            disabled={isSubmitting}
          />
          <FieldError error={errors.subject} />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</span>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          className="w-full border-b border-[var(--foreground)] bg-transparent rounded-none py-2 min-h-24 text-sm font-semibold outline-none focus:border-swiss-red transition-colors duration-150 text-[var(--foreground)] resize-y"
          name="message"
          disabled={isSubmitting}
        />
        <FieldError error={errors.message} />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex justify-center border border-[var(--foreground)] bg-[var(--foreground)] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--background)] hover:bg-swiss-red hover:border-swiss-red transition-colors duration-200",
            isSubmitting && "cursor-not-allowed opacity-60 hover:bg-[var(--foreground)] hover:border-[var(--foreground)]",
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status.type !== "idle" ? (
          <p
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest",
              status.type === "success" ? "text-emerald-600" : "text-swiss-red",
            )}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
