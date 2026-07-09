import type { Metadata } from "next";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Disclaimer | ${SITE_NAME}`,
  description: `Legal disclaimer for the ${SITE_NAME} website.`,
};

export default function DisclaimerPage() {
  return (
    <main className="container py-5" style={{ marginTop: 100 }}>
      <h1 className="mb-4">Disclaimer</h1>
      <p className="text-muted">Last updated: July 2026</p>

      <section className="mb-4">
        <h2>General Information</h2>
        <p>
          The information on this website is provided by {SITE_NAME} for general informational purposes
          only. While we strive to keep content accurate and up to date, we make no warranties about the
          completeness, reliability, or suitability of the information.
        </p>
      </section>

      <section className="mb-4">
        <h2>No Professional Advice</h2>
        <p>
          Content on this site does not constitute legal, financial, or professional advice. You should
          seek appropriate professional guidance before making decisions based on information found here.
        </p>
      </section>

      <section className="mb-4">
        <h2>External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content,
          privacy practices, or availability of those external sites.
        </p>
      </section>

      <section className="mb-4">
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {SITE_NAME} shall not be liable for any loss or damage
          arising from your use of this website or reliance on its content.
        </p>
      </section>

      <section className="mb-4">
        <h2>Contact</h2>
        <p>
          For questions about this disclaimer, contact us at{" "}
          <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
        </p>
      </section>
    </main>
  );
}
