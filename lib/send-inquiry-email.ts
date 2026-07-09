import type { InquiryPayload } from "@/lib/inquiry-validation";
import { SITE_NAME } from "@/lib/site-config";

export type { InquiryPayload };

function buildEmailContent(payload: InquiryPayload) {
  const subject = `New website inquiry from ${payload.name}`;
  const text = [
    `A new inquiry was submitted on the ${SITE_NAME} website.`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #242424; line-height: 1.5;">
      <h2 style="color: #512BD4; margin-bottom: 0.5rem;">New Website Inquiry</h2>
      <p style="margin-top: 0;">A visitor submitted the inquiry form on your website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 8px 0; font-weight: 600;">Name</td><td style="padding: 8px 0;">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td style="padding: 8px 0;">${escapeHtml(payload.phone)}</td></tr>
      </table>
      <h3 style="margin-bottom: 0.5rem;">Message</h3>
      <p style="white-space: pre-wrap; background: #f7f7fb; padding: 12px; border-radius: 8px;">${escapeHtml(payload.message)}</p>
    </div>
  `;

  return { subject, text, html };
}

async function sendViaAzure(payload: InquiryPayload) {
  const azureEmailApi = process.env.AZURE_EMAIL_API_URL;
  if (!azureEmailApi) {
    throw new Error("AZURE_EMAIL_API_URL is not configured.");
  }

  const response = await fetch(azureEmailApi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Azure email API failed with status ${response.status}`);
  }
}

async function sendViaSmtp(payload: InquiryPayload) {
  const nodemailer = await import("nodemailer");

  const host = process.env.SMTP_HOST ?? "smtp-mail.outlook.com";
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.INQUIRY_TO_EMAIL ?? user;

  if (!user || !pass || !to) {
    throw new Error("SMTP credentials are not configured.");
  }

  const refreshToken = process.env.MS_REFRESH_TOKEN;
  const clientId = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;

  const transporter =
    refreshToken && clientId && clientSecret
      ? nodemailer.default.createTransport({
          host,
          port,
          secure: port === 465,
          auth: {
            type: "OAuth2",
            user,
            clientId,
            clientSecret,
            refreshToken,
            accessUrl: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
          },
        })
      : nodemailer.default.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

  const { subject, text, html } = buildEmailContent(payload);

  await transporter.sendMail({
    from: `"${SITE_NAME} Website" <${user}>`,
    to,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

async function sendViaResend(payload: InquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? `${SITE_NAME} <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    throw new Error("Resend is not configured.");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { subject, html, text } = buildEmailContent(payload);

  const result = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject,
    html,
    text,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  const provider = (process.env.EMAIL_PROVIDER ?? "smtp").toLowerCase();

  switch (provider) {
    case "azure":
      await sendViaAzure(payload);
      return;
    case "resend":
      await sendViaResend(payload);
      return;
    case "smtp":
    default:
      await sendViaSmtp(payload);
      return;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
