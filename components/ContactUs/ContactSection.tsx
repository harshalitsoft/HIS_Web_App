"use client";

import { FormEvent, useState } from "react";
import { SITE_EMAIL, SITE_SOCIAL } from "@/lib/site-config";

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

export default function ContactSection() {
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  return (
    <section id="contactSection">
      <div className="container my-4 pb-5 pt-4 mb-5">
        <div className="row contactUsSection p-5">
          <div className="col col-md-6 d-flex flex-column justify-content-between my-3">
            <div className="row animate-on-load">
              <div className="col-md-10">
                <h2 className="fs-1 contactUsHeading">Get a Quote</h2>
                <p className="contactUsSubHead">Fill up the form and our team will get back to you</p>
              </div>
            </div>
            <div className="row animate-on-load">
              <div className="col-lg-4 mt-3">
                <div className="row">
                  <p className="contactUsSubHead">
                    <span className="getintouchDesign">&nbsp;</span> Get in Touch
                  </p>
                </div>
                <div className="row">
                  <div className="col contactEmailIcon">
                    <a href={`mailto:${SITE_EMAIL}`} aria-label="Email us">
                      <img src="images/Email_Icon.svg" alt="Email" className="img-fluid" loading="lazy" />
                    </a>
                  </div>
                  <div className="col contactLinkedInIcon">
                    <a href={SITE_SOCIAL.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <img src="images/LinkedIn_Icon.svg" alt="LinkedIn" className="img-fluid" loading="lazy" />
                    </a>
                  </div>
                  <div className="col contactFacebookIcon">
                    <a href={SITE_SOCIAL.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                      <img src="images/Facebook_Icon.svg" alt="Facebook" className="img-fluid" loading="lazy" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6 animate-on-load">
            <div className="row justify-content-end">
              <div className="col-md-10 bg-white py-4 px-4 border-rad-1">
                {submitted ? (
                  <div className="text-center py-4">
                    <h3 className="contactUsHeading">Thank you!</h3>
                    <p className="contactUsSubHead mb-0">Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form id="contact-us-form1" onSubmit={onSubmit} noValidate>
                    <fieldset>
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
                      <div className="row my-3">
                        <div className="col">
                          <div className="form-group input-control">
                            <label htmlFor="InputName">Name</label>
                            <input
                              type="text"
                              className={`form-control inputNameField username${errors.name ? " is-invalid" : ""}`}
                              id="InputName"
                              placeholder="Enter Name"
                              name="name"
                              value={form.name}
                              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                              required
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col">
                          <div className="form-group input-control">
                            <label htmlFor="InputEmail">Email</label>
                            <input
                              type="email"
                              className={`form-control inputEmailField email${errors.email ? " is-invalid" : ""}`}
                              id="InputEmail"
                              placeholder="Enter Email"
                              name="email"
                              value={form.email}
                              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                              required
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col">
                          <div className="form-group input-control">
                            <label htmlFor="InputPhone">Phone</label>
                            <input
                              type="tel"
                              className={`form-control inputEmailField${errors.phone ? " is-invalid" : ""}`}
                              id="InputPhone"
                              placeholder="10-digit phone number"
                              name="phone"
                              value={form.phone}
                              onChange={(e) =>
                                setForm((prev) => ({
                                  ...prev,
                                  phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                                }))
                              }
                              required
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group input-control">
                            <label className="form-label" htmlFor="textAreaExample1">
                              Message
                            </label>
                            <textarea
                              className={`form-control inputMessageField${errors.message ? " is-invalid" : ""}`}
                              name="message"
                              id="textAreaExample1"
                              rows={4}
                              placeholder="Message"
                              value={form.message}
                              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                              required
                            />
                            {errors.message && <div className="error">{errors.message}</div>}
                          </div>
                        </div>
                      </div>
                      {submitError && (
                        <div className="row py-2">
                          <div className="col">
                            <span className="error">{submitError}</span>
                          </div>
                        </div>
                      )}
                      <div className="row mt-4 mb-2">
                        <div className="col d-flex justify-content-center">
                          <button
                            id="FormSubmitButton"
                            className="btn contactUsBtn py-2"
                            type="submit"
                            disabled={submitting}
                          >
                            {submitting ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
