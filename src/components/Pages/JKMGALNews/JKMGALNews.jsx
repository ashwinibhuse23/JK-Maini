import React, { useState, useEffect, useRef, useCallback } from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import './JKMGALNews.css'

const banner = '/images/jkmgal/news/news.png'

/* ── Event data ──────────────────────────────────────────────────────────── */
const EVENTS = [
  {
    id: 'paris',
    tag: 'INTERNATIONAL EXHIBITION',
    date: '16–22 June, 2025',
    title: 'International Paris Air Show 2025',
   
    folder: 'paris-show',
    images: [
      'PAS (1).jpg', 'PAS (2).jpg', 'PAS (3).jpg', 'PAS (4).jpg',
      'PAS (5).jpg', 'PAS (6).jpg', 'PAS (7).jpg', 'PAS (8).jpg',
    ],
  },
  {
    id: 'aeroindia',
    tag: 'NATIONAL EXHIBITION',
    title: 'Aero India 2025',
    
    folder: 'aeroindia',
    images: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg',
      '5.jpg', '6.jpg', '7.jpg', '8.jpg',
      '9.jpg', '10.jpg', '11.jpg', '12.jpg',
      '13.jpg', '14.jpg', '15.jpg',
    ],
  },
]

/* ── useScrollReveal: Lenis-safe IntersectionObserver ───────────────────── */
function useScrollReveal(rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Small delay so Lenis finishes its initial layout pass
    const tid = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(el)
          }
        },
        { threshold: 0.05, rootMargin }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, 120)

    return () => clearTimeout(tid)
  }, [rootMargin])

  return [ref, inView]
}

/* ── Lightbox ────────────────────────────────────────────────────────────── */
function Lightbox({ src, onClose, onPrev, onNext }) {
  const [visible, setVisible] = useState(false)
  const [imgKey, setImgKey]   = useState(0)

  // Fade-in and properly stop Lenis (not just hide overflow)
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    window.dispatchEvent(new CustomEvent('lenis-stop'))
    return () => {
      cancelAnimationFrame(raf)
      window.dispatchEvent(new CustomEvent('lenis-start'))
    }
  }, [])

  // Bump imgKey when src changes → triggers CSS fade animation
  const prevSrc = useRef(src)
  useEffect(() => {
    if (src !== prevSrc.current) {
      prevSrc.current = src
      setImgKey((k) => k + 1)
    }
  }, [src])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className={`ev-lightbox${visible ? ' ev-lightbox--in' : ''}`}
      onClick={onClose}
    >
      <button className="ev-lb-close" onClick={onClose} aria-label="Close">✕</button>
      <button
        className="ev-lb-arrow ev-lb-arrow--prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >&#8249;</button>

      <img
        key={imgKey}
        src={src}
        alt="Event photo"
        className="ev-lb-img"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="ev-lb-arrow ev-lb-arrow--next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >&#8250;</button>
    </div>
  )
}

/* ── Event Row ───────────────────────────────────────────────────────────── */
const PAGE_SIZE = 8

