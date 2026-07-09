import { NextResponse } from "next/server";
import { validateInquiryPayload } from "@/lib/inquiry-validation";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { sendInquiryEmail } from "@/lib/send-inquiry-email";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const payload = validateInquiryPayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Invalid inquiry details. Please check all fields and try again." },
        { status: 400 }
      );
    }

    await sendInquiryEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Inquiry email failed:", message);

    return NextResponse.json(
      { error: "Unable to send your inquiry right now. Please try again later or contact us directly." },
      { status: 500 }
    );
  }
}
