const STEPS = [
  {
    icon: "message-line-icon-blue.svg",
    title: "Requirement Analysis",
    text: "Discuss the scope of work with clients and offer suggestions to finalize the complete project requirements.",
  },
  {
    icon: "Estimate-line-icon-blue.svg",
    title: "Estimate",
    text: "Consider the finalized requirement to analyze project cost, keeping the client’s budget in mind.",
  },
  {
    icon: "Code-line-icon-blue.svg",
    title: "Development",
    text: "Assign our experienced team to complete the development of the project before the set deadline.",
  },
  {
    icon: "Search-line-icon-blue.svg",
    title: "Code Review",
    text: "Optimize the code through reviews to ensure the application follows the defined architecture and best practices.",
  },
  {
    icon: "Testing-line-icon-blue.svg",
    title: "Testing",
    text: "Carry the rigorous testing of the built program to validate and verify the application’s functionality, performance, and security.",
  },
  {
    icon: "Sign-off-line-icon-blue.svg",
    title: "Client Sign Off",
    text: "Complete the sign off formalities with clients after confirming the aptness of the developed solution.",
  },
  {
    icon: "Deployment-line-icon-blue.svg",
    title: "Deployment",
    text: "Take care of the application’s deployment at the client’s site to offer hassle-free software delivery.",
  },
  {
    icon: "Support-setting-line-icon-blue.svg",
    title: "Post-Deployment Support",
    text: "Stay in the loop with the clients after the application goes live to offer support, whenever needed.",
  },
];

export default function TechnologyHowWeWork() {
  const firstRow = STEPS.slice(0, 4);
  const secondRow = STEPS.slice(4);

  return (
    <section id="howWeWork">
      <div className="container py-3 py-sm-5 how-we-work">
        <div className="row text-center mt-3 mt-md-4 mt-lg-5 pb-md-2 animate-on-load">
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-md-12">
                <h2 className="fs-1 how-we-work-header">Here’s how we work</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pt-4 pt-md-5 pb-md-2 animate-on-load">
          {firstRow.map((step) => (
            <div key={step.title} className="col-10 col-sm-6 col-lg-3 mb-4">
              <div className="technoSectionDIV h-100 d-flex flex-column align-items-left p-4">
                <img
                  src={`/images/${step.icon}`}
                  alt={`${step.title} Icon`}
                  className="img-fluid mb-1"
                  loading="lazy"
                />
                <h3 className="text-left my-2 technoSectionSubHead">{step.title}</h3>
                <p className="text-left technoSectionSubText">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center animate-on-load">
          {secondRow.map((step) => (
            <div key={step.title} className="col-10 col-sm-6 col-lg-3 mb-4">
              <div className="technoSectionDIV h-100 d-flex flex-column align-items-left p-4">
                <img
                  src={`/images/${step.icon}`}
                  alt={`${step.title} Icon`}
                  className="img-fluid"
                  loading="lazy"
                />
                <h3 className="text-left my-2 technoSectionSubHead">{step.title}</h3>
                <p className="text-left technoSectionSubText">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
