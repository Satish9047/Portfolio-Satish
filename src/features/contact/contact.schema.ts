export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isBlank(value: string) {
  return value.trim().length === 0;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (isBlank(values.name)) {
    errors.name = "Name is required.";
  }

  if (isBlank(values.email)) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (isBlank(values.phone)) {
    errors.phone = "Phone is required.";
  }

  if (isBlank(values.subject)) {
    errors.subject = "Subject is required.";
  }

  if (isBlank(values.message)) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function sanitizeContactForm(values: ContactFormValues): ContactFormValues {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };
}
