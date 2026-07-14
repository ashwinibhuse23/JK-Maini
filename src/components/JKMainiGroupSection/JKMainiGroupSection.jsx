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
        <section className="jk-maini-about-section bg-section" ref={sectionRef}>
            <div className="container about-container">
                <div className="row">
                    {/* Left Column for Text */}
                    <div className="col-lg-7 col-md-12 about-left-content">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp text-white border-white" style={{ marginTop: '15px' }}>
                                About JK Maini Group
                            </span> <br />

                            <h2 className="text-anime-style-3 text-white" data-cursor="-opaque" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: '600', lineHeight: '1.3' }}>
                                DELIVERING PRECISION.<br/>
                                POWERING INDUSTRY.<br/>
                                ENABLING PROGRESS.
                            </h2>
                            
                            <p className="wow fadeInUp mt-4 text-white" data-wow-delay="0.2s" style={{ opacity: 0.85, fontSize: '17px', lineHeight: '1.6' }}>
                                JK Maini Precision Technology (JKMPTL) is a new force in precision manufacturing, born from the strategic integration of three industry leaders: Maini Precision Products Ltd., Ring Plus Aqua Ltd., and JK Files Ltd. Together, these businesses bring decades of proven expertise in precision engineering, world-class manufacturing, and global quality standards. This powerful consolidation has created a unified entity with the scale, capabilities, and vision to drive the future of mobility, infrastructure, and industrial advancement. Backed by the strength and legacy of the Raymond Group, JK Maini is positioned to deliver advanced solutions across automotive, industrial, aerospace, and tooling sectors. With cutting-edge infrastructure, future-ready technologies, and a relentless commitment to quality, JK Maini is not just adapting to change, it’s engineering what’s next.
                            </p>
                        </div>
                    </div>

                    {/* Right Column for Diagram */}
                    <div className="col-lg-5 col-md-12 about-right-content">
                        <div className="about-diagram-container" style={{ marginTop: '20px' }}>
                            <div className="diagram-top-row-new">
                                {/* Top Left Node */}
                                <div className="dark-card-node">
                                    <div className="card-logo-container-left dual-logo" style={{ flexDirection: 'column', height: 'auto', border: 'none', background: 'transparent' }}>
                                        <img src="images/journey/logo/jk-superdrive-logo.png" alt="JK SuperDrive Logo" style={{ height: '75px', objectFit: 'contain' }} />
                                        <span style={{ color: '#fff', margin: '10px 0', fontSize: '24px', fontWeight: '500' }}>+</span>
                                        <img src="images/journey/logo/raymond-ring-aqua.png" alt="Ring Plus Aqua Logo" style={{ height: '95px', width: 'auto', objectFit: 'contain', backgroundColor: '#ffffff', padding: '8px 20px', borderRadius: '8px' }} />
                                    </div>
                                </div>

                                <div className="diagram-plus">+</div>

                                {/* Top Right Node */}
                                <div className="dark-card-node">
                                    <div className="card-logo-container-right" style={{ flexDirection: 'column', height: '100%', width: '100%', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                                        <img src="images/journey/logo/mainiprecision.png" alt="JK Maini Precision Products" style={{ height: '110px', width: 'auto', objectFit: 'contain', backgroundColor: '#ffffff', padding: '10px 20px', borderRadius: '8px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <div className="diagram-connector-area-new" style={{ position: 'relative', width: '250px', height: '70px', margin: '0 auto' }}>
                                <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                                    <line x1="0" y1="0" x2="0" y2="15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                                    <line x1="100%" y1="0" x2="100%" y2="15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                                    <line x1="0" y1="15" x2="100%" y2="15" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                                    <line x1="50%" y1="15" x2="50%" y2="70" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                                    
                                    <circle cx="50%" cy="15" r="3" fill="#fff" />
                                    <circle cx="50%" cy="15" r="7" fill="rgba(255,255,255,0.2)" />
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
                                <div className="diagram-node circle-node-dark">
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
                            <p className="wow fadeInUp text-white" style={{ opacity: 0.85, fontSize: '17px', lineHeight: '1.6' }}>A Complete Precision Engineering Partner For The World’s Leading Industries. Three Industry Leaders, Maini Precision Products, Ring Plus Aqua, And JK Files, Now Come Together As JK Maini Precision Technology (JKMPTL) To Form A Unified Powerhouse In Precision Engineering. Backed By The Legacy Of The Raymond Group, We Deliver End-To-End Solutions Across Precision Components, Motion Systems, Powertrain Technologies, Engineering And Industrial Tooling, Serving The World’s Most Demanding Sectors Like Automotive, Off Highway, Industrial, Railways, Power Tools And Other Critical Manufacturing Sectors. With A Complete Ecosystem Of Capabilities, A Future-Focused Vision, And Decades Of Expertise, JK Maini Is Built To Deliver Precision Where It Matters, Driving Performance, Reliability, And Progress At Scale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
