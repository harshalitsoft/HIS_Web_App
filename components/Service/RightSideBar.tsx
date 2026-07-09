import { SITE_ADDRESS, SITE_EMAIL, SITE_MAP_URL } from "@/lib/site-config";

export default function RightSideBar() {
    return (
        <div className="col-12 col-lg-4 pro-con-buttons-col ps-md-5">
        <aside>
            <header>
                <h3 className="pink">Our Services</h3>
                <nav>
                    <ul className="services-nav-wrap">
                        <li><a href="AI-application-development-service.html" aria-label="AI Application Menu Item">AI solutions</a></li>
                        <li><a className="pink" title="Open page in current tab" href="web-application-development-service.html" aria-label="Web Application Menu Item">Web application</a></li>
                        <li className="active-list pink"><a title="Open page in current tab" href="cloud-application-development-service.html" aria-label="Cloud application Menu Item">Cloud application</a></li>
                        <li><a className="pink" title="Open page in current tab" href="mobile-application-development-service.html" aria-label="Mobile application Menu Item">Mobile application</a></li>
                        <li><a className="pink" title="Open page in current tab" href="desktop-application-development-service.html" aria-label="Desktop application Menu Item">Desktop application</a></li>
                    </ul>
                </nav>
            </header>
            <header>
                <h3 className="pink">Get In Touch</h3>
                <nav>
                    <ul className="get-in-touch-wrap">
                        <li><a title="Click to call" href="tel:+918827439088" className="contact-num pink" aria-label="Call +91-8827439088">+91-8827439088</a></li>
                        <li><a title="Click to send a mail" href={`mailto:${SITE_EMAIL}`} className="email-add pink" aria-label={`Mail ${SITE_EMAIL}`} target="_blank" rel="noopener noreferrer">{SITE_EMAIL}</a></li>
                        <li><a title="Click to get directions" href={SITE_MAP_URL} className="office-add pink" aria-label={`Address ${SITE_ADDRESS}`} target="_blank" rel="noopener noreferrer">{SITE_ADDRESS}</a></li>
                    </ul>
                </nav>
            </header>
        </aside>
    </div>
    );
}