import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Track.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/* Leaflet icon fix */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/* 🔒 ADMIN DATA — Multiple Shipments */
const shipmentsData = {
  "30enfb5u1n": {
    status: "In Transit",
    dispatchCountry: "United States",
    destinationCountry: "Portugal",
    packageInfo: {
      description: "Laptop",
      weight: "5kg",
      quantity: "1 box",
      shippingType: "Air Freight",
      notes: "Fragile",
    },
    receiver: {
      name: "Carlos Silva",
      email: "carlos.silva@email.com",
      phone: "+351 912 345 678",
      country: "Portugal",
      address: "Lisbon, Portugal",
    },
    route: [
      { country: "United States", coords: [37.7749, -122.4194] },
      { country: "Portugal", coords: [38.7223, -9.1393] },
    ],
    history: [
      {
        date: "2026-03-14",
        time: "08:00",
        location: "San Francisco",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
    ],
  },
  "30enfb5u2n": {
    status: "On Hold",
    dispatchCountry: "Germany",
    destinationCountry: "France",
    packageInfo: {
      description: "Clothes",
      weight: "10kg",
      quantity: "3 boxes",
      shippingType: "Ground Freight",
      notes: "Keep dry",
    },
    receiver: {
      name: "Marie Dupont",
      email: "marie.dupont@email.com",
      phone: "+33 612 345 678",
      country: "France",
      address: "Paris, France",
    },
    route: [
      { country: "Germany", coords: [52.52, 13.4050] },
      { country: "France", coords: [48.8566, 2.3522] },
    ],
    history: [
      {
        date: "2026-03-13",
        time: "10:30",
        location: "Berlin",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
    ],
  },
  "30enfb5u3n": {
    status: "In Transit",
    dispatchCountry: "Brazil",
    destinationCountry: "Argentina",
    packageInfo: {
      description: "Books",
      weight: "15kg",
      quantity: "10 boxes",
      shippingType: "Air Freight",
      notes: "Handle with care",
    },
    receiver: {
      name: "Juan Perez",
      email: "juan.perez@email.com",
      phone: "+54 911 234 5678",
      country: "Argentina",
      address: "Buenos Aires, Argentina",
    },
    route: [
      { country: "Brazil", coords: [-14.235, -51.9253] },
      { country: "Argentina", coords: [-34.6037, -58.3816] },
    ],
    history: [
      {
        date: "2026-03-12",
        time: "09:15",
        location: "São Paulo",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
    ],
  },
  "30enfb5u4n": {
    status: "In Transit",
    dispatchCountry: "Japan",
    destinationCountry: "Australia",
    packageInfo: {
      description: "Electronics",
      weight: "20kg",
      quantity: "5 boxes",
      shippingType: "Air Freight",
      notes: "Fragile",
    },
    receiver: {
      name: "Liam Wong",
      email: "liam.wong@email.com",
      phone: "+61 412 345 678",
      country: "Australia",
      address: "Sydney, Australia",
    },
    route: [
      { country: "Japan", coords: [35.6895, 139.6917] },
      { country: "Australia", coords: [-33.8688, 151.2093] },
    ],
    history: [
      {
        date: "2026-03-11",
        time: "08:00",
        location: "Tokyo",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
    ],
  },
};

/* 🔊 SOUND ENGINE */
const useBeep = () => {
  const ctxRef = useRef(null);
  const play = (freq = 800) => {
    if (!ctxRef.current)
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();

    const osc = ctxRef.current.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctxRef.current.destination);
    osc.start();
    setTimeout(() => osc.stop(), 120);
  };
  return play;
};

/* 🧠 MAP CONTROLLER — FIXED MAX ZOOM */
const MapController = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(points, {
        padding: [60, 60],
        maxZoom: 4, // ✅ prevents zooming out too far
      });
    }, 200);
  }, [map, points]);

  return null;
};

const Track = () => {
  const [code, setCode] = useState("");
  const [shipment, setShipment] = useState(null);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");

  const moveIntervalRef = useRef(null);
  const beepIntervalRef = useRef(null);

  const beep = useBeep();

  const handleTrack = () => {
    const data = shipmentsData[code]; // exact tracking code match
    if (!data) {
      setShipment(null);
      setError("❌ Incorrect tracking code. Please check and try again.");
      return;
    }
    setError("");
    setShipment(data);
    setIndex(0);
  };

  useEffect(() => {
    beepIntervalRef.current = setInterval(() => {
      if (!shipment) return;
      shipment.status === "On Hold" ? beep(400) : beep(850);
    }, 1000);
    return () => clearInterval(beepIntervalRef.current);
  }, [shipment, beep]);

  useEffect(() => {
    if (!shipment) return;
    clearInterval(moveIntervalRef.current);
    moveIntervalRef.current = setInterval(() => {
      if (shipment.status !== "In Transit") return;
      setIndex((prev) => (prev >= shipment.route.length - 1 ? prev : prev + 1));
    }, 7000);
    return () => clearInterval(moveIntervalRef.current);
  }, [shipment]);

  if (!shipment) {
    return (
      <div className="smart-tracking-page">
        <div className="smart-panel">
          <h1>Shipment Tracking</h1>
          <div className="tracking-guide">
            <p>Enter your tracking number below to see the real-time status of your shipment.</p>
          </div>
          {error && <p className="tracking-error">{error}</p>}
          <div className="track-input">
            <input
              placeholder="Enter tracking reference"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
          </div>
        </div>
      </div>
    );
  }

  const current = shipment.route[index];

  return (
    <div className="smart-tracking-page">
      <div className="smart-panel">
        <h1>Shipment Tracking</h1>
   
   <div className="shipment">
        <div className="info-card">
          <h3>Receiver Information</h3>
          <p><strong>Name:</strong> {shipment.receiver.name}</p>
          <p><strong>Email:</strong> {shipment.receiver.email}</p>
          <p><strong>Phone:</strong> {shipment.receiver.phone}</p>
          <p><strong>Country:</strong> {shipment.receiver.country}</p>
          <p><strong>Address:</strong> {shipment.receiver.address}</p>
        </div>

        <div className="info-card">
          <h3>Package Information</h3>
          <p><strong>Description:</strong> {shipment.packageInfo.description}</p>
          <p><strong>Weight:</strong> {shipment.packageInfo.weight}</p>
          <p><strong>Quantity:</strong> {shipment.packageInfo.quantity}</p>
          <p><strong>Shipping Type:</strong> {shipment.packageInfo.shippingType}</p>
          <p><strong>Notes:</strong> {shipment.packageInfo.notes}</p>
        </div>

        <div className="info-card">
          <h3>Shipment History</h3>
          {shipment.history.map((h, i) => (
            <div key={i} className="history-entry">
              <p><strong>Date:</strong> {h.date} <strong>Time:</strong> {h.time}</p>
              <p><strong>Location:</strong> {h.location}</p>
              <p><strong>Status:</strong> {h.status}</p>
              <p><strong>Updated By:</strong> {h.updatedBy}</p>
              <p><strong>Remarks:</strong> {h.remarks}</p>
              <hr />
            </div>
          ))}
        </div>
    </div>

        <div className="smart-map-wrapper">
          <MapContainer className="smart-map" center={[20, -30]} zoom={3}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapController points={shipment.route.map((r) => r.coords)} />
            <CircleMarker
              center={current.coords}
              radius={18}
              className={`smart-pulse ${shipment.status === "On Hold" ? "hold" : ""}`}
            />
            <Marker position={current.coords}>
              <Popup>
                {shipment.status === "On Hold" ? "⚠️ ON HOLD" : "In Transit"}<br />
                {current.country}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Track;