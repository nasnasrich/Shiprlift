import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, CircleMarker, Popup, Polyline, useMap } from "react-leaflet";import "leaflet/dist/leaflet.css";
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

/* 🔒 ADMIN DATA */
const shipmentsData = {
  "TRK123456US": {
    // status: "On Hold",
    status: "In Transit",
    dispatchCountry: "UAE",
    destinationCountry: "United States",
    packageInfo: {
      description: "Six bars of Gold. An iPhone 16 pro max. Documents, Several Item",
      weight: "10kg",
      quantity: "1 box",
      Type: "Freight Shipping",
      mode: "Sea",
      ID: "PKG-908172",
      container: "LCL",
      Sealnumber: "SEAL55661",
      notes: "Fragile",
    },
    receiver: {
      name: "Carlos Silva",
      email: "carlos@email.com",
      phone: "+351 912 345 678",
      country: "United States",
      address: "1508 Keeaumoku st, Apt B-304 Honolulu, Hl 96822, USA",
    },
    route: [
         { country: "UAE", coords: [25.2048, 55.2708] },
         { country: "UAE", coords: [25.2048, 55.2708] },
      // { country: "USA", coords: [40.7128, -74.006] },
    ],
    history: [
      {
        date: "2026-03-08",
        time: "09:15",
        location: "Dubai",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-09",
        time: "14:00",
        location: "Abu Dhabi",
        status: "In Transit",
        updatedBy: "Admin",
        remarks: "Customs inspection",
      },
    ],
  },

  "TRK987654UK": {
    status: "In Transit",
    dispatchCountry: "United Kingdom",
    destinationCountry: "Germany",
    packageInfo: {
      description: "Clothes",
      weight: "8kg",
      quantity: "2 boxes",
      shippingType: "Road Freight",
      notes: "Standard delivery",
    },
    receiver: {
      name: "Anna Müller",
      email: "anna@email.com",
      phone: "+49 170 123456",
      country: "Germany",
      address: "Berlin, Germany",
    },
    route: [
      { country: "UK", coords: [51.5074, -0.1278] },
      { country: "Germany", coords: [52.52, 13.405] },
    ],
    history: [
      {
        date: "2026-03-11",
        time: "10:15",
        location: "London",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-12",
        time: "16:00",
        location: "Dover",
        status: "In Transit",
        updatedBy: "Driver",
        remarks: "Package loaded onto truck",
      },
    ],
  },

  "TRK555111NG": {
    status: "In Transit",
    dispatchCountry: "Nigeria",
    destinationCountry: "Ghana",
    packageInfo: {
      description: "Phones",
      weight: "3kg",
      quantity: "1 box",
      shippingType: "Air Freight",
      notes: "Handle with care",
    },
    receiver: {
      name: "Kwame Mensah",
      email: "kwame@email.com",
      phone: "+233 20 123456",
      country: "Ghana",
      address: "Accra, Ghana",
    },
    route: [
      { country: "Nigeria", coords: [6.5244, 3.3792] },
      { country: "Ghana", coords: [5.6037, -0.187] },
    ],
    history: [
      {
        date: "2026-03-09",
        time: "07:30",
        location: "Lagos",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-10",
        time: "12:00",
        location: "Abuja",
        status: "In Transit",
        updatedBy: "Courier",
        remarks: "Package in transit",
      },
    ],
  },

  "TRK222333CA": {
    status: "Delivered",
    dispatchCountry: "Canada",
    destinationCountry: "USA",
    packageInfo: {
      description: "Documents",
      weight: "1kg",
      quantity: "Envelope",
      shippingType: "Express",
      notes: "Confidential",
    },
    receiver: {
      name: "John Smith",
      email: "john@email.com",
      phone: "+1 555 1234",
      country: "USA",
      address: "New York, USA",
    },
    route: [
      { country: "Canada", coords: [43.6532, -79.3832] },
      { country: "USA", coords: [40.7128, -74.006] },
    ],
    history: [
      {
        date: "2026-03-08",
        time: "09:00",
        location: "Toronto",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-09",
        time: "14:30",
        location: "Buffalo",
        status: "In Transit",
        updatedBy: "Courier",
        remarks: "Package crossed border",
      },
      {
        date: "2026-03-10",
        time: "11:00",
        location: "New York",
        status: "Delivered",
        updatedBy: "Courier",
        remarks: "Package delivered to receiver",
      },
    ],
  },

  "TRK444888FR": {
    status: "On Hold",
    dispatchCountry: "France",
    destinationCountry: "Italy",
    packageInfo: {
      description: "Wine bottles",
      weight: "10kg",
      quantity: "3 boxes",
      shippingType: "Road",
      notes: "Fragile",
    },
    receiver: {
      name: "Marco Rossi",
      email: "marco@email.com",
      phone: "+39 345 123456",
      country: "Italy",
      address: "Rome, Italy",
    },
    route: [
      { country: "France", coords: [48.8566, 2.3522] },
      { country: "Italy", coords: [41.9028, 12.4964] },
    ],
    history: [
      {
        date: "2026-03-07",
        time: "08:45",
        location: "Paris",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-08",
        time: "15:00",
        location: "Lyon",
        status: "On Hold",
        updatedBy: "Admin",
        remarks: "Customs delay",
      },
    ],
  },

  "TRK111999AU": {
    status: "In Transit",
    dispatchCountry: "Australia",
    destinationCountry: "New Zealand",
    packageInfo: {
      description: "Electronics",
      weight: "6kg",
      quantity: "1 box",
      shippingType: "Air",
      notes: "",
    },
    receiver: {
      name: "Liam Wilson",
      email: "liam@email.com",
      phone: "+64 21 123456",
      country: "New Zealand",
      address: "Auckland",
    },
    route: [
      { country: "Australia", coords: [-33.8688, 151.2093] },
      { country: "NZ", coords: [-36.8485, 174.7633] },
    ],
    history: [
      {
        date: "2026-03-09",
        time: "10:00",
        location: "Sydney",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-10",
        time: "12:30",
        location: "Melbourne",
        status: "In Transit",
        updatedBy: "Courier",
        remarks: "Package loaded on flight",
      },
    ],
  },

  "TRK666777SA": {
    status: "On Hold",
    dispatchCountry: "UAE",
    destinationCountry: "Saudi Arabia",
    packageInfo: {
      description: "Spare parts",
      weight: "15kg",
      quantity: "2 boxes",
      shippingType: "Road",
      notes: "",
    },
    receiver: {
      name: "Abdul Rahman",
      email: "abdul@email.com",
      phone: "+966 50 123456",
      country: "Saudi Arabia",
      address: "Riyadh",
    },
    route: [
      { country: "UAE", coords: [25.2048, 55.2708] },
      { country: "Saudi", coords: [24.7136, 46.6753] },
    ],
    history: [
      {
        date: "2026-03-08",
        time: "09:15",
        location: "Dubai",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-09",
        time: "14:00",
        location: "Abu Dhabi",
        status: "On Hold",
        updatedBy: "Admin",
        remarks: "Customs inspection",
      },
    ],
  },

  "TRK000321ES": {
    status: "Delivered",
    dispatchCountry: "Spain",
    destinationCountry: "Portugal",
    packageInfo: {
      description: "Shoes",
      weight: "2kg",
      quantity: "1 box",
      shippingType: "Road",
      notes: "",
    },
    receiver: {
      name: "Pedro Costa",
      email: "pedro@email.com",
      phone: "+351 900 000",
      country: "Portugal",
      address: "Porto",
    },
    route: [
      { country: "Spain", coords: [40.4168, -3.7038] },
      { country: "Portugal", coords: [41.1579, -8.6291] },
    ],
    history: [
      {
        date: "2026-03-06",
        time: "11:00",
        location: "Madrid",
        status: "Shipment Created",
        updatedBy: "Admin",
        remarks: "Package registered",
      },
      {
        date: "2026-03-07",
        time: "16:00",
        location: "Lisbon",
        status: "Delivered",
        updatedBy: "Courier",
        remarks: "Package delivered to receiver",
      },
    ],
  },
};

