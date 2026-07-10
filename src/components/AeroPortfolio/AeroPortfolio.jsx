import React from 'react'
import "./AeroPortfolio.css"
import { TbPlane, TbPlaneDeparture, TbShieldChevron, TbHelicopter } from "react-icons/tb";

const AeroPortfolio = () => {

    const AeroPortfolioData = [
        { image: "images/aero/commercial-aircraft.png", text: "COMMERCIAL AIRCRAFT", icon: <TbPlane size={30} color="#E81C3D" strokeWidth={1.5}/> },
        { image: "images/aero/business-jets.png", text: "BUSINESS JETS", icon: <TbPlaneDeparture size={30} color="#E81C3D" strokeWidth={1.5}/> },
        { image: "images/aero/defence-aviation.jpeg", text: "DEFENCE AVIATION", icon: <TbShieldChevron size={30} color="#E81C3D" strokeWidth={1.5}/> },
        { image: "images/aero/helicopter.png", text: "HELICOPTER PROGRAMS", icon: <TbHelicopter size={30} color="#E81C3D" strokeWidth={1.5}/> },
    ]

    return (
        <section className="aero-portfolio-section">
            <div className="container aero-custom-container">
                <div className="aero-header-container">
                    <div className="section-title">
                        <span className="section-sub-title wow fadeInUp">Our Portfolio</span>
                        <br />
                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                            AEROSPACE PORTFOLIO
                        </h2>
                        <p className="about-raymond mt-3">
                            JK Maini offers a comprehensive product portfolio that caters to a wide spectrum of manufacturing, construction, automotive, and industrial needs. Our range includes:
                        </p>
                    </div>
                </div>

                <div className="aero-grid-container">
                    <div className="aero-grid">
                        {
                            AeroPortfolioData.map((item, index) => {
                                return (
                                    <div key={index} className="aero-card-new">
                                        <div className="aero-image-wrapper">
                                            <img src={item.image} alt={item.text.replace('\n', ' ')} className="aero-card-img" />
                                        </div>
                                        <div className="aero-card-divider">
                                            <div className="aero-card-dot"></div>
                                        </div>
                                        <div className="aero-card-content-new">
                                            <div className="aero-card-icon">
                                                {item.icon}
                                            </div>
                                            <h3 className="aero-card-title-new">
                                                {item.text}
                                            </h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AeroPortfolio