import React from 'react'
import './ExploreMore.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from "react-icons/fa";


const boxData = [{

    title: "Sustainability",
    description: "At JK Maini, sustainability isn't an initiative, it's engineered into everything we do. From optimizing resources to minimizing environmental impact, we are committed to responsible innovation",
    image: "./images/sustainability.jpeg",
    link1: "/jkmptl-sustainability",
    link2: "/jkmgal-sustainability",
    button1Text: "JKMPTL",
    button2Text: "JKMGAL",
    target: "_self"
}, {

    title: "Career",
    description: "Precision is built by people, those who challenge limits, innovate with purpose, and deliver with excellence. Across engineering, design, operations, and beyond, we offer opportunities.",
    image: "./images/career.jpeg",
    link1: "https://auto.jkmaini.com/careers.html",
    link2: "https://aero.jkmaini.com/careers.html",
    button1Text: "Automobile",
    button2Text: "Aerospace",
    target: "_blank"
}]

const ExploreMore = () => {
    return (
        <>
            <div className="how-it-work-gold">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row align-items-stretch g-4">
                        
                        {/* Section Title Column */}
                        <div className="col-lg-4 d-flex flex-column">
                            <div className="d-flex flex-column justify-content-center h-100 pe-lg-4">
                                <div className="section-title mb-3">
                                    <span className="section-sub-title wow fadeInUp">Explore More</span>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Discover how we build a better tomorrow
                                    </h2>
                                    <p className="text-dark">
                                        Through sustainable practices, empowering careers, and innovations that make a difference.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cards Columns */}
                        {boxData.map((dataBox, i) => {
                            return (
                                <div key={i} className="col-lg-4 col-md-6 d-flex flex-column">
                                    {/* How Work Item Start */}
                                    <div className="how-it-work-item-gold wow fadeInUp h-100 d-flex flex-column">
                                        {/* How Work Item Header Start */}
                                        <div className="how-work-item-header-gold">
                                            {/* How Work Item Image Start */}
                                            <div className="how-work-item-image-gold">
                                                <figure className="image-anime">
                                                    <img src={dataBox.image} alt="" />
                                                </figure>
                                            </div>
                                            {/* How Work Item Image End */}
                                        </div>
                                        {/* How Work Item Header End */}
                                        {/* How Work Item Body Start */}
                                        <div className="how-work-item-body-gold d-flex flex-column flex-grow-1">
                                            <h3>{dataBox.title}</h3>
                                            <p>
                                                {dataBox.description}
                                            </p>
                                            <ul className="mt-auto flex-wrap" style={{ gap: "10px" }}>
                                                <a href={dataBox.link1} target={dataBox.target || "_self"} rel={dataBox.target === "_blank" ? "noopener noreferrer" : undefined} style={{ textDecoration: "none" }}>
                                                    <li className="justify-content-between px-3" style={{ padding: "10px 15px", fontSize: "16px", fontWeight: "600", gap: "10px" }}>{dataBox.button1Text || "Explore More"} <FaArrowCircleRight /></li>
                                                </a>
                                                <a href={dataBox.link2} target={dataBox.target || "_self"} rel={dataBox.target === "_blank" ? "noopener noreferrer" : undefined} style={{ textDecoration: "none" }}>
                                                    <li className="justify-content-between px-3" style={{ padding: "10px 15px", fontSize: "16px", fontWeight: "600", gap: "10px" }}>{dataBox.button2Text || "Explore More"} <FaArrowCircleRight /></li>
                                                </a>
                                            </ul>
                                        </div>
                                        {/* How Work Item Body End */}
                                    </div>
                                    {/* How Work Item End */}
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>

        </>
    )
}

export default ExploreMore