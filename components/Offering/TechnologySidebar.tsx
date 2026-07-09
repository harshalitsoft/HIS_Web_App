import { SITE_EMAIL, SITE_MAP_URL } from "@/lib/site-config";
import { TECHNOLOGY_NAV_ITEMS } from "@/lib/offering-pages";

interface TechnologySidebarProps {
  activeSlug: string;
}

export default function TechnologySidebar({ activeSlug }: TechnologySidebarProps) {
  return (
    <div className="col-12 col-lg-4 pro-con-buttons-col ps-md-5">
      <aside>
        <header>
          <h3>Our Technology</h3>
          <nav>
            <ul className="services-nav-wrap">
              {TECHNOLOGY_NAV_ITEMS.map((item) => (
                <li key={item.slug} className={item.slug === activeSlug ? "active-list" : undefined}>
                  <a href={`/${item.slug}`} aria-label={`${item.label} Menu Item`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <header>
          <h3>Get In Touch</h3>
          <nav>
            <ul className="get-in-touch-wrap">
              <li>
                <a
                  title="Click to call"
                  href="tel:+918827439088"
                  className="contact-num"
                  aria-label="Call +91-8827439088"
                >
                  +91-8827439088
                </a>
              </li>
              <li>
                <a
                  title="Click to send a mail"
                  href={`mailto:${SITE_EMAIL}`}
                  className="email-add"
                  aria-label={`Mail ${SITE_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a
                  title="Click to get directions"
                  href={SITE_MAP_URL}
                  className="office-add"
                  aria-label="Address B-14 Sankheswar Citi, Near Aurbindo Hospital, Bhawarsala, Indore, Madhya Pradesh - 453111."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B-14 Sankheswar Citi, Near Aurbindo Hospital, Bhawarsala, Indore, Madhya Pradesh - 453111.
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </aside>
    </div>
  );
}
