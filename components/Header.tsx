

export default function Header() {
    return (
        <>
   
     <header>
        <div className="px-3 pt-3 pt-md-5 px-md-5 hm-header-main">
            <div className="col d-flex flex-column align-items-center text-center justify-content-center hm-title-wrap">
                <h1 className="main-title home-main-title mt-5 mt-lg-4 mt-md-3" id="hm-main-title">AI Powered Solutions</h1>
                <p className="his-home-tagline mt-4" id="hm-title-tagline">
                    Unlock smarter decision-making with intelligent, data-driven systems designed to optimize
                    performance, enhance efficiency, and deliver insights that drive your business forward.
                </p>
                <div className="row mt-4 pt-5" id="hm-header-form">
                    <div className="col hm-main-input">
                        <form className="d-flex justify-content-center" data-form-validate-form2="true" method="post"
                             id="getAQuoteHomepageform">
                            <div className="d-flex flex-column hm-main-input-wrap">
                                <input type="email" placeholder="Enter your email" id="getAQuoteHomepageInput" className=""
                                    required />
                            </div>
                            <button type="submit" className="d-flex justify-content-center align-items-center"
                                id="getAQuoteHomepageButton">
                                <p className="mb-0">Get A Quote</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </>
    );
}