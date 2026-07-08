import { useState, useEffect, useRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SectorCards.css";

// ─── SVGs for Cards ─────────────────────────────────────────────────────────────

const SVGS = {
  commercial: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  passenger: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m14 0v1.5a2.5 2.5 0 0 1-5 0V16m5 0h-5m-9 0v1.5a2.5 2.5 0 0 1-5 0V16m5 0H2"/></svg>,
  ev: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  offhighway: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="15" r="5"/><circle cx="17" cy="15" r="3"/><path d="M11.5 15H14"/><path d="M7 10h4.5l1.5 5"/><path d="M14 11h3l2 4"/></svg>,
  tools: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  locomotive: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M16 19l2 3"/><path d="M2 22h20"/></svg>,
  agriculture: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  defence: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTORS = [
  { id: "commercial", label: "Commercial Vehicles", img: "/images/sectorCards/commercial-vehicles.png", hasTab: true, subtitle: "Powering heavy-duty transport.", icon: SVGS.commercial },
  { id: "passenger-veh", label: "Passenger Vehicles", img: "/images/sectorCards/passanger-vehicles.png", hasTab: true, subtitle: "Driving everyday journeys.", icon: SVGS.passenger },
  { id: "ev", label: "Electric & Hybrid", img: "/images/sectorCards/electric-vehicles.png", hasTab: true, subtitle: "Efficient power. Smarter future.", icon: SVGS.ev },
  { id: "off-highway", label: "Off Highway & Industrial Applications", img: "/images/sectorCards/off-highway.png", hasTab: true, subtitle: "Built for the toughest terrains.", icon: SVGS.offhighway },
  { id: "tools", label: "Tools, Hardware & Powertools", img: "/images/sectorCards/power-tools-sector.png", hasTab: true, subtitle: "Precision in every tool.", icon: SVGS.tools },
  { id: "locomotive", label: "Locomotive & Marine", img: "/images/sectorCards/loco-marine.png", hasTab: true, subtitle: "Connecting the world.", icon: SVGS.locomotive },
  { id: "agriculture", label: "Agriculture", img: "/images/sectorCards/agriculture-sector.png", hasTab: false, subtitle: "Cultivating tomorrow.", icon: SVGS.agriculture },
  { id: "defence", label: "Defence", img: "/images/sectorCards/defence-sector.png", hasTab: false, subtitle: "Securing our future.", icon: SVGS.defence },
  { id: "E-bikes", label: "E-bikes", img: "/images/sectorCards/E-bikes.png", hasTab: false, subtitle: "Securing our future.", icon: SVGS.defence },
  { id: "After-market", label: "After-market", img: "/images/sectorCards/after-market.png", hasTab: false, subtitle: "Securing our future.", icon: SVGS.defence },
];

const TAB_DATA = {
  commercial: {
    subTabs: [
      { id: "engine", label: "Engine" },
      { id: "chasis", label: "Steering Chassis" },
      { id: "fuel-injection", label: "Fuel Injection" },
      { id: "transmission", label: "Transmission" },
    ],
    parts: {
      engine: [
        { img: "/images/automobile-parts/cv/Engine/Flange Shaft.png", label: "Flange Shaft" },
        { img: "/images/automobile-parts/cv/transmission/ring-gear.png", label: "Ring Gear" },
        { img: "/images/automobile-parts/cv/Engine/Water Pump Bearings.png", label: "Water Pump Bearing" },
        { img: "/images/automobile-parts/cv/transmission/Flexplates.png", label: "Flexplates" },
        { img: "/images/automobile-parts/cv/Engine/idler-shaft.png", label: "Idler Shaft" },
        { img: "/images/automobile-parts/cv/Engine/Flinger Sleeve.png", label: "Finger Sleeve" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0042 (3).png", label: "Hub Idlers" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0130.png", label: "Bridge Body" },
        { img: "/images/automobile-parts/cv/Engine/IMG_0029.png", label: "PF Pumps and Hand Primer" },
        { img: "/images/automobile-parts/cv/Engine/Pulley.png", label: "Pulley" },
      ],
      chasis: [
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0168.png", label: "Pitman Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0170.png", label: "Tie Rod Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0174.png", label: "Steering Arm" },
        { img: "./images/automobile-parts/cv/steering chasis filters/IMG_0175.png", label: "Intermediate Arm" },
      ],
      "fuel-injection": [
        { img: "./images/automobile-parts/cv/Fuel Injection/needle.png", label: "Needle" },
        { img: "./images/automobile-parts/cv/Fuel Injection/Pressure Release Valve.png", label: "Pressure Release Valve" },
        { img: "./images/automobile-parts/cv/Fuel Injection/Seat retainer.png", label: "Seat Retainer" },
      ],
      transmission: [
        { img: "./images/automobile-parts/cv/transmission/Release yoke assem.png", label: "Release Yoke Assem" },
        { img: "./images/automobile-parts/cv/transmission/Roller Yoke Assembly.png", label: "Roller Yoke Assembly" },
        { img: "./images/automobile-parts/cv/transmission/Cross Shaft.png", label: "Cross Shaft" },
        { img: "./images/automobile-parts/cv/transmission/ELSD Housing.png", label: "ELSD Housing" },
        { img: "./images/automobile-parts/cv/transmission/release-sleeve.png", label: "Release Sleeve" },
        { img: "./images/automobile-parts/cv/transmission/gear-shift-shaft.png", label: "Gear Shift Shaft" },
        { img: "./images/automobile-parts/cv/transmission/Gear Shift shafts.png", label: "Gear Shift Shaft" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0144.png", label: "Bracket" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0145.png", label: "Detent Plunger" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0147.png", label: "Driver Disc" },
        { img: "./images/automobile-parts/cv/transmission/IMG_0148.png", label: "ELSD" },
        { img: "./images/automobile-parts/cv/transmission/Valve Spool.png", label: "Valve Spool" },
      ],
    },
  },
  "passenger-veh": {
    subTabs: [
      { id: "pv-engine", label: "Engine" },
      { id: "pv-fuel-injection", label: "Fuel Injection" },
      { id: "pv-transmission", label: "Transmission" },
      { id: "pv-breaking", label: "Braking System" },
    ],
    parts: {
      "pv-engine": [
        { img: "./images/automobile-parts/pv/Engine/Water Pump Bearings.png", label: "Water Pump Bearing" },
        { img: "./images/automobile-parts/pv/transmission/ring-gear.png", label: "Ring Gear" },
        { img: "./images/automobile-parts/pv/transmission/Flexplates.png", label: "Flexplates" },
        { img: "./images/automobile-parts/pv/Engine/sensor-ring.png", label: "Sensor Rings" },
        { img: "./images/automobile-parts/pv/Engine/VCT - 2.png", label: "Valve Control Center Bolt" },
        { img: "./images/automobile-parts/pv/Engine/VCT - 4.png", label: "Center Bolt Body" },
        { img: "./images/automobile-parts/pv/Engine/Bypass Shafts.png", label: "Bypass Shaft" },
        { img: "./images/automobile-parts/pv/Engine/Hex shaft.png", label: "Hex Shaft" },
        { img: "./images/automobile-parts/pv/Engine/IMG_0088.png", label: "Rotor" },
        { img: "./images/automobile-parts/pv/Engine/Selector Shaft.png", label: "Selector Shaft" },
      ],
      "pv-fuel-injection": [
        { img: "./images/automobile-parts/pv/Fuel Injection/IMG_0054.png", label: "Pump Body - PHP6" },
        { img: "./images/automobile-parts/pv/Fuel Injection/IMG_0057.png", label: "Pump Body - PHP4" },
        { img: "./images/automobile-parts/pv/Fuel Injection/php1.png", label: "Pump Body - PHP1" },
      ],
      "pv-transmission": [
        { img: "./images/automobile-parts/pv/transmission/Automatic Manual Transmission.png", label: "Automatic Manual Transmission" },
        { img: "./images/automobile-parts/pv/transmission/IMG_0090.png", label: "Engagement Shaft" },
      ],
      "pv-breaking": [
        { img: "./images/automobile-parts/pv/Engine/sensor-ring.png", label: "Sensor Rings" },
      ],
    },
  },
  ev: {
    subTabs: [{ id: "ev-transmission", label: "Transmission" }],
    parts: {
      "ev-transmission": [
        { img: "./images/automobile-parts/ev/transmission/Clutch Flange.png", label: "Clutch Flange" },
        { img: "./images/automobile-parts/ev/transmission/Input shaft for referance.png", label: "Input Shaft for Reference" },
        { img: "./images/automobile-parts/ev/transmission/Lever arm.png", label: "Lever Arm" },
        { img: "./images/automobile-parts/ev/transmission/oil sleeve.png", label: "Oil Sleeve" },
        { img: "./images/automobile-parts/ev/transmission/Park pawl.png", label: "Park Pawl" },
        { img: "./images/automobile-parts/ev/transmission/Support Bracket.png", label: "Support Bracket" },
      ],
    },
  },
  "off-highway": {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_0012 (2) - Copy.png", label: "Mounting Flange" },
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_2307.png", label: "Piston" },
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_0013.png", label: "Bearing Housing" },
        { img: "./images/automobile-parts/industrial Hydraulics/Wheel Fork.png", label: "Wheel Fork" },
      ],
    },
  },
  tools: {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/industrial Hydraulics/IMG_2198.png", label: "Cam Carrier" },
        { img: "./images/automobile-parts/industrial Hydraulics/Power Tools.png", label: "Power Tool Components" },
      ],
    },
  },
  locomotive: {
    subTabs: [],
    parts: {
      default: [
        { img: "./images/automobile-parts/cv/Engine/Bearing journal.png", label: "Bearing Journal" },
      ],
    },
  },
};

// ─── SVGs & Helpers ────────────────────────────────────────────────────────────

const ICON_MAP = {
  engine: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20h2"/><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M5 14h14"/><path d="M7 14v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4"/><path d="M3 10h18v4H3z"/></svg>,
  chasis: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 15v7"/><path d="M9.5 10.5 4 7"/><path d="M14.5 10.5 20 7"/></svg>,
  "fuel-injection": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  transmission: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M22 12h-2"/><path d="M4 12H2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/><path d="m4.93 19.07 1.41-1.41"/></svg>,
  default: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
};

const getIcon = (id) => {
  if (id.includes("engine")) return ICON_MAP.engine;
  if (id.includes("chasis") || id.includes("breaking")) return ICON_MAP.chasis;
  if (id.includes("fuel")) return ICON_MAP["fuel-injection"];
  if (id.includes("transmission")) return ICON_MAP.transmission;
  return ICON_MAP.default;
};

// ─── PartCard ──────────────────────────────────────────────────────────────────

function PartCard({ img, label, index, onOpenPopup }) {
  return (
    <div className="sc-part-card-new" onClick={() => onOpenPopup(img)}>
      <div className="sc-part-img-wrap-new">
        <img src={img} alt={label} className="sc-part-img-new popup-image" />
      </div>
      <div className="sc-part-label-new">
        {label}
        <div className="sc-part-underline"></div>
      </div>
    </div>
  );
}

