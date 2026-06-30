import React, { useState } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from "/images/csrback2.jpg"
import './JKMPTLCSR.css'
import { FaUsers, FaHandshake, FaGlobeAsia, FaCog, FaSeedling, FaTree } from 'react-icons/fa'
import GetInTouchModal from '../../GetInTouchModal/GetInTouchModal'

/* ── Foundation data ─────────────────────────────────────── */
const foundations = [
    {
        img: './images/CSR/Maini-samaj.png',
        name: 'Maini Samaj Kalyan Kendra',

        iconColor: '#ed193a',
        icon: <FaUsers />,
        imgStyle: { transform: 'scale(1.4)' },
    },
    {
        img: './images/CSR/sandeep&gitanjali.png',
        name: 'Sandeep & Gitanjali Maini Foundation',

        iconColor: '#ed193a',
        icon: <FaHandshake />,
        imgStyle: { transform: 'scale(1.8)' },
    },
    {
        img: './images/CSR/gramothan-foundation.png',
        name: 'Gramothan Foundation',

        iconColor: '#ed193a',
        icon: <FaGlobeAsia />,
        imgStyle: { transform: 'scale(1.4)' },
    },
    {
        img: './images/CSR/Rottery-clu.png',
        name: 'Rotary Club of Nasik',

        iconColor: '#ed193a',
        icon: <FaCog />,
        imgStyle: { transform: 'scale(1.6)' },
    },
    {
        img: './images/CSR/amar-seva-sangam.png',
        name: 'Amar Seva Sangam',

        iconColor: '#ed193a',
        icon: <FaSeedling />,
        imgStyle: { transform: 'scale(1.7)' },
    },
    {
        img: './images/CSR/vanaprasta-foundation.jpg',
        name: 'Vanaprastha Foundation',

        iconColor: '#ed193a',
        icon: <FaTree />,
    },
]

/* ── Page ─────────────────────────────────────────────────── */
const JKMPTLCSR = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="csr-page">
            <>

                {/* ── Get in Touch Modal ───────────────────────── */}
                <GetInTouchModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Get in Touch"
                />
                <PageHeader
                    title="Corporate Social Responsibility"
                    desc="Corporate Social Responsibility is about integrating ethical, social, and environmental considerations into business operations going beyond profit-making to positively impact employees, communities, and the environment."
                    bgImg={banner}
                />

                {/* ── Our Foundations Section ──────────────────── */}
                <section className="fdn-section">
                    <div className="container">

                        {/* Section Header */}
                        <div className="fdn-header">
                            <div className="section-title text-center">
                                <span className="section-sub-title wow fadeInUp" data-wow-delay="0.1s">
                                    Our Foundations
                                </span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ marginTop: '10px' }}>
                                    Working Together <br /> for a Better Tomorrow
                                </h2>
                            </div>
                        </div>

                        {/* Foundation Cards Grid */}
                        <div className="fdn-grid">
                            {foundations.map((f, i) => (
                                <div key={i} className="fdn-card">
                                    {/* Badge icon */}
                                    <div
                                        className="fdn-card-badge"
                                        style={{ background: f.iconColor }}
                                    >
                                        <span className="fdn-badge-icon" style={{ color: '#ffffff' }}>
                                            {f.icon}
                                        </span>
                                    </div>

                                    {/* Logo */}
                                    <div className="fdn-logo-wrap">
                                        <img
                                            src={f.img}
                                            alt={f.name}
                                            className="fdn-logo-img"
                                            style={f.imgStyle || {}}
                                        />
                                    </div>

                                    {/* Text */}
                                    <h4 className="fdn-card-name">{f.name}</h4>
                                    <p className="fdn-card-tagline">{f.tagline}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ════════════════════════════════════════════════
                    Rural Development & Wellness Section
                ════════════════════════════════════════════════ */}
                <section className="rdw-wrap">
                    <div className="rdw-card">

                        {/* ── LEFT PANEL ────────────────────────────── */}
                        <div className="rdw-left">


                            <div className="section-title" style={{ marginBottom: '10px' }}>
                                <span className="section-sub-title">Giving Back to the Society</span>
                            </div>
                            <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ marginTop: '6px', marginBottom: '12px' }}>Rural Development<br />&amp; Environment</h2>
                            <div className="rdw-red-bar"></div>

                            <ul className="rdw-list">

                                {/* Item 01 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">01</span>
                                    <div className="rdw-item-text">
                                        <strong>Afforestation</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22V12" /><path d="M12 12C12 7 7 3 3 5c0 4 3 7 9 7z" /><path d="M12 12c0-5 5-9 9-7 0 4-3 7-9 7z" />
                                        </svg>
                                    </div>
                                </li>

                                {/* Item 02 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">02</span>
                                    <div className="rdw-item-text">
                                        <strong>Rehabilitation &amp;<br />Sheltercare</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                                            <path d="M9 21V12h6v9" />
                                            <path d="M12 7a1 1 0 100 2 1 1 0 000-2z" fill="#ffffff" stroke="none" />
                                        </svg>
                                    </div>
                                </li>

                                {/* Item 03 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">03</span>
                                    <div className="rdw-item-text">
                                        <strong>Swachh Bharat Mission</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8 3l-4 8h6l-1 10 9-12h-6z" />
                                        </svg>
                                    </div>
                                </li>

                                {/* Item 04 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">04</span>
                                    <div className="rdw-item-text">
                                        <strong>Solarization</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="8" rx="1" />
                                            <path d="M7 11V8M12 11V8M17 11V8" />
                                            <path d="M5 8h14" />
                                            <path d="M12 19v2M8 21h8" />
                                            <circle cx="5" cy="5" r="1" fill="#ffffff" stroke="none" />
                                            <circle cx="12" cy="4" r="1" fill="#ffffff" stroke="none" />
                                            <circle cx="19" cy="5" r="1" fill="#ffffff" stroke="none" />
                                        </svg>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        {/* ── CENTER MEDALLION ──────────────────────── */}
                        <div className="rdw-center">
                            <div className="rdw-medallion">
                                <div className="rdw-ring"></div>
                                <div className="rdw-circle">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="rdw-cir-icon">
                                        {/* Sun */}
                                        <circle cx="12" cy="5" r="1.5" />
                                        <line x1="12" y1="1" x2="12" y2="2.5" />
                                        <line x1="12" y1="7.5" x2="12" y2="8.5" />
                                        <line x1="8" y1="5" x2="6.5" y2="5" />
                                        <line x1="16" y1="5" x2="17.5" y2="5" />
                                        <line x1="9.5" y1="2.5" x2="8.5" y2="1.5" />
                                        <line x1="14.5" y1="2.5" x2="15.5" y2="1.5" />
                                        {/* Hills */}
                                        <path d="M1 17 Q5 11 9 15 Q12 10 15 15 Q19 11 23 17" />
                                        {/* House left */}
                                        <path d="M3 17l3-3 3 3v4H3v-4z" />
                                        <line x1="6" y1="21" x2="6" y2="18" />
                                        {/* House right */}
                                        <path d="M14 17l3-3 3 3v4h-6v-4z" />
                                        <rect x="16" y="18.5" width="2" height="2.5" />
                                        {/* Ground */}
                                        <line x1="1" y1="21" x2="23" y2="21" />
                                    </svg>
                                </div>
                                <span className="rdw-dot rdw-dot--l"></span>
                                <span className="rdw-dot rdw-dot--r"></span>
                            </div>
                        </div>

                        {/* ── RIGHT PANEL ───────────────────────────── */}
                        <div className="rdw-right">


                            <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ marginTop: '62px', marginBottom: '12px' }}>Wellness &amp; Health</h2>
                            <div className="rdw-red-bar"></div>

                            <ul className="rdw-list" style={{ marginTop: '48px' }}>

                                {/* Item 01 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">01</span>
                                    <div className="rdw-item-text">
                                        <strong>Installation of<br />Life Saving Equipments</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                            <path d="M6 12h2l2-4 2 8 2-4h2" stroke="#e63946" strokeWidth="1.2" />
                                        </svg>
                                    </div>
                                </li>

                                {/* Item 02 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">02</span>
                                    <div className="rdw-item-text">
                                        <strong>Revamp of Maternity &amp;<br />Child Health Center</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="5" r="2" />
                                            <path d="M12 7v6" />
                                            <path d="M9 10c-1.5 1-2 2.5-1 4l2 3h4l2-3c1-1.5.5-3-1-4" />
                                            <circle cx="9" cy="17" r="1.5" />
                                        </svg>
                                    </div>
                                </li>

                                {/* Item 03 */}
                                <li className="rdw-item">
                                    <span className="rdw-num">03</span>
                                    <div className="rdw-item-text">
                                        <strong>Upgraded SNCU with<br />Advanced Neonatal Equipment</strong>

                                    </div>
                                    <div className="rdw-icon-chip">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="10" width="18" height="8" rx="2" />
                                            <path d="M7 10V8a2 2 0 012-2h6a2 2 0 012 2v2" />
                                            <path d="M12 14v-2M10 13h4" />
                                            <path d="M3 18h18" />
                                            <path d="M6 21h12" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        {/* Bottom gradient bar */}
                        <div className="rdw-footer-bar"></div>

                    </div>
                </section>
                {/* ════════════════════════════════════════════════
                    CTA — Split dark/image design
                ════════════════════════════════════════════════ */}
                <section className="csrcta-section">
                <div className="csrcta-wrap">

                    {/* ── LEFT — light panel ─────────────────── */}
                    <div className="csrcta-left wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.1s">

                        {/* eyebrow badge */}
                        <div className="csrcta-badge">
                            <span className="csrcta-badge-dot"></span>
                            <span>Get in Touch</span>
                        </div>

                        {/* heading */}
                        <h2 className="csrcta-heading">
                            Together, We Build a Better Tomorrow!
                          
                        </h2>

                        {/* description */}
                        <p className="csrcta-desc">
                          Empowering people, protecting the planet, and uplifting communities through focused CSR initiatives.
                        </p>

                        {/* buttons row */}
                        <div className="csrcta-btns">
                            <a href="#" className="csrcta-btn-primary wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.4s"
                               onClick={e => { e.preventDefault(); setModalOpen(true); }}>
                                Be Part of the Change
                                <span className="csrcta-btn-circle">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>
                           
                        </div>

                    </div>{/* /csrcta-left */}

                    {/* ── RIGHT — full-height image ──────────── */}
                    <div className="csrcta-right wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.2s">
                        <img src="/images/csrback.jpg" alt="Building Stronger Communities" className="csrcta-img" />

                        {/* floating info card */}
                        <div className="csrcta-card wow zoomIn" data-wow-duration="0.6s" data-wow-delay="0.6s">
                            <div className="csrcta-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#ed193a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                </svg>
                            </div>
                            
                        </div>

                    </div>{/* /csrcta-right */}

                </div>{/* /csrcta-wrap */}
                </section>
            </>

        </div>
    )
}

export default JKMPTLCSR
