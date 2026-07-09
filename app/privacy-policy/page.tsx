import type { Metadata } from "next";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_NAME} — how we collect, use, and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-5" style={{ marginTop: 100 }}>
      <h1 className="mb-4">Privacy Policy</h1>
      <p className="text-muted">Last updated: July 2026</p>

      <section className="mb-4">
        <h2>Introduction</h2>
        <p>
          {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy
          explains what information we collect when you visit our website or contact us, and how we use it.
        </p>
      </section>

      <section className="mb-4">
        <h2>Information We Collect</h2>
        <p>When you submit an inquiry form, we may collect:</p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Message content</li>
        </ul>
        <p>
          We may also collect standard technical data such as browser type, device information, and pages
          visited through server logs or analytics tools.
        </p>
      </section>

      <section className="mb-4">
        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested services</li>
          <li>Improve our website and customer experience</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with trusted service providers who
          help us operate our website or deliver email communications, subject to appropriate safeguards.
        </p>
      </section>

      <section className="mb-4">
        <h2>Data Retention</h2>
        <p>
          We retain inquiry submissions only as long as necessary to respond to your request, maintain
          business records, or meet legal requirements.
        </p>
      </section>

      <section className="mb-4">
        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information by contacting
          us at <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
        </p>
      </section>

      <section className="mb-4">
        <h2>Contact</h2>
        <p>
          For privacy-related questions, email us at{" "}
          <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
        </p>
      </section>
    </main>
  );
}
