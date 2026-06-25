import React, { useState } from 'react';
import './ReportsData.css';

const ReportsData = ({ bg }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', company: '', email: '',
        phone: '', industry: '', message: '', consent: false
    });
    const [submitted, setSubmitted] = useState(false);

    const reports = [
        {
            rating: 'SAQ 5.0 Rating',
            title: 'Bengaluru BU (Peenya)',
            description: 'Sustainability assessment questionnaire rating for our Peenya manufacturing business unit.',
            link: './images/pdf/peenya.pdf'
        },
        {
            rating: 'SAQ 5.0 Rating',
            title: 'Bengaluru BU (Bommasandra)',
            description: 'Sustainability assessment questionnaire rating for our Bommasandra manufacturing business unit.',
            link: './images/pdf/bommasandra.pdf'
        }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', industry: '', message: '', consent: false });
    };

    return (
        <>
        <section
            className="reports-data-section"
            style={bg ? { backgroundColor: '#F6F5ED' } : { backgroundColor: '#fff' }}
        >
            <div className="container">

                {/* Section Header */}
                <div className="section-title text-center">
                    <span className="section-sub-title wow fadeInUp" data-wow-delay="0.1s">
                        Transparency &amp; Ratings
                    </span>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                        Reports and Data
                    </h2>
                    <p className="wow fadeInUp text-dark mt-3" data-wow-delay="0.2s">
                        Access our compliance scores, rating indices, and sustainability disclosures across our manufacturing units.
                    </p>
                </div>

                {/* Reports Grid */}
                <div className="reports-grid mt-5">
                    {reports.map((report, index) => (
                        <div
                            key={index}
                            className="report-card wow fadeInUp"
                            data-wow-delay={`${0.2 + index * 0.1}s`}
                            style={bg ? { backgroundColor: '#fff' } : { backgroundColor: '#F6F5ED' }}
                        >
                            <div className="report-card-inner">

                                {/* Header: icon + badge + title */}
                                <div className="report-card-header">
                                    <div className="report-card-icon-wrapper">
                                        <svg className="report-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <div className="report-card-header-text">
                                        <span className="report-card-badge">{report.rating}</span>
                                        <h3 className="report-card-title">{report.title}</h3>
                                    </div>
                                </div>

                                {/* Body: description + link */}
                                <div className="report-card-body">
                                    <p className="report-card-desc">{report.description}</p>
                                    <div className="report-card-footer">
                                        <a href={report.link} className="report-card-link" target="_blank" rel="noopener noreferrer">
                                            <span>View Disclosures</span>
                                            <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Get in Touch CTA Block — full-width horizontal strip */}
            <div className="cta-strip wow fadeInUp" data-wow-delay="0.4s">
                <div className="container">
                    <div className="cta-strip-inner">

                        {/* Left: heading with red border accent */}
                        <div className="cta-strip-left">
                            <h2 className="cta-strip-heading">
                                Empowering Change,<br /> Sustaining Tomorrow!
                            </h2>
                        </div>

                        {/* Vertical divider */}
                        <div className="cta-strip-divider"></div>

                        {/* Right: description + button */}
                        <div className="cta-strip-right">
                            <p className="cta-strip-desc">
                                Our commitment to the environment, communities, and innovation drives every initiative we undertake, because sustainable progress is a shared journey.
                            </p>
                            <button
                                id="partner-with-us-btn"
                                className="cta-strip-btn"
                                onClick={() => setModalOpen(true)}
                            >
                                <span>Partner With Us for a Sustainable Future</span>
                                <span className="cta-strip-btn-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        {/* ── Partner Modal ─────────────────────────────── */}
        {modalOpen && (
            <div
                className="partner-modal-overlay"
                id="partner-modal-overlay"
                onClick={(e) => { if (e.target.id === 'partner-modal-overlay') handleClose(); }}
            >
                <div className="partner-modal" role="dialog" aria-modal="true" aria-labelledby="partner-modal-title">

                    {/* Modal gradient top stripe */}
                    <div className="partner-modal-stripe"></div>

                    {/* Close button lives inside header so overflow-x:hidden never clips it */}
                    <div className="partner-modal-body">
                        {!submitted ? (
                            <>
                                <div className="partner-modal-header">
                                    <div className="partner-modal-header-text">
                                        <h2 id="partner-modal-title" className="partner-modal-title">Get in Touch</h2>
                                        <p className="partner-modal-subtitle">
                                            Tell us what you're building — we'll show you how to get there, faster and smarter.
                                            Response guaranteed within 24 hours.
                                        </p>
                                    </div>
                                    <button className="partner-modal-close" onClick={handleClose} aria-label="Close">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>

                                <form className="partner-form" onSubmit={handleSubmit} noValidate>
                                    {/* Row 1: First Name + Last Name */}
                                    <div className="partner-form-row">
                                        <div className="partner-form-group">
                                            <input
                                                id="pf-first-name"
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                                className="partner-form-input"
                                            />
                                        </div>
                                        <div className="partner-form-group">
                                            <input
                                                id="pf-last-name"
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                                className="partner-form-input"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Company + Email */}
                                    <div className="partner-form-row">
                                        <div className="partner-form-group">
                                            <input
                                                id="pf-company"
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Company"
                                                className="partner-form-input"
                                            />
                                        </div>
                                        <div className="partner-form-group">
                                            <input
                                                id="pf-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                                className="partner-form-input"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 3: Phone + Industry */}
                                    <div className="partner-form-row">
                                        <div className="partner-form-group">
                                            <input
                                                id="pf-phone"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone No."
                                                className="partner-form-input"
                                            />
                                        </div>
                                        <div className="partner-form-group">
                                            <select
                                                id="pf-industry"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className={`partner-form-input partner-form-select${formData.industry ? '' : ' placeholder-active'}`}
                                            >
                                                <option value="" disabled>Select Industry</option>
                                                <option value="automotive">Automotive</option>
                                                <option value="aerospace">Aerospace &amp; Defence</option>
                                                <option value="industrial">Industrial Tools</option>
                                                <option value="energy">Energy &amp; Utilities</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <span className="select-chevron">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Row 4: Message */}
                                    <div className="partner-form-group partner-form-group--full">
                                        <textarea
                                            id="pf-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="I want to know more about"
                                            rows={2}
                                            className="partner-form-input partner-form-textarea"
                                        />
                                    </div>

                                    {/* Consent */}
                                    <div className="partner-form-consent">
                                        <label className="consent-label" htmlFor="pf-consent">
                                            <input
                                                id="pf-consent"
                                                type="checkbox"
                                                name="consent"
                                                checked={formData.consent}
                                                onChange={handleChange}
                                                required
                                                className="consent-checkbox"
                                            />
                                            <span className="consent-custom-check"></span>
                                            <span className="consent-text">
                                                By checking this box, I consent to the processing of my personal data in accordance
                                                with Section 4 (1)(a) of the Digital Personal Data Protection Act 2023, for the
                                                purposes outlined in the{' '}
                                                <a href="/privacy-policy" className="consent-link">Privacy Policy.</a>{' '}
                                                <span className="consent-required">*</span>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <div className="partner-form-submit-row">
                                        <button
                                            id="pf-submit"
                                            type="submit"
                                            className="partner-submit-btn"
                                            disabled={!formData.consent}
                                        >
                                            <span className="partner-submit-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </span>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="partner-success">
                                <div className="partner-success-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3 className="partner-success-title">Thank You!</h3>
                                <p className="partner-success-desc">
                                    We've received your message. Our team will get back to you within 24 hours.
                                </p>
                                <button className="partner-submit-btn" onClick={handleClose}>
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default ReportsData;
