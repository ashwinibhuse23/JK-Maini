import React, { useState, useEffect, useRef } from "react";
import "./AeroParts.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "engine", label: "Complex Engine Parts" },
  { id: "structure", label: "Structure Parts" },
  { id: "system", label: "System Parts" },
];

const ICON_MAP = {
  engine: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20h2"/><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M5 14h14"/><path d="M7 14v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4"/><path d="M3 10h18v4H3z"/></svg>,
  structure: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  system: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
};

const AERO_PARTS = {
  engine: [
    { img: "/images/complex-engine-parts/Turbine _Vanes.png", label: "Turbine Vanes" },
    { img: "/images/complex-engine-parts/Housing Assembly.png", label: "Housing Assembly" },
    { img: "/images/complex-engine-parts/Fuel System Cylinder.png", label: "Fuel System Cylinder" },
    { img: "/images/complex-engine-parts/Stator Blade.png", label: "Stator Blade" },
    { img: "/images/complex-engine-parts/Fuel Control Assembly.png", label: "Fuel Control Assembly" },
    { img: "/images/complex-engine-parts/Body insert Assembly.png", label: "Body Insert Assembly" },
    { img: "/images/complex-engine-parts/Lever Throttle.png", label: "Lever Throttle" },
    { img: "/images/complex-engine-parts/TGB Mount.png", label: "TGB Mount" },
    { img: "/images/complex-engine-parts/Inlet.png", label: "Inlet" },
    { img: "/images/complex-engine-parts/Gear Train  support plate.png", label: "Gear Train  support plate" },
    { img: "/images/complex-engine-parts/Tie Rod Assembly.png", label: "Tie Rod Assembly" },
    { img: "/images/complex-engine-parts/Mount Bracket.png", label: "Mount Bracket" },
  ],
  structure: [
    { img: "/images/structure-parts/Swinging Links.png", label: "Swinging Links" },
    { img: "/images/structure-parts/Tank Drag Strut Assembly.png", label: "Tank Drag Strut Assembly" },
    { img: "/images/structure-parts/Hook Assembly.png", label: "Hook Assembly" },
    { img: "/images/structure-parts/Rings.png", label: "Rings" },
    { img: "/images/structure-parts/Pylon.png", label: "Pylon" },
    
  ],
  system: [
    { img: "/images/system-parts/Manifolds.png", label: "Manifolds" },
    { img: "/images/system-parts/Clevis.png", label: "Clevis" },
    { img: "/images/system-parts/Flange Tube.png", label: "Flange Tube" },
    { img: "/images/system-parts/TIR Holder.png", label: "TIR Holder" },
    { img: "/images/system-parts/Lighting System Housings.png", label: "Lighting System Housings" },
    { img: "/images/system-parts/Housing cover.png", label: "Housing cover" },
    
  ],
};

// ─── PartCard ──────────────────────────────────────────────────────────────────

function PartCard({ img, label, onOpenPopup }) {
  return (
    <div className="ap-part-card-new" onClick={() => onOpenPopup(img)}>
      <div className="ap-part-img-wrap-new">
        <img src={img} alt={label} className="ap-part-img-new popup-image" />
      </div>
      <div className="ap-part-label-new">
        {label}
        <div className="ap-part-underline"></div>
      </div>
    </div>
  );
}

// ─── ImagePopup ──────────────────────────────────────────────────────────────

function ImagePopup({ src, onClose }) {
  const lensRef = useRef(null);
  const imgRef = useRef(null);
  const zoom = 2.5;

  const handleMouseMove = (e) => {
    const lens = lensRef.current;
    const img = imgRef.current;
    if (!lens || !img) return;

    const rect = img.getBoundingClientRect();
    let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    let y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    const lensRadius = lens.offsetWidth / 2;
    
    // Boundary checks
    if (x < lensRadius / zoom) x = lensRadius / zoom;
    if (x > img.width - lensRadius / zoom) x = img.width - lensRadius / zoom;
    if (y < lensRadius / zoom) y = lensRadius / zoom;
    if (y > img.height - lensRadius / zoom) y = img.height - lensRadius / zoom;

    lens.style.left = (x - lensRadius) + "px";
    lens.style.top = (y - lensRadius) + "px";
    lens.style.backgroundImage = `url('${src}')`;
    lens.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    lens.style.backgroundPosition = `-${(x * zoom - lensRadius)}px -${(y * zoom - lensRadius)}px`;
  };

  const showLens = () => { if (lensRef.current) lensRef.current.style.opacity = 1; };
  const hideLens = () => { if (lensRef.current) lensRef.current.style.opacity = 0; };

  return (
    <div className="ap-popup-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ap-popup-content">
        <button className="ap-close-btn" onClick={onClose}>×</button>
        <div className="ap-magnifier-container">
          <div ref={lensRef} className="ap-magnifier-lens"></div>
          <img
            ref={imgRef}
            src={src}
            alt="Zoomed product"
            className="ap-popup-img"
            onMouseMove={handleMouseMove}
            onMouseEnter={showLens}
            onMouseLeave={hideLens}
            onTouchMove={handleMouseMove}
            onTouchStart={showLens}
            onTouchEnd={hideLens}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AeroParts() {
  const [activeTab, setActiveTab] = useState("engine");
  const [popupImg, setPopupImg] = useState(null);

  const parts = AERO_PARTS[activeTab] || [];

  return (
    <div className="ap-root">
      {/* ── Header Section ── */}
      <section className="ap-header-section">
        

        <div className="container">
          <div className="our-industries-content">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                One Stop Solution for
              </span> <br />

              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Aircraft Components
              </h2>

              <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">We manufacture a wide range of high-precision aircraft components that meet the rigorous standards of the aerospace industry. Our expertise includes the production of critical parts such as landing gear components, structural assemblies, engine mounts, and precision-machined fittings for both fixed-wing and rotary aircraft.
              </p>

              <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">With advanced manufacturing capabilities and strict quality controls, we supply OEMs and Tier-1 aerospace suppliers with components engineered for safety, reliability, and performance. Our solutions support commercial, defence, and helicopter programs worldwide, helping our partners achieve new heights in aviation excellence.

              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Product Panel Layout ── */}
      <section className="ap-products-section">
        <div className="ap-container">
          
          <div className="ap-main-header">
            <h3>EXPLORE OUR <span>{TABS.find(t => t.id === activeTab)?.label.toUpperCase()}</span></h3>
            <div className="ap-header-underline"></div>
          </div>

          <div className="ap-product-panel-new">
            
            {/* Sidebar */}
            <div className="ap-sidebar">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`ap-sidebar-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="ap-sidebar-icon">
                    {ICON_MAP[tab.id]}
                  </span>
                  <div className="ap-sidebar-text">
                    {tab.label}
                  </div>
                  <span className="ap-sidebar-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </span>
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="ap-main-content">
              <div className="ap-parts-grid-wrapper">
                <div className="ap-parts-grid-new">
                  {parts.length === 0 ? (
                    <p className="ap-empty">Products coming soon.</p>
                  ) : (
                    parts.map((p, i) => (
                      <PartCard key={i} img={p.img} label={p.label} onOpenPopup={setPopupImg} />
                    ))
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      

      {/* ── Image Popup ── */}
      {popupImg && (
        <ImagePopup src={popupImg} onClose={() => setPopupImg(null)} />
      )}
    </div>
  );
}
