
 "use client";
import { useEffect, useState } from "react";

export default function YearsOfExperience() {
    const [experienceYears, setExperienceYears] = useState(15);

    useEffect(() => {
        const currentDate = new Date();
        const targetDate = new Date(currentDate.getFullYear(), 7, 14);
        const yearCount =
            currentDate < targetDate
                ? currentDate.getFullYear() - 2011
                : currentDate.getFullYear() - 2010;

        setExperienceYears(yearCount);
    }, []);

    return (

<section>
        <div className="container hm-experience animate-on-load">
            <div className="row hm-experience-row d-flex justify-content-center align-items-center">
                <div className="col-sm-6 hm-experience-count d-flex align-items-center justify-content-center">
                    <p id="experienceYearCount" className="hm-year-count m-0">{experienceYears}</p>
                </div>
                <div className="col-sm-6 hm-experience-content d-flex flex-column justify-content-between">
                    <h2 className="m-0 hm-text-style-4">Years of Experience</h2>
                    <p className="m-0 hm-text-style-3">
                        Harshal IT Soft, with extensive experience in developing feature-rich and efficient custom
                        apps, takes pride in its highly competitive
                        team. We aim at transforming our customers’ business through innovation and intelligent
                        solutions.
                    </p>
                    <button className="hm-get-in-touch-btn" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get
                        In Touch</button>
                </div>
            </div>
        </div>
    </section>
    );
    }