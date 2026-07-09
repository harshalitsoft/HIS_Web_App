"use client";

import { useState } from "react";
import type { DomainOfferingItem, DomainPageData } from "@/lib/offering-pages";

function DomainOfferingRow({
  offering,
  index,
}: {
  offering: DomainOfferingItem;
  index: number;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const collapseId = `collapseOffering${index}`;
  const rowClass = [
    "row mt-lg-5 mt-md-4 mt-sm-3 mt-2 justify-content-between align-items-center custom-margin-offerings animate-on-load",
    offering.reversed ? "flex-row-reverse second-offering-main" : "",
    index === 2 ? "third-offering-main" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rowClass}>
      <div className="col-md-6 mb-4">
        <div className={`row offering-img${offering.reversed ? " flex-row-reverse" : ""}`}>
          <div className="col-sm-10 col-md-8 col-lg-6 offerings-img">
            <img
              src={`/images/${offering.image}`}
              alt={offering.imageAlt}
              className="img-fluid offerings-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <h3 className="offeringsTextHeading fs-3">{offering.title}</h3>
        <p>{offering.summary}</p>
        {offering.details ? (
          <>
            <p className={`mb-2 ${detailsOpen ? "" : "collapse"}`} id={collapseId}>
              {offering.details}
            </p>
            <button
              type="button"
              className="btn-link border-0 bg-transparent p-0 text-start"
              aria-expanded={detailsOpen}
              aria-controls={collapseId}
              onClick={() => setDetailsOpen((open) => !open)}
            >
              {detailsOpen ? "Read less" : "Read more"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

interface DomainOfferingPageProps {
  page: DomainPageData;
}

export default function DomainOfferingPage({ page }: DomainOfferingPageProps) {
  const { header, offeringsHeading, offerings } = page;
  const titleClassName = ["main-title", header.titleClass].filter(Boolean).join(" ");

  return (
    <>
      <header>
        <div
          className={`p-3 p-md-5 m-3 m-md-5${
            page.slug === "domain-learning-management-system" ? " lms-title-main-wrap" : ""
          }`}
        >
          <div className="col col text-center">
            <h1 className={`${titleClassName} mt-5 mt-lg-4 mt-md-3`}>{header.title}</h1>
            <p className="healthCare-tagline">{header.tagline}</p>

            {header.hasIntroSection ? (
              <section className="my-xl-5 pt-xl-5">
                <div className="container services-about-section-container">
                  <div className="row d-flex services-abt-wrap">
                    <div className="col-12 col-xl-6 col-md-12 picture-col d-flex align-items-center justify-content-center my-xl-2 my-md-4">
                      <div className="services-abt-grad">
                        <img
                          src={`/images/${header.image}`}
                          alt={header.imageAlt}
                          className={`img-fluid ${header.imageClass}`.trim()}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 col-md-12 text-col d-flex align-items-center justify-content-center flex-column">
                      <div>
                        <p className="mb-2 text-justify">{header.intro}</p>
                      </div>
                      <div className="row align-self-md-start d-flex ms-0 ps-0 flex-column mt-3">
                        <div className="col d-flex align-items-center justify-content-start ms-0 ps-0 align-self-md-start mx-4">
                          <a
                            href="#OfferingsSection"
                            className="btn custom-btn rounded-pill px-4 ms-0 m-2"
                            aria-label="Explore Button"
                          >
                            Explore
                          </a>
                          <a
                            href="/contactus"
                            className="btn custom-btn-outline rounded-pill px-4"
                            aria-label="Contact Us Button"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <div className="row">
                <div className="col justify-content-center mt-4 mx-4">
                  <a
                    href="#OfferingsSection"
                    className="btn custom-btn rounded-pill px-4 m-2"
                    aria-label="Explore Button"
                  >
                    Explore
                  </a>
                  <a
                    href="/contactus"
                    className="btn custom-btn-outline rounded-pill px-4"
                    aria-label="Contact Us Button"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <section>
        <div className="container" id="OfferingsSection">
          <div className="row offeringsMainHeading text-center">
            <div className="col">
              <h2 className="fs-1 mb-5">{offeringsHeading}</h2>
            </div>
          </div>

          {offerings.map((offering, index) => (
            <DomainOfferingRow key={offering.title} offering={offering} index={index + 1} />
          ))}
        </div>
      </section>

      <section id="contactSection" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col services-C2A-wrap d-flex flex-column align-items-center justify-content-center">
              <p className="text-center mb-3">
                Ready to build solutions for your {header.title.toLowerCase()} needs? Get in touch with our team.
              </p>
              <button
                className="C2A-btn blue mt-2"
                data-bs-toggle="modal"
                data-bs-target="#enquireModalMobile"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
