import React from 'react'
import './NumbersSection.css'
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const NumbersSection = () => {

    const Numbers = [
        { icon: <AiFillProduct />, count: "2000+", countDesc: "PRODUCT SKUs" },
        { icon: <IoSettingsSharp />, count: "10 Mn+", countDesc: "RING GEAR" },
        { icon: <FaIndustry />, count: "13", countDesc: "PLANTS" },
        { icon: <MdWarehouse />, count: "14", countDesc: "WAREHOUSES" },
        { icon: <BsPeopleFill />, count: "100+", countDesc: "CUSTOMERS" },
        { icon: <BiWorld />, count: "18+", countDesc: "COUNTRIES" },
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

export default NumbersSection