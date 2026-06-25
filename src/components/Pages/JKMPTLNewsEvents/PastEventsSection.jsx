import React, { useState, useRef } from 'react'
import './PastEventsSection.css'

/* ─── Past Events Data ─────────────────────────────────────────────────── */
const allEvents = [
    /* ── Corporate ── */
    {
        id: 1,
        number: '01',
        category: 'Corporate',
        date: { day: '25', month: 'Jan', year: '2025' },
        title: 'RPAL Plant Visit, Nashik',
        desc: 'An exclusive tour of our state-of-the-art manufacturing facility at Nashik.',
        iconType: 'factory',
        heroImage: '/images/Events/RPAL event/DSC_0262.jpg',
        thumbImages: [
            '/images/Events/RPAL event/DSC_0264.jpg',
            '/images/Events/RPAL event/DSC_0276.jpg',
            '/images/Events/RPAL event/DSC_0287.jpg',
            '/images/Events/RPAL event/DSC_0350.jpg',
            '/images/Events/RPAL event/DSC_0370.jpg',
            '/images/Events/RPAL event/DSC_0440.jpg',
            '/images/Events/RPAL event/DSC_0510.jpg',
            '/images/Events/RPAL event/DSC_0536.jpg',
        ],
    },
    {
        id: 2,
        number: '02',
        category: 'Corporate',
        date: { day: '16', month: 'Feb', year: '2025' },
        title: 'Punjab Dealer Meet, T&H Business',
        desc: 'An engaging meet with our esteemed dealers and partners.',
        iconType: 'users',
        heroImage: '/images/Events/pdm/punjab-dealer-meet (1).jpeg',
        thumbImages: [
            '/images/Events/pdm/punjab-dealer-meet (2).jpeg',
            '/images/Events/pdm/punjab-dealer-meet (3).jpeg',
            '/images/Events/pdm/punjab-dealer-meet (4).jpeg',
            '/images/Events/pdm/punjab-dealer-meet (5).jpeg',
            '/images/Events/pdm/punjab-dealer-meet (6).jpeg',
            '/images/Events/pdm/punjab-dealer-meet (7).jpeg',
        ],
    },
    /* ── Marketing ── */
    {
        id: 3,
        number: '01',
        category: 'Marketing',
        date: { day: '18', month: 'Mar', year: '2024' },
        title: 'Canton Fair 2025',
        desc: 'Innovation in Action — showcasing our product range at the world\'s largest trade fair.',
        iconType: 'globe',
        heroImage: '/images/Events/caton-fare/caton-fare (1).jpeg',
        thumbImages: [
            '/images/Events/caton-fare/caton-fare (2).jpeg',
            '/images/Events/caton-fare/caton-fare (3).jpeg',
            '/images/Events/caton-fare/caton-fare (4).jpeg',
            '/images/Events/caton-fare/caton-fare (5).jpeg',
            '/images/Events/caton-fare/caton-fare (6).jpeg',
            '/images/Events/caton-fare/caton-fare (7).jpeg',
        ],
    },
    {
        id: 4,
        number: '02',
        category: 'Marketing',
        date: { day: '17', month: 'Jan', year: '2025' },
        title: 'Bharat Mobility Global Expo 2025',
        desc: 'Yashobhoomi (India International Convention and Expo Center) in Dwarka.',
        iconType: 'car',
        heroImage: '/images/Events/Bharat-mobility/bm (1).jpeg',
        thumbImages: [
            '/images/Events/Bharat-mobility/bm (2).jpeg',
            '/images/Events/Bharat-mobility/bm (3).jpeg',
            '/images/Events/Bharat-mobility/bm (4).jpeg',
            '/images/Events/Bharat-mobility/bm (5).jpeg',
            '/images/Events/Bharat-mobility/bm (6).jpeg',
            '/images/Events/Bharat-mobility/bm (7).jpeg',
        ],
    },
]

/* ─── SVG Icons ────────────────────────────────────────────────────────── */
const CalendarBadgeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const BuildingIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
    </svg>
)

/* Factory icon — for RPAL Plant Visit */
const FactoryIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/>
        <path d="M5 20V10l5-3v3l5-3v3l4-2v12"/>
        <path d="M9 20v-5h6v5"/>
        <path d="M14 14h1M14 11h1"/>
    </svg>
)

/* Users icon — for Punjab Dealer Meet */
const UsersIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
)

/* Globe icon — for Canton Fair */
const GlobeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
)

/* Car icon — for Bharat Mobility */
const CarIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
        <circle cx="7.5" cy="17.5" r="2.5"/>
        <circle cx="17.5" cy="17.5" r="2.5"/>
    </svg>
)

/* Map iconType → component */
const EVENT_ICONS = {
    factory: FactoryIcon,
    users:   UsersIcon,
    globe:   GlobeIcon,
    car:     CarIcon,
    default: BuildingIcon,
}

const ArrowRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
)

const ChevronLeftIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
)

const ChevronRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

const CorporateIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
    </svg>
)

const MarketingIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
)

/* ─── Event Card ───────────────────────────────────────────────────────── */
const SCROLL_AMOUNT = 200

const EventCard = ({ event }) => {
    const thumbsRef   = useRef(null)
    const heroRef     = useRef(null)
    const [activeHero, setActiveHero] = useState(event.heroImage)
    const isAnimating = useRef(false)
    const IconComp    = EVENT_ICONS[event.iconType] || EVENT_ICONS.default

    const selectThumb = (src) => {
        if (src === activeHero || isAnimating.current) return
        isAnimating.current = true
        const img = heroRef.current
        if (img) {
            // fade out
            img.style.transition = 'opacity 0.25s ease'
            img.style.opacity = '0'
            setTimeout(() => {
                setActiveHero(src)
                // fade in after src update
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (heroRef.current) {
                            heroRef.current.style.opacity = '1'
                        }
                        isAnimating.current = false
                    })
                })
            }, 260)
        } else {
            setActiveHero(src)
            isAnimating.current = false
        }
    }

    const scrollRight = () => {
        if (!thumbsRef.current) return
        const el = thumbsRef.current
        const maxScroll = el.scrollWidth - el.clientWidth
        if (el.scrollLeft >= maxScroll - 4) {
            /* loop back to start */
            el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
            el.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
        }
    }

    return (
        <div className="pe-card">
            {/* ── Hero image ── */}
            <div className="pe-card-img-wrap">
                <img
                    ref={heroRef}
                    src={activeHero}
                    alt={event.title}
                    className="pe-card-hero"
                />

                {/* Blob + number */}
                <div className="pe-blob">
                    <span className="pe-number">{event.number}</span>
                </div>

                {/* Date badge */}
                <div className="pe-date-badge">
                    <CalendarBadgeIcon />
                    <span className="pe-date-day">{event.date.day}</span>
                    <span className="pe-date-month">{event.date.month}</span>
                    <span className="pe-date-year">{event.date.year}</span>
                </div>
            </div>

            {/* ── Card body ── */}
            <div className="pe-card-body">
                <div className="pe-card-main">
                    <div className="pe-card-icon-wrap">
                        <IconComp />
                    </div>
                    <div className="pe-card-text">
                        <h3 className="pe-card-title">{event.title}</h3>
                        <p className="pe-card-desc">{event.desc}</p>
                    </div>
                    {/* Arrow button scrolls the thumbnail strip */}
                    <button
                        className="pe-arrow-btn"
                        aria-label="Scroll images"
                        onClick={scrollRight}
                    >
                        <ArrowRightIcon />
                    </button>
                </div>

                {/* ── Scrollable thumbnail strip ── */}
                <div
                    className="pe-thumbs"
                    ref={thumbsRef}
                    data-lenis-prevent
                >
                    {event.thumbImages.map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt={`${event.title} photo ${i + 2}`}
                            className={`pe-thumb${activeHero === src ? ' pe-thumb--active' : ''}`}
                            draggable={false}
                            onClick={() => selectThumb(src)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

/* ─── Main Section ─────────────────────────────────────────────────────── */
const PastEventsSection = () => {
    const [activeTab, setActiveTab] = useState('corporate')
    const [animKey, setAnimKey]     = useState(0)

    const switchTab = (tab) => {
        if (tab === activeTab) return
        setActiveTab(tab)
        setAnimKey(k => k + 1)  // re-key cards for fade-in on tab switch
    }

    const visibleEvents = allEvents.filter(ev => ev.category === (activeTab === 'corporate' ? 'Corporate' : 'Marketing'))

    return (
        <section className="pe-section">
            {/* Decorative dots grid */}
            <div className="pe-dots-grid" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, i) => <span key={i} className="pe-dot-el" />)}
            </div>

            <div className="pe-container">
                {/* ── Header ── */}
                <div className="pe-header">
                    <div className="pe-header-left">
                        <span className="pe-eyebrow">Past Events</span>
                        <h2 className="pe-heading">Our Past Events</h2>
                        <div className="pe-heading-line" />
                    </div>
                    <div className="pe-tabs">
                        <button
                            className={`pe-tab${activeTab === 'corporate' ? ' active' : ''}`}
                            onClick={() => switchTab('corporate')}
                            id="pe-tab-corporate"
                        >
                            <CorporateIcon />
                            Corporate Events
                        </button>
                        <button
                            className={`pe-tab${activeTab === 'marketing' ? ' active' : ''}`}
                            onClick={() => switchTab('marketing')}
                            id="pe-tab-marketing"
                        >
                            <MarketingIcon />
                            Marketing Events
                        </button>
                    </div>
                </div>

                {/* ── Cards ── */}
                <div className="pe-cards" key={animKey}>
                    {visibleEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
                </div>

               
            </div>
        </section>
    )
}

export default PastEventsSection
