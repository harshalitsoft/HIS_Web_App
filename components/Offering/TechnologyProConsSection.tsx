import type { TechnologyPageData } from "@/lib/offering-pages";
import TechnologySidebar from "./TechnologySidebar";

interface TechnologyProConsSectionProps {
  slug: string;
  proCons: TechnologyPageData["proCons"];
}

export default function TechnologyProConsSection({ slug, proCons }: TechnologyProConsSectionProps) {
  return (
    <section id="pro-cons-section">
      <div className="container">
        <div className="row pro-con-main-wrap">
          <div className="col-12 col-lg-8 pro-con-text-col">
            {proCons.pros.length > 0 || proCons.prosHeading ? (
              <>
                <h3 className="pros">{proCons.prosHeading}</h3>
                {proCons.prosIntro ? <p className="pros first">{proCons.prosIntro}</p> : null}
                {proCons.pros.map((item) => (
                  <div key={item.title}>
                    <h4 className="pros">{item.title}</h4>
                    <p className="pros">{item.content}</p>
                  </div>
                ))}
              </>
            ) : null}

            {proCons.cons.length > 0 || proCons.consHeading ? (
              <>
                <h3 className="cons">{proCons.consHeading}</h3>
                {proCons.consIntro ? <p className="cons first">{proCons.consIntro}</p> : null}
                {proCons.cons.map((item) => (
                  <div key={item.title}>
                    <h4 className="cons">{item.title}</h4>
                    <p className="cons">{item.content}</p>
                  </div>
                ))}
              </>
            ) : null}

            <button
              className="C2A-btn blue"
              data-bs-toggle="modal"
              data-bs-target="#enquireModalMobile"
            >
              Get A Quote Now
            </button>
          </div>

          <TechnologySidebar activeSlug={slug} />
        </div>
      </div>
    </section>
  );
}
