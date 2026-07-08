import React, { useEffect, useRef } from 'react';
import './JKMainiGroupSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JKMainiAboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-left-content', {
                x: -50, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '.jk-maini-about-section', start: 'top 80%' }
            });
            gsap.from('.about-right-content', {
                x: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3,
                scrollTrigger: { trigger: '.jk-maini-about-section', start: 'top 80%' }
            });
            gsap.from('.diagram-node', {
                scale: 0.8, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.5)', delay: 0.6,
                scrollTrigger: { trigger: '.about-diagram-container', start: 'top 80%' }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="jk-maini-about-section" ref={sectionRef}>
            <div className="container about-container">
                <div className="row">
                    {/* Left Column for Text */}
                    <div className="col-lg-7 col-md-12 about-left-content">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp">
                                About JK Maini Group
                            </span> <br />

                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                DELIVERING PRECISION. POWERING INDUSTRY. ENABLING PROGRESS.
                            </h2>
                            <p className="wow fadeInUp about-raymond jk-maini-smaller-text mt-4" data-wow-delay="0.2s">
                                JK Maini Precision Technology (JKMPTL) is a new force in precision manufacturing, born from the strategic integration of three industry leaders: Maini Precision Products Ltd., Ring Plus Aqua Ltd., and JK Files Ltd. Together, these businesses bring decades of proven expertise in precision engineering, world-class manufacturing, and global quality standards. This powerful consolidation has created a unified entity with the scale, capabilities, and vision to drive the future of mobility, infrastructure, and industrial advancement. Backed by the strength and legacy of the Raymond Group, JK Maini is positioned to deliver advanced solutions across automotive, industrial, aerospace, and tooling sectors. With cutting-edge infrastructure, future-ready technologies, and a relentless commitment to quality, JK Maini is not just adapting to change, it’s engineering what’s next.
                            </p>
                        </div>
                    </div>

                    {/* Right Column for Diagram */}
                    <div className="col-lg-5 col-md-12 about-right-content">
                        <div className="about-diagram-container">
                            <div className="diagram-top-row">
                                {/* Top Left Node (Double Images) */}
                                <div className="hex-shadow-wrapper">
                                    <div className="diagram-node hex-node">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative' }}>
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <img src="images/journey/logo/jk-superdrive-logo.png" alt="JK SuperDrive Logo" style={{ width: '90%', maxHeight: '65px', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{ position: 'absolute', left: '55%', top: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: '400', color: '#a0a0a0', lineHeight: '1', zIndex: 2 }}>+</span>
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <img src="images/journey/logo/raymond-ring-aqua.png" alt="Ring Plus Aqua Logo" style={{ width: '90%', maxHeight: '65px', objectFit: 'contain' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="diagram-plus">+</div>

                                {/* Top Right Node */}
                                <div className="hex-shadow-wrapper">
                                    <div className="diagram-node hex-node">
                                        <img src="images/journey/logo/mainiprecision.png" alt="JK Maini Precision Products" style={{ width: '95%', height: '100%', maxHeight: '85px', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <div className="diagram-connector-area">
                                <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, overflow: 'visible' }}>
                                    <line x1="20%" y1="0" x2="50%" y2="100%" stroke="#E81C3D" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="80%" y1="0" x2="50%" y2="100%" stroke="#E81C3D" strokeWidth="1" strokeDasharray="4 4" />

                                    <circle cx="20%" cy="0" r="5" fill="#E81C3D" stroke="#fbfbfb" strokeWidth="3" />
                                    <circle cx="80%" cy="0" r="5" fill="#E81C3D" stroke="#fbfbfb" strokeWidth="3" />
                                    <circle cx="50%" cy="100%" r="5" fill="#E81C3D" stroke="#fbfbfb" strokeWidth="3" />
                                </svg>
                            </div>

                            <div className="diagram-bottom-row">
                                <div className="ripple-container">
                                    <div className="ripple r1"></div>
                                    <div className="ripple r2"></div>
                                    <div className="ripple r3"></div>
                                    <div className="ripple r4"></div>
                                    <div className="node-glow"></div>
                                </div>
                                {/* Bottom Center Node */}
                                <div className="diagram-node circle-node">
                                    <img src="images/journey/logo/Artboard 15.svg" alt="JK Maini Logo" onError={(e) => { e.target.style.display = 'none'; }} />
                                    <h3>JK MAINI</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '0px' }}>
                    <div className="col-lg-12">
                        <div className="diagram-bottom-text section-title wow fadeInUp" data-wow-delay="0.4s">
                            <p className="wow fadeInUp about-raymond jk-maini-smaller-text">A Complete Precision Engineering Partner For The World’s Leading Industries. Three Industry Leaders, Maini Precision Products, Ring Plus Aqua, And JK Files, Now Come Together As JK Maini Precision Technology (JKMPTL) To Form A Unified Powerhouse In Precision Engineering. Backed By The Legacy Of The Raymond Group, We Deliver End-To-End Solutions Across Precision Components, Motion Systems, Powertrain Technologies, Engineering And Industrial Tooling, Serving The World’s Most Demanding Sectors Like Automotive, Off Highway, Industrial, Railways, Power Tools And Other Critical Manufacturing Sectors. With A Complete Ecosystem Of Capabilities, A Future-Focused Vision, And Decades Of Expertise, JK Maini Is Built To Deliver Precision Where It Matters, Driving Performance, Reliability, And Progress At Scale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
