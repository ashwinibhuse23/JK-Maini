import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from "/images/awardsBack.jpg"
import './JKMGALAwards.css'




/* ----------------------------------------------------------
   Featured Awards
---------------------------------------------------------- */
const featuredAwards = [




    {
        tag: 'Honeywell Supplier Recognition Award – Quality Performance',
        PresentedBy: 'Honeywell',
        Category: 'Quality Performance',
       
        desc: 'We are proud to share that Maini Precision Products Ltd. has received the Supplier Recognition Award from Honeywell for outstanding Quality Performance. This prestigious honor underscores our commitment to delivering excellence in quality, reliability, and precision manufacturing reinforcing our position as a trusted partner in the global aerospace and defence supply chain.',
       
        images: [
            './images/jkmgal/awards/Honeywell.png',
        ],
    },





    {
        tag: 'Excellence in Exports Award – Aerospace and Defence Awards',
        PresentedBy: 'Aerospace and Defence Awards',
        Category: ' Excellence in Exports',
       
        desc: 'We are proud to share that Maini Precision Products Ltd. has received the Excellence in Exports Award at the Aerospace and Defence Awards. This esteemed recognition highlights our strong global footprint and consistent export performance in the aerospace and defence sectors, driven by our focus on precision engineering, quality manufacturing, and customer-centric innovation.',
      
        images: [
            './images/jkmgal/awards/Exports.png',
        ],
    },



    {
        tag: 'Best Supplier – Lean and Fast Award',
        PresentedBy: 'One GE Equation of Partnership – India Supplier Conference',
        Category: 'Lean and Fast',
      
        desc: 'We are proud to share that Maini Precision Products Ltd. has received the Best Supplier, Lean and Fast Award at the One GE Equation of Partnership India Supplier Conference. This recognition reflects our agility, efficiency, and commitment to lean manufacturing practices, enabling us to consistently meet customer expectations with speed, precision, and excellence.',
       
        images: [
            './images/jkmgal/awards/Lean and Fast.png',
        ],
    },


     {
        tag: 'Partnership Award – Strategic Business Collaboration',
        PresentedBy: 'Safran Aircraft Engines – Le Bourget',
        Category: 'Strategic Business Partnership',
      
        desc: 'We are delighted to announce that Maini Precision Products Ltd. has been honored with the Partnership Award from Safran Aircraft Engines at Le Bourget, presented during the contract signing for complex NGV machining. This recognition reflects our deep collaboration, shared vision, and enduring partnership with Safran built on trust, innovation, and our unwavering commitment to delivering world-class precision components.',
       
        images: [
            './images/jkmgal/awards/Partnership Award.png',
        ],
    },
   
]

