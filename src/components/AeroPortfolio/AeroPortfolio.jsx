import React from 'react'
import "../ToolsPortfolio/ToolsPortfolio.css"
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowRight } from "react-icons/fa6";
import SqaureButton from '../SqaureButton/SqaureButton';

const AeroPortfolio = () => {

    const AeroPortfolio = [
        { image: "images/commercial-aircraft.jpg", text: "Commercial Aircraft" },
        { image: "images/business-jets.jpg", text: "Business Jets" },
        { image: "images/defence-aviation.jpg", text: "Defence Aviation" },
        { image: "images/helicopter.jpg", text: "Helicopter Programs" },
    ]





    return (
        <>
            <section className="tools-portfolio py-5">
                <div className="container">
                    <div className="our-industries-content">

                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">
                                Our Portfolio
                            </span> <br />

                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                AEROSPACE PORTFOLIO
                            </h2>

                            <p className='about-raymond mt-3'>
                                JK Maini offers a comprehensive product portfolio that caters to a wide spectrum of manufacturing, construction, automotive, and industrial needs. Our range includes:
                            </p>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="tools-parent">
                        {
                            AeroPortfolio.map((item, index) => {
                                return (
                                <div key={index} className={`tool-box tools-div${index+1}`}>
                                        <img src={item.image} alt="" />
                                        <div className="gradient-overlay"></div>
                                        <div className="tool-overlay">
                                            <div>
                                                <h2>{item.text}</h2>
                                            <div className="title-line"></div>
                                            </div>
                                            <div className='portfolio-bag-btn text-start'>
                                                <SqaureButton
                                                    text={"Explore More"}
                                                    icon={<FaArrowRight />}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default AeroPortfolio