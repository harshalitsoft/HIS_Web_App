"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

const INQUIRY_API = "/api/send-inquiry";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

const emptyForm: FormFields = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function EnquireModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const close = useCallback(() => {
    setOpen(false);
    setSubmitError("");
    if (submitted) {
      setForm(emptyForm);
      setErrors({});
      setSubmitted(false);
    }
  }, [submitted]);

  useEffect(() => {
    const onTriggerClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        '[data-bs-target="#enquireModalMobile"]'
      );
      if (!target) return;
      event.preventDefault();
      setOpen(true);
      setSubmitted(false);
      setSubmitError("");
    };

    document.addEventListener("click", onTriggerClick);
    return () => document.removeEventListener("click", onTriggerClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const validate = (): boolean => {
    const next: Partial<FormFields> = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid 10-digit phone number.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch(INQUIRY_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Request failed");
      }

      setSubmitted(true);
      setForm(emptyForm);
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="enquire-modal-root"
      id="enquireModalMobile"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquireModalTitle"
    >
      <button
        type="button"
        className="enquire-modal-backdrop"
        aria-label="Close enquiry form"
        onClick={close}
      />
      <div className="enquire-modal-dialog">
        <div className="enquire-modal-content">
          <div className="enquire-modal-header">
            <div>
              <p className="enquire-modal-eyebrow mb-1">We&apos;d love to hear from you</p>
              <h2 className="enquire-modal-title mb-0" id="enquireModalTitle">
                Send an Inquiry
              </h2>
            </div>
            <button
              type="button"
              className="enquire-modal-close"
              aria-label="Close"
              onClick={close}
            >
              &times;
            </button>
          </div>

          {submitted ? (
            <div className="enquire-modal-body enquire-modal-success">
              <div className="enquire-success-icon" aria-hidden="true">
                ✓
              </div>
              <h3>Thanks for your enquiry!</h3>
              <p>Our team will get back to you shortly.</p>
              <button type="button" className="btn modal-submit-button mt-3" onClick={close}>
                Close
              </button>
            </div>
          ) : (
            <form id="contact-us-form2" onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
                tabIndex={-1}
                autoComplete="off"
                className="d-none"
                aria-hidden="true"
              />
              <div className="enquire-modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={`form-control enquire-modal-form2${errors.name ? " is-invalid" : ""}`}
                    id="form2-name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  {errors.name && <div className="enquire-field-error">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={`form-control enquire-modal-form2${errors.email ? " is-invalid" : ""}`}
                    id="form2-email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  {errors.email && <div className="enquire-field-error">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className={`form-control enquire-modal-form3${errors.phone ? " is-invalid" : ""}`}
                    id="form2-phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      }))
                    }
                    required
                  />
                  {errors.phone && <div className="enquire-field-error">{errors.phone}</div>}
                </div>
                <div className="mb-2">
                  <textarea
                    name="EnquiryMessage"
                    className={`form-control enquire-modal-form3${errors.message ? " is-invalid" : ""}`}
                    rows={4}
                    placeholder="Tell us about your project or inquiry"
                    id="form2-message"
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    required
                  />
                  {errors.message && <div className="enquire-field-error">{errors.message}</div>}
                </div>
                {submitError && <div className="enquire-field-error text-center mb-2">{submitError}</div>}
              </div>
              <div className="enquire-modal-footer">
                <button
                  type="submit"
                  className="btn modal-submit-button px-5"
                  id="modalSubmitButtonMobile"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
