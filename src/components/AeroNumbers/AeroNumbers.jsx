import React from 'react'
import '../NumbersSection/NumbersSection.css'
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const AeroNumbers = () => {

    const Numbers = [
        { icon: <AiFillProduct />, count: "90%", countDesc: "EXPORT DRIVEN BUSINESS" },
        { icon: <IoSettingsSharp />, count: "25+", countDesc: "CUSTOMERS" },
        { icon: <FaIndustry />, count: "2", countDesc: "DECADES OF EXPERIENCE" },
        { icon: <BiWorld />, count: "1200+", countDesc: "SKU'S" },
    ]


    return (
        <>
            <section className="numbers-section">
                <div className="container">
                    <div className="our-industries-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">
                                Our Impact
                            </span> <br />

                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                A Legacy of Excellence, A Future of Innovation
                            </h2>
                        </div>

                    </div>

                    <div className="number-boxes parent">

                        {
                            Numbers.map((number, index) => {
                                return (
                                    <>
                                        <div key={index} className={`number-box d-flex align-items-center div-${index}`}>
                                            <div className="number-box-content d-flex gap-2">
                                                <div className="box-icon">
                                                    {number.icon}
                                                </div>
                                                <div>

                                                    <h2 className='count'>{number.count}</h2>
                                                    <p className='count-desc'>{number.countDesc}</p>

                                                </div>
                                            </div>


                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default AeroNumbers