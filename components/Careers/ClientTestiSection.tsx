  "use client";
import React, { useEffect, useRef, useState } from 'react';

export default function ClientTestiSection() {
    const testiData = [

        {
            className: 'voilet',
            employeeName: 'Ashwini Dakare',
            employeeRole: 'Senior Software Developer',
            employeeText: "I had an amazing experience with Harshal IT Soft. As I worked here for a period of 4.9 years. I am really happy with the company culture and environment they've cultivated."
        },

        {
            className: 'green',
            employeeName: 'Jayesh Nahar',
            employeeRole: 'Software Developer',
            employeeText: "I love the way everyone shares their views with each other. Each and everyone's view is respected here, which make me feel confident about sharing things."
        },

        {
            className: 'blue',
            employeeName: 'Shraddha Tak',
            employeeRole: 'Software Developer',
            employeeText: "I have been working since last 3 months in Harshal IT Soft and having great working experience. Management is very supportive and focused on employee's skills development. Company policies are employee friendly which makes healthy working environment."
        },

        {
            className: 'voilet',
            employeeName: 'Avinash Mane',
            employeeRole: 'Senior Software Developer',
            employeeText: "8 years here - Fantastic company! Employee-friendly management, caring HRs like family, flexible hours, great work culture, Thursday games, exciting monsoon tours, daily learning, big projects, biannual salary increments, bonuses, skill-focused interviews, provident fund, diverse opportunities, snacks anytime, on-time salary, medical insurance, top-notch office infrastructure. Much more!"
        },

        {
            className: 'green',
            employeeName: 'Priya Mathew',
            employeeRole: 'Human Resource Executive',
            employeeText: "The company is extremely good. The employees are very helpful and good with everyone. No politics at all. I am learning a lot here and I am loving working here. The working hours are flexible and the policies are amazing. It is a service based company and our clients are USA based."
        },

        {
            className: 'blue',
            employeeName: 'Ayush Chirde',
            employeeRole: 'Software Developer',
            employeeText: "Undoubtedly the best company in terms of work Environment, learning opportunities, work life balance and career growth. Everyone in the company are super supportive and fun loving. I am having a great time working for this company."
        },

        {
            className: 'voilet',
            employeeName: 'Deep Patel',
            employeeRole: 'Development Team Lead',
            employeeText: "Great work culture, Flexible working hours, Very Friendly and supportive environment, You get time for skill development and trainings are also provided. Great experience working in Harshal IT Soft."
        },

        {
            className: 'green',
            employeeName: 'Shrikant Dandile',
            employeeRole: 'Senior Software Developer',
            employeeText: "I am working here as a Dot Net Developer from Feb 2017. It is one of the best company I ever had worked. Infrastructure is good. Management thinks about employee, periodically taking suggestions for improvement, and implement possible suggestions. Harshal IT Soft has good projects and good developer teams to handle them. Helpful and friendly colleagues."
        },

        {
            className: 'blue',
            employeeName: 'Shripad Ige',
            employeeRole: 'Front End Developer',
            employeeText: "Great workplace with excellent learning opportunities , friendly work culture & flexible work schedule..."
        },

        {
            className: 'voilet',
            employeeName: 'Priyanka Bhogade',
            employeeRole: 'Quality Analyst',
            employeeText: "Best place to work. You will get lots of opportunities to learn and grow."
        },

        {
            className: 'green',
            employeeName: 'Sonal Pandit',
            employeeRole: 'Software Developer',
            employeeText: "Harshal IT Soft has a very nice work culture with no politics. Has a friendly atmosphere and a right place to learn new things. All Seniors along with the head of the company are very helpful, cooperative and friendly. I must say that I was lucky enough to get to work in Harshal IT Soft."
        },

        {
            className: 'blue',
            employeeName: 'Rasmita Das',
            employeeRole: 'Human Resource Executive',
            employeeText: "The work place is very good for an employee to grow his technical knowledge. A typical day starts at around 9.00AM and its a very pleasant work environment. Management is extremely good and makes sure each individual has excellent growth career wise. "
        },

        {
            className: 'voilet',
            employeeName: 'Sumit Shitole',
            employeeRole: 'Software Developer',
            employeeText: "Harshal IT Soft has always been stable, timely in giving salaries as well as offering open dialogues with senior leadership. A truly global company, Harshal IT Soft has multiple learnings to offer with focus on skills development, especially for technical teams. My peers have seen multiple growth opportunities across new roles in their tenure at Harshal IT Soft. It is a stable company"
        },
    ];

    const [currentGroup, setCurrentGroup] = useState(0);
    const [isFaded, setIsFaded] = useState(false);
    const [containerClass, setContainerClass] = useState(testiData[0].className);
    const intervalRef = useRef<number | null>(null);
    const currentRef = useRef(0);

    function updateSlider(index: number) {
        setIsFaded(true);
        // wait for fade out, then update content and fade in
        setTimeout(() => {
            currentRef.current = index;
            setCurrentGroup(index);
            setContainerClass(testiData[index].className);
            setIsFaded(false);
        }, 400);
    }

    function startInterval() {
        stopInterval();
        // use window.setInterval to get numeric id
        intervalRef.current = window.setInterval(() => {
            const next = (currentRef.current + 1) % testiData.length;
            updateSlider(next);
        }, 5000);
    }

    function stopInterval() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function restartInterval() {
        stopInterval();
        startInterval();
    }

    useEffect(() => {
        // initial start
        startInterval();
        return () => stopInterval();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handlers for buttons
    function gotoNext() {
        const next = (currentRef.current + 1) % testiData.length;
        updateSlider(next);
        restartInterval();
    }

    function gotoPrev() {
        const prev = (currentRef.current - 1 + testiData.length) % testiData.length;
        updateSlider(prev);
        restartInterval();
    }

    return (
        <>

            <section id="clientTestiSection" className="mt-5">
                <div className="container">
                    <div className="row mb-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-sm-8 col-md-12 d-flex justify-content-center align-items-center">
                            <h2 className="fs-1 technologiesHead1">From Our <span className="technologiesHead2">Former Employees</span></h2>
                        </div>
                    </div>

                    <div className={`row d-flex justify-content-between emp-testi-main-wrap ${containerClass}`} id="emp-testi-main-wrap">
                        <div className="col d-flex justify-content-center align-items-center px-0">
                            <button onClick={gotoPrev} className="emp-button-1 d-flex justify-content-center align-items-center" id="emp-button-1">
                                <img src="images/emp-testi-left-arrow.svg" alt="left arrow icon" loading="lazy" />
                            </button>
                        </div>
                        <div className="col emp-testi-wrap d-flex flex-column align-items-center justify-content-center">
                            <div className="emp-testi-star-icon my-4" id="emp-testi-image"></div>

                            <div style={{ opacity: isFaded ? 0 : 1, transition: 'opacity 0.4s' }}>
                                <p className="emp-testi-name mb-0 text-center" id="emp-testi-name">{testiData[currentGroup].employeeName}</p>
                                <p className="emp-testi-role text-center" id="emp-testi-role">{testiData[currentGroup].employeeRole}</p>
                                <hr />
                                <p className="emp-testi-text" id="emp-testi-text">{testiData[currentGroup].employeeText}</p>
                            </div>

                        </div>
                        <div className="col d-flex justify-content-center align-items-center px-0">
                            <button onClick={gotoNext} className="emp-button-2 d-flex justify-content-center align-items-center" id="emp-button-2">
                                <img src="images/emp-testi-right-arrow.svg" alt="right arrow icon" loading="lazy" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}