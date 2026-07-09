"use client";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandCarousel() {
    const settings = {
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                },
            },
        ],
    };
    

    return (

<section>
        <div className="container justify-content-center animate-on-load hm-brand-carousel mb-5" id="brand-carousel">
            <span className="hm-white-gradient-left"></span>
            <span className="hm-white-gradient-right"></span>
            <h2 className="mb-0 hm-carousel-title">We're trusted by top brands all over the world</h2>
            <div className="hm-brand-carousel-main">
                <Slider {...settings}>
                <div key="finit" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/finit.webp" alt="finit brand logo" loading="lazy" />
                </div>
                <div key="ak_finserv" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/ak_finserv.webp" alt="ak finserv brand logo" loading="lazy" />
                </div>
                <div key="inveck" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/inveck.webp" alt="inveck brand logo" loading="lazy" />
                </div>
                <div key="pelthora" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/pelthora.webp" alt="pelthora brand logo" loading="lazy" />
                </div>
                <div key="react365" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/react365.webp" alt="react365 brand logo" loading="lazy" />
                </div>
                <div key="athens_micro" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/athens_micro.webp" alt="athens micro brand logo" loading="lazy" />
                </div>
                <div key="delos" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/delos.webp" alt="delos brand logo" loading="lazy" />
                </div>
                <div key="bilyak" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/bilyak.webp" alt="bilyak brand logo" loading="lazy" />
                </div>
                <div key="bizhrs" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/bizhrs.webp" alt="bizhrs brand logo" loading="lazy" />
                </div>
                <div key="ulearning" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/ulearning.webp" alt="ulearning brand logo" loading="lazy" />
                </div>
                <div key="trazy" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/trazy.webp" alt="trazy brand logo" loading="lazy" />
                </div>
                <div key="learnBIZ" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/learnBIZ.webp" alt="learnBIZ brand logo" loading="lazy" />
                </div>
                <div key="ybh" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/ybh.webp" alt="ybh brand logo" loading="lazy" />
                </div>
                <div key="5asec" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/5asec.webp" alt="5asec brand logo" loading="lazy" />
                </div>
                <div key="chainlink" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/chainlink.webp" alt="chainlink brand logo" loading="lazy" />
                </div>
                <div key="vrois" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/vrois.webp" alt="vrois brand logo" loading="lazy" />
                </div>
                <div key="mAcademy" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/mAcademy.webp" alt="mAcademy brand logo" loading="lazy" />
                </div>
                <div key="blue_flame" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/blue_flame.webp" alt="blue flame brand logo" loading="lazy" />
                </div>
                <div key="nishadi" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/nishadi.webp" alt="nishadi brand logo" loading="lazy" />
                </div>
                <div key="hailmy" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/hailmy.webp" alt="hailmy brand logo" loading="lazy" />
                </div>
                <div key="educational_software_technologies" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/educational_software_technologies.webp"
                        alt="educational software technologies brand logo" loading="lazy" />
                </div>
                <div key="vibrant_publications" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/vibrant_publications.webp" alt="vibrant publications brand logo"
                        loading="lazy" />
                </div>
                <div key="callus" className="hm-slick-item d-flex align-items-center justify-content-center">
                    <img src="images/Brand logos/callus.webp" alt="callus brand logo" loading="lazy" />
                </div>
                </Slider>
            </div>
        </div>
    </section>
    );
    }