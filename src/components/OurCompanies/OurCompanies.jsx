import React, { useState } from 'react'
import './OurCompanies.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from "react-icons/fa";

const jkmptlDesc = `JKMPTL has been at the forefront of precision engineering, enabling how the world moves
and builds across industries. From high-performance automotive components to complex solutions
for industrial, defence, and general engineering applications  our expertise drives progress
where reliability and performance are non-negotiable. Trusted by global leaders. Chosen for
precision. Built to deliver. Our solutions power critical systems across some of the world's
most demanding sectors, supporting everything from traditional mobility platforms to the
evolving needs of manufacturing, infrastructure, and defence. With advanced facilities, robust
processes, and an unwavering commitment to quality, we deliver precision at scale, with
consistency our customers rely on.`

const jkmgalDesc = `JKMGAL specialises in delivering high-precision components, complex assemblies, and
mission-critical systems for the global aerospace and defence industries — from commercial
aviation to defence platforms operating in the most challenging environments. With advanced
infrastructure, globally certified processes, and deep technical expertise, we enable
performance, safety, and reliability at scale. We are trusted by OEMs, Tier 1s, and defence
organisations worldwide for our unwavering focus on precision, consistency, and quality.
From complex geometries to tight tolerances and advanced materials, we deliver with excellence,
with precision, without compromise.`

const ExpandableDesc = ({ text }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <p
            className={`wow fadeInUp company-desc${expanded ? ' expanded' : ''}`}
            data-wow-delay="0.2s"
            onClick={() => setExpanded(prev => !prev)}
            title={expanded ? 'Click to collapse' : 'Click to read more'}
        >
            {text}
        </p>
    )
}

const OurCompanies = () => {
    return (
        <>
            <div className="intro-video-box-gold bg-section mb-4 mb-lg-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row align-items-stretch g-4">

                        {/* ── Left: Section Intro ── */}
                        <div className="col-lg-4 d-flex flex-column">
                            <div className="company-intro-col h-100">
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp text-white border-white">
                                        Our Companies
                                    </span>
                                    <h2 className="text-anime-style-3 mb-3 text-white text-effect" data-cursor="-opaque">
                                        Powering How the World Moves, Flies, and Builds.
                                    </h2>
                                </div>
                                <p className="company-intro-desc">
                                    Engineering what's next. Advanced solutions for mobility & aerospace industry.
                                    Built on innovation. Proven in performance. Trusted by global leaders.
                                </p>
                            </div>
                        </div>

                        {/* ── JKMPTL Card ── */}
                        <div className="col-lg-4 d-flex flex-column">
                            <div className="intro-video-content-gold h-100">
                                <div className="intro-video-content-header-gold d-flex flex-column flex-grow-1">
                                    <div className="section-title mb-0">
                                        <span className="section-sub-title wow fadeInUp text-white border-white">
                                            JKMPTL
                                        </span>
                                        <div className="mb-3 company-logo">
                                            <img src="./images/JKMPTL.png" alt="JKMPTL" />
                                        </div>
                                       
                                        <ExpandableDesc text={jkmptlDesc} />
                                    </div>
                                </div>
                                <div className="company-btn-wrap mt-auto">
                                    <ButtonOne text="Read More" icon={<FaArrowCircleRight />} link="/automotive" />
                                </div>
                            </div>
                        </div>

                        {/* ── JKMGAL Card ── */}
                        <div className="col-lg-4 d-flex flex-column">
                            <div className="intro-video-content-gold h-100">
                                <div className="intro-video-content-header-gold d-flex flex-column flex-grow-1">
                                    <div className="section-title mb-0">
                                        <span className="section-sub-title wow fadeInUp text-white border-white">
                                            JKMGAL
                                        </span>
                                        <div className="mb-3 company-logo">
                                            <img src="./images/JKMGAL.png" alt="JKMGAL" />
                                        </div>
                                       
                                        <ExpandableDesc text={jkmgalDesc} />
                                    </div>
                                </div>
                                <div className="company-btn-wrap mt-auto">
                                    <ButtonOne text="Read More" icon={<FaArrowCircleRight />} link="/aerospace" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCompanies