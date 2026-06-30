import React, { useState } from 'react'
import './AcheivementSection.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import GetInTouchModal from '../GetInTouchModal/GetInTouchModal'

const certs = [
    { src: 'images/new-certs/AS9100D.png', label: 'AS9100D' },
    { src: 'images/new-certs/IATF-2016.png', label: 'IATF 16949:2016' },
    { src: 'images/new-certs/ISO-14001.png', label: 'ISO 14001' },
    { src: 'images/new-certs/ISO-45001.png', label: 'ISO 45001' },
    { src: 'images/new-certs/Nadcap.png', label: 'Nadcap' },

]

const AcheivementSection = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            {/* ── Achievements ─────────────────────────────────────── */}
            <div className="our-achievement-prime">
                <div className="container">
                    <div className="row align-items-start">
                        {/* ── Left: sticky heading block ── */}
                        <div className="col-xl-5 col-lg-5">
                            <div className="achievement-content-prime">
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        Our Journey
                                    </span>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        FROM HUMBLE ORIGINS TO
                                        GLOBAL PRE-EMINENCE

                                    </h2>
                                    <p className="wow fadeInUp text-dark mt-2" data-wow-delay="0.2s">
                                        Today, JK Maini Group Is A Diversified Engineering Conglomerate Serving Some Of The World's Most Demanding Industries.
                                    </p>
                                    <p className="wow fadeInUp text-dark" data-wow-delay="0.3s">
                                        A Legacy Defined By Foresight, Industrial Ingenuity, And An Unwavering Commitment To Enduring Value.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: vertical timeline ── */}
                        <div className="col-xl-7 col-lg-7 scroll-overflow">
                            <div className="achievement-timeline" data-lenis-prevent>

                                {/* vertical center line */}
                                <div className="tl-line" aria-hidden="true" />

                                {/* ── Item: 2025 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2025</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/Artboard 15.svg" alt="Formation of JK Maini" className="tl-card-logo" />
                                            <h3 className="tl-title">Formation of JK Maini</h3>
                                            <p className="tl-desc">Entity Setup &amp; New Plant Inauguration at Sinnar Nashik, Maharashtra.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 2024 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2024</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/raymond-logo.svg" alt="Raymond Acquired MPP" className="tl-card-logo" />
                                            <h3 className="tl-title">Raymond Aquired MPP</h3>
                                            <p className="tl-desc">Raymond Group acquired 59.25% of MPP.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 2021 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2021</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/jk-superdrive-logo.png" alt="JK Files Renamed" className="tl-card-logo" />
                                            <h3 className="tl-title">JK Files Renamed</h3>
                                            <p className="tl-desc">Change of name from JK files to JK files and Engg.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 2012 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2012</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/icon-achievement-4-prime.svg" alt="New Plant Set Up in Gujarat" className="tl-card-logo" />
                                            <h3 className="tl-title">New Plant Set Up in Gujarat</h3>
                                            <p className="tl-desc">Established a new manufacturing facility in Vapi, Gujarat, India.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 2009 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2009</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/icon-achievement-1-prime.svg" alt="Design &amp; Engineering" className="tl-card-logo" />
                                            <h3 className="tl-title">Developed Design &amp; Engineering Capabilities</h3>
                                            <p className="tl-desc">Established strong capabilities in Design and Engineering to deliver customized, efficient, and technically robust solutions.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 2005 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">2005</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/raymond-ring-aqua.png" alt="Raymond Acquired Ring Plus Aqua" className="tl-card-logo" />
                                            <h3 className="tl-title">Raymond Acquired Ring Plus Aqua</h3>
                                            <p className="tl-desc">Raymond Group strategically acquired Ring Plus Aqua to strengthen its presence in the automotive components and engineering space.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 1994 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">1994</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/gm-logo.png" alt="Supply GM International" className="tl-card-logo" />
                                            <h3 className="tl-title">First Company to Supply GM International</h3>
                                            <p className="tl-desc">First Indian manufacturer to supply high-quality automotive components to General Motors, USA.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 1984 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">1984</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/bosch-logo.png" alt="Supply to Bosch Germany" className="tl-card-logo" />
                                            <h3 className="tl-title">First Company to Supply to Bosch Germany</h3>
                                            <p className="tl-desc">First Indian company to supply precision-engineered components to Bosch, Germany.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 1977 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">1977</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/icon-achievement-4-prime.svg" alt="Production Commenced" className="tl-card-logo" />
                                            <h3 className="tl-title">Production Commenced for Files</h3>
                                            <p className="tl-desc">Commenced production of files under the name Hindustan Files Limited, which remained until 2009.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 1973 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">1973</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/jk-precision-products.png" alt="MPP Incorporated" className="tl-card-logo" />
                                            <h3 className="tl-title">MPP Incorporated</h3>
                                            <p className="tl-desc">Maini Precision Products (MPP) was incorporated as a specialized engineering and manufacturing company.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Item: 1965 ── */}
                                <div className="tl-item">
                                    <div className="tl-icon-col">
                                        <div className="tl-icon-circle">
                                            <span className="tl-year-badge">1965</span>
                                        </div>
                                    </div>
                                    <div className="tl-dot-col">
                                        <span className="tl-dot" />
                                    </div>
                                    <div className="tl-content-col">
                                        <div className="tl-card">
                                            <img src="images/jk-files-old-logo.png" alt="JK Files Incorporated" className="tl-card-logo" />
                                            <h3 className="tl-title">JK Files Incorporated</h3>
                                            <p className="tl-desc">JK Files was incorporated as a specialized manufacturer of precision files and cutting tools.</p>
                                        </div>
                                    </div>
                                </div>



                            </div>{/* /.achievement-timeline */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Certifications & Accreditations ─────────────────── */}
            <section className="certifications-section">
                {/* Decorative top edge */}
                <div className="certifications-top-edge" aria-hidden="true" />

                <div className="container">
                    {/* Header */}
                    <div className="certifications-header wow fadeInUp">

                        <h2 className="certifications-title">
                            Certifications &amp; Accreditations
                        </h2>

                        <div className="certifications-divider">
                            <span className="cert-divider-line" />
                            <span className="cert-divider-diamond" />
                            <span className="cert-divider-line" />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="certifications-grid">
                        {certs.map((cert, i) => (
                            <div
                                key={cert.label}
                                className="cert-card-2 wow fadeInUp"
                                data-wow-delay={`${i * 0.1}s`}
                            >
                                <div className="cert-card-2-glow" aria-hidden="true" />
                                <div className="cert-card-2-inner">
                                    <div className="cert-img-wrap">
                                        <img src={cert.src} alt={cert.label} />
                                    </div>
                                    <span className="cert-label">{cert.label}</span>
                                </div>
                                <div className="cert-card-2-border-shine" aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative line */}
                <div className="certifications-bottom-accent" aria-hidden="true" />
            </section>
            {/* ── CTA Section ─────────────────────────────────────── */}
            <section className="cta-banner-section">
                {/* Background decorative elements */}
                <div className="cta-bg-orb cta-bg-orb--left" aria-hidden="true" />
                <div className="cta-bg-orb cta-bg-orb--right" aria-hidden="true" />
                <div className="cta-bg-grid" aria-hidden="true" />

                <div className="container">
                    <div className="cta-banner-inner wow fadeInUp">
                        {/* Left: text content */}
                        <div className="cta-text-col">
                            <div className="section-title cta-section-title">
                                <span className="section-sub-title wow fadeInUp">Get in Touch</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Ready to Turn Your Manufacturing<br /> Vision Into Reality?
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Whether you're looking for custom-engineered solutions or want to explore
                                    how our capabilities align with your needs, we're here to help.
                                </p>
                            </div>
                        </div>

                        {/* Right: button */}
                        <div className="cta-btn-col">
                            <button
                                className="btn-default cta-modal-trigger"
                                onClick={() => setModalOpen(true)}
                                aria-label="Open Get in Touch form"
                            >
                                <ButtonOne text="Get Started" icon={<FaRegArrowAltCircleRight />} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Get In Touch Modal ── */}
            <GetInTouchModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Get in Touch"
            />
        </>
    )
}

export default AcheivementSection