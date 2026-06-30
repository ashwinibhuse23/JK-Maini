import React from 'react'
import './ExploreMore.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from "react-icons/fa";


const boxData = [{
   
    title: "Sustainability",
    description: "At JK Maini, sustainability isn't an initiative, it's engineered into everything we do. From optimizing resources to minimizing environmental impact, we are committed to responsible innovation",
    image: "./images/sustainability.jpg",
    link: "/sustainability"
}, {
   
    title: "Career",
    description: "Precision is built by people, those who challenge limits, innovate with purpose, and deliver with excellence. Across engineering, design, operations, and beyond, we offer opportunities.",
    image: "./images/career.jpg",
    link: "/career"
}, {
    
    title: "Innovation",
    description: "Precision is built by people, those who challenge limits, innovate with purpose, and deliver with excellence. Across engineering, design, operations, and beyond, we offer opportunities.",
    image: "./images/innovation.jpg",
    link: "/innovation"
}]

const ExploreMore = () => {
    return (
        <>
            <div className="how-it-work-gold">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">Explore More</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Discover how we build a better tomorrow
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                        
                    </div>
                    <div className="row">

                        {boxData.map((dataBox, i) => {
                            return (
                                <div key={i} className="col-xl-4 col-md-6">
                                    {/* How Work Item Start */}
                                    <div className="how-it-work-item-gold wow fadeInUp">
                                        {/* How Work Item Header Start */}
                                        <div className="how-work-item-header-gold">
                                            {/* How Work Item Image Start */}
                                            <div className="how-work-item-image-gold">
                                                <figure className="image-anime">
                                                    <img src={dataBox.image} alt="" />
                                                </figure>
                                            </div>
                                            {/* How Work Item Image End */}
                                            {/* How Work Item Number Start */}
                                           
                                            {/* How Work Item Number End */}
                                        </div>
                                        {/* How Work Item Header End */}
                                        {/* How Work Item Body Start */}
                                        <div className="how-work-item-body-gold">
                                            <h3>{dataBox.title}</h3>
                                            <p>
                                                {dataBox.description}
                                            </p>
                                            <ul>
                                                <a href={dataBox.link} style={{textDecoration:"none"}}><li className='px-4 py-2'>Explore More <FaArrowCircleRight /></li></a>
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