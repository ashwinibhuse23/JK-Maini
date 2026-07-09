import React from 'react'
import "./AeroPortfolio.css"

const AeroPortfolio = () => {

    const AeroPortfolio = [
        { image: "images/aero/commercial-aircraft.png", text: "Commercial Aircraft" },
        { image: "images/aero/business-jets.png", text: "Business Jets" },
        { image: "images/aero/defence-aviation.png", text: "Defence Aviation" },
        { image: "images/aero/helicopter.png", text: "Helicopter Programs" },
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
                            AeroPortfolio.map((item, index) => {
                                return (
                                    <div key={index} className="aero-card">
                                        <img src={item.image} alt={item.text} className="aero-card-image" />
                                        <div className="aero-card-overlay"></div>
                                        <div className="aero-card-content">
                                            <h3 className="aero-card-title">{item.text}</h3>
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