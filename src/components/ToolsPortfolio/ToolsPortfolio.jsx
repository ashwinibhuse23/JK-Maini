import React from 'react'
import "./ToolsPortfolio.css"
import ButtonOne from '../ButtonOne/ButtonOne';

const ToolsPortfolio = () => {

    const toolsPortfolio = [
        {
            image: "images/tools/files.png",
            text: "FILES",

        },
        {
            image: "images/tools/cutting-tools.png",
            text: "CUTTING TOOLS"
        },
        {
            image: "images/tools/hand-tools.png",
            text: "HAND TOOLS"
        },
        {
            image: "images/tools/power-tools.png",
            text: "POWER TOOLS"
        },
        {
            image: "images/tools/power-tools-accessories.png",
            text: "POWER TOOLS ACCESSORIES"
        },
    ]

    const ArrowIcon = () => (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
    )

    return (
        <section className="tools-portfolio">
            <div className="container tp-custom-container">
                <div className="tp-header-container">
                    <div className="tp-header-left">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">OUR PORTFOLIO</span>
                            <p className="about-raymond mt-3 text-capitalize">
                                We offer a comprehensive product portfolio that caters to a wide spectrum of manufacturing, construction, automotive, and industrial needs. Our range includes:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tp-grid-container">
                    <div className="tp-grid">
                        {
                            toolsPortfolio.map((item, index) => {
                                return (
                                    <div key={index} className="tp-card">
                                        <div className="tp-card-image-box">
                                            <div className="tp-card-image-wrapper">
                                                <img src={item.image} alt={item.text} className="tp-card-image" />
                                            </div>
                                        </div>
                                        <div className="tp-card-content">
                                            <h3 className="tp-card-title">{item.text}</h3>
                                            <ButtonOne text="Explore More" icon={<ArrowIcon />} iconPosition="left" withIconBg={true} className="tp-card-small-btn" />
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

export default ToolsPortfolio