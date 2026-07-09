"use client";

import { useState } from "react";

export default function AboutSection() {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <section id="about-section" className="mt-md-5">
        <div className="container services-about-section-container animate-on-load">
            <div className="row d-flex services-abt-wrap">
                <div className="col-12 col-md-6 picture-col d-flex align-items-center justify-content-center">
                    <div className="services-abt-grad">
                        <img src="images/desktop-application-mockup.webp" alt="A monitor showing desktop application" className="img-fluid desktop-mockup" loading="lazy"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-col d-flex align-items-center justify-content-center">
                    <div>
                        <h2>What is a desktop application?</h2>
                        <p className="mb-2 text-justify">A standalone program designed for computers, the desktop application takes care of specific tasks from entertainment to work.</p>
                        <p className="collapse text-justify" id="collapse-abt-text">
                            These software programs could perform a myriad of jobs to minimize human error and offer faster output. Best choice for businesses not wanting to expose sensitive data to clouds.
                        </p>
                        <a className="btn-link"
                           data-bs-toggle="collapse"
                           href="#collapse-abt-text"
                           role="button"
                           aria-expanded="false"
                           aria-controls="collapse-abt-text"
                           id="toggle-btn1"
                           onClick={() => setDetailsOpen((o) => !o)}
                           aria-label="Paragraph Expand">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container animate-on-load">
            <div className="row">
                <div className="col services-C2A-wrap d-flex flex-column align-items-center justify-content-center">
                    <p className="text-center">Backed with the ability to work without an internet connection, Desktop applications do have a few limits. Let’s find out what and what not these programs can uncover.</p>
                    <button className="C2A-btn blue mt-3" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get in Touch</button>
                </div>
            </div>
        </div>
    </section>

    );
}