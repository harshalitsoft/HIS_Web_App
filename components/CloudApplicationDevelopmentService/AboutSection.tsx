"use client";

import { useState } from "react";

export default function AboutSection() {
    const [detailsOpen, setDetailsOpen] = useState(false);
    return (
        <section id="about-section" className="mt-md-5">
        <div className="container services-about-section-container  animate-on-load">
            <div className="row d-flex services-abt-wrap">
                <div className="col-12 col-md-6 picture-col d-flex align-items-center justify-content-center">
                    <div className="services-abt-grad pink">
                        <img src="images/cloud-application-mockup.svg" alt="A laptop showing cloud technology" className="img-fluid pink cloud-mockup" loading="lazy"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-col d-flex align-items-center justify-content-center">
                    <div>
                        <h2>What is a cloud application?</h2>
                        <p className="mb-2 text-justify">In this cloud-based paradigm, data processing and computation are offloaded to remote servers, reducing the need for extensive local hardware infrastructure.</p>
                        <p className="collapse text-justify" id="collapse-abt-text">
                            This shared network space, facilitated by cloud service providers, enhances scalability and offers businesses the flexibility to adapt and grow, all while streamlining costs and increasing operational efficiency. This evolution in computing has revolutionized the way organizations approach technology, enabling them to focus on innovation and agility in a dynamic digital landscape.
                        </p>
                        <a className="btn-link pink"
                           data-bs-toggle="collapse"
                           href="#collapse-abt-text"
                           role="button"
                           aria-expanded="false"
                           aria-controls="collapse-abt-text"
                           id="toggle-btn1"
                           onClick={() => setDetailsOpen((open) => !open)}
                           aria-label="Paragraph Expand">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container animate-on-load">
            <div className="row">
                <div className="col services-C2A-wrap d-flex flex-column align-items-center justify-content-center">
                    <p className="text-center">Wonder what all you can achieve with these solutions. Here are some of the pros and cons of developing Cloud Applications.</p>
                    <button className="C2A-btn pink mt-3" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get in Touch</button>
                </div>
            </div>
        </div>
    </section>
    );
}