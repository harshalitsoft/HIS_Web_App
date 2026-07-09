export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function validateInquiryPayload(body: unknown): InquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;

  if (typeof record.website === "string" && record.website.trim().length > 0) {
    return null;
  }

  const { name, email, phone, message } = record;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
  };

  if (trimmed.name.length < 2) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) return null;
  if (!/^\d{10}$/.test(trimmed.phone)) return null;
  if (trimmed.message.length < 10) return null;

  return trimmed;
}
