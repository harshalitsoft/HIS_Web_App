export default function ProjectsSectionContent() {
    return (
        <section id="projects-section-content" className="container-fluid">
        <div className="row justify-content-center animate-on-load">
            <div className="col-sm-8 col-md-12">
                <h2 className="fs-1 how-we-work-header blue text-center">Take a Look At Our Projects</h2>
            </div>
        </div>
        <div className="row">
            <div className="col our-projects-wrap d-flex justify-content-center " id="element-to-watch">
                <img id="project-image" src="" alt="project image" loading="lazy"/>
            </div>
        </div>
        <div className="row d-flex justify-content-center pb-xl-5">
            <div className="col our-projects-title-wrap d-flex justify-content-between align-items-center">
                <img id="prev-button" src="images/left-arrow-dark-grey.svg" alt="left-arrow-icon" title="Previous Project" loading="lazy"/>
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <h3 id="project-title" className="our-projects-title"></h3>
                        <p id="project-subtitle" className="our-projects-subtitle mb-0"></p>
                    </div>
                </div>
                <img id="next-button" src="images/right-arrow-dark-grey.svg" alt="right-arrow-icon" title="Next Project" loading="lazy"/>
            </div>
        </div>
    </section>
    );
}