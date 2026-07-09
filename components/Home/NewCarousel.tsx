
export default function NewCarousel() { 

  return (
    
//  New Carousel  
    <section id="clientTestiSection">
        <div className="container-fluid">
           
            <div className="row text-center my-3 my-md-4 my-lg-5 animate-on-load">
                <div className="col">
                    <div className="row fs-1 testimonialHead1">
                        <h2>Don’t take our word for it</h2>
                    </div>
                    <div className="row fs-1 testimonialHead2">
                        <h2>Trust Our Customers</h2>
                    </div>
                </div>
            </div>

            <div className="row my-5 animate-on-load">
                <div className="col d-block" id="client-testi-main-col">

                    {/* <!-- testimonial card pink 1 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Harshal IT Soft has taken our requirements and made projects come to life <span
                                        className="hm-testi-pink-hightlight">within budget and deadline.</span> Harshal IT Soft goes
                                    above and beyond -the team has taken extra time to fully understand<span
                                        className="collapse" id="hm-testi1-toggle">
                                        our business rules and anticipate what solutions might improve
                                        our performance. Our manual processes are minimized thanks to Harshal IT Soft
                                        and we have improved our revenue, due to billing solutions it provided. They
                                        have been excellent to work and have earned our business time and time again.
                                    </span> <a className="hm-testi-more-btn" data-bs-toggle="collapse"
                                        href="#hm-testi1-toggle" aria-expanded="false" aria-controls="collapseOffering2"
                                        // onClick={toggleDescriptionView} 
                                        aria-label="Paragraph Expand">...Read
                                        More</a>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Michel Nolan</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 2 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    You are <span className="hm-testi-voilet-hightlight">very good programmers.</span> I
                                    have worked with programmers from many companies,
                                    and no one stands close to you. Other programmers cannot create what you have
                                    created. You guys are better than local programmers.
                                    <span className="collapse" id="hm-testi2-toggle">Your ability to understand requirements
                                        and convert it to working program is fabulous.</span> <a
                                        className="hm-testi-more-btn" data-bs-toggle="collapse" href="#hm-testi2-toggle"
                                        aria-expanded="false" aria-controls="hm-testi2-toggle"
                                      //  onClick={toggleDescriptionView} 
                                        aria-label="Paragraph Expand">...Read
                                        More</a>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Bill Cole</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 3 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    We have been working with Harshal IT Soft company for the past 3 years. Our
                                    relationship with them has been rewarding as they
                                    demonstrate a <span className="hm-testi-voilet-hightlight">very good
                                        understanding</span> of our objectives and requirements, which translates into
                                    appropriate and quick solutions.
                                    <span className="collapse" id="hm-testi3-toggle">
                                        The quality of implementation is on a par with established standards and is
                                        always maintained across all projects. The
                                        team is skilled and easily approachable - truly a great team to work with! I
                                        look
                                        forward to working with them on future projects.
                                    </span> <a className="hm-testi-more-btn" data-bs-toggle="collapse"
                                        href="#hm-testi3-toggle" aria-expanded="false" aria-controls="hm-testi3-toggle"
                                        // onClick={toggleDescriptionView} 
                                        aria-label="Paragraph Expand">...Read
                                        More</a>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Sean M</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 4 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    The team did an excellent job. The project was completed in half the time. The team
                                    helped us figure out what we were doing wrong.
                                    The app they developed for us <span className="hm-testi-pink-hightlight">worked
                                        perfectly.</span> One of the best team I've had the
                                    pleasure to work with. Highly recommended.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">David A</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 5 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Did a <span className="hm-testi-voilet-hightlight">fantastic job</span> with the
                                    project. Will recommend to anyone who needs any kind of .NET development work.
                                    Great job!
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Mark P</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 6 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Very happy with the work completed, it was to specification and <span
                                        className="hm-testi-voilet-hightlight">delivered ahead of time.</span> Will hope to
                                    work with them again in the
                                    future.

                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Karen P</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 7 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    I wish this comment area allowed you to see what a <span
                                        className="hm-testi-pink-hightlight">perfect job this was!</span> This is easily the
                                    best development team.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">William M</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 8 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Work was done well and <span className="hm-testi-voilet-hightlight">I would hire
                                        again.</span> Great communication, even during the troublesome parts. Nice
                                    asset.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Daniel D</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 9 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Great worker. <span className="hm-testi-voilet-hightlight">On time delivery</span> and
                                    very willing to resolve any and all issues. Exceeded expectations. Would definitely
                                    recommend.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Roger H</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 10 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Got what I needed <span className="hm-testi-pink-hightlight">on time.</span> cool.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Zak D</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 11 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Great team to work with. The team does a great job and I look forward to working
                                    with them on other projects. If you're looking for a good team that will complete
                                    the project on time and <span className="hm-testi-voilet-hightlight">communicate
                                        well</span> with you, <span className="collapse" id="hm-testi4-toggle"> throughout
                                        the process, this is the right team for you. HIGHLY recommended.</span> <a
                                        className="hm-testi-more-btn" data-bs-toggle="collapse" href="#hm-testi4-toggle"
                                        aria-expanded="false" aria-controls="hm-testi4-toggle"
                                        // onClick={toggleDescriptionView}
                                         aria-label="Paragraph Expand">...Read
                                        More</a>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Greg G</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 12 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    The team <span className="hm-testi-voilet-hightlight">managed a difficult job
                                        excellently.</span> Communication was also excellent and they delivered on time.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">David G</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 13 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    <span className="hm-testi-pink-hightlight">Very good programmers.</span> They were very
                                    easy to understand and very good English. Great Communication Skills. I would give
                                    him a 20out of 10 - Very Excellent - if I could.

                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Harry W</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 14 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Awesome work once again! <span className="hm-testi-voilet-hightlight">Great work</span>
                                    as always!
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Zack L</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 15 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Excellent Job, very communicative, on schedule, every week on time! I will hire
                                    again for sure when needed. It was not an easy and simple task and they <span
                                        className="hm-testi-voilet-hightlight">did it above expectations.</span> thank you.

                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Liran K</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 16 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Fast, quick responses, easy to work with, very helpful. <span
                                        className="hm-testi-pink-hightlight">saved me and my project!</span>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Ken F</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 17 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Really fast and <span className="hm-testi-voilet-hightlight">very reliable,</span> will
                                    recommend them to anyone I know.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Savio G</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 18 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Thank you. Created the JavaScript I needed in record time. Works great. Programmers
                                    followed my direction and <span className="hm-testi-voilet-hightlight">
                                        delivered exactly
                                        what I needed.
                                    </span>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Brian B</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 19 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    A+. fast, responsive, easy to work with and communicate, and professional. Will
                                    definitely use on future projects and <span
                                        className="hm-testi-pink-hightlight">recommend to all.</span>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Ken F</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 20 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    <span className="hm-testi-voilet-hightlight">A++ every time.</span> excellent work.
                                    would definitely recommend.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Ken F</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 21 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Great developers, <span className="hm-testi-voilet-hightlight">highly
                                        professional.</span>
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Charles A</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card pink 22 --> */}
                    <div className="hm-test-card-wrap hm-card-pink">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-pink-voilet.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Excellent work. Professional , definitely <span className="hm-testi-pink-hightlight">i
                                        will work again</span> with them.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-pink.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Gollbert D</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Voilet 23 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    <span className="hm-testi-voilet-hightlight">Great Job,</span> wasn't a priority but
                                    small jobs never is!
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Fegl E</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- testimonial card Blue 24 --> */}
                    <div className="hm-test-card-wrap hm-card-blue">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-blue-green.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Excellent work, again! <span className="hm-testi-voilet-hightlight">I’m very much
                                        happy</span> and will hire again. recommended to everyone. very responsive, did
                                    fantastic job as agreed and even better.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-blue.svg" alt="Profile Icon" className="img-fluid"
                                            loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Liran K</h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- testimonial card pink 25 --> */}
                    <div className="hm-test-card-wrap hm-card-voilet">
                        <div className="row d-flex flex-column hm-testi-card-main-row h-100">
                            <div className="col hm-quote-img-col">
                                <img src="images/star-icon-voilet-blue.svg" alt="Star Icon" className="img-fluid"
                                    loading="lazy" />
                            </div>
                            <div className="col hm-test-card-text">
                                <p className="mb-0">
                                    Harshal IT Soft have delivered on numerous tasks, ranging from software migrations and
                                    revisioning, to modular enhancements, SQL dB work, and plenty more. <span
                                        className="hm-testi-voilet-hightlight"> I would recommend them</span> for any of
                                    your programming, software, data, or maintenance needs.
                                </p>
                            </div>
                            <div className="col hm-card-profile-col">
                                <div className="row hm-card-profile-row">
                                    <div
                                        className="col px-0 col-md-3 d-flex align-items-center justify-content-center hm-testi-profile-icon-col">
                                        <img src="images/profile-icon-voilet.svg" alt="Profile Icon"
                                            className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="col px-0 d-flex flex-column align-items-start justify-content-center">
                                        <h5 className="mb-0">Joseph </h5>
                                        <p className="mb-0 hm-card-cust-prof">Regular Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  );
}