import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? "info@jetnowdrainage.co.uk";
const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL ?? "JetNow Drainage <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

const sanitise = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  if (!resend) {
    return Response.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  const payload = (await request.json()) as ContactPayload;
  const name = sanitise(payload.name);
  const phone = sanitise(payload.phone);
  const email = sanitise(payload.email);
  const service = sanitise(payload.service);
  const message = sanitise(payload.message);

  if (!name || !phone || !email || !message) {
    return Response.json(
      { error: "Please complete full name, phone number, email address and message." },
      { status: 400 },
    );
  }

  const subject = `Website Contact Form Enquiry: ${name}`;
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const html = `
    <h2>Website Contact Form Enquiry</h2>
    <p><strong>Full Name:</strong> ${safeName}</p>
    <p><strong>Phone Number:</strong> ${safePhone}</p>
    <p><strong>Email Address:</strong> ${safeEmail}</p>
    <p><strong>Service Needed:</strong> ${safeService}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  const text = [
    "Website Contact Form Enquiry",
    `Full Name: ${name}`,
    `Phone Number: ${phone}`,
    `Email Address: ${email}`,
    `Service Needed: ${service || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject,
    replyTo: email,
    text,
    html,
  });

  if (error) {
    return Response.json({ error: "Unable to send enquiry email right now." }, { status: 500 });
  }

  return Response.json({ message: "Thanks, your enquiry has been sent." }, { status: 200 });
}
