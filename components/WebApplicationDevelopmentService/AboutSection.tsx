"use client";

import { useState } from "react";

export default function AboutSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section id="about-section" className="mt-md-5 py-4 py-md-5">
      <div className="container services-about-section-container">
        <div className="row d-flex services-abt-wrap g-4 g-md-5 animate-on-load align-items-center">
          <div className="col-12 col-md-6 picture-col d-flex align-items-center justify-content-center">
            <div className="services-abt-grad w-100 d-flex justify-content-center">
              <img
                src="/images/web-application-desktop-mockup.webp"
                alt="A laptop showing web application"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-col d-flex align-items-center justify-content-center">
            <div className="w-100 px-1 px-md-0">
              <h2 className="mb-3">What is a web application?</h2>
              <p className="mb-2 text-justify">
                Stored on a remote server, the web application is accessible through internet browsers.
                Typically, these apps run using a web server, an application server and a database.
              </p>
              <p
                className={`text-justify mb-2 ${detailsOpen ? "" : "collapse"}`}
                id="collapse-abt-text"
              >
                While web servers take care of the clients’ requests, the application server ensures that the
                requested task completes in time. And, databases help store important information. <br />
                So, could you benefit from such web applications? Find out by exploring the pros and cons
                associated with these apps.
              </p>
              <button
                type="button"
                className="btn-link border-0 bg-transparent p-0 text-start"
                aria-expanded={detailsOpen}
                aria-controls="collapse-abt-text"
                id="toggle-btn1"
                onClick={() => setDetailsOpen((open) => !open)}
              >
                {detailsOpen ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container animate-on-load py-3 py-md-4">
        <div className="row">
          <div className="col services-C2A-wrap d-flex flex-column align-items-center justify-content-center px-3">
            <p className="text-center mb-0">
              So, could you benefit from such web applications? Find out by exploring the pros and cons
              associated with these apps.
            </p>
            <button className="C2A-btn blue mt-3" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