function EventRow({ event, delay = 0 }) {
  const [page, setPage]               = useState(0)
  const [animKey, setAnimKey]         = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [rowRef, rowInView]           = useScrollReveal('0px 0px -40px 0px')
  const base = `/images/jkmgal/news/${event.folder}/`

  const totalPages    = Math.ceil(event.images.length / PAGE_SIZE)
  const visibleImages = event.images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const changePage = useCallback((newPage) => {
    setAnimKey((k) => k + 1)
    setPage(newPage)
  }, [])

  const prevPage = () => changePage((page - 1 + totalPages) % totalPages)
  const nextPage = () => changePage((page + 1) % totalPages)

  const absoluteIdx   = page * PAGE_SIZE + (lightboxIdx ?? 0)
  const openLightbox  = (i) => setLightboxIdx(i)
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])

  const lbPrev = useCallback(() => {
    const a = (absoluteIdx - 1 + event.images.length) % event.images.length
    setPage(Math.floor(a / PAGE_SIZE))
    setLightboxIdx(a % PAGE_SIZE)
  }, [absoluteIdx, event.images.length])

  const lbNext = useCallback(() => {
    const a = (absoluteIdx + 1) % event.images.length
    setPage(Math.floor(a / PAGE_SIZE))
    setLightboxIdx(a % PAGE_SIZE)
  }, [absoluteIdx, event.images.length])

  return (
    <>
      <div
        ref={rowRef}
        className={`ev-row${rowInView ? ' ev-row--visible' : ''}`}
        style={{ '--row-delay': `${delay}ms` }}
      >
        {/* ── Left info ─────────────────────────────────────────────── */}
        <div className="ev-info">
          {event.date && (
            <span className="ev-info-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              {event.date}
            </span>
          )}
          <h2 className="ev-info-title">{event.title}</h2>
          <p className="ev-info-desc">{event.desc}</p>
          <button className="ev-info-btn" onClick={() => openLightbox(0)}>
            View All Photos&nbsp;&nbsp;→
          </button>
        </div>

        {/* ── Photo grid ─────────────────────────────────────────────── */}
        <div className="ev-grid-wrap">
          {totalPages > 1 && (
            <button className="ev-arrow ev-arrow--prev" onClick={prevPage} aria-label="Previous">
              &#8249;
            </button>
          )}

          <div className="ev-grid ev-grid--animate" key={animKey}>
            {visibleImages.map((img, i) => (
              <div
                key={`${page}-${i}`}
                className="ev-thumb"
                style={{ '--thumb-i': i }}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={`${base}${img}`}
                  alt={`${event.title} photo ${page * PAGE_SIZE + i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="ev-thumb-overlay">
                  <span className="ev-thumb-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      width="20" height="20">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8"  x2="11" y2="14"/>
                      <line x1="8"  y1="11" x2="14" y2="11"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <button className="ev-arrow ev-arrow--next" onClick={nextPage} aria-label="Next">
              &#8250;
            </button>
          )}

          {totalPages > 1 && (
            <div className="ev-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`ev-dot${i === page ? ' active' : ''}`}
                  onClick={() => changePage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          src={`${base}${event.images[absoluteIdx]}`}
          onClose={closeLightbox}
          onPrev={lbPrev}
          onNext={lbNext}
        />
      )}
    </>
  )
}

/* ── Main Component ──────────────────────────────────────────────────────── */
const JKMGALNews = () => {
  const [headerRef, headerInView] = useScrollReveal('0px 0px -20px 0px')

  return (
    <div>
      <PageHeader
        title="In The Spotlight"
        desc="Catch the latest updates, milestones, and moments from JK Maini Global Aerospace Limited (JKMGAL), from industry events to company news and global recognitions."
        bgImg={banner}
      />

      <section className="ev-section">
        <div className="ev-bg-dots" aria-hidden="true" />

        <div
          ref={headerRef}
          className={`ev-header${headerInView ? ' ev-header--visible' : ''}`}
        >
          <span className="ev-header-tag">OUR EVENTS</span>
          <h1 className="ev-header-title">Explore. Connect. Inspire.</h1>
          
          {/* ── Small decorative plane badges ───────────────────────── */}
          <span className="ev-deco ev-deco--tr" aria-hidden="true">
            <svg viewBox="0 0 48 16" width="48" height="16" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="8" x2="30" y2="8" stroke="#E81C3D" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round"/>
              <circle cx="30" cy="8" r="2" fill="#E81C3D" opacity="0.7"/>
              <g transform="translate(33,2)">
                <path d="M10 6v-1.5l-4-2V1A1 1 0 0 0 5 1a1 1 0 0 0-1 1v1.5l-4 2V7l4-1v2l-1 .75V11l2-.5 2 .5V8.75L7 8V6z" fill="#E81C3D"/>
              </g>
            </svg>
          </span>
          <span className="ev-deco ev-deco--bl" aria-hidden="true">
            <svg viewBox="0 0 48 16" width="40" height="14" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(2,2)">
                <path d="M10 6v-1.5l-4-2V1A1 1 0 0 0 5 1a1 1 0 0 0-1 1v1.5l-4 2V7l4-1v2l-1 .75V11l2-.5 2 .5V8.75L7 8V6z" fill="#E81C3D" opacity="0.6"/>
              </g>
              <circle cx="18" cy="8" r="1.8" fill="#E81C3D" opacity="0.5"/>
              <line x1="20" y1="8" x2="44" y2="8" stroke="#E81C3D" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </span>
        </div>

        <div className="ev-rows">
          {EVENTS.map((ev, idx) => (
            <EventRow key={ev.id} event={ev} delay={idx * 100} />
          ))}
        </div>
      </section>

      {/* ── Collaborate CTA Banner ──────────────────────────────────── */}
      <section className="collab-banner">
        {/* Left: image with play overlay */}
        <div className="collab-img-wrap">
          <img
            src="/images/jkmgal/news/connect.png"
            alt="Aerospace collaboration"
            className="collab-img"
          />
          <div className="collab-play">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          </div>
        </div>

        {/* Center: tag + heading + sub */}
        <div className="collab-body">
          <div className="collab-tag-row">
            <span className="collab-tag">LET'S COLLABORATE</span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" className="collab-plane" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
            </svg>
            <span className="collab-dots" aria-hidden="true"/>
          </div>
          <h2 className="collab-heading">
            Want to collaborate on your next aerospace innovation?
          </h2>
         
        </div>

        <div className="collab-cta">
          <a href="/contact" className="collab-btn">
            Get in Touch
            <span className="collab-btn-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default JKMGALNews
