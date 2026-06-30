import React from 'react'
import './Footer.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="main-footer bg-section dark-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Footer Header Start */}
                            <div className="footer-header">
                                {/* Footer Logo Start */}
                                <div className="section-title">
                                    <h2 data-cursor="-opaque" className='text-white'>Precision That Powers Progress.</h2>
                                </div>
                                
                               
                            </div>
                            
                        </div>
                        <div className="col-xl-4">
                            {/* About Footer Start */}
                            <div className="about-footer">
                                {/* Section Title Start */}
                                
                                <div className="footer-logo">
                                    <img src="images/jk-maini-logo.svg" alt="" />
                                    <p className='text-white'>C/O Raymond Ltd, Jekegram Pokharan Road No. 1, Jekegram, Thane, Maharashtra, India, 400606</p>
                                </div>
                                {/* Section Title End */}
                                {/* About Footer Button Start */}
                                <div className="about-footer-btn">
                                    <a href="contact.html" className="btn-default">
                                        <ButtonOne text="Get In Touch"  icon={<FaArrowCircleRight />} />
                                    </a>
                                </div>
                                {/* About Footer Button End */}
                            </div>
                            {/* About Footer End */}
                        </div>
                        <div className="col-xl-8">
                            {/* Footer Links Box Start */}
                            <div className="footer-links-box">
                                {/* Footer Links Start */}
                                <div className="footer-links">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li>
                                            <a href="index-2.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="about.html">JK Maini Group</a>
                                        </li>
                                        <li>
                                            <a href="projects.html">JK Maini Precision Technology Ltd. (JKMPTL)</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">JK Files and Engineering Ltd. (JK Superdrive)</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">JK Maini Global Aerospace Ltd. (JKMGAL)</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Links End */}
                                {/* Footer Links Start */}
                                <div className="footer-links">
                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <a href="service-single.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="service-single.html">Terms of Use</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                {/* Footer Links End */}
                                {/* Footer Contact Info List Start */}
                                <div className="footer-links footer-contact-info-list">
                                    <h2>Contact Information</h2>
                                    <div className="footer-logo-info">
                                        
                                        <p><span>Phone:</span> <a href="tel:+912261527000">+91 22 6152 7000</a></p>
                                        <p><span>Email:</span> <a href="mailto:info.jkmaini@raymond.in">info.jkmaini@raymond.in</a></p>
                                        <p><span>CIN:</span> U25933MH2024PLC417852</p>
                                    </div>
                                </div>
                                {/* Footer Contact Info List End */}
                            </div>
                            {/* Footer Links Box End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Footer Copyright Start */}
                            <div className="footer-copyright">
                                {/* Footer Copyright Text Start */}
                                <div className="footer-copyright-text">
                                    <p>Copyright © 2026 All Rights Reserved.</p>
                                </div>
                                {/* Footer Copyright Text End */}
                                {/* Footer Social Links Start */}
                                <div className="footer-social-links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FaLinkedinIn />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <AiFillInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IoMdMail />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Social Links End */}
                            </div>
                            {/* Footer Copyright End */}
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer