import React from 'react';
import './Certifications.css';

const Certifications = ({ bg }) => {
    const certs = [
        {
            icon: './images/certificates/IATF-2016.png',
            title: 'IATF16949 Certified'
        },
        {
            icon: './images/certificates/ISO-14001.png',
            title: 'ISO 45001 Certification'
        },
        {
            icon: './images/certificates/ISO-45001.png',
            title: 'ISO 14001 Certification'
        },
        {
            icon: './images/certificates/reach&rohs.png',
            title: 'REACH/RoHS Compliance'
        },
        {
            icon: './images/certificates/trophy.png',
            title: 'Commitment to SDGs'
        }
    ];

    return (
        <section
            className="certifications-section"
            style={bg ? { backgroundColor: "#F6F5ED" } : { backgroundColor: "#fff" }}
        >
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                        Certifications & Compliance
                    </h2>
                    <p className="wow fadeInUp text-dark" data-wow-delay="0.2s">
                        We maintain the highest standards of integrity, compliance, and transparency through our comprehensive sustainability certifications and accreditations.
                    </p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card d-flex gap-2"
                            style={bg ? { backgroundColor: "#FFF" } : { backgroundColor: "#F6F5ED" }}
                        >
                            <div className='d-flex align-items-center justify-content-center px-3'>
                                <div className="cert-card-icon" style={bg ? { backgroundColor: "rgba(249, 166, 18, 0.1)" } : { backgroundColor: "#fff" }}>
                                    <img src={cert.icon} alt={cert.title} className={`cert-card-img ${index < 4 ? "cert-large" : "cert-trophy"}`} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className="cert-card-title">
                                    <h3>{cert.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
