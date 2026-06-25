import React, { useState, useEffect, useRef, useCallback } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from "/images/awardsBack.jpg"
import './JKMPTLAwards.css'

const certifications = [
    { img: './images/awardsCertificates/Nadcap.png', title: 'Nadcap' },
    { img: './images/awardsCertificates/SA-8000.png', title: 'SA-8000' },
    { img: './images/awardsCertificates/AEO.png', title: 'AEO Indian Customs' },
    { img: './images/awardsCertificates/AS9100D certified.png', title: 'AS9100D' },
    { img: './images/awardsCertificates/IATF-16949.png', title: 'IATF 16949' },
    { img: './images/awardsCertificates/ISO-9001.png', title: 'ISO 9001' },
    { img: './images/awardsCertificates/ISO-14001.png', title: 'ISO 14001' },
    { img: './images/awardsCertificates/ISO-18001.png', title: 'ISO 18001' },
    { img: './images/awardsCertificates/ISO-45001.png', title: 'ISO 45001' },
    { img: './images/awardsCertificates/bureau-veritas.png', title: 'Bureau Veritas' },
]

const featuredAwards = [
    {
        tag: 'Supplier Excellence Award – Eaton',
       
        year: '2017',
        awarder: 'Eaton Corporation',
        Recipient: 'Maini Precision Products Ltd. (JK Maini Precision Technology limited)',
        desc: 'Maini Precision Products Ltd. (Now JKMPTL) was honored with the prestigious Supplier Excellence Award from Eaton Corporation in 2017, joining a distinguished group of global leaders recognized for outstanding contribution to quality, reliability, and supply chain excellence. This accolade reflects our strong commitment to engineering precision, operational efficiency, and customer-centric partnerships. Being acknowledged by Eaton, a global power management leader, reaffirms our reputation as a trusted partner in delivering world-class manufacturing solutions that enable innovation and business continuity worldwide.',
        images: [
            './images/awards/Eaton-award-1.jpg',
            './images/awards/Eaton-award-2.jpg',
        ],
    },
    {
        tag: 'Recognized for Agility in Crisis',
        title: 'Skoda Auto Commendation for Supply Chain Excellence',
        desc: 'In a testament to our commitment to operational resilience and global supply chain excellence, JK Maini (formerly Ring Plus Aqua Ltd.) was recognized by SKODA Auto Volkswagen India for swiftly stepping in during a critical supply disruption.',
        highlightTexts: ['JK Maini (formerly Ring Plus Aqua Ltd.)', 'SKODA Auto Volkswagen India'],
        desc2: 'In August, catastrophic floods in Slovenia halted production at a key European supplier of ring gears for dual-mass flywheels — essential components in internal combustion engine (ICE) vehicles. Faced with a potential production bottleneck impacting brands like Audi, ŠKODA, Porsche, and Volkswagen, the procurement teams at ŠKODA Auto turned to trusted Indian partners.',
        images: [
            './images/awards/skoda.png',
        ],

    },
    {
        tag: 'Best Performance Award – Project Management',

        awarder: 'Valeo India',
        Event: 'Valeo India Supplier Convention 2025 – Accelerate India',
        desc: 'We are proud to be recognized as the Best Supplier for Project Management by Valeo India at the prestigious Valeo India Supplier Convention 2025. This award is a testament to our team\'s dedication to delivering complex projects with precision, speed, and excellence. Our ability to consistently meet Valeo\'s high standards, from planning to execution, reflects our strong project governance, cross-functional collaboration, and a culture of operational excellence. We thank Valeo India for this honor and remain committed to driving innovation, agility, and value in every project we undertake.',
        highlightTexts: ['Best Supplier for Project Management', 'Valeo India Supplier Convention 2025',' Valeo India'],
        images: [
            './images/awards/valeo award.png',
        ],

    },
    {
        tag: 'Innovation & Value Creation Award – Schaeffler India',
        

        awarder: 'Schaeffler India',
        Recipient: 'Ring Plus Aqua Ltd. (JK Maini Precision Technology limited)',
        Category: 'Excellence in Innovation & Value Contribution',
        desc: 'We are proud to share that Ring Plus Aqua Ltd. (JKMPTL) has been honored with the Innovation & Value Creation Award by Schaeffler India, in recognition of our outstanding contribution to product innovation, engineering excellence, and collaborative value generation.',
        desc2 : 'This award reflects our commitment to going beyond conventional supplier roles. Delivering tailored, high-performance solutions that drive efficiency, reliability, and long-term value for our partners. Recognition from a global technology leader like Schaeffler reinforces our position as a trusted innovation partner in the automotive component ecosystem.',
        highlightTexts: ['Ring Plus Aqua Ltd.','Innovation & Value Creation Award by Schaeffler India,'],
        images: [
            './images/awards/Award by Schaeffler for Innovation & Value.png',
        ],

    },
    {
        tag: 'Global Reach Award – 2024',
        PresentedBy : 'Danfoss',
      
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) has been honored with the Global Reach Award by Danfoss.',
        desc2:'This award recognizes our expanding global footprint and consistent excellence in delivering world-class engineering solutions across international markets. It reflects our commitment to building trusted partnerships and powering progress on a global scale.',
        images: [
            './images/awards/global-reach-2.jpg',
            './images/awards/global-reach-award.jpeg',
           
        ],
    
    },
    {
        tag: 'Certificate of Appreciation – Global Reach 2024',
        PresentedBy : 'Danfoss Power Solutions',
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) received a Certificate of Appreciation from Danfoss Power Solutions for Global Reach.',
        desc2:'This recognition highlights our exceptional service across multiple regions, our commitment to high standards, and our ability to deliver seamless support across global supply locations.',
        images: [
            './images/awards/cert-of-appreciation-global-reach.jpeg',
            
        ],
        
    },


     {
        tag: 'Best Process Control Award – 2022',
        PresentedBy : 'Stanley Black & Decker',
        desc: 'We are proud to share that Maini Precision Products Limited (Now JKMPTL) has received the Best Process Control Award 2022 from Stanley Black & Decker.',
        desc2:'This recognition celebrates our outstanding commitment to robust process control, consistent quality, and operational excellence. It reflects the strength of our systems and the dedication of our teams to exceed global expectations in every delivery.',
        images: [
            './images/awards/best-process-control-award.jpeg',
            
        ],
        
    },


     {
        tag: 'Excellent Quality Delivery Performance 2022',
        PresentedBy : ' Cummins',
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) received the Excellent Quality Delivery Performance Award from Cummins in 2022.',
        desc2:'This award recognizes our consistent commitment to delivering top-quality components on time, every time. It reflects our dedication to operational excellence, strong customer focus, and uncompromising quality standards.',
        images: [
            './images/awards/excellence-quality-delivery.jpeg',
            
        ],
        
    },



      {
        tag: 'India Supplier Conference - 2022',
        PresentedBy : 'Wabtec Corporation',
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) was recognized at the India Supplier Conference 2022 hosted by Wabtec Corporation.',
        desc2:'The award acknowledges our role as a trusted partner in driving sustainable growth, innovation, and excellence in collaboration with global industry leaders.',
        images: [
            './images/awards/india-supplier-conference.jpeg',
            
        ],
        
    },




    {
        tag: 'India Suppliers Conference – 2022',
        PresentedBy : 'Cummins India',
        desc: 'We are honored to receive the Best Supplier Innovation Award – Direct Sourcing from Cummins at the India Suppliers Conference 2022.',
        desc2:'This recognition highlights our commitment to innovation, excellence, and continuous improvement in direct sourcing. At Maini Precision Products Ltd. (Now JKMPTL), we remain driven by a spirit of partnership and progress.',
        images: [
            './images/awards/india-supplier-conference-cummins.jpeg',
            
        ],
        
    },
    {
        tag: 'Certificate of Congratulations – Plant Inauguration',
        PresentedBy: 'Volvo Group Purchasing',
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) was congratulated by Volvo Group Purchasing on the successful inauguration of our new plant in Nashik.',
        desc2: 'This recognition marks a significant milestone in our growth journey, reflecting our continued focus on expanding capabilities, strengthening partnerships, and driving forward with purpose and progress.',
        images: [
            './images/awards/cert-of-cong.jpeg',
        ],
    },
    {
        tag: 'AMF Cluster Star Performer Award 2025',
        awarder: 'ACMA Mobility Foundation',
        RecognizedUnit: 'JK Files & Engineering Ltd, Chiplun',
        Category: 'Lean Manufacturing Program',
        desc: 'We are proud to announce that JK Maini (formerly JK Files & Engineering Ltd) – Chiplun Unit has been honored with the prestigious AMF Cluster Star Performer Award 2025 by the ACMA Mobility Foundation. This recognition was presented during the 59th ACMA Excellence Awards & 10th Technology Summit, held on March 4th, 2025, at Le Meridien, New Delhi. This award celebrates our team exceptional implementation of Lean Manufacturing practices, driving efficiency, process optimization, and sustainable operations on the shop floor. It reflects our unwavering commitment to continuous improvement, innovation, and excellence in manufacturing. Our Lean journey is built on strong fundamentals, empowered teams, and a culture of operational discipline—this recognition strengthens our resolve to keep raising the bar.',
        highlightTexts: ['AMF Cluster Star Performer Award 2025', '(formerly JK Files & Engineering Ltd) – Chiplun Unit', '59th ACMA Excellence Awards & 10th Technology Summit,', 'exceptional implementation of Lean Manufacturing practices,'],
        images: [
            './images/awards/acma (1).jpeg',
            './images/awards/acma (2).jpeg',
        ],
    },
    {
        tag: 'Certificate of Appreciation',
        title:'Quality Performance (Zero Defect)',
        awarder: 'Suzuki Motor Gujarat Private Limited',
        Recipient: 'Ring Plus Aqua Ltd. (Now JK Maini Precision Technology limited)',
        year: '2023–24',
        desc: 'We are honored to receive the Certificate of Appreciation from Suzuki Motor Gujarat Private Limited for our superior quality performance and zero-defect delivery in the year 2023–24. This recognition is a testament to our unwavering commitment to manufacturing excellence, precision engineering, and quality-first culture.',
        desc2: 'Delivering defect-free components to a global automotive leader like Suzuki reaffirms our capabilities as a trusted supplier and motivates us to continue setting benchmarks in quality and reliability.',
        images: [
            './images/awards/Suzuki motors award.png',
        ],
    },
    {
        tag: 'EEPC India Quality Awards – Gold Winner',
        
        PresentedBy: 'EEPC India | Date: 18 February 2025 | Venue: New Delhi',
        Category: 'Medium Organization',
       
        desc: 'We are proud to announce that Ring Plus Aqua Ltd. (Now JKMPTL) has been honored with the prestigious Gold Award at the 4th Edition of the EEPC India Quality Awards, under the Medium Organization Category. This national recognition by EEPC India (Engineering Export Promotion Council) celebrates our unwavering commitment to quality excellence, global competitiveness, and best-in-class manufacturing practices. The award is a testament to our robust systems, continuous improvement culture, and customer-first mindset that guide our export quality initiatives. Receiving this accolade among India most respected engineering exporters underscores our relentless pursuit of precision, consistency, and innovation across global markets.',
        highlightTexts: [
            'Ring Plus Aqua Ltd. (Now JKMPTL)',
            'Gold Award at the 4th Edition of the EEPC India Quality Awards',
            'Medium Organization Category',
            'EEPC India (Engineering Export Promotion Council)',
        ],
        images: [
            './images/awards/EEPC export qulality award.png',
            './images/awards/EEPC award.png',
            './images/awards/EEPC.png',
        ],
    },
    {
        tag: 'EEPC India Green Awards',
        title: 'Certificate of Appreciation',
        awarder: 'Engineering Export Promotion Council (EEPC) India',
        Category: 'Medium Enterprise',
        desc: 'Ring Plus Aqua Ltd. (Now JKMPTL) was honored with a Certificate of Appreciation at the EEPC India Green Awards, recognizing our proactive commitment to sustainability and green manufacturing practices in the Medium Enterprise category.',
        desc2: 'This award reflects our ongoing efforts in integrating environmentally responsible processes, reducing our carbon footprint, and promoting eco-conscious operations across our value chain. Our presentation at the awards platform showcased innovative practices in energy efficiency, waste management, and sustainable resource utilization — reinforcing our pledge to build a cleaner, greener future.',
        highlightTexts: [
            'Certificate of Appreciation at the EEPC India Green Awards',
            'Medium Enterprise',
            'environmentally responsible processes',
        ],
        images: [
            './images/awards/EEPC india green award.png',
        ],
    },
    {
        tag: 'ACMA Export Excellence Awards',
       
        awarder: 'Automotive Component Manufacturers Association of India (ACMA)',
        Category: 'Silver',
        desc: 'We are honored to announce that Ring Plus Aqua Ltd. (RPAL) (Now JKMPTL) has been recognized with the Silver Award for Excellence in Export at the prestigious ACMA Excellence Awards 2024.',
        desc2: 'Presented by the Automotive Component Manufacturers Association of India, this accolade celebrates our strong export performance, global market presence, and unwavering commitment to delivering precision-engineered components to leading international OEMs and Tier 1 suppliers.',
        desc3:'The award was presented by Mr. Vinod Aggarwal, MD and CEO of VE Commercial Vehicles Ltd. (a Volvo Group and Eicher Motors JV ) and former President of SIAM (Society of Indian Automobile Manufacturers).',
        desc4: 'This recognition reaffirms RPAL\'s role as a key contributor to India\'s global mobility leadership, driven by advanced manufacturing, sustainable practices, and customer-centric innovation.',
        highlightTexts: [
            'Ring Plus Aqua Ltd. (RPAL) (Now JKMPTL)',
            'Silver Award for Excellence in Export',
            'ACMA Excellence Awards 2024',
            'Automotive Component Manufacturers Association of India',
            'Mr. Vinod Aggarwal, MD and CEO of VE Commercial Vehicles Ltd.',
            'Volvo Group and Eicher Motors JV',
            'former President of SIAM',
        ],
        images: [
            './images/awards/ACMA Award _ Export Excellence.png',
            
        ],
    },
    {
        tag: 'ACMA Excellence Award',
        title: 'Excellence in Export – Large Turnover Category',
      
        AwardedAt: 'India\'s Road to Global Mobility Excellence Summit',
        SummitCategory: 'Turnover ₹250–750 Cr',
        desc: 'We are proud to have been honored with the \'Excellence in Export\' award under the Large Turnover category at the prestigious India\'s Road to Global Mobility Excellence Summit. This recognition affirms our commitment to delivering world-class precision components that power mobility solutions across global markets.',
        desc2: 'This milestone stands as a testament to our vision placing India at the heart of global mobility transformation through engineering that is innovative, reliable, and future-ready.',
        highlightTexts: [
            '\'Excellence in Export\'',
            'Large Turnover category',
            'placing India at the heart of global mobility transformation',
        ],
        images: [
            './images/awards/Exellence in export award.png',
            
           
        ],
    },
    {
        tag: 'EEPC Export Excellence Award',
        title: 'EEPC Export Excellence Award – Recognizing Global Leadership in Engineering Exports',
        awarder: 'Engineering Export Promotion Council (EEPC India)',
        Recipient: 'JK Maini Precision Technology Limited (Formerly Ring Plus Aqua Ltd.)',
        Category: 'Export Excellence – Gold',
        desc: 'We are proud to share that Ring Plus Aqua Ltd. (Now JKMPTL) has been honored with the prestigious EEPC Export Excellence Award – Gold Category, a recognition that celebrates our consistent performance and leadership in international markets.',
        highlightTexts: [
            'Ring Plus Aqua Ltd. (Now JKMPTL)',
            'EEPC Export Excellence Award – Gold Category',
        ],
        images: [
            './images/awards/EEPC Export Excellence Award.png',
            
        ],
    },
    {
        tag: 'ACMA Excellence Awards 2024',
        title: 'Certificate of Merit (Striving Category)',
        awarder: 'Automotive Component Manufacturers Association of India (ACMA)',
        RecognizedUnit: 'Ring Plus Aqua Ltd. (Now JK Maini Precision Technology Limited), SBD Plant, Nashik',
        Category: 'Excellence in Manufacturing – Large Enterprises (Turnover > INR 250 to 750 Cr)',
        PresentedAt: '59th ACMA Excellence Awards & 10th Technology Summit 2025',
        Theme: 'Viksit Bharat: Innovating for an Inclusive, Sustainable & Resilient Manufacturing Future',
        desc: 'We are proud to share that Ring Plus Aqua Ltd. (Now JKMPTL) – SBD Plant was conferred the Certificate of Merit in the Striving Category at the prestigious ACMA Excellence Awards 2024. This recognition, under the large enterprise turnover bracket, celebrates our ongoing commitment to manufacturing excellence, continuous improvement, and operational resilience.',
        highlightTexts: [
            'Ring Plus Aqua Ltd. (Now JKMPTL) – SBD Plant',
            'Certificate of Merit',
            'Striving Category',
            'ACMA Excellence Awards 2024',
            'manufacturing excellence, continuous improvement,',
            'operational resilience.',
        ],
        desc2: 'Being recognized on a national platform that emphasizes sustainability and innovation is a powerful validation of our dedicated efforts to drive world-class practices in precision manufacturing. We remain committed to pushing boundaries, embracing digital transformation, and contributing meaningfully to India\'s growth as a global manufacturing hub.',
        images: [
            './images/awards/ACMA Excellence Awards 2024 striving.png',
        ],
    },
    {
        tag: 'EEPC India Star Performer Award – Large Enterprise',
        
        PresentedBy : 'EEPC India',
        Category: 'Defence Related Equipment and Parts',
        Location: 'Bengaluru',
        desc: 'We are proud to share that Maini Precision Products Ltd. (Now JKMPTL) has received the Star Performer Award from EEPC India in the Large Enterprise category for Defence Related Equipment and Parts.',
        desc2: 'This esteemed recognition reflects our contribution to India\'s defence exports and our continued focus on precision, quality, and innovation in advanced manufacturing.',
        images: [
            './images/awards/eepc-india-star.jpeg',
        ],
    },
    {
        tag: 'ACMA Special Lean Implementation Program',
        
        awarder: 'Automotive Component Manufacturers Association of India (ACMA)',
        Recipient: 'JK Files & Engineering Ltd. (JK Superdrive), Chiplun',
        Duration: 'November 2023 – April 2025',
        desc: 'We are proud to participate in the prestigious ACMA Special Lean Implementation Program, a strategic initiative aimed at driving operational efficiency, process excellence, and waste reduction. This engagement underscores our commitment to embedding lean manufacturing principles across our operations enhancing productivity, reducing cycle times, and delivering greater value to our customers. Over the program’s course, our teams will work closely with ACMA experts to refine workflows, foster a culture of continuous improvement, and set new benchmarks in manufacturing excellence.',
      
        images: [
            './images/awards/ACMA special.jpg',
            './images/awards/acma special lean-1.jpg',
            './images/awards/acma special lean-2.jpg',
            

        ],
    },
    {
        tag: 'EEPC India Green Awards – Large Enterprise Category',
       
        awarder: 'EEPC India',
        Recipient: 'JK Files & Engineering Ltd. (JK Superdrive)',
        Date: '27 November 2024',
        desc: 'JK Files & Engineering Ltd. (JK Superdrive) has been honored with the EEPC India Green Award in the Large Enterprise Category, recognizing our exceptional commitment to sustainable manufacturing and environmental stewardship. This accolade reflects our proactive approach to adopting green technologies, optimizing resource utilization, and reducing our carbon footprint—while maintaining uncompromised quality and performance. Being acknowledged by EEPC India is a testament to our belief that responsible manufacturing is not just a business imperative but a responsibility towards the planet and future generations.',
    
        images: [
            './images/awards/EEPC-india-large-enterprise.png',
        ],
    },
]

