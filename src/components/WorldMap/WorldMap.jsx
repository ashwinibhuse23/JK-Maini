"use client";

import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import { FaPlane, FaCar, FaWarehouse, FaWrench, FaIndustry, FaCanadianMapleLeaf, FaFlagUsa, FaVihara, FaCross, FaGlobeEurope, FaMosque, FaTree, FaToriiGate, FaLandmark } from "react-icons/fa";
import { GiSydneyOperaHouse } from "react-icons/gi";
import "./WorldMap.css";

const getIconForLabel = (label) => {
  switch(label) {
    case 'Canada': return <FaCanadianMapleLeaf />;
    case 'USA': return <FaFlagUsa />;
    case 'Mexico': return <FaVihara />;
    case 'South America': return <FaCross />;
    case 'Europe': return <FaGlobeEurope />;
    case 'Middle East': return <FaMosque />;
    case 'India': return <FaLandmark />;
    case 'Africa': return <FaTree />;
    case 'Indonesia': return <FaVihara />;
    case 'Japan': return <FaToriiGate />;
    case 'Australia': return <GiSydneyOperaHouse />;
    default: return <FaWarehouse />;
  }
};

const getIndustryIcons = (label) => {
  switch (label) {
    case 'USA': return <><FaPlane /><FaCar /><FaWarehouse /><FaWrench /></>;
    case 'Canada': return <><FaWarehouse /></>;
    case 'Mexico': return <><FaCar /><FaWarehouse /></>;
    case 'South America': return <><FaWrench /></>;
    case 'Europe': return <><FaPlane /><FaCar /><FaWarehouse /><FaWrench /></>;
    case 'Middle East': return <><FaWrench /></>;
    case 'India': return <><FaPlane /><FaCar /><FaWarehouse /><FaWrench /><FaIndustry /></>;
    case 'Africa': return <><FaWrench /></>;
    case 'Indonesia': return <><FaCar /><FaWarehouse /><FaWrench /><FaIndustry /></>;
    case 'Japan': return <><FaCar /><FaWrench /></>;
    case 'Australia': return <><FaWrench /></>;
    default: return null;
  }
};

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  showLabels = true,
  animationDuration = 2,
  loop = true,
  theme = "light",
}) {
  const svgRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFF7F40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      }),
    [map, theme]
  );

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const uniquePoints = useMemo(() => {
    const pointsMap = new Map();
    dots.forEach((dot, i) => {
      const startKey = `${dot.start.lat}-${dot.start.lng}`;
      if (!pointsMap.has(startKey)) {
        pointsMap.set(startKey, {
          ...projectPoint(dot.start.lat, dot.start.lng),
          label: dot.start.label || `Location ${i}`,
          offsetX: dot.start.offsetX || 0,
          offsetY: dot.start.offsetY || 0,
        });
      }
      const endKey = `${dot.end.lat}-${dot.end.lng}`;
      if (!pointsMap.has(endKey)) {
        pointsMap.set(endKey, {
          ...projectPoint(dot.end.lat, dot.end.lng),
          label: dot.end.label || `Destination ${i}`,
          offsetX: dot.end.offsetX || 0,
          offsetY: dot.end.offsetY || 0,
        });
      }
    });
    return Array.from(pointsMap.values());
  }, [dots]);

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="world-map-container">
        <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="world-map-bg"
        alt="world map"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="world-map-svg"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: loop ? [0, 1, 1] : 1 }}
              transition={{
                duration: fullCycleDuration,
                delay: loop ? 0 : i * staggerDelay,
                repeat: loop ? Infinity : 0,
                ease: "easeInOut",
                times: loop ? [
                  (i * staggerDelay) / fullCycleDuration,
                  (i * staggerDelay + animationDuration) / fullCycleDuration,
                  1,
                ] : undefined,
              }}
            />
          );
        })}

        {uniquePoints.map((pt, idx) => (
          <g key={`points-${idx}`}>
            <motion.g
              onHoverStart={() => setHoveredLocation(pt.label)}
              onHoverEnd={() => setHoveredLocation(null)}
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <circle cx={pt.x} cy={pt.y} r="3" fill={lineColor} />
              <circle
                cx={pt.x}
                cy={pt.y}
                r="3"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="14"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </motion.g>

            {showLabels && pt.label && (
              <foreignObject
                x={pt.x - 70 + (pt.offsetX || 0)}
                y={pt.y - 65 + (pt.offsetY || 0)}
                width="180"
                height="65"
              >
                <div className="world-map-label-card-wrapper">
                  <div className="world-map-label-card">
                    <div className="card-content-wrapper">
                      <div className="card-label-text">{pt.label}</div>
                      <div className="card-small-icons">
                        {getIndustryIcons(pt.label)}
                      </div>
                    </div>
                  </div>
                </div>
              </foreignObject>
            )}
          </g>
        ))}
      </svg>

      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="world-map-tooltip"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      <div className="world-map-legend">
        <div className="legend-item">
          <div className="legend-icon"><FaWarehouse /></div>
          <span>Warehouse</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon"><FaCar /></div>
          <span>Automotive</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon"><FaWrench /></div>
          <span>Tools & Hardware</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon"><FaPlane /></div>
          <span>Aerospace</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon"><FaIndustry /></div>
          <span>Manufacturing Unit</span>
        </div>
      </div>

      <div className="manufacturing-plants-card">
        <h3 className="plants-title">OUR MANUFACTURING PLANTS</h3>
        <ul className="plants-list">
          <li>Nashik, India</li>
          <li>Chiplun, India</li>
          <li>Bengaluru, India</li>
          <li>Gresik (Greater Surabaya),Indonesia</li>
        </ul>
      </div>
    </div>
  );
}