// ─── ImagePopup ──────────────────────────────────────────────────────────────

function ImagePopup({ src, onClose }) {
  const lensRef = useRef(null);
  const imgRef = useRef(null);
  const zoom = 2;

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
    <div className="sc-popup-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sc-popup-content">
        <button className="sc-close-btn" onClick={onClose}>×</button>
        <div className="sc-magnifier-container">
          <div ref={lensRef} className="sc-magnifier-lens"></div>
          <img
            ref={imgRef}
            src={src}
            alt="Zoomed product"
            className="sc-popup-img"
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

// ─── ProductPanel ──────────────────────────────────────────────────────────────

function ProductPanel({ tabId, onOpenPopup }) {

  const data = TAB_DATA[tabId];
  const hasSubTabs = data?.subTabs?.length > 0;
  const firstSubId = hasSubTabs ? data.subTabs[0].id : "default";
  const [activeSub, setActiveSub] = useState(firstSubId);

  // Reset to first sub-tab whenever the parent tab changes
  useEffect(() => {
    setActiveSub(hasSubTabs ? data.subTabs[0].id : "default");
  }, [tabId, hasSubTabs, data]);


  if (!data) return null;
  const parts = data.parts[activeSub] || [];

  const activeSubLabel = hasSubTabs 
    ? data.subTabs.find(s => s.id === activeSub)?.label.toUpperCase() || "" 
    : "PRODUCTS";

  return (
    <>
      <div className="sc-main-header">
        <h3>EXPLORE OUR <span>{activeSubLabel}</span> COMPONENTS</h3>
        <div className="sc-header-underline"></div>
      </div>
      <div className="sc-product-panel-new">
        {hasSubTabs && (
          <div className="sc-sidebar">
            {data.subTabs.map((sub) => (
              <button
                key={sub.id}
                className={`sc-sidebar-btn ${activeSub === sub.id ? "active" : ""}`}
                onClick={() => setActiveSub(sub.id)}
              >
                <span className="sc-sidebar-icon">
                  {getIcon(sub.id)}
                </span>
                <div className="sc-sidebar-text">
                  {sub.label}
                </div>
                <span className="sc-sidebar-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              </button>
            ))}
          </div>
        )}
        
        <div className="sc-main-content">
          <div className="sc-parts-grid-wrapper">
            <div className="sc-parts-grid-new">
              {parts.length === 0
                ? <p className="sc-empty">Products coming soon.</p>
                : parts.map((p, i) => <PartCard key={i} index={i} img={p.img} label={p.label} onOpenPopup={onOpenPopup} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function SectorCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [popupImg, setPopupImg] = useState(null);
  const activeTab = SECTORS[activeIndex]?.hasTab ? SECTORS[activeIndex].id : null;


  return (
    <div className="sc-root">
      {/* ── Header ── */}
      <section className="sc-header-section">
        <div className="container">
          <div className="our-industries-content">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                Precision Across Every Segment of Mobility and Industry
              </span> <br />

              <h2 className="text-anime-style-3" data-cursor="-opaque">
                From Roads to Rail. From Engines to Electrification.
              </h2>

              <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">At JK Maini Precision Technology Limited (JKMPTL), we deliver precision-engineered components and systems that power the world's leading mobility and industrial platforms, across commercial vehicles, passenger cars, off-highway equipment, and next-generation electric technologies. Our products are trusted for their performance, durability, and precision across powertrain, drivetrain, and motion systems. Whether it's moving people, powering machines, or enabling future mobility, our segment-specific expertise and engineering excellence drive progress at scale. With a commitment to innovation, precision manufacturing, and global quality standards, JK Maini supports OEMs and Tier-1 suppliers worldwide with solutions built for the demands of today, and the opportunities of tomorrow.</p>
            </div>

          </div>
        </div>


      </section>

      {/* ── Swiper Carousel ── */}
      <section className="sc-swiper-section">
        <div className="sc-container">
          <div className="sc-swiper-outer-wrapper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              slideToClickedSlide={true}
              coverflowEffect={{
                rotate: 0,
                stretch: -60,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                el: '.sc-pagination',
                bulletClass: 'sc-dot',
                bulletActiveClass: 'active',
                renderBullet: function (index, className) {
                  return '<button class="' + className + '"></button>';
                }
              }}
              navigation={{
                nextEl: '.sc-nav-next',
                prevEl: '.sc-nav-prev',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="sector-swiper"
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {SECTORS.map((sector, i) => (
                <SwiperSlide key={sector.id} className="sc-slide-wrapper">
                  <div className="sc-card-skew-wrapper">
                    <div className="sc-card-inner">
                      <div className="sc-card-bg" style={{ backgroundColor: sector.id === 'ev' ? '#f4f6f9' : (sector.id === 'tools' ? '#d4cbc5' : 'transparent') }}>
                        <img 
                          src={sector.img} 
                          alt={sector.label} 
                          className="sc-card-img" 
                          style={
                            sector.id === 'ev' || sector.id === 'tools' ? { objectFit: 'contain' } : 
                            sector.id === 'locomotive' || sector.id === 'E-bikes' ? { objectFit: 'cover', objectPosition: '30px center' } : 
                            {}
                          } 
                        />
                        <div className="sc-card-overlay"></div>
                        <div className="sc-card-gradient"></div>
                      </div>
                      <div className="sc-card-content">
                        <h3 className="sc-card-title">{sector.label}</h3>
                        {sector.subtitle && <p className="sc-card-subtitle">{sector.subtitle}</p>}
                        <div className="sc-card-line"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="sc-nav-btn sc-nav-prev">‹</button>
            <button className="sc-nav-btn sc-nav-next">›</button>

            {/* Custom Pagination */}
            <div className="sc-pagination"></div>
          </div>
        </div>
      </section>

      {/* ── Product Panel ── */}
      {activeTab && (
        <section className="sc-products-section" key={activeTab}>
          <div className="sc-container">
            <ProductPanel tabId={activeTab} onOpenPopup={setPopupImg} />
          </div>
        </section>
      )}
      {/* ── Image Popup ── */}
      {popupImg && (
        <ImagePopup src={popupImg} onClose={() => setPopupImg(null)} />
      )}
    </div>
  );
}