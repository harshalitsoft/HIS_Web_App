"use client";

import { useState } from "react";

export default function AboutSection() {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <section id="about-section" className="mt-md-5">
        <div className="container services-about-section-container">
            <div className="row d-flex services-abt-wrap animate-on-load">
                <div className="col-12 col-md-6 picture-col d-flex align-items-center justify-content-center">
                    <div className="services-abt-grad peachGreen">
                        <img src="images/timekeeper-payments-page-3d-transperant.webp" alt="A mobile device showing an application screen" className="img-fluid peachGreen mobile-mockup" loading="lazy"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-col d-flex align-items-center justify-content-center">
                    <div>
                        <h2>What is a mobile application?</h2>
                        <p className="mb-2 text-justify">Designed to run on smartphones and tablets, mobile applications are easy to download from Play Store or App Store.</p>
                        <p className="collapse text-justify" id="collapse-abt-text">
                            Depending on the OS, the different versions of these apps are created to offer a smoother user experience. However, developing these apps isn’t the easiest thing to do.
                        </p>
                        <a className="btn-link peachGreen"
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
                    <p className="text-center">Let’s find out the different advantages and disadvantages linked with these mobile apps.</p>
                    <button className="C2A-btn peachGreen mt-3" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get in Touch</button>
                </div>
            </div>
        </div>
    </section>
    );
}