const AwardCard = ({ award, index }) => {
    const [activeImg, setActiveImg] = useState(0)
    const [fading, setFading]       = useState(false)
    const [visible, setVisible]     = useState(false)
    const isEven      = index % 2 === 0
    const hasMultiple = award.images.length > 1
    const imagesLen   = award.images.length

    // Refs — immune to stale closures
    const cardRef          = useRef(null)
    const intervalRef      = useRef(null)
    const fadeTimeoutRef   = useRef(null)    // for the fade swap
    const restartTimeoutRef = useRef(null)   // for deferred auto-restart
    const activeImgRef     = useRef(0)

    // ── Intersection Observer: animate only when card enters viewport ──
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

    // ── Core slide transition ──────────────────────────────────────────
    const goTo = (nextIdx) => {
        clearTimeout(fadeTimeoutRef.current)
        setFading(true)
        fadeTimeoutRef.current = setTimeout(() => {
            activeImgRef.current = nextIdx
            setActiveImg(nextIdx)
            setFading(false)
        }, 300)
    }

    // ── Auto-play helpers (plain functions — stored in refs below) ─────
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

    // Keep refs fresh so onMouseEnter/Leave always call latest version
    const startAutoRef = useRef(startAuto)
    const stopAutoRef  = useRef(stopAuto)
    useEffect(() => { startAutoRef.current = startAuto }, )
    useEffect(() => { stopAutoRef.current  = stopAuto  }, )

    // Boot once on mount
    useEffect(() => {
        startAuto()
        return () => { stopAuto(); clearTimeout(fadeTimeoutRef.current) }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // ── Manual thumbnail click ─────────────────────────────────────────
    const handleThumbClick = (i) => {
        if (i === activeImgRef.current) return
        stopAuto()
        clearTimeout(fadeTimeoutRef.current)
        goTo(i)
        // Restart AFTER the fade fully finishes (separate ref — won't overwrite fade)
        restartTimeoutRef.current = setTimeout(() => startAuto(), 400)
    }

    // ── Highlight helper ──────────────────────────────────────────────────
    const renderDesc = (text, highlights) => {
        if (!highlights || highlights.length === 0) return text

        // Collect the FIRST occurrence of each phrase in the original text
        const matches = []
        highlights.forEach(phrase => {
            const idx = text.indexOf(phrase)
            if (idx !== -1) matches.push({ idx, end: idx + phrase.length, phrase })
        })

        // Sort by position so we process left to right
        matches.sort((a, b) => a.idx - b.idx)

        // Build output, skipping overlapping matches
        const result = []
        let cursor = 0
        matches.forEach(({ idx, end, phrase }) => {
            if (idx < cursor) return // overlaps previous match — skip
            if (idx > cursor) result.push(text.slice(cursor, idx))
            result.push(
                <strong key={phrase} style={{ color: '#18191A', fontWeight: 600 }}>{phrase}</strong>
            )
            cursor = end
        })
        if (cursor < text.length) result.push(text.slice(cursor))

        return <>{result}</>
    }

    return (
        <div
            ref={cardRef}
            className={`fa-card ${visible ? 'fa-card--visible' : 'fa-card--hidden'} ${isEven ? '' : 'fa-card--reverse'}`}
            style={{ transitionDelay: `${index * 0.06}s` }}
        >

            {/* Text side */}
            <div className="fa-card-text">
                <span className="fa-card-tag" style={{ color: award.accent, borderColor: `${award.accent}40` }}>
                    🏆 {award.tag}
                </span>
                <h3 className="fa-card-title">{award.title}</h3>
                {/* Only show meta when there's data */}
                {(award.awarder || award.year || award.PresentedBy || award.Date || award.AwardedAt || award.SummitCategory || award.PresentedAt || award.Theme || award.Location || award.Duration) && (
                    <div className="fa-card-meta">
                        {award.awarder && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Awarded by</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.awarder}</span>
                            </span>
                        )}
                        {award.PresentedBy && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Presented by</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.PresentedBy}</span>
                            </span>
                        )}
                        {award.RecognizedUnit && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Recognized Unit</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.RecognizedUnit}</span>
                            </span>
                        )}
                        {award.Recipient && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Recipient</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Recipient}</span>
                            </span>
                        )}
                        {award.Category && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Category</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Category}</span>
                            </span>
                        )}
                        {award.Event && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Event</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Event}</span>
                            </span>
                        )}
                        {award.Date && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Date</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Date}</span>
                            </span>
                        )}
                        {award.AwardedAt && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Awarded at</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.AwardedAt}</span>
                            </span>
                        )}
                        {award.SummitCategory && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Summit Category</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.SummitCategory}</span>
                            </span>
                        )}
                        {award.Venue && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Venue</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Venue}</span>
                            </span>
                        )}
                        {award.PresentedAt && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Presented at</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.PresentedAt}</span>
                            </span>
                        )}
                        {award.Theme && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Theme</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Theme}</span>
                            </span>
                        )}
                        {award.Location && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Location</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Location}</span>
                            </span>
                        )}
                        {award.Duration && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Duration</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.Duration}</span>
                            </span>
                        )}
                        {award.year && (
                            <span className="fa-meta-item">
                                <span className="fa-meta-label">Year</span>
                                <span className="fa-meta-colon">:</span>
                                <span className="fa-meta-value">{award.year}</span>
                            </span>
                        )}
                    </div>
                )}
                <p className="fa-card-desc">{renderDesc(award.desc, award.highlightTexts)}</p>
                {award.desc2 && <p className="fa-card-desc">{renderDesc(award.desc2, award.highlightTexts)}</p>}
                {award.desc3 && <p className="fa-card-desc">{renderDesc(award.desc3, award.highlightTexts)}</p>}
                {award.desc4 && <p className="fa-card-desc">{renderDesc(award.desc4, award.highlightTexts)}</p>}
                <div className="fa-card-bar" style={{ background: `linear-gradient(90deg, ${award.accent}, #ED193A)` }}></div>
            </div>

            {/* Image side — pause slider on hover */}
            <div
                className="fa-card-img-side"
                onMouseEnter={() => stopAutoRef.current()}
                onMouseLeave={() => startAutoRef.current()}
            >
                <div className="fa-img-main-wrap">
                    <img
                        src={award.images[activeImg]}
                        alt={award.title || award.tag}
                        className={`fa-img-main${fading ? ' fa-img--fading' : ''}`}
                    />
                    <div className="fa-img-overlay">
                        {award.badgeYear && (
                            <span className="fa-img-year" style={{ background: award.accent }}>{award.badgeYear}</span>
                        )}
                    </div>
                </div>
                {/* Thumbnail strip */}
                {hasMultiple && (
                    <div className="fa-img-thumbs">
                        {award.images.map((img, i) => (
                            <button
                                key={i}
                                className={`fa-thumb${i === activeImg ? ' fa-thumb--active' : ''}`}
                                onClick={() => handleThumbClick(i)}
                                style={i === activeImg ? { borderColor: '#E81C3D' } : {}}
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

const JKMPTLAwards = () => {
    return (
        <div>
            <>
                <PageHeader
                    title="Awards & Recognitions"
                    desc="At JK Maini, our commitment to excellence has been recognized through numerous awards and accolades  reflecting our dedication to quality, innovation, and sustainable practices."
                    bgImg={banner}
                />

                {/* ── Certifications Section ───────────────────────────── */}
                <section className="awards-section">
                    <div className="awards-section-overlay"></div>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                        <div className="section-title text-center">
                            <span className="section-sub-title wow fadeInUp" data-wow-delay="0.1s">
                                Our Certifications
                            </span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Our Recognitions & Achievements
                            </h2>
                            <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s" style={{ color: '#000000' }}>
                                Over the years, JK Maini has been honored with numerous certifications and accolades that reflect our commitment to excellence, innovation, and quality in precision engineering. Our dedication to delivering world-class solutions has earned us recognition from industry leaders, partners, and global organizations.
                            </p>
                        </div>

                        <div className="cert-awards-grid">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cert-award-card cert-appear"
                                    style={{ animationDelay: `${index * 0.06}s` }}>
                                    <div className="cert-award-img-panel">
                                        <img src={cert.img} alt={cert.title} className="cert-award-img" />
                                    </div>
                                    <div className="cert-award-footer">
                                        <h3 className="cert-award-title">{cert.title}</h3>
                                        <span className="cert-award-sub">{cert.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ── Featured Awards Section ──────────────────────────── */}
                <section className="featured-awards-section">
                    <div className="container">

                        {/* Section Header */}
                        <div className="section-title text-center">
                            <span className="section-sub-title wow fadeInUp" data-wow-delay="0.1s">
                                Featured Awards
                            </span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Our Recognitions & Achievements
                            </h2>
                            <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s" style={{ color: '#000000' }}>
                                A showcase of the prestigious awards that define JK Maini's legacy of quality, innovation,
                                and engineering excellence across global industries.
                            </p>
                        </div>

                        {/* Award Cards */}
                        <div className="fa-cards-list">
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

export default JKMPTLAwards
