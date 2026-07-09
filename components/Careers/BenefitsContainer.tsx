   export default function BenefitsContainer() {
  return ( 
<>
 
 <section className="container benefits-container">
        <div className="row mb-md-5 d-flex justify-content-center align-items-center">
            <div className="col-sm-8 col-md-12 d-flex justify-content-center align-items-center">
                <h2 className="fs-1 technologiesHead1 benefits-title">Benefits of <span className="technologiesHead2">Working with us</span></h2>
            </div>
        </div>

 
        <div className="row benefits-main-wrap">
            <div className="col">
                <div className="row d-flex my-5">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-md-start align-items-center mb-4">
                        <h3 className="benefits-sub-head">Flexible Work Time</h3>
                        <p className="mb-0 mt-md-4 mt-sm-3 benefits-sub-para">You can choose your work schedule with certain conditions such as prescribed working hours to still meet the optimum efficiency and productivity.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <img src="images/flexible-time-graphic.webp" alt="A father taking care of his kid while working on a laptop" className="img-fluid" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="row benefits-main-wrap my-md-5 my-sm-3">
            <div className="col my-md-5 my-sm-3">
                <div className="row d-flex my-5 flex-row-reverse">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-md-start align-items-center mb-4">
                        <h3 className="benefits-sub-head">Cab Facility</h3>
                        <p className="mb-0 mt-md-4 mt-sm-3 benefits-sub-para">
                            Monthly, we reimburse 50% of your Pick and Drop cab
                            fares with your salary, making your commute more
                            cost-effective.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 cab-facility-wrap">
                        <div className="rounded-voilet-shape"></div>
                        <img src="images/cab-facility-graphic.webp" alt="A person opening a car's door" className="img-fluid cab-facility-image" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>

     
        <div className="row benefits-main-wrap ">
            <div className="col ">
                <div className="row d-flex my-5">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-md-start align-items-center mb-4">
                        <h3 className="benefits-sub-head">Leave Comp Off</h3>
                        <p className="mb-0 mt-md-4 mt-sm-3 benefits-sub-para">
                            If you need to take a leave, you can choose to
                            compensate for the missed work by coming in on a
                            Saturday, Sunday, or a holiday during the same week,
                            provided you obtain permission from your manager.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center comp-off-wrap">
                        <div className="square-pink-shape"></div>
                        <img src="images/leave-comp-off-graphic.webp" alt="A person sitting alone in office and working on PC" className="img-fluid" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="row benefits-main-wrap my-md-5 my-sm-3">
            <div className="col my-md-5 my-sm-3">
                <div className="row d-flex my-5 flex-row-reverse">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-md-start align-items-center mb-4">
                        <h3 className="benefits-sub-head">Bonus & Gifts</h3>
                        <p className="mb-0 mt-md-4 mt-sm-3 benefits-sub-para">
                            Various bonuses and gifts provided will serve as motivation for you to make the right choices and excel in your endeavors.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <img src="images/bonus-and-gifts-graphic.webp" alt="Two gift boxes kept one on the other and a small gift box hold in hands" className="img-fluid" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}