export default function HeadSection() {
  return ( 
<>
     <div className="dots-background-image">
        <img src="images/dots-background.webp" alt="dots background" />
    </div>
    <section className="careers-head-section">
        <div className="row h-100">
            <div className="col d-flex align-items-center justify-content-center h-100">
                <h1 className="careers-page-title">Build a better <span className="gradient-text-span">future <img src="images/future-bottom-line.svg" alt="bottom line" className="future-bottom-line" /></span> with us</h1>
                <img src="images/rounded-graphic-1.webp" alt="A man holding bottle in hand 3d graphic" className="rounded-graphic-1" />
                <img src="images/rounded-graphic-2.webp" alt="A girl relaxing on a chair and a laptop on table" className="rounded-graphic-2" />
                <img src="images/rounded-graphic-3.webp" alt="A girl with bulb 3d graphic" className="rounded-graphic-3" />
            </div>
        </div>
    </section>
</>
  );

}