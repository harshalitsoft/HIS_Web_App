"use client";
import { useEffect } from "react";
import { SITE_ADDRESS, SITE_EMAIL, SITE_MAP_URL, SITE_SOCIAL } from "@/lib/site-config";

export default function Footer() {
  useEffect(() => {
    const toggleTopButton = () => {
      const backToTopButton = document.getElementById("back-to-up");
      if (!backToTopButton) return;

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.remove("d-none");
      } else {
        backToTopButton.classList.add("d-none");
      }
    };

    window.addEventListener("scroll", toggleTopButton, { passive: true });
    toggleTopButton();

    return () => {
      window.removeEventListener("scroll", toggleTopButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <> 
      <footer className="container-fluid new-footer-container">
        <section className="new-footer d-flex flex-column justify-content-between pt-md-4">
          <div className="row footer-wrap d-flex justify-content-center align-items-center">
            <div className="col footer-wrap-col d-flex align-items-start justify-content-between">
              <div className="row w-100 d-flex justify-content-center">
                <div className="col-xl-4 col-md-8 col-sm-6 col-3">
                  <a href="/" className="text-left align-items-center justify-content-center">
                    <img src="images/HIS_Logo_1.png" alt="Harshal IT Soft logo — Driving innovation through code"

                      className="stellarNavbarLogo" loading="lazy" />

                    <span className="svgTitle">

                      <img src="images/SubTitleLogo.png" alt="Harshal IT Soft logo — Driving innovation through code" />

                    </span>
                  </a>
                  <p className="mb-0 office-address d-flex align-items-center justify-content-start my-md-4"><a
                    href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer"> {SITE_ADDRESS}</a></p>
                  <p className="mb-0 footer-contact-email d-flex align-items-center justify-content-start"><a
                    href={`mailto:${SITE_EMAIL}`}
                    target="_blank" rel="noopener noreferrer">{SITE_EMAIL}</a></p>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 col-3">
                  <h2>Company</h2>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/careers-page">Careers</a></li>
                    <li><a href="https://blog.harshalitsoft.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                  </ul>
                </div>

                <div className="col-xl-3 col-md-8 col-sm-6 col-3 mt-md-5 mt-xl-0">
                  <h2>Services</h2>
                  <ul>
                    <li><a href="/ai-application-development-service">AI Solutions</a></li>
                    <li><a href="/web-application-development-service">Web Application</a></li>
                    <li><a href="/cloud-application-development-service">Cloud Application</a></li>
                    <li><a href="/mobile-application-development-service">Mobile Application</a></li>
                    <li><a href="/desktop-application-development-service">Desktop Application</a>
                    </li>
                  </ul>
                </div>

                <div className="col-xl-2 col-md-4 col-sm-6 col-3 mt-md-5 mt-xl-0">
                  <h2>Follow Us</h2>
                  <ul className="d-flex gap-3">
                    <li><a href={SITE_SOCIAL.facebook} target="_blank" rel="noopener noreferrer"><img
                      src="images/Facebook-icon-black.svg" alt="facebook icon"
                      loading="lazy" /></a></li>
                    <li><a href={SITE_SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"><img
                      src="images/linkedin-icon-black.svg" alt="LinkedIn icon"
                      loading="lazy" /></a></li>
                    <li><a href={SITE_SOCIAL.twitter} target="_blank" rel="noopener noreferrer"><img
                      src="images/twitter-icon.svg" alt="Twitter icon" loading="lazy" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-md-none mt-1">
            <div className="col">
              <a href="/" className="my-3 d-flex text-left align-items-center justify-content-center">
                <img src="images/HIS_Logo_1.png" alt="Harshal IT Soft logo — Driving innovation through code"

                  className="stellarNavbarLogo" loading="lazy" />

                <span className="svgTitle">

                  <img src="images/SubTitleLogo.png" alt="Harshal IT Soft logo — Driving innovation through code" />

                </span>
              </a>
              <div className="accordion" id="myAccordion">
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                    data-bs-target="#collapse1">
                    Location & Email
                  </button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <div className="footer-accordin-content">
                      <p
                        className="mt-2 mb-3 office-address d-flex align-items-center justify-content-start my-md-4">
                        <a href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer"> {SITE_ADDRESS}</a>
                      </p>
                      <p
                        className="my-2 footer-contact-email d-flex align-items-center justify-content-start">
                        <a href={`mailto:${SITE_EMAIL}`}
                          target="_blank" rel="noopener noreferrer">{SITE_EMAIL}</a>
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                    data-bs-target="#collapse2">
                    Company
                  </button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <div className="footer-accordin-content">
                      <ul className="ps-3 mb-0">
                        <li><a href="/" className="d-flex w-100">Home</a></li>
                        <li><a href="/careers-page" className="d-flex w-100">Careers</a></li>
                        <li><a href="https://blog.harshalitsoft.com/" target="_blank" rel="noopener noreferrer"
                          className="d-flex w-100">Blog</a></li>
                        <li><a href="/contactus" className="d-flex w-100">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                    data-bs-target="#collapse3">
                    Services
                  </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <div className="footer-accordin-content">
                      <ul className="mb-0">
                        <li><a href="/web-application-development-service"
                          className="d-flex w-100">Web Application</a></li>
                        <li><a href="/cloud-application-development-service"
                          className="d-flex w-100">Cloud Application</a></li>
                        <li><a href="/mobile-application-development-service"
                          className="d-flex w-100">Mobile Application</a></li>
                        <li><a href="/desktop-application-development-service"
                          className="d-flex w-100">Desktop Application</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                    data-bs-target="#collapse4">
                    Follow Us
                  </button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <div className="footer-accordin-content">
                      <ul className="d-flex justify-content-center align-items-center gap-3 mb-0">
                        <li><a href={SITE_SOCIAL.facebook} target="_blank" rel="noopener noreferrer"><img
                          src="images/Facebook-icon-black.svg" alt="facebook icon"
                          className="me-2" loading="lazy" /></a></li>
                        <li><a href={SITE_SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                          ><img src="images/linkedin-icon-black.svg"
                            alt="LinkedIn icon" className="me-2" loading="lazy" /></a></li>
                        <li><a href={SITE_SOCIAL.twitter} target="_blank" rel="noopener noreferrer"><img
                          src="images/twitter-icon.svg" alt="Twitter icon" className="me-2"
                          loading="lazy" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-disclaimer-wrap d-flex align-items-center justify-content-center">
            <div className="col d-flex py-md-2 align-items-center justify-content-center footer-disclaimer-wrap-col">
              <p className="mb-0 text-center my-2" suppressHydrationWarning>
                © {new Date().getFullYear()} Harshal IT Soft. All rights reserved.{" "}
                <a href="/privacy-policy">Privacy Policy.</a>
                <a href="/disclaimer">Disclaimer</a>
              </p>
            </div>
          </div>
        </section>
      </footer>
     <button
        type="button"
        className="btn btn-dark rounded-circle position-fixed bottom-0 end-0 d-none back-to-top"
        onClick={scrollToTop}
        id="back-to-up"
        aria-label="Back to top"
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </button>

    </>
  );
}