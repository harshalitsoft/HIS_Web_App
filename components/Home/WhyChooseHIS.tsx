"use client";

import { useEffect, useState } from "react";

const whyChooseItems = [
  {
    subtitle: "CONSISTENT RESULTS",
    subtext:
      "Depending on customers' needs, we suggest and design solutions using the most suitable software development techniques from a long list of choices.",
  },
  {
    subtitle: "EFFICIENT PROJECT MANAGEMENT",
    subtext:
      "Taking a proactive approach, we closely monitor every process throughout the software development lifecycle to create the most efficient solution for our clients. Plus, our team focuses on timely delivery and the best results.",
  },
  {
    subtitle: "INNOVATION AT ITS PEAK",
    subtext:
      "We are a results driven software company that meticulously comprehends details of client's project and offers best fit technology solutions.",
  },
  {
    subtitle: "COMPLETE CUSTOMER SATISFACTION",
    subtext:
      "Our custom software solutions are simple yet very advanced, ensuring customers' highest satisfaction. We, as a team, go above and beyond to meet clients' expectations and provide optimized budgets to suit varying business scopes.",
  },
];

export default function WhyChooseHIS() {
  const [number, setNumber] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 150);
    return () => clearTimeout(timer);
  }, [number]);

  const handleLeftClick = () => {
    setNumber((prev) => (prev < 2 ? 4 : prev - 1));
  };

  const handleRightClick = () => {
    setNumber((prev) => (prev > 3 ? 1 : prev + 1));
  };

  const activeItem = whyChooseItems[number - 1];
  const formattedNumber = String(number).padStart(2, "0");

  return (
    <section>
      <div className="container py-3 py-sm-5">
        <div className="row text-center my-3 my-md-4 my-lg-5 animate-on-load">
          <div className="col">
            <h2 className="fs-1 whySectionHead">Get More With Us!</h2>
            <p className="whySection-tagline">Know the reasons why we are best</p>
          </div>
        </div>

        <div className="row hm-get-more-row-main w-100 animate-on-load">
          <div
            className={`col hm-get-more-col-main hm-get-more-${number}`}
            id="hm-get-more-col-main"
          >
            <div className="hm-get-more-number-wrap d-flex justify-content-between align-items-center px-4">
              <button
                type="button"
                className="hm-get-more-arrow border-0 bg-transparent p-0"
                id="hm-get-more-left-arrow"
                onClick={handleLeftClick}
                aria-label="Previous reason"
              >
                <img src="images/arrow-left.svg" alt="left arrow icon" className="img-fluid" loading="lazy" />
              </button>
              <p
                className="mb-0 hm-get-more-count-text"
                id="hm-get-more-number"
                style={{ opacity: isFading ? 0 : 1, transition: "opacity 150ms ease" }}
              >
                {formattedNumber}
              </p>
              <button
                type="button"
                className="hm-get-more-arrow border-0 bg-transparent p-0"
                id="hm-get-more-right-arrow"
                onClick={handleRightClick}
                aria-label="Next reason"
              >
                <img src="images/arrow-right.svg" alt="right arrow icon" className="img-fluid" loading="lazy" />
              </button>
            </div>

            <div className="row h-100">
              <div className="col hm-get-more-text-wrap d-flex flex-column justify-content-center">
                <h4
                  className="hm-get-more-inner-title hm-text-style-5"
                  id="hm-get-more-subtitle"
                  style={{ opacity: isFading ? 0 : 1, transition: "opacity 150ms ease" }}
                >
                  {activeItem.subtitle}
                </h4>
                <p
                  className="hm-text-style-3"
                  id="hm-get-more-subtext"
                  style={{ opacity: isFading ? 0 : 1, transition: "opacity 150ms ease" }}
                >
                  {activeItem.subtext}
                </p>
                <button className="hm-get-in-touch-btn" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}