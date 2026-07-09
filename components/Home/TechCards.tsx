export default function TechCards() {
  return (
    //  Tech Cards Section  
    <section className="hm-first-section d-flex align-items-center">
        <div className="container">
            <div className="row" id="hm-services-row">

                <div className="col-md-3 my-4">
                    <div className="row d-flex flex-column align-items-center hm-tech-card-wrap">
                        <div className="col hm-tech-blue-circle d-flex justify-content-center align-items-center">
                            <img src="images/AI icon circle.svg" alt="AI icon" className="img-fluid" loading="lazy" />
                        </div>
                        <div className="col hm-tech-heading d-flex justify-content-center align-items-center">
                            <h3
                                className="hm-tech-corporate text-center mb-0 d-flex align-items-center justify-content-center">
                                AI Powered Solutions</h3>
                        </div>
                        <div className="col hm-tech-text d-flex justify-content-center">
                            <p className="mb-0 text-center">AI Powered Solutions – Intelligent, scalable AI software
                                designed to streamline processes and deliver an exceptional user experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 my-4">
                    <div className="row d-flex flex-column align-items-center hm-tech-card-wrap">
                        <div className="col hm-tech-blue-circle d-flex justify-content-center align-items-center">
                            <img src="images/cloud icon circle.svg" alt="cloud icon" className="img-fluid"
                                loading="lazy" />
                        </div>
                        <div className="col hm-tech-heading d-flex justify-content-center align-items-center">
                            <h3 className="hm-tech-cloud text-center mb-0 d-flex align-items-center justify-content-center">
                                Cloud Development</h3>
                        </div>
                        <div className="col hm-tech-text d-flex justify-content-center">
                            <p className="mb-0 text-center">
                                Discover the newer business possibilities by switching to our innovative, agile and
                                simplified cloud solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 my-4">
                    <div className="row d-flex flex-column align-items-center hm-tech-card-wrap">
                        <div className="col hm-tech-blue-circle d-flex justify-content-center align-items-center">
                            <img src="images/world icon circle.svg" alt="earth icon" className="img-fluid tech-card-img"
                                loading="lazy" />
                        </div>
                        <div className="col hm-tech-heading d-flex justify-content-center align-items-center">
                            <h3 className="hm-tech-web text-center mb-0 d-flex align-items-center justify-content-center">
                                Web Applications</h3>
                        </div>
                        <div className="col hm-tech-text d-flex justify-content-center">
                            <p className="mb-0 text-center">Engage with progressive web applications loaded with rich
                                features and offering high security.</p>
                        </div>
                    </div>
                </div>



                <div className="col-md-3 my-4">
                    <div className="row d-flex flex-column align-items-center hm-tech-card-wrap">
                        <div className="col hm-tech-blue-circle d-flex justify-content-center align-items-center">
                            <img src="images/monitor icon circle.svg" alt="desktop icon" className="img-fluid"
                                loading="lazy" />
                        </div>
                        <div className="col hm-tech-heading d-flex justify-content-center align-items-center">
                            <h3
                                className="hm-tech-desktop text-center mb-0 d-flex align-items-center justify-content-center">
                                Desktop Applications</h3>
                        </div>
                        <div className="col hm-tech-text d-flex justify-content-center">
                            <p className="mb-0 text-center">Enhance your business efficiency with our user-friendly yet
                                highly intuitive desktop solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}