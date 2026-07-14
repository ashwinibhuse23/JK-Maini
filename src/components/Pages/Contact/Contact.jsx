import React, { useEffect, useState } from 'react';
import './Contact.css';
import ButtonOne from '../../ButtonOne/ButtonOne';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaIdCard, FaChevronRight, FaUser, FaBuilding, FaPaperPlane, FaCloudUploadAlt, FaPen, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import PageHeader from '../../AboutHeader/PageHeader';
import banner from '/images/bg.jpg';

const locationsData = [
    {
        id: 'thane',
        name: 'Thane, HQ',
        company: 'JK Maini Precision Technology',
        email: 'info.jkmaini@raymond.in',
        phone: '+91 2261527000',
        address: 'C/O Raymond Ltd, Jekegram Pokharan Road No. 1, Jekegram, Thane, Maharashtra, India, 400606',
        cin: 'U25933MH2024PLC417852',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6825020812626!2d72.96214647498091!3d19.20906493202303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b914fe186931%3A0xde2bcbac688da751!2sThe%20Raymond%20Shop!5e0!3m2!1sen!2sin!4v1752140477767!5m2!1sen!2sin'
    },
    {
        id: 'sinnar',
        name: 'Sinnar Plant',
        company: 'Ring Plus Aqua Limited',
        email: 'info.jkmaini@raymond.in',
        phone: '+91 2261527000',
        address: '3, 4, Sinnar - Shirdi Hwy, Sinnar Rural, Musalgaon, Maharashtra 422112',
        cin: 'U25933MH2024PLC417852',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.956562139665!2d74.0483696!3d19.8417908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddb08676dafb69%3A0x8f0210d92a13c73d!2sRing%20Plus%20Aqua%20Limited!5e0!3m2!1sen!2sin!4v1756098149340!5m2!1sen!2sin'
    },
    {
        id: 'bengaluru',
        name: 'Bengaluru Plant',
        company: 'JK Maini Precision Technology Limited',
        email: 'info.jkmaini@raymond.in',
        phone: '+91 2261527000',
        address: 'B-165, 3rd Cross, Peenya 1st Stage, Netaji Nagar, Peenya, Bengaluru, Karnataka 560058',
        cin: 'U25933MH2024PLC417852',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.028983305872!2d77.51974779999999!3d13.0338263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d21a248eabb%3A0x4f3f31704604c7ee!2sJK%20Maini%20Precision%20Technology%20Limited!5e0!3m2!1sen!2sin!4v1756098355039!5m2!1sen!2sin'
    },
    {
        id: 'jkfiles',
        name: 'JK Files & Engineering',
        company: 'JK Files & Engineering Limited',
        email: 'jkfiles.secretarial@raymond.in',
        phone: '+91 2261527000',
        address: 'C/o Raymond Limited, Pokhran Road No.1, Jekegram, Near Cadbury Junction, Thane-400606, Maharashtra',
        cin: 'U52520MH2021PLC354360',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6825020812626!2d72.96214647498091!3d19.20906493202303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b914fe186931%3A0xde2bcbac688da751!2sThe%20Raymond%20Shop!5e0!3m2!1sen!2sin!4v1752140477767!5m2!1sen!2sin'
    }
];

const Contact = () => {
    const [activeLoc, setActiveLoc] = useState(locationsData[0]);
    const [expandedCardId, setExpandedCardId] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageHeader
                title="Contact Us"
                desc="We'd love to hear from you. Reach out to us for any inquiries."
                bgImg={banner}
            />
            <section className="contact-page-section py-4">
                <div className="container py-2">
                    <div className="row align-items-center justify-content-between gx-5">
                    {/* Left side text */}
                    <div className="col-lg-5 mb-3 mb-lg-0">
                        <div className="contact-info-wrapper">
                            <div className="section-title mb-4">
                                <span className="section-sub-title wow fadeInUp">Let's Build The Future Together</span>
                                <h2 className="mt-3 text-anime-style-3" data-cursor="-opaque">
                                    Ready To Turn Your <br className="d-none d-lg-block" />Manufacturing <br className="d-none d-lg-block" />Vision 
                                   Into Reality?
                                </h2>
                                <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                                    Join hands with JK Maini, trusted by over 500+ global clients for precision engineering excellence. Our commitment to quality and innovation has made us a preferred partner for leading manufacturers worldwide.
                                </p>
                            </div>
                            
                            <div className="contact-details-cards d-flex flex-column flex-sm-row gap-3 wow fadeInUp" data-wow-delay="0.2s" style={{ marginTop: '2.5rem', marginLeft: '-10px' }}>
                                <div className="premium-contact-card">
                                    <div className="premium-icon-wrapper">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="premium-contact-info">
                                        <div className="premium-contact-label">Phone</div>
                                        <div className="premium-contact-value">+91 2261527000</div>
                                    </div>
                                </div>
                                <div className="premium-contact-card">
                                    <div className="premium-icon-wrapper">
                                        <FaEnvelope />
                                    </div>
                                    <div className="premium-contact-info">
                                        <div className="premium-contact-label">Email</div>
                                        <div className="premium-contact-value">info.jkmaini@raymond.in</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className="col-lg-6 custom-form-width mb-4 mb-lg-0">
                        <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                                <linearGradient id="form-icon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a8112d" />
                                    <stop offset="100%" stopColor="#ff4c6c" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="contact-form-container wow fadeInRight" data-wow-delay="0.3s">
                            <div className="form-header mb-3">
                                <h3 className="mb-1 fw-bold form-title-main">Get in <span className="form-title-red">Touch</span></h3>
                                <div className="form-title-line mb-2"></div>
                                <p className="form-header-desc mb-2">
                                    Tell us what you're building and we'll show you how to get there, faster and smarter. Response guaranteed within 24 hours.
                                </p>
                            </div>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <FaUser className="input-icon-red position-absolute" style={{top: '50%', left: '15px', transform: 'translateY(-50%)', fill: 'url(#form-icon-grad)'}} />
                                            <input type="text" className="form-control form-control-custom" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <FaUser className="input-icon-red position-absolute" style={{top: '50%', left: '15px', transform: 'translateY(-50%)', fill: 'url(#form-icon-grad)'}} />
                                            <input type="text" className="form-control form-control-custom" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <FaBuilding className="input-icon-red position-absolute" style={{top: '50%', left: '15px', transform: 'translateY(-50%)', fill: 'url(#form-icon-grad)'}} />
                                            <input type="text" className="form-control form-control-custom" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <FaEnvelope className="input-icon-red position-absolute" style={{top: '50%', left: '15px', transform: 'translateY(-50%)', fill: 'url(#form-icon-grad)'}} />
                                            <input type="email" className="form-control form-control-custom" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <FaPhoneAlt className="input-icon-red position-absolute" style={{top: '50%', left: '15px', transform: 'translateY(-50%)', fill: 'url(#form-icon-grad)'}} />
                                            <input type="tel" className="form-control form-control-custom" placeholder="Phone No." />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="position-relative">
                                            <select className="form-select form-control-custom" defaultValue="" style={{ appearance: 'none', WebkitAppearance: 'none' }}>
                                                <option value="" disabled>Select Industry</option>
                                                <option value="automotive">Automotive</option>
                                                <option value="aerospace">Aerospace</option>
                                                <option value="tools">Tools & Hardware</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <FaChevronDown className="input-icon-red position-absolute" style={{top: '50%', right: '15px', transform: 'translateY(-50%)', pointerEvents: 'none', fill: 'url(#form-icon-grad)'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div className="position-relative">
                                            <textarea className="form-control form-control-custom" rows="2" placeholder="I want to know more about"></textarea>
                                            <FaPen className="textarea-icon-red position-absolute" style={{bottom: '12px', right: '15px', fill: 'url(#form-icon-grad)'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3 mt-2">
                                    <div className="col-12">
                                        <label className="upload-label mb-1">Upload Attachment (optional)</label>
                                        <div className="file-upload-pill">
                                            <div className="upload-btn-circle">
                                                <FaCloudUploadAlt />
                                            </div>
                                            <span className="upload-btn-text">Choose File</span>
                                            <span className="upload-no-file">No file chosen</span>
                                            <input type="file" className="position-absolute opacity-0 w-100 h-100" style={{top: 0, left: 0, cursor: 'pointer', zIndex: 10}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3 mt-3">
                                    <div className="col-12">
                                        <div className="custom-checkbox-wrapper">
                                            <input type="checkbox" className="custom-checkbox" id="privacyPolicy" />
                                            <label className="checkbox-text" htmlFor="privacyPolicy">
                                                By checking this box, I consent to the processing of my personal data in accordance with Section 4 (1) (a) of the Digital Personal Data Protection Act, 2023, for the purposes outlined in the <a href="#" className="privacy-link">Privacy Policy</a>. I have also read and agreed to the <a href="#" className="privacy-link">Privacy Policy</a>.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-2 mb-1">
                                    <ButtonOne 
                                        type="submit" 
                                        text="Submit" 
                                        icon={<FaArrowRight />} 
                                        iconPosition="left"
                                        withIconBg={true}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Our Locations Section */}
            <section className="locations-section py-4 py-lg-5 bg-light">
                <div className="container-xl mt-lg-4 mb-lg-2">
                    <div className="row align-items-start gx-lg-4">
                        {/* Left Column: Map */}
                        <div className="col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
                            <div className="sticky-map-wrapper map-shift-left mt-lg-3" style={{ position: 'sticky', top: '120px' }}>
                                <iframe 
                                    key={activeLoc.id}
                                    src={activeLoc.mapUrl}
                                    className="responsive-map-iframe"
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${activeLoc.name}`}
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                            <div className="locations-content-wrapper mt-1 mt-lg-3">
                                <div className="section-title mb-4">
                                    <div className="d-inline-flex align-items-center mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '30px', padding: '6px 20px', backgroundColor: '#ffffff' }}>
                                        <span style={{ width: '8px', height: '8px', backgroundColor: '#e31e24', borderRadius: '50%', marginRight: '10px' }}></span>
                                        <span style={{ color: '#333', fontWeight: '600', fontSize: '0.9rem' }}>Our Locations</span>
                                    </div>
                                    <h2 className="text-uppercase text-anime-style-3" data-cursor="-opaque" style={{ fontWeight: '600', color: '#1a1a1a', letterSpacing: '0.5px', fontSize: '1.15rem', whiteSpace: 'nowrap' }}>
                                        JK MAINI PRECISION TECHNOLOGY
                                    </h2>
                                </div>

                                <div className="locations-list">
                                    {locationsData.map((loc) => (
                                        <React.Fragment key={loc.id}>
                                            {loc.id === 'jkfiles' && (
                                                <div className="section-title mb-3 mt-4">
                                                    <h2 className="text-uppercase text-anime-style-3" data-cursor="-opaque" style={{ fontWeight: '600', color: '#1a1a1a', letterSpacing: '0.5px', fontSize: '1.15rem', whiteSpace: 'nowrap' }}>
                                                        JK MAINI GLOBAL AEROSPACE
                                                    </h2>
                                                </div>
                                            )}
                                            <div 
                                                className={`location-list-card ${expandedCardId === loc.id ? 'active' : ''}`}
                                                onClick={() => {
                                                    setActiveLoc(loc);
                                                    setExpandedCardId(expandedCardId === loc.id ? null : loc.id);
                                                }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="location-list-icon">
                                                        <FaMapMarkerAlt />
                                                    </div>
                                                    <div className="location-list-info pe-2">
                                                        <p className="mb-0" style={{ fontSize: '0.95rem', fontWeight: '500', color: expandedCardId === loc.id ? '#e31e24' : '#333', lineHeight: '1.5', transition: 'color 0.3s ease' }}>
                                                            {loc.address}
                                                        </p>
                                                    </div>
                                                    <div className="location-list-arrow">
                                                        {expandedCardId === loc.id ? <FaChevronDown /> : <FaChevronRight />}
                                                    </div>
                                                </div>

                                                {expandedCardId === loc.id && (
                                                    <div className="location-expanded-info mt-4">
                                                        <div className="loc-info-card">
                                                            <div className="loc-info-icon"><FaEnvelope /></div>
                                                            <div className="loc-info-text">
                                                                <div className="loc-info-label">Email Address</div>
                                                                <div className="loc-info-value">{loc.email}</div>
                                                            </div>
                                                        </div>
                                                        <div className="loc-info-card">
                                                            <div className="loc-info-icon"><FaPhoneAlt /></div>
                                                            <div className="loc-info-text">
                                                                <div className="loc-info-label">Phone Number</div>
                                                                <div className="loc-info-value">{loc.phone}</div>
                                                            </div>
                                                        </div>
                                                        <div className="loc-info-card">
                                                            <div className="loc-info-icon"><FaMapMarkerAlt /></div>
                                                            <div className="loc-info-text">
                                                                <div className="loc-info-label">Our Location</div>
                                                                <div className="loc-info-value">{loc.address}</div>
                                                            </div>
                                                        </div>
                                                        <div className="loc-info-card mb-0">
                                                            <div className="loc-info-icon"><FaIdCard /></div>
                                                            <div className="loc-info-text">
                                                                <div className="loc-info-label">CIN Number</div>
                                                                <div className="loc-info-value">{loc.cin}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
