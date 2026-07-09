'use client';
import {
  lazyServiceAboutSection,
  LazyServiceHowWeWork as HowWeWork,
  LazyServiceProConsSection as ProConsSection,
} from "@/lib/service-page-lazy-sections";

const AboutSection = lazyServiceAboutSection(() =>
  import("@/components/DesktopApplicationDevelopmentService/AboutSection")
);

export default function DesktopApplicationDevelopmentService() {    return (
        <> 
        <header className="video-header-block">
        <div className="video-wrap-main-block">
            <video autoPlay muted loop>
                <source src="videos/desktop-app.mp4" type="video/mp4" />
            </video>
            <div className="header-content-wrap d-flex flex-column align-items-center justify-content-center">
                <h1 className="animate-on-load">Desktop Application</h1>
                <ul className="breadcrumb video-background animate-on-load">
                    <li><a href="/" id="home-breadcrumb-element" aria-label="Home Breadcrumb Item">Home</a></li>
                    <li>Services</li>
                    <li>Desktop Application</li>
                </ul>
                <a className="explore-button animate-on-load" href="#about-section">
                  Explore more{" "}
                  <svg
                    className="explore-arrow-bounce"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 3.5 4 13h4v8h8v-8h4L12 3.5z" />
                  </svg>
                </a>
            </div>
        </div>
    </header>
    <AboutSection />
    <ProConsSection />
    <HowWeWork />
    </>
    );
}