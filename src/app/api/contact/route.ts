import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import {
  type ContactFormValues,
  sanitizeContactForm,
  validateContactForm,
} from "@/features/contact/contact.schema";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormValues;
    const values = sanitizeContactForm(body);
    const errors = validateContactForm(values);
    console.log("values", values)
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Please fix the highlighted form errors.", errors },
        { status: 400 },
      );
    }

    const returdData = await sendContactEmail(values);
    console.log("return data", returdData)

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}