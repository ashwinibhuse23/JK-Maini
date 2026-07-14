import React from 'react'
import "./JKMPTLSusAbout.css"
import { TbLeaf, TbDroplet, TbRecycle, TbUsers } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const JKMPTLSusAbout = () => {
    return (
        <section className="sustain-about-section">
            <div className="sustain-bg-overlay"></div>
            
            <div className="container position-relative sustain-content-container">
                <div className="row align-items-end">
                    
                    <div className="col-lg-7 col-md-12 mb-5 mb-lg-0 ms-lg-4">
                        <div className="sustain-left-content section-title">
                            <span className="section-sub-title wow fadeInUp">
                                Sustainability Goals
                            </span> <br />
                            
                            <h2 className="sustain-title text-anime-style-3" data-cursor="-opaque">
                                OUR COMMITMENT <br/>
                                TO SUSTAINABILITY
                            </h2>
                            
                            <p className="sustain-desc wow fadeInUp mt-3" data-wow-delay="0.2s">
                               We are dedicated to building a future where business growth goes hand in hand with environmental stewardship and social responsibility. Our sustainability goals focus on reducing our carbon footprint, conserving water and energy, minimizing waste, and fostering a safe and inclusive workplace.
                            </p>
                            
                            <p className="sustain-desc wow fadeInUp mt-3" data-wow-delay="0.3s">
                                By embracing innovative technologies and responsible sourcing, we strive to create lasting value for our communities and the planet. Our journey is guided by transparency, accountability, and a passion for making a positive impact, today and for generations to come.
                            </p>
                        </div>
                    </div>
                    
                   
                    
                </div>
            </div>
        </section>
    )
}

export default JKMPTLSusAbout
