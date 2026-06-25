import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import banner from '/images/Events/eventsback.png'
import PastEventsSection from './PastEventsSection'
import './JKMPTLNewsEvents.css'

/* ─── Events Data ──────────────────────────────────────────────────────── */
const events = [
    {
        id: 1,
        type: 'EXHIBITION',
        dayRange: '04 – 06',
        month: 'SEP',
        year: '2025',
        title: 'Expo Nacional Ferretera – México 2025',
        location: 'Expo Guadalajara',
        date: '04 – 06 September 2025',
        image: '/images/Events/nacional-1.png',
        images: [
            '/images/Events/nacional-1.png',
            '/images/Events/nacional-2.png',
        ],
        link: 'https://www.expoferretera.com.mx/en-gb.html',
    },
    {
        id: 2,
        type: 'CONCLAVE',
        dayRange: '27 – 28',
        month: 'NOV',
        year: '2025',
        title: 'Global Manufacturing Conclave, New Delhi',
        location: 'New Delhi, India',
        date: '27 – 28 November 2025',
        image: '/images/Events/event-3.png',
        images: null,
        link: 'https://manufacturing.economictimes.indiatimes.com/global-manufacturing-conclave?ag=events_listing&utm_source=events_listing&utm_medium=eventListing',
    },
    {
        id: 3,
        type: 'INITIATIVE',
        dayRange: '06',
        month: 'DEC',
        year: '2025',
        title: 'Integrated manufacturing excellence initiative',
        location: 'Mumbai, India',
        date: '06 December 2025',
        image: '/images/Events/Integrated manufacturing excellence initiative.png',
        images: null,
        link: 'https://www.siae.fr/en/',
    },
]

/* ─── SVG Icons ────────────────────────────────────────────────────────── */
const CalendarIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const PinIcon = ({ size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

const ArrowIcon = ({ color = '#fff', size = 13 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
)

const BookmarkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
)

const ChevronIcon = ({ dir = 'right', size = 14, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left'
            ? <polyline points="15 18 9 12 15 6" />
            : <polyline points="9 18 15 12 9 6" />
        }
    </svg>
)

/* ─── Main Component ──────────────────────────────────────────────────── */
const JKMPTLNewsEvents = () => {
    const [activeId, setActiveId]   = useState(1)
    const [slideIndex, setSlideIndex] = useState(0)
    const [visible, setVisible]     = useState(false)
    const sectionRef                = useRef(null)
    const active = events.find(e => e.id === activeId)

    const slides = active.images || [active.image]
    const total  = slides.length

    /* ── Scroll-triggered section entrance ── */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.12 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    /* ── Reset slider when event changes ── */
    useEffect(() => { setSlideIndex(0) }, [activeId])

    /* ── Auto-advance every 3 s ── */
    useEffect(() => {
        if (total <= 1) return
        const t = setInterval(() => setSlideIndex(i => (i + 1) % total), 3000)
        return () => clearInterval(t)
    }, [activeId, total])

    const prevSlide = () => setSlideIndex(i => (i - 1 + total) % total)
    const nextSlide = () => setSlideIndex(i => (i + 1) % total)

    return (
        <div>
            <PageHeader title="News & Events" bgImg={banner} />

            <div className="ue-wrapper" ref={sectionRef}>
                <div className={`ue-section${visible ? ' ue-visible' : ''}`}>

                    {/* ── Left Sidebar ── */}
                    <aside className="ue-sidebar">

                        {/* Heading */}
                        <div className="ue-sidebar-heading ue-anim ue-anim--slide-left" style={{ '--delay': '0s' }}>
                            <span className="ue-heading-upcoming">Upcoming</span>
                            <span className="ue-heading-events">Events</span>
                        </div>

                        <p className="ue-sidebar-sub ue-anim ue-anim--fade" style={{ '--delay': '0.15s' }}>
                            Explore and connect with industry-leading events.
                        </p>

                        <div className="ue-sidebar-divider ue-anim ue-anim--scale-x" style={{ '--delay': '0.25s' }} />

                        {/* Event items — staggered slide-up */}
                        <div className="ue-list ue-list-scroll" data-lenis-prevent>
                            {events.map((ev, i) => (
                                <div
                                    key={ev.id}
                                    className={`ue-item ue-anim ue-anim--slide-up${activeId === ev.id ? ' active' : ''}`}
                                    style={{ '--delay': `${0.35 + i * 0.12}s` }}
                                    onClick={() => setActiveId(ev.id)}
                                >
                                    <div className="ue-item-date">
                                        <span className="day-range">{ev.dayRange}</span>
                                        <span className="month">{ev.month}</span>
                                        <span className="year">{ev.year}</span>
                                    </div>
                                    <div className="ue-item-info">
                                        <div className="ue-item-type">{ev.type}</div>
                                        <div className="ue-item-title">{ev.title}</div>
                                        <div className="ue-item-loc">
                                            <PinIcon size={10} />
                                            {ev.location}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </aside>

                    {/* ── Right Panel ── */}
                    <div className="ue-panel ue-anim ue-anim--slide-right" style={{ '--delay': '0.1s' }}>

                        {/* Image Slider */}
                        <div className="ue-panel-img-wrap">
                            <img
                                key={`${activeId}-${slideIndex}`}
                                src={slides[slideIndex]}
                                alt={active.title}
                                className="ue-panel-img ue-img-fade"
                            />

                            {total > 1 && (
                                <>
                                    <button className="ue-slide-btn ue-slide-btn--prev" onClick={prevSlide} aria-label="Previous image">
                                        <ChevronIcon dir="left" size={16} color="#fff" />
                                    </button>
                                    <button className="ue-slide-btn ue-slide-btn--next" onClick={nextSlide} aria-label="Next image">
                                        <ChevronIcon dir="right" size={16} color="#fff" />
                                    </button>
                                    <div className="ue-slide-dots">
                                        {slides.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`ue-slide-dot${i === slideIndex ? ' active' : ''}`}
                                                onClick={() => setSlideIndex(i)}
                                                aria-label={`Go to image ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content — fades in when switching events */}
                        <div className="ue-panel-content" key={activeId}>
                            <h2 className="ue-panel-title ue-content-fade">{active.title}</h2>

                            <div className="ue-panel-meta ue-content-fade" style={{ animationDelay: '0.05s' }}>
                                <span className="ue-panel-meta-item">
                                    <CalendarIcon />
                                    {active.date}
                                </span>
                                <span className="ue-panel-meta-sep">|</span>
                                <span className="ue-panel-meta-item">
                                    <PinIcon size={14} />
                                    {active.location}
                                </span>
                            </div>

                            <p className="ue-panel-desc ue-content-fade" style={{ animationDelay: '0.1s' }}>{active.desc}</p>

                            <div className="ue-panel-actions ue-content-fade" style={{ animationDelay: '0.15s' }}>
                                {active.link ? (
                                    <a
                                        href={active.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ue-btn-primary"
                                    >
                                        More About This Event
                                        <span className="ue-btn-circle">
                                            <ArrowIcon color="#E81C3D" size={13} />
                                        </span>
                                    </a>
                                ) : (
                                    <button className="ue-btn-primary" disabled>
                                        More About This Event
                                        <span className="ue-btn-circle">
                                            <ArrowIcon color="#E81C3D" size={13} />
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Past Events Section ── */}
            <PastEventsSection />

        </div>
    )
}

export default JKMPTLNewsEvents
