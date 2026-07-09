    export default function Technologies() {
      return (
        
    
    <section id="InnovativeTechnologies">
        <div className="container py-3 py-sm-5">
            <div className="row text-center mt-3 mt-md-4 mt-lg-5 pb-md-2 animate-on-load">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-12">
                            <h2 className="fs-1 technologiesHead1">Innovative <span
                                    className="technologiesHead2">Technologies</span></h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-8 col-md-12">
                            <p className="technoSection-tagline">Creating value for clients through the application of
                                advanced technologies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center pt-4 pt-md-5 pb-md-2 animate-on-load">
                {/* <!-- AI Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-ai.html" aria-label="AI Section" className="technoLinks">
                        <div className="technoSectionDIV voiletHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/AI Icon SVG.svg" alt="AI Icon" className="img-fluid mb-1" width="25%"
                                 />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">AI</h3>
                            <p className="text-left technoSectionSubText">
                                From natural language processing to computer vision, we have the skills and tools to
                                make AI work for you.
                            </p>
                        </div>
                    </a>
                </div>

                {/* <!-- Cloud Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-cloud.html" aria-label="Cloud Section" className="technoLinks">
                        <div className="technoSectionDIV pinkHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Cloud Icon SVG.svg" alt="Cloud Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Cloud</h3>
                            <p className="text-left technoSectionSubText">
                                With our cloud applications, you can harness the benefits of cloud computing to improve
                                your operations, optimize resources, and deliver enhanced services.
                            </p>
                        </div>
                    </a>
                </div>

                {/* <!-- Low Code Technologies   --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-lowcode.html" aria-label="Low Code Section" className="technoLinks">
                        <div className="technoSectionDIV voiletHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Low_Code.svg" alt="Low Code Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Low Code</h3>
                            <p className="text-left technoSectionSubText">
                                Utilizing our low code application development services, you can swiftly construct and
                                deploy secure, scalable, and compliant applications in a fraction of the time and cost.
                            </p>
                        </div>
                    </a>
                </div>

                {/* <!-- Mobile Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-mobile.html" aria-label="Mobile Section" className="technoLinks">
                        <div className="technoSectionDIV blueHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Mobile Icon SVG.svg" alt="Mobile Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Mobile</h3>
                            <p className="text-left technoSectionSubText">
                                Regardless of your service type, we can create a mobile app tailored to your needs and
                                user satisfaction.
                            </p>
                        </div>
                    </a>
                </div>

            </div>
            <div className="row justify-content-center animate-on-load">
                {/* <!-- Web Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-web.html" aria-label="Web Section" className="technoLinks">
                        <div className="technoSectionDIV pinkHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Web Icon SVG.svg" alt="Web Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Web</h3>
                            <p className="text-left technoSectionSubText">
                                We develop web solutions that empower service providers and users with secure,
                                user-friendly, and data-driven platforms.
                            </p>
                        </div>
                    </a>
                </div>

                {/* <!-- API Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-api.html" aria-label="API Section" className="technoLinks">
                        <div className="technoSectionDIV blueHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/API Icon SVG.svg" alt="API Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">API</h3>
                            <p className="text-left technoSectionSubText">
                                Our API development expertise can transform your application into a versatile platform
                                that seamlessly connects with other systems and services.
                            </p>
                        </div>
                    </a>
                </div>

                {/* <!-- Desktop Technologies  --> */}
                <div className="col-10 col-sm-6 col-lg-3 mb-4">
                    <a href="technology-desktop.html" aria-label="Desktop Section" className="technoLinks">
                        <div className="technoSectionDIV voiletHoverBorder h-100 d-flex flex-column align-items-left p-4">
                            <img src="images/Desktop Icon SVG.svg" alt="Desktop Icon" className="img-fluid" width="25%"
                                  />
                            <h3 className="text-left fs-3 my-2 technoSectionSubHead">Desktop</h3>
                            <p className="text-left technoSectionSubText">
                                Through our desktop applications, you can securely access and share essential
                                information across devices and platforms.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>);
    }