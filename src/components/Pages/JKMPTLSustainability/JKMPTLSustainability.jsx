import React, { useState } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from "/images/sustainability-bg.png"
import JKMPTLSusAbout from './JKMPTLSusAbout'
import SustainabilityCards from '../../SustainabilityCards/SustainabilityCards'
import Certifications from '../../Certifications/Certifications'
import ReportsData from '../../ReportsData/ReportsData'
import GetInTouchModal from '../../GetInTouchModal/GetInTouchModal'
import ButtonOne from '../../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from 'react-icons/fa'
import './JKMPTLSustainability.css'

const JKMPTLSustainability = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <>
                {/* ── Get in Touch Modal ─────────────────────── */}
                <GetInTouchModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Partner With Us"
                />

                <PageHeader
                    title="Environmental, Social & Governance(ESG)"
                    desc="Precision with purpose. Engineering a sustainable future."
                    bgImg={banner}
                />

                <JKMPTLSusAbout />

                <SustainabilityCards
                    sectionTitle="Environmental Stewardship"
                    sectionDesc="We are committed to reducing our environmental footprint through resource efficiency and sustainable operations."
                    icons={{ icon1: "./images/water-recycle.svg", icon2: "./images/solar-panel.svg", icon3: "./images/rainwater-harvesting.svg", icon4: "./images/LED.svg", icon5: "./images/air-pollution-control.svg", icon6: "./images/chemical-disposal.svg" }}
                    iconTitles={{ title1: "100% RO-treated water recycling", title2: "Installation of solar panels", title3: "Rainwater harvesting system", title4: "High-efficiency LED lighting across facilities", title5: "Air pollution control with scrubbers and blowers", title6: "Responsible chemical disposal systems" }}
                    bg={true}
                    impactIcons={{ impIcon1: "./images/water-recycle.svg", impIcon2: "./images/solar-panel.svg", impIcon3: "./images/rainwater-harvesting.svg" }}
                    impactTitles={{ impTitle1: "Reduced Water Waste", impTitle2: "Lower Carbon Footprint", impTitle3: "Improved Energy Efficiency" }}
                />

                <SustainabilityCards
                    sectionTitle="Governance & Ethics"
                    sectionDesc="Integrity, compliance, and transparency are central to our operations."
                    icons={{ icon1: "./images/vendor.svg", icon2: "./images/compliance.svg", icon3: "./images/employeetraning.svg", icon4: "./images/workplacesaftey.svg", icon5: "./images/data.svg" }}
                    iconTitles={{ title1: "Ethical procurement and vendor management", title2: "Strong compliance with Industry standards", title3: "Employee training and development programs", title4: "Workplace safety and quality focus", title5: "Data integrity and responsible business practices" }}
                    bg={false}
                    impactIcons={{ impIcon1: "./images/trustworthiness.svg", impIcon2: "./images/compliance.svg", impIcon3: "./images/accountability.svg" }}
                    impactTitles={{ impTitle1: "Trusted partnerships", impTitle2: "Consistent Quality", impTitle3: "Culture Of Accountability" }}
                />

                <Certifications bg={true} />
                <ReportsData bg={false} />

                {/* ── Partner With Us CTA Banner ─────────────── */}
                <section className="sus-partner-cta">
                    <div className="container">
                        <div className="sus-partner-inner">
                            <div className="sus-partner-text">
                                <span className="section-sub-title">Collaborate With Us</span>
                                <h2>Together, We Build a Greener Tomorrow!</h2>
                                <p>
                                    Empowering people, protecting the planet, and strengthening
                                    communities through focused sustainability partnerships.
                                </p>
                            </div>
                            <div className="sus-partner-btn">
                                <button
                                    className="sus-partner-trigger"
                                    onClick={() => setModalOpen(true)}
                                    aria-label="Open Partner With Us form"
                                >
                                    <span className="sus-btn-circle">
                                        <FaArrowCircleRight />
                                    </span>
                                    Partner With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default JKMPTLSustainability