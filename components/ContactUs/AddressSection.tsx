export default function AddressSection() {
    return (
        <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-lg-4 contact-home-div p-5 m-5 d-flex flex-column align-items-center rounded animate-on-load">
                    <div className="row">
                        <div className="col pb-5">
                            <img src="images/location-icon-grad.svg" alt="Location Icon" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <p className="contact-us-home-text">B-14 Sankheswar Citi, Near Aurbindo Hospital, Bhawarsala, Indore, Madhya Pradesh - 453111.</p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 contact-home-div p-5 m-5 d-flex flex-column align-items-center rounded animate-on-load">
                    <div className="row">
                        <div className="col pb-5">
                            <img src="images/message-icon-grad.svg" alt="Message Icon" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  text-center">
                            <p className="contact-us-home-text">info@harshalitsoft.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}