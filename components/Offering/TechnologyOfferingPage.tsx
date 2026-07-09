import type { TechnologyPageData } from "@/lib/offering-pages";
import TechnologyAboutSection from "./TechnologyAboutSection";
import TechnologyHowWeWork from "./TechnologyHowWeWork";
import TechnologyProConsSection from "./TechnologyProConsSection";

interface TechnologyOfferingPageProps {
  page: TechnologyPageData;
}

export default function TechnologyOfferingPage({ page }: TechnologyOfferingPageProps) {
  const { header, about, proCons } = page;

  return (
    <>
      <header className="video-header-block">
        <div className="video-wrap-main-block">
          <video autoPlay muted loop playsInline poster={`/images/${header.poster}`}>
            <source src={`/videos/${header.video}`} type="video/mp4" />
          </video>
          <div className="header-content-wrap d-flex flex-column align-items-center justify-content-center">
            <h1 className="animate-on-load">{header.title}</h1>
            <ul className="breadcrumb video-background animate-on-load">
              <li>
                <a href="/" id="home-breadcrumb-element" aria-label="Home Breadcrumb Item">
                  Home
                </a>
              </li>
              <li>Offerings</li>
              <li>{header.breadcrumb}</li>
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

      <TechnologyAboutSection about={about} />
      <TechnologyProConsSection slug={page.slug} proCons={proCons} />
      <TechnologyHowWeWork />
    </>
  );
}
