import React, { useState, useRef, useEffect } from 'react'
import './AcheivementSection.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaRegArrowAltCircleRight, FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaBuilding, FaCogs, FaGlobe, FaFlag, FaIndustry, FaRocket, FaTools, FaTrophy, FaAward, FaHandshake, FaChartLine } from 'react-icons/fa'
import GetInTouchModal from '../GetInTouchModal/GetInTouchModal'



const certs = [
    { src: 'images/new-certs/AS9100D.png', labelLine1: 'AS9100D', labelLine2: 'ISO 9001', isRed: true },
    { src: 'images/new-certs/IATF-2016.png', labelLine1: 'IATF 16949:2016' },
    { src: 'images/new-certs/ISO-14001.png', labelLine1: 'ISO 14001:2015' },
    { src: 'images/new-certs/ISO-45001.png', labelLine1: 'ISO 45001:2018' },
    { src: 'images/new-certs/Nadcap.png', labelLine1: 'NADCAP', labelLine2: 'ACCREDITED' },
]

const carouselImages = [
    'images/journey/DSC_0273.jpg',
    'images/journey/DSC_0508.jpg',
    'images/journey/old-photo-2.png',
    'images/journey/old-photo-3.jpg',
    'images/journey/old-photo-4.jpg',
    'images/journey/old-photo.jpg'
];

const journeyItems = [
    { year: '2025', title: 'Formation of JK Maini', desc: 'Entity Setup & New Plant Inauguration at Sinnar Nashik, Maharashtra.', logo: 'images/journey/logo/Artboard 15.svg', icon: <FaFlag /> },
    { year: '2024', title: 'Raymond Aquired MPP', desc: 'Raymond Group acquired 59.25% of MPP.', logo: 'images/journey/logo/raymond-logo.svg', icon: <FaHandshake /> },
    { year: '2021', title: 'JK Files Renamed', desc: 'Change of name from JK files to JK files and Engg.', logo: 'images/journey/logo/jk-superdrive-logo.png', icon: <FaChartLine /> },
    { year: '2012', title: 'New Plant Set Up in Gujarat', desc: 'Established a new manufacturing facility in Vapi, Gujarat, India.', logo: 'images/journey/logo/gujratplane.jpeg', icon: <FaBuilding /> },
    { year: '2009', title: 'Developed Design & Engineering Capabilities', desc: 'Established strong capabilities in Design and Engineering to deliver customized, efficient, and technically robust solutions.', logo: 'images/journey/logo/developdesign.jpeg', icon: <FaRocket /> },
    { year: '2005', title: 'Raymond Acquired Ring Plus Aqua', desc: 'Raymond Group strategically acquired Ring Plus Aqua to strengthen its presence in the automotive components and engineering space.', logo: 'images/journey/logo/raymond-ring-aqua.png', icon: <FaHandshake /> },
    { year: '1994', title: 'First Company to Supply GM International', desc: 'First Indian manufacturer to supply high-quality automotive components to General Motors, USA.', logo: 'images/journey/logo/gm-logo.png', icon: <FaGlobe /> },
    { year: '1984', title: 'First Company to Supply to Bosch Germany', desc: 'First Indian company to supply precision-engineered components to Bosch, Germany.', logo: 'images/journey/logo/bosch-logo.png', icon: <FaAward /> },
    { year: '1977', title: 'Production Commenced for Files', desc: 'Commenced production of files under the name Hindustan Files Limited, which remained until 2009.', logo: 'images/journey/logo/production.png', icon: <FaCogs /> },
    { year: '1973', title: 'MPP Incorporated', desc: 'Maini Precision Products (MPP) was incorporated as a specialized engineering and manufacturing company.', logo: 'images/journey/logo/jk-precision-products.png', icon: <FaIndustry /> },
    { year: '1965', title: 'JK Files Incorporated', desc: 'JK Files was incorporated as a specialized manufacturer of precision files and cutting tools.', logo: 'images/journey/logo/jk-files-old-logo.png', icon: <FaTools /> }
];

