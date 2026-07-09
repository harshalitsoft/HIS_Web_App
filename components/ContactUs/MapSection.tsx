export default function MapSection() {  
    return (
        <div className="container google-map-container animate-on-load">
        <div className="row">
            <div className="col align-items-center d-flex justify-content-center p-5">

                <div
                    className="mapouter"
                    style={{ position: "relative", textAlign: "right", width: "600px", height: "400px" }}
                >
                    <div
                        className="gmap_canvas"
                        style={{ overflow: "hidden", background: "none", width: "600px", height: "400px" }}
                    >
                        
                        <iframe title="Harshal IT Soft on google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d936.0527409942864!2d75.86028516733906!3d22.798017932821264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1776347172615!5m2!1sen!2sin"
                         width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}