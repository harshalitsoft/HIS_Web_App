import { SITE_ADDRESS, SITE_EMAIL, SITE_MAP_URL } from "@/lib/site-config";

export default function ProConsSection() {
    return (
      <section id="pro-cons-section">
      <div className="container">
          <div className="row pro-con-main-wrap">
              <div className="col-12 col-lg-8 pro-con-text-col">
                  <h3 className="pros peachGreen">Pros:</h3>
                  <p className="pros first">
                      With faster load time, there are many advantages that make mobile apps the most desired solution for businesses. Let’s find out why:
                  </p>
                  <h4 className="pros">Highly Convenient</h4>
                  <p className="pros">
                      Typically, mobile apps seem more convenient than their website counterparts. These are faster, easy to use and offer an intuitive user experience.
                  </p>
                  <h4 className="pros">Offer Push Notifications</h4>
                  <p className="pros">
                      A feature, not available with websites, mobile apps use push notifications for sharing new features, updates as well as reminders. All this happening within an app helps in enhancing the overall customer experience. Hence, furthering the customers’ retention rate.
                  </p>
                  <h4 className="pros">Provide Personalized Experience</h4>
                  <p className="pros">
                      Users can set preferences by creating accounts with the mobile apps. Not just that, storing crucial data and information within these apps is secure and feels handy.
                  </p>

                  <h3 className="cons peachGreen">Cons:</h3>
                  <p className="cons first">
                      Far from perfect, there are certain aspects that may seem unappealing to some businesses when it comes to creating mobile apps. Here are a few limitations to know about:
                  </p>
                  <h4 className="cons">One App, Different versions</h4>
                  <p className="cons">
                      Every mobile app must fulfil the requirements imposed by different operating systems. Hence, one must design multiple versions of a single app to run on varying platforms. This takes time and is a tedious process.
                  </p>
                  <h4 className="cons">Consistent Upgrades Needed</h4>
                  <p className="cons">
                      Updates become a consistent need when keeping these mobile apps up to date. From compatibility to the latest OS versions to adding extra features, the job requires rigorous support and fixes, that may only increase over time.
                  </p>
                  <h4 className="cons">High Cost of Development</h4>
                  <p className="cons">
                      It is expensive to create mobile apps. From spending on different versions of the app to releasing upgrades and fixes every now and then, the task comes with a huge price tag.
                      <br /> <br />
                      Set aside the challenges, these mobile apps can offer great benefits to businesses. To understand more about the utilization of these solutions, click below.
                  </p>
                  <button className="C2A-btn peachGreen" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get A Quote Now</button>

              </div>
              <div className="col-12 col-lg-4 pro-con-buttons-col ps-md-5">
                  <aside>
                      <header>
                          <h3 className="peachGreen">Our Services</h3>
                          <nav>
                              <ul className="services-nav-wrap">
                                  <li><a href="AI-application-development-service.html" aria-label="AI Application Menu Item">AI solutions</a></li>
                                  <li><a className="peachGreen" title="Open page in current tab" href="web-application-development-service.html" aria-label="Web Application Menu Item">Web application</a></li>
                                  <li><a className="peachGreen" title="Open page in current tab" href="cloud-application-development-service.html" aria-label="Cloud application Menu Item">Cloud application</a></li>
                                  <li className="active-list peachGreen"><a title="Open page in current tab" href="mobile-application-development-service.html" aria-label="Mobile application Menu Item">Mobile application</a></li>
                                  <li><a className="peachGreen" title="Open page in current tab" href="desktop-application-development-service.html" aria-label="Desktop application Menu Item">Desktop application</a></li>
                              </ul>
                          </nav>
                      </header>
                      <header>
                          <h3 className="peachGreen">Get In Touch</h3>
                          <nav>
                              <ul className="get-in-touch-wrap">
                                  <li><a title="Click to call" href="tel:+919823167719" className="contact-num peachGreen" aria-label="Call +91-9823167719">+91-9823167719</a></li>
                                  <li><a title="Click to send a mail" href={`mailto:${SITE_EMAIL}`} className="email-add peachGreen" aria-label={`Mail ${SITE_EMAIL}`} target="_blank" rel="noopener noreferrer">{SITE_EMAIL}</a></li>
                                  <li><a title="Click to get directions" href={SITE_MAP_URL} className="office-add peachGreen" aria-label={`Address ${SITE_ADDRESS}`} target="_blank" rel="noopener noreferrer">{SITE_ADDRESS}</a></li>
                              </ul>
                          </nav>
                      </header>
                  </aside>
              </div>
          </div>
      </div>
  </section>
    );
}