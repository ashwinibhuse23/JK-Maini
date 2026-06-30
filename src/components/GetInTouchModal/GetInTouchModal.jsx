import React, { useState, useEffect } from 'react'
import './GetInTouchModal.css'
import { FaTimes } from 'react-icons/fa'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import '../ButtonOne/ButtonOne.css'

const GetInTouchModal = ({ isOpen, onClose, title = "Get in Touch" }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
        consent: false,
    })

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // TODO: connect to backend / email service
        onClose()
    }

    if (!isOpen) return null

    return (
        <div
            className="git-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div
                className="git-modal"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Close ─────────────────────────── */}
                <button
                    className="git-close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>

                {/* ── Header ────────────────────────── */}
                <div className="git-header">
                    <h2 className="git-title">{title}</h2>
                    <p className="git-sub">
                        Tell us what you're building — we'll show you how to get there,
                        faster and smarter. Response guaranteed within 24 hours.
                    </p>
                </div>

                {/* ── Form ──────────────────────────── */}
                <form className="git-form" onSubmit={handleSubmit} noValidate>

                    {/* Row 1: First + Last Name */}
                    <div className="git-row">
                        <div className="git-field">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                autoComplete="given-name"
                            />
                        </div>
                        <div className="git-field">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                autoComplete="family-name"
                            />
                        </div>
                    </div>

                    {/* Row 2: Company + Email */}
                    <div className="git-row">
                        <div className="git-field">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                autoComplete="organization"
                            />
                        </div>
                        <div className="git-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    {/* Row 3: Phone + Industry */}
                    <div className="git-row">
                        <div className="git-field">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone No."
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                            />
                        </div>
                        <div className="git-field">
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Industry</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Aerospace">Aerospace &amp; Defence</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Education">Education</option>
                                <option value="Environment">Environment</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Technology">Technology</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="git-select-arrow">&#8250;</span>
                        </div>
                    </div>

                    {/* Textarea */}
                    <div className="git-field git-full">
                        <textarea
                            name="message"
                            rows="3"
                            placeholder="I want to know more about"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Consent */}
                    <label className="git-consent">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                        />
                        <span>
                            By checking this box, I consent to the processing of my personal
                            data in accordance with Section 4 (1)(a) of the Digital Personal
                            Data Protection Act 2023, for the purposes outlined in the Privacy
                            Policy. I have also read and agreed to the{' '}
                            <a href="#" className="git-privacy-link">Privacy Policy.</a> *
                        </span>
                    </label>

                    {/* Submit */}
                    <button type="submit" className="custom-button git-submit-btn">
                        <span className="button-content">
                            <span className="button-text">Submit</span>
                            <span className="button-icon"><FaRegArrowAltCircleRight /></span>
                        </span>
                        <span className="button-background"></span>
                    </button>

                </form>
            </div>
        </div>
    )
}

export default GetInTouchModal
