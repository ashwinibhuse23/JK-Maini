import React from "react";
import { WorldMap } from "./WorldMap";
import { FaPlane, FaCar, FaWarehouse, FaWrench, FaIndustry } from "react-icons/fa";
import "./MapDemo.css";

export default function MapDemo() {
  const dots = [
  {
    start: { lat: 60.1304, lng: -115.3468, label: "Canada" },
    end: { lat: 40.8283, lng: -85.5795, label: "USA" }
  },
  {
    start: { lat: 40.8283, lng: -85.5795, label: "USA" },
    end: { lat: 15.6345, lng: -105.5528, label: "Mexico", offsetX: -20 }
  },
  {
    start: { lat: 15.6345, lng: -105.5528, label: "Mexico" },
    end: { lat: -15.2350, lng: -60.9253, label: "South America" }
  },
  {
    start: { lat: 40.8283, lng: -85.5795, label: "USA" },
    end: { lat: 55.1109, lng: 15.6821, label: "Europe" }
  },
  {
    start: { lat: 55.1109, lng: 15.6821, label: "Europe" },
    end: { lat: -5.2921, lng: 25.8219, label: "Africa" }
  },
  {
    start: { lat: -5.2921, lng: 25.8219, label: "Africa" },
    end: { lat: 30.2048, lng: 45.2708, label: "Middle East", offsetX: -10, offsetY: -8 }
  },
  {
    start: { lat: 30.2048, lng: 45.2708, label: "Middle East", offsetX: -10, offsetY: -8 },
    end: { lat: 15.5937, lng: 82.9629, label: "India", offsetX: 10, offsetY: 8 }
  },
  {
    start: { lat: 15.5937, lng: 82.9629, label: "India", offsetX: 10, offsetY: 8 },
    end: { lat: 40.6762, lng: 142.6503, label: "Japan" }
  },
  {
    start: { lat: 15.5937, lng: 82.9629, label: "India", offsetX: 10, offsetY: 8 },
    end: { lat: -10.2088, lng: 115.8456, label: "Indonesia" }
  },
  {
    start: { lat: -10.2088, lng: 115.8456, label: "Indonesia" },
    end: { lat: -30.2744, lng: 140.7751, label: "Australia" }
  }
];

  return (
    <section className="demo-section">
      <div className="demo-wrapper">
      <div className="demo-header">
        <div className="demo-tag">
          Global Presence
        </div>
        <h2 className="demo-title">BUILT LOCALLY. TRUSTED GLOBALLY.</h2>
      </div>
      
        <div style={{ transform: "translateX(-30px)" }}>
          <WorldMap dots={dots} lineColor="#E81C3D" />
        </div>
      </div>
    </section>
  );
}