/* MAP CONTROL */
const MapController = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(points, {
        padding: [60, 60],
        maxZoom: 4,
      });
    }, 200);
  }, [map, points]);

  return null;
};


const useBeep = () => {
  const ctxRef = useRef(null);

  const play = (freq = 800) => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const osc = ctxRef.current.createOscillator();
    const gain = ctxRef.current.createGain();

    osc.frequency.value = freq;
    gain.gain.value = 0.1; // 🔊 control volume

    osc.connect(gain);
    gain.connect(ctxRef.current.destination);

    osc.start();
    setTimeout(() => osc.stop(), 120);
  };

  return play;
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
    const data = shipmentsData[code.trim().toUpperCase()];
    if (!data) {
      setShipment(null);
      setError("❌ Incorrect tracking code.");
      return;
    }
    setError("");
    setShipment(data);
    setIndex(0);
  };

  useEffect(() => {
  // stop any previous sound loop
  clearInterval(beepIntervalRef.current);

  // only play sound when moving
  if (shipment?.status === "In Transit") {
    beepIntervalRef.current = setInterval(() => {
      beep(850);
    }, 1000);
  }

  // cleanup
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

      {/* ✅ ONLY CHANGE IS HERE */}
      <h1 className="center-title">Shipment Tracking</h1>

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
          <p><strong>Type:</strong> {shipment.packageInfo.Type}</p>
          <p><strong>Mode:</strong> {shipment.packageInfo.mode}</p> 
          <p><strong>ID:</strong> {shipment.packageInfo.ID}</p>
          <p><strong>Container:</strong> {shipment.packageInfo.container}</p>
          <p><strong>Sealnumber:</strong> {shipment.packageInfo.Sealnumber}</p>
          <p><strong>Notes:</strong> {shipment.packageInfo.notes}</p>
        </div>

        {/* ✅ YOUR HISTORY IS BACK */}
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

      {/* ✅ MAP (UNCHANGED) */}
     <div className="smart-map-wrapper">
  <MapContainer className="smart-map" center={[20, -30]} zoom={3}>
    
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    <MapController points={shipment.route.map((r) => r.coords)} />

    {/* ✅ ROUTE LINE */}
    {/* <Polyline
      positions={shipment.route.map((r) => r.coords)}
      pathOptions={{ color: "#007bff", weight: 4 }}
    /> */}


        <CircleMarker
          center={current.coords}
          radius={18}
          className={`smart-pulse ${shipment.status === "On Hold" ? "hold" : ""}`}
        />


    {/* ✅ MOVING MARKER */}
    <Marker position={current.coords}>
      <Popup>
        {shipment.status === "On Hold" ? "⚠️ ON HOLD" : "IN TRANSIT"}
        <br />
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