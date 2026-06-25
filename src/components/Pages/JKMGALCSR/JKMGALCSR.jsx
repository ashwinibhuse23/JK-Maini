import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import Background from "/images/jkmgal/CSR/csr2.jpg"
import './JKMGALCSR.css'

/* ── Page ──────────────────────────────────────────────── */
const JKMGALCSR = () => {
    return (
        <>
            {/* ── Page Header ───────────────────────────────── */}
            <PageHeader
                title="Empowering People, Enabling Progress"
                desc="Our CSR initiatives focus on uplifting communities, advancing education, and fostering inclusive
                  growth while staying grounded in our values of integrity and excellence."
                bgImg={Background}
            />

            {/* ── Our Way of Giving Back Section ────────────── */}
            <section className="csr-intro-section">
                <div className="csr-intro-inner">

                    {/* ── LEFT: Tag + Heading + Dots ── */}
                    <div className="csr-intro-left wow fadeInLeft" data-wow-delay="0.1s" data-wow-duration="1.2s">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="1s">CSR &amp; IMPACT</span>
                        </div>
                        <h2 className="csr-heading wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="1.2s">Our Way of<br />Giving Back</h2>
                        <div className="csr-dots wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                            <span className="csr-dot"></span>
                            <span className="csr-dot"></span>
                            <span className="csr-dot"></span>
                        </div>
                    </div>

                    {/* ── MIDDLE: Two info items ── */}
                    <div className="csr-intro-middle">
                        {/* Item 1 */}
                        <div className="csr-item-wrapper wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                            <div className="csr-item">
                                <div className="csr-item-icon-wrap">
                                    {/* Globe — community impact icon */}
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M2 12h20"/>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    </svg>
                                </div>
                                <p className="about-raymond wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.2s">
                                    At JK Maini Global Aerospace Ltd. (JKMGAL), engineering
                                    excellence is matched by our commitment to community
                                    transformation. Through our CSR efforts, we aim to uplift lives,
                                    empower women, support rural development, and create
                                    sustainable change at the grassroots.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="csr-item-wrapper wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1.2s">
                            <div className="csr-item">
                                <div className="csr-item-icon-wrap">
                                    {/* Seedling — sustainable growth icon */}
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 22V11"/>
                                        <path d="M12 11C12 11 7.5 9.5 5 5c4.5 0 7 3 7 6z"/>
                                        <path d="M12 11c0 0 4.5-1.5 7-5.5-4.5 0-7 2.5-7 5.5z"/>
                                        <path d="M5 3c0 3.5 2 6.5 7 8"/>
                                    </svg>
                                </div>
                                <p className="about-raymond wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.2s">
                                    Driven by the Sandeep &amp; Gitanjali Maini Foundation and the
                                    Gramothan Foundation, our initiatives reflect our belief that
                                    true progress is inclusive and shared.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Leaf / plant decoration ── */}
                    <div className="csr-intro-right wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1.4s">
                        
                        <div className="csr-dot-pattern" aria-hidden="true"></div>
                    </div>
                </div>

                {/* ── LOGOS STRIP ── */}
                <div className="csr-logos-strip">
                    <div className="csr-logo-item wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/manisamj.png"
                            alt="Maini Samaj Kalyan Kendra"
                        />
                    </div>
                    <div className="csr-logo-item csr-logo-item--sgmf wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/sandeep&gitanjali.png"
                            alt="Sandeep & Gitanjali Maini Foundation"
                        />
                    </div>
                    <div className="csr-logo-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/gramothan-foundation.png"
                            alt="Gramothan Foundation"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default JKMGALCSR
