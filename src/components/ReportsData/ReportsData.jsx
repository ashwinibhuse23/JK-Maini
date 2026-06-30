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

            
           

        </section>

       
        </>
    );
};

export default ReportsData;