/* ----------------------------------------------------------
   AwardCard Component
---------------------------------------------------------- */
const AwardCard = ({ award, index }) => {
    const [activeImg, setActiveImg] = useState(0)
    const [fading, setFading] = useState(false)
    const [visible, setVisible] = useState(false)
    const isEven = index % 2 === 0
    const hasMultiple = award.images.length > 1
    const imagesLen = award.images.length

    const cardRef = useRef(null)
    const intervalRef = useRef(null)
    const fadeTimeoutRef = useRef(null)
    const restartTimeoutRef = useRef(null)
    const activeImgRef = useRef(0)

    useEffect(() => {
        const el = cardRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el) } },
            { threshold: 0.12 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    const goTo = (nextIdx) => {
        clearTimeout(fadeTimeoutRef.current)
        setFading(true)
        fadeTimeoutRef.current = setTimeout(() => {
            activeImgRef.current = nextIdx
            setActiveImg(nextIdx)
            setFading(false)
        }, 300)
    }

    const stopAuto = () => {
        clearInterval(intervalRef.current)
        clearTimeout(restartTimeoutRef.current)
    }

    const startAuto = () => {
        if (!hasMultiple) return
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            goTo((activeImgRef.current + 1) % imagesLen)
        }, 4000)
    }

    const startAutoRef = useRef(startAuto)
    const stopAutoRef = useRef(stopAuto)
    useEffect(() => { startAutoRef.current = startAuto })
    useEffect(() => { stopAutoRef.current = stopAuto })

    useEffect(() => {
        startAuto()
        return () => { stopAuto(); clearTimeout(fadeTimeoutRef.current) }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleThumbClick = (i) => {
        if (i === activeImgRef.current) return
        stopAuto()
        clearTimeout(fadeTimeoutRef.current)
        goTo(i)
        restartTimeoutRef.current = setTimeout(() => startAuto(), 400)
    }

    const renderDesc = (text, highlights) => {
        if (!highlights || highlights.length === 0) return text
        const matches = []
        highlights.forEach(phrase => {
            const idx = text.indexOf(phrase)
            if (idx !== -1) matches.push({ idx, end: idx + phrase.length, phrase })
        })
        matches.sort((a, b) => a.idx - b.idx)
        const result = []
        let cursor = 0
        matches.forEach(({ idx, end, phrase }) => {
            if (idx < cursor) return
            if (idx > cursor) result.push(text.slice(cursor, idx))
            result.push(<strong key={phrase} style={{ color: '#18191A', fontWeight: 600 }}>{phrase}</strong>)
            cursor = end
        })
        if (cursor < text.length) result.push(text.slice(cursor))
        return <>{result}</>
    }

    return (
        <div
            ref={cardRef}
            className={`gal-fa-card ${visible ? 'gal-fa-card--visible' : 'gal-fa-card--hidden'} ${isEven ? '' : 'gal-fa-card--reverse'}`}
            style={{ transitionDelay: `${index * 0.06}s` }}
        >
            {/* Text side */}
            <div className="gal-fa-card-text">
                <span className="gal-fa-card-tag">
                    🏆 {award.tag}
                </span>
                {award.title && <h3 className="gal-fa-card-title">{award.title}</h3>}

                {(award.awarder || award.PresentedBy || award.Category || award.Date || award.Location || award.PresentedAt || award.AwardedAt) && (
                    <div className="gal-fa-card-meta">
                        {award.awarder && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Awarded by</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.awarder}</span>
                            </span>
                        )}
                        {award.PresentedBy && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Presented by</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.PresentedBy}</span>
                            </span>
                        )}
                        {award.Category && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Category</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.Category}</span>
                            </span>
                        )}
                        {award.Date && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Date</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.Date}</span>
                            </span>
                        )}
                        {award.Location && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Location</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.Location}</span>
                            </span>
                        )}
                        {award.PresentedAt && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Presented at</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.PresentedAt}</span>
                            </span>
                        )}
                        {award.AwardedAt && (
                            <span className="gal-fa-meta-item">
                                <span className="gal-fa-meta-label">Awarded at</span>
                                <span className="gal-fa-meta-colon">:</span>
                                <span className="gal-fa-meta-value">{award.AwardedAt}</span>
                            </span>
                        )}
                    </div>
                )}

                <p className="gal-fa-card-desc">{renderDesc(award.desc, award.highlightTexts)}</p>
                {award.desc2 && <p className="gal-fa-card-desc">{renderDesc(award.desc2, award.highlightTexts)}</p>}
                {award.desc3 && <p className="gal-fa-card-desc">{renderDesc(award.desc3, award.highlightTexts)}</p>}
                <div className="gal-fa-card-bar"></div>
            </div>

            {/* Image side */}
            <div
                className="gal-fa-card-img-side"
                onMouseEnter={() => stopAutoRef.current()}
                onMouseLeave={() => startAutoRef.current()}
            >
                <div className="gal-fa-img-main-wrap">
                    <img
                        src={award.images[activeImg]}
                        alt={award.title || award.tag}
                        className={`gal-fa-img-main${fading ? ' gal-fa-img--fading' : ''}`}
                    />
                </div>
                {hasMultiple && (
                    <div className="gal-fa-img-thumbs">
                        {award.images.map((img, i) => (
                            <button
                                key={i}
                                className={`gal-fa-thumb${i === activeImg ? ' gal-fa-thumb--active' : ''}`}
                                onClick={() => handleThumbClick(i)}
                                style={i === activeImg ? { borderColor: '#763235' } : {}}
                            >
                                <img src={img} alt="" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

/* ----------------------------------------------------------
   Main Page
---------------------------------------------------------- */
const JKMGALAwards = () => {
    return (
        <div>
            <>
                <PageHeader
                    title="Awards & Recognitions"
                    desc="
                                    At JK Maini Global Aerospace Limited (JKMGAL), our commitment to excellence has been recognized through numerous
                                    awards and accolades over the years. These honors reflect our dedication to quality,
                                    innovation, and sustainable business practices. We take pride in being acknowledged
                                    by industry leaders and organizations for our outstanding achievements and
                                    contributions."
                    bgImg={banner}
                />



                {/* Featured Awards Section */}
                <section className="gal-featured-awards-section">
                    <div className="container">

                        <div className="section-title text-center">
                            <span className="section-sub-title wow fadeInUp" data-wow-delay="0.1s">
                                Featured Awards
                            </span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Our Recognitions &amp; Achievements
                            </h2>
                            <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s" style={{ color: '#000000' }}>
                                Over the years, Jk Maini Global Aerospace Limited (JKMGAL) has been honored with numerous awards and accolades that reflect our commitment to excellence, innovation, and quality in precision engineering. Our dedication to delivering world-class solutions has earned us recognition from industry leaders, partners, and global organizations.
                            </p>
                        </div>

                        <div className="gal-fa-cards-list">
                            {featuredAwards.map((award, index) => (
                                <AwardCard key={index} award={award} index={index} />
                            ))}
                        </div>

                    </div>
                </section>
            </>
        </div>
    )
}

export default JKMGALAwards
