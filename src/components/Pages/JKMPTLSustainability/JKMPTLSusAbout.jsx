import React from 'react'
import "./JKMPTLSusAbout.css"
import { TbLeaf } from "react-icons/tb";

const JKMPTLSusAbout = () => {
    return (
        <section className="sustain-about-section">
            <div className="container">
                <div className="sustain-chevron-container">
                    
                    <div className="sustain-left-content">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">
                                Sustainability Goals
                            </span> <br />
                            
                            <h2 className="sustain-title text-anime-style-3" data-cursor="-opaque">
                                OUR COMMITMENT TO<br/>
                                SUSTAINABILITY
                            </h2>
                            
                            <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                               We are dedicated to building a future where business growth goes hand in hand with environmental stewardship and social responsibility. Our sustainability goals focus on reducing our carbon footprint, conserving water and energy, minimizing waste, and fostering a safe and inclusive workplace.
                            </p>

                            <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.3s">
                                By embracing innovative technologies and responsible sourcing, we strive to create lasting value for our communities and the planet. Our journey is guided by transparency, accountability, and a passion for making a positive impact, today and for generations to come.
                            </p>
                        </div>

                    </div>

                    <div className="sustain-right-image-wrapper">
                        <div className="sustain-right-image-inner">
                            <img src="images/automotive-about-2.jpeg" alt="Sustainability Manufacturing" className="sustain-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JKMPTLSusAbout