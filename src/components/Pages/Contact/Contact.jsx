import React, { useEffect } from 'react';
import './Contact.css';
import ButtonOne from '../../ButtonOne/ButtonOne';
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../../AboutHeader/PageHeader';
import banner from '/images/bg.jpg';

const Contact = () => {
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
            <section className="contact-page-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                    {/* Left side text */}
                    <div className="col-lg-5 mb-5 mb-lg-0 pr-lg-5">
                        <div className="contact-info-wrapper">
                            <h2 className="mb-4 text-anime-style-3">Ready to Turn Your Manufacturing Vision <br className="d-none d-lg-block" />into Reality?</h2>
                            <p className="mb-5 text-anime-style-3">
                                Join hands with JK Maini, trusted by over 500+ global clients for precision engineering excellence. Our commitment to quality and innovation has made us a preferred partner for leading manufacturers worldwide.
                            </p>
                            
                            <div className="contact-details wow fadeInUp" data-wow-delay="0.2s">
                                <div className="contact-item d-flex align-items-center mb-4">
                                    <div className="contact-icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <strong>Phone:</strong> +91 2261527000
                                    </div>
                                </div>
                                <div className="contact-item d-flex align-items-center">
                                    <div className="contact-icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <strong>Email:</strong> info.jkmaini@raymond.in
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className="col-lg-6 offset-lg-1">
                        <div className="contact-form-container wow fadeInRight" data-wow-delay="0.3s">
                            <div className="form-header">
                                <h3 className="mb-2">Get in Touch</h3>
                                <p className="mb-4 text-muted form-subtitle">
                                    Tell us what you're building we'll show you how to get there, faster and smarter. Response guaranteed within 24 hours.
                                </p>
                            </div>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="form-control material-input" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="form-control material-input" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-4">
                                        <input type="text" className="form-control material-input" placeholder="Company" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input type="email" className="form-control material-input" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="row gx-3">
                                    <div className="col-md-6 mb-4">
                                        <input type="tel" className="form-control material-input" placeholder="Phone No." />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <select className="form-select material-input" defaultValue="">
                                            <option value="" disabled>Select Industry</option>
                                            <option value="automotive">Automotive</option>
                                            <option value="aerospace">Aerospace</option>
                                            <option value="tools">Tools & Hardware</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <textarea className="form-control material-input" rows="2" placeholder="I want to know more about"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <label className="d-block text-muted mb-2 upload-label">Upload Attachment (optional):</label>
                                        <input type="file" className="form-control material-input file-input-native p-0 pb-2" />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="form-check custom-checkbox-wrapper">
                                            <input className="form-check-input custom-checkbox" type="checkbox" id="privacyPolicy" />
                                            <label className="form-check-label text-muted privacy-text" htmlFor="privacyPolicy">
                                                By checking this box, I consent to the processing of my personal data in accordance with Section 4 (1)(a) of the Digital Personal Data Protection Act 2023, for the purposes outlined in the Privacy Policy. I have also read and agreed to the <a href="#" className="privacy-link">Privacy Policy.</a> <span className="text-danger">*</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-3">
                                    <ButtonOne text="Submit" type="submit" icon={<FaArrowRight />} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Contact;
