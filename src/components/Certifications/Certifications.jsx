import React from 'react';
import './Certifications.css';

const Certifications = ({ bg }) => {
    const certs = [
        {
            icon: './images/certificates/IATF-2016.png',
            title: 'IATF16949',
            subtitle: 'Certified'
        },
        {
            icon: './images/certificates/ISO-45001.png',
            title: 'ISO 45001',
            subtitle: 'Certification'
        },
        {
            icon: './images/certificates/ISO-14001.png',
            title: 'ISO 14001',
            subtitle: 'Certification'
        },
        {
            icon: './images/certificates/reach&rohs.png',
            title: 'REACH/RoHS',
            subtitle: 'Compliance'
        },
        {
            icon: './images/certificates/trophy.png',
            title: 'Commitment',
            subtitle: 'to SDGs'
        }
    ];

    return (
        <section
            className="certifications-section"
            style={bg ? { backgroundColor: "#F6F5ED" } : { backgroundColor: "#fff" }}
        >
            <div className="container">
                <div className="section-title text-center">
                      <div className="wow fadeInUp mb-3 mx-auto" style={{ border: '1px solid #e0e0e0', color: '#111', padding: '8px 24px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', fontSize: '1rem', fontWeight: '600', backgroundColor: '#fff' }}>
                          <span style={{ width: '8px', height: '8px', backgroundColor: '#E81C3D', borderRadius: '50%', marginRight: '10px' }}></span> 
                          Trust &amp; Transparency
                      </div>
                    <h2 className="text-anime-style-3 mb-3 text-uppercase" data-cursor="-opaque">
                        CERTIFICATIONS &amp; <span className="text-danger">COMPLIANCE</span>
                    </h2>
                    <p className="wow fadeInUp text-dark mx-auto mb-0" style={{ maxWidth: '800px' }} data-wow-delay="0.2s">
                        We maintain the highest standards of integrity, compliance, and transparency through our comprehensive sustainability certifications and accreditations.
                    </p>
                </div>
            </div>

            <div className="container mt-4">
                <div className="certs-row-wrapper pb-2">
                    <div className="certs-row position-relative">
                        {/* Continuous red line behind circles */}
                        <div className="certs-continuous-line"></div>
                        {certs.map((cert, index) => (
                            <React.Fragment key={index}>
                                <div className="cert-item text-center">
                                    <div className="cert-icon-wrapper mx-auto mb-3">
                                        <img src={cert.icon} alt={cert.title} className={`cert-icon-img ${index === 4 ? 'cert-trophy' : ''}`} />
                                    </div>
                                    <div className="cert-text">
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-subtitle mb-0">{cert.subtitle}</p>
                                    </div>
                                </div>
                                {index < certs.length - 1 && (
                                    <div className="cert-connector">
                                        <div className="cert-connector-dot"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