const AcheivementSection = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ── Our Journey Section ─────────────────────────────── */}
            <section className="our-journey-section">
                <div className="container">
                    <div className="journey-layout">
                        {/* Left Column */}
                        <div className="journey-left-col">
                            <div className="journey-intro-wrap wow fadeInLeft">
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp" style={{ textTransform: 'uppercase' }}>
                                        OUR JOURNEY
                                    </span>
                                    <p className="text-dark">
                                        From humble beginnings to becoming a trusted partner for global industry leaders, our journey spans decades of innovation, resilience, and growth. Each milestone reflects our unwavering commitment to excellence, quality, and the pursuit of engineering solutions that shape the future. Join us as we look back on the achievements that have defined who we are today.
                                    </p>
                                </div>
                            </div>
                            <div className="journey-featured-img wow fadeInUp" data-wow-delay="0.3s" style={{ position: 'relative' }}>
                                <figure className="image-anime journey-image-wrapper" style={{ margin: 0 }}>
                                    {carouselImages.map((src, idx) => (
                                        <img 
                                            key={src}
                                            src={src} 
                                            alt={`Journey Highlight ${idx + 1}`} 
                                            style={{
                                                position: idx === 0 ? 'relative' : 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: currentImageIndex === idx ? 1 : 0,
                                                transition: 'opacity 0.8s ease-in-out'
                                            }}
                                            onError={(e) => {
                                                if (!e.target.src.includes('images/about-auto.png')) {
                                                    e.target.src = 'images/about-auto.png';
                                                }
                                            }}
                                        />
                                    ))}
                                </figure>
                            </div>
                        </div>

                        {/* Right Column (Timeline) */}
                        <div className="journey-right-col wow fadeInRight" data-wow-delay="0.2s">
                            <div className="journey-timeline-wrapper">
                                <div className="journey-timeline-track"></div>
                                <div className="journey-cards-container" data-lenis-prevent="true">
                                    {journeyItems.map((item, idx) => (
                                        <div key={item.year + idx} className="timeline-journey-card">
                                            <div className="journey-node">
                                                <div className="journey-node-inner"></div>
                                            </div>
                                            <div className="journey-card-content">
                                                <div className="card-blob-container">
                                                    <div className="card-blob"></div>
                                                </div>
                                                <div className="card-bg"></div>
                                                <div className="journey-card-inner">
                                                    <div className="journey-card-logo">
                                                        <img 
                                                            src={item.logo} 
                                                            alt={item.title} 
                                                            style={(item.logo.includes('developdesign') || item.logo.includes('gujratplane')) ? { transform: 'scale(1.5)', transformOrigin: 'center' } : item.logo.includes('jk-precision-products.png') ? { transform: 'scale(1.3)', transformOrigin: 'center' } : {}}
                                                        />
                                                    </div>
                                                    <div className="journey-card-text">
                                                        <h3 className="journey-card-title">{item.title}</h3>
                                                        <p className="journey-card-desc">{item.desc}</p>
                                                    </div>
                                                    <div className="journey-card-year">
                                                        <span>{item.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Certifications & Accreditations ─────────────────── */}
            <section className="certifications-section">
                <div className="cert-bg-corner cert-bg-corner-left"></div>
                <div className="cert-bg-corner cert-bg-corner-right"></div>

                <div className="container">
                    {/* Header */}
                    <div className="cert-header-content wow fadeInUp">
                        <div className="cert-leaf-left">
                            <img src="images/new-certs/leaf1.png" alt="Left leaf decoration" />
                        </div>

                        <div className="section-title text-center mb-0 px-4">
                            <span className="section-sub-title wow fadeInUp" style={{ textTransform: 'uppercase' }}>
                                COMMITMENT TO EXCELLENCE
                            </span>
                            <h2 className="text-anime-style-3 mb-0 cert-title-single-line" data-cursor="-opaque">
                                CERTIFICATIONS & ACCREDITATIONS
                            </h2>
                        </div>

                        <div className="cert-leaf-right">
                            <img src="images/new-certs/leaf2.png" alt="Right leaf decoration" />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="certifications-grid">
                        {certs.map((cert, i) => (
                            <div
                                key={cert.labelLine1}
                                className="cert-card-2 wow fadeInUp"
                                data-wow-delay={`${i * 0.1}s`}
                            >
                                <div className="cert-card-2-inner">
                                    <div className="cert-img-wrap">
                                        <img src={cert.src} alt={cert.labelLine1} />
                                    </div>
                                    <div className="cert-card-divider">
                                        <div className="cert-card-diamond"></div>
                                    </div>
                                    <div className="cert-label">
                                        <div className="cert-label-line1">{cert.labelLine1}</div>
                                        {cert.labelLine2 && (
                                            <div className={`cert-label-line2 ${cert.isRed ? 'text-red' : ''}`}>
                                                {cert.labelLine2}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── CTA Section ─────────────────────────────────────── */}
            <section className="cta-banner-section">
                {/* Background decorative elements */}
                <div className="cta-bg-orb cta-bg-orb--left" aria-hidden="true" />
                <div className="cta-bg-orb cta-bg-orb--right" aria-hidden="true" />
                <div className="cta-bg-grid" aria-hidden="true" />

                <div className="container">
                    <div className="cta-banner-inner wow fadeInUp">
                        {/* Left: text content */}
                        <div className="cta-text-col">
                            <div className="section-title cta-section-title">
                                <span className="section-sub-title wow fadeInUp">Get in Touch</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Ready to Turn Your Manufacturing<br /> Vision Into Reality?
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Whether you're looking for custom-engineered solutions or want to explore
                                    how our capabilities align with your needs, we're here to help.
                                </p>
                            </div>
                        </div>

                        {/* Right: button */}
                        <div className="cta-btn-col">
                            <ButtonOne 
                                text="Get Started" 
                                icon={<FaArrowCircleRight />} 
                                onClick={() => setModalOpen(true)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Get In Touch Modal ── */}
            <GetInTouchModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Get in Touch"
            />
        </>
    )
}

export default AcheivementSection