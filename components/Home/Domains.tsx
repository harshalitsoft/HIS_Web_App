   export default function Domains() {
  return ( 
  <section id="OurDomains">
        <div className="container py-3 py-sm-5">
            <div className="row text-center mt-3 mt-md-4 mt-lg-5 pb-md-2">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-12">
                            <h2 className="fs-1 technologiesHead1">Our <span className="technologiesHead2">Domains</span></h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-8 col-md-12">
                            <p className="technoSection-tagline">Exploring the Spectrum of Expertise</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center pt-4 pt-md-5 pb-md-2 hm-domains-row" id="hm-domains">
                 {/* Engineering   */}
                <div className="col-10 col-sm-6 col-md-6 mb-4 hm-domain-card">
                    <a href="domain-Engineering.html" aria-label="Engineering Section" className="technoLinks">
                        <div className="technoSectionDIV voiletHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Construction-icon 1.svg" alt="Desktop icon showing engineering domain"
                                className="img-fluid mb-1" width="25%" loading="lazy" />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Construction</h3>
                            <p className="text-left technoSectionSubText">
                                Harness the expertise of our skilled software developers to streamline construction
                                workflows with intelligent digital solutions designed to improve efficiency,
                                coordination, and project success.
                            </p>
                        </div>
                    </a>
                </div>

                {/* Healthcare */}
                <div className="col-10 col-sm-6 col-md-6 mb-4 hm-domain-card">
                    <a href="Healthcare.html" aria-label="Mobile Section" className="technoLinks">
                        <div className="technoSectionDIV blueHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Healthcare-icon.svg" alt="Hand and heart icon showing healthcare domain"
                                className="img-fluid" width="25%" loading="lazy" />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Healthcare</h3>
                            <p className="text-left technoSectionSubText">
                                From advanced telemedicine platforms to robust electronic health record systems, our
                                expertly designed healthcare software is your key to staying ahead in the rapidly
                                changing world of modern medicine
                            </p>
                        </div>
                    </a>
                </div>

                {/* Learning Management System  */}
                <div className="col-10 col-sm-6 col-md-6 mb-4 hm-domain-card">
                    <a href="domain-learning-management-system.html" aria-label="Desktop Section"
                        className="technoLinks">
                        <div className="technoSectionDIV voiletHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/learning-management-system-icon.svg"
                                alt="laptop and hat icon showing learning management system" className="img-fluid"
                                width="25%" loading="lazy" />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">LMS</h3>
                            <p className="text-left technoSectionSubText">Empower the next generation of learners with our
                                innovative e-learning software, fostering interactive and immersive educational
                                experiences that inspire growth and knowledge retention</p>
                        </div>
                    </a>
                </div>


            </div>
          

        </div>

    </section>
    );
    }