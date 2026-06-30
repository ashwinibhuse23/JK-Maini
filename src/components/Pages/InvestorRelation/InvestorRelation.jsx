import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import './InvestorRelation.css'

/* ─── PDF Documents ──────────────────────────────────── */
const annualReports = [
    {
        label: 'Subsidiary Booklet 2024–25',
        href: '/images/investor/1752828600281Subsidiary Booklet 2024-25.pdf',
    },
    {
        label: 'ESOP Annexure 2024–25',
        href: '/images/investor/1752645772404ESOP Annexure 2024-25.pdf',
    },
    {
        label: 'Raymond AGM Notice 2024–25',
        href: '/images/investor/1752393808420Raymond AGM Notice 2024-25.pdf',
    },
    {
        label: 'Raymond Annual Report 2024–25',
        href: '/images/investor/1752420334420Raymond Annual Report 2024-25.pdf',
    },
    {
        label: 'Raymond Form MGT 7 – March 31, 2025',
        href: '/images/investor/1752392341106Raymond Form MGT 7 - March 31, 2025.pdf',
    },
    {
        label: 'Reg 13 – ESOP Secretarial Auditor Certificate_2025',
        href: '/images/investor/1752392441416Reg 13 - ESOP Secretarial Auditor Certificate_2025.pdf',
    },
    {
        label: 'Annual Secretarial Compliance Report 2025',
        href: '/images/investor/1748518932823Annual Secretarial Compliance Report 2025.pdf',
    },
]

/* ─── Download Icon SVG ──────────────────────────────── */
const DownloadIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
)

/* ─── File Icon SVG ──────────────────────────────────── */
const FileIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E81C3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
)

/* ─── Main Page ─────────────────────────────────────── */
const InvestorRelation = () => {
    return (
        <div className="ir-page">

            {/* Hero Banner */}
            <PageHeader
                title="Investor Relations"
                desc="Transparency, trust and long-term value creation for every stakeholder. Explore financial performance, governance frameworks and corporate disclosures of JK Maini Group."
                bgImg="./images/investor/investor.jpg"
            />

            {/* ── Annual Reports Section ─────────────────── */}
            <section className="ir-annual-section">
                <div className="container">
                    <div className="ir-annual-wrapper">

                        {/* Left Panel */}
                        <div className="ir-annual-left wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="section-title">
                               
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Annual Reports
                                </h2>
                            </div>
                            <p className="about-raymond wow fadeInUp" data-wow-delay="0.2s">
                                Our annual reports provide a comprehensive overview of our financial performance, strategic initiatives, and key achievements throughout the year. We are committed to transparency and accountability, ensuring our stakeholders are well-informed about our progress and future direction.
                            </p>
                        </div>

                        {/* Right Panel — Timeline + Cards */}
                        <div className="ir-annual-right">
                            <div className="ir-timeline">
                                {annualReports.map((doc, i) => (
                                    <div
                                        key={i}
                                        className="ir-timeline-row wow fadeInRight"
                                        data-wow-delay={`${0.1 + i * 0.08}s`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="ir-timeline-dot" />

                                        {/* Download Card */}
                                        <a
                                            href={doc.href}
                                            className="ir-doc-card"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="ir-doc-icon-wrap">
                                                <FileIcon />
                                            </div>
                                            <span className="ir-doc-label">{doc.label}</span>
                                            <div className="ir-doc-dl-btn">
                                                <DownloadIcon />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* Vertical line runs through all dots */}
                                <div className="ir-timeline-line" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default InvestorRelation
