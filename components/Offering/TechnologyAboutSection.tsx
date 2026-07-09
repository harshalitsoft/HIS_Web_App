"use client";

import { useState } from "react";
import type { TechnologyPageData } from "@/lib/offering-pages";

interface TechnologyAboutSectionProps {
  about: TechnologyPageData["about"];
}

export default function TechnologyAboutSection({ about }: TechnologyAboutSectionProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section id="about-section" className="mt-md-5 py-4 py-md-5">
      <div className="container services-about-section-container">
        <div className="row d-flex services-abt-wrap g-4 g-md-5 animate-on-load align-items-center">
          <div className="col-12 col-md-6 picture-col d-flex align-items-center justify-content-center">
            <div className="services-abt-grad w-100 d-flex justify-content-center">
              <img
                src={`/images/${about.image}`}
                alt={about.imageAlt}
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-col d-flex align-items-center justify-content-center">
            <div className="w-100 px-1 px-md-0">
              <h2 className="mb-3">{about.heading}</h2>
              <p className="mb-2 text-justify">{about.summary}</p>
              {about.details ? (
                <>
                  <p
                    className={`text-justify mb-2 ${detailsOpen ? "" : "collapse"}`}
                    id="collapse-abt-text"
                  >
                    {about.details}
                  </p>
                  <button
                    type="button"
                    className="btn-link border-0 bg-transparent p-0 text-start"
                    aria-expanded={detailsOpen}
                    aria-controls="collapse-abt-text"
                    onClick={() => setDetailsOpen((open) => !open)}
                  >
                    {detailsOpen ? "Read less" : "Read more"}
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {about.ctaText ? (
        <div className="container animate-on-load py-3 py-md-4">
          <div className="row">
            <div className="col services-C2A-wrap d-flex flex-column align-items-center justify-content-center px-3">
              <p className="text-center mb-0">{about.ctaText}</p>
              <button
                className="C2A-btn blue mt-3"
                data-bs-toggle="modal"
                data-bs-target="#enquireModalMobile"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
