import React, { useState, useEffect, useRef } from "react";
import ShiprliftFilter from "./ShiprliftFilter";

import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Tracknow.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import AOS from "aos";
import "aos/dist/aos.css";

/* Leaflet icon fix */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



/* 🔒 ADMIN DATA */
const shipmentsData = {
  TRK850T510E: {
    status: "On Hold",
    // status: "In Transit",
    mapStatus: "Cargo En Route",
    dispatchCountry: "United Kingdom",
    destinationCountry: "Egypt",

    // packageInfo: {
    //   description: "Three bars of Gold",
    //   weight: "10kg",
    //   quantity: "1 box",
    //   Type: "Freight Shipping",
    //   mode: "Sea",
    //   ID: "PKG-908172",
    //   container: "LCL",
    //   Sealnumber: "SEAL55661",
    //   notes: "Fragile",
    // },

    packageInfo: {
      description: "Three bars of Gold",
      weight: "10kg",
      quantity: "1 box",
      Type: "Freight Shipping",
      mode: "Sea",
      ID: "PKG-908172",
      container: "LCL",
      Sealnumber: "SEAL55661",
      dimensions: "50 × 40 × 30 cm",
      origin: "United Kingdom",
      destination: "Egypt",
    },

    receiver: {
      name: "Helmi Mohamed",
      email: "hs.66666@yahoo.com",
      phone: "+01009492608",
      country: "Egypt",
      address: "12 Spico Mokatam Cairo Egypt",
    },
    route: [
      // { country: "Egypt", coords: [30.0444, 31.2357] }, // Cairo
      { country: "United Kingdom", coords: [51.5074, -0.1278] },
      { country: "Turkey", city: "Istanbul", coords: [41.0082, 28.9784] },
    ],
    history: [
      {
        date: "2026-05-08",
        time: "17:59PM",
        location: "London",
        status: "Shipment Created",
        updatedBy: "Employee ID: WH-210",
        remarks: "Package registered",
      },
      {
        date: "2026-05-12",
        time: "08:10AM",
        // location: "Abu Dhabi",
        // location: "Frankfurt, Germany",
        location: "Istanbul, Turkey",
        // status: "On Hold",
        status: "Held by Customs",
        // status: "Shipment En Route",
        // status: "Cargo En Route",
        updatedBy: "WH-210",
        remarks: "Customs inspection",
      },
    ],
  },

  TRK987654LY: {
    status: "On Hold",
    // status: "In Transit",
     receipt: "payment.png",
    mapStatus: "In Transit",
    dispatchCountry: "Libya",
    destinationCountry: "Brazil",

    packageInfo: {
      description: "Priority Cargo",
      weight: "70kg",
      quantity: "Undisclosed Box",
      Type: "Express Air Freight",
      mode: "Air",
      ID: "PKG-908172",
      container: "Air Cargo Unit",
      Sealnumber: "SEAL55661",
      dimensions: "120 × 80 × 70 cm",
      origin: "Benghazi, Libya",
      destination: "Brazil",
    },

    receiver: {
      name: "Zaida Figueredo Fuentes",
      email: "zaida691121@gmail.com",
      phone: "+5547988558302",
      country: "Brazil",
      postal: "89207530",
      address: "Rua Sind Costa dos Santos, Barrio Gunabara, #298",
    },

    
    // payment: {
    // receiptNo: "SRL-20260711-002",
    // amount: "$1,750",
    // paidDate: "2026-07-12",
    // method: "Visa Card"
    //  },


    route: [
      // { country: "Libya", city: "Benghazi", coords: [32.1167, 20.0667] },
      // {country: "Turkey", city: "Istanbul",coords: [41.0082, 28.9784],},
       {country: "International Air Route",city: "Eastern Mediterranean",coords: [34.5, 34.0],},
         {country: "Egypt",city: "Cairo",coords: [30.0444, 31.2357],},

    ],
    

    history: [
      {
        date: "2026-08-15",
        time: "10:20PM",
        location: "Benghazi, Libya",
        status: "Shipment Created",
        // status:"In Transit",
        updatedBy: "WH-210",
        remarks: "Shipment dispatched via express air freight",
      },
      // {
      //   date: "2026-05-12",
      //   time: "08:30AM",
      //   // location: "Abu Dhabi",
      //   // location: "Frankfurt, Germany",
      //   location: "London",
      //   status:"In Transit",
      //   // status: "On Hold",
      //   // status: "Held by Customs",
      //   // status: "Shipment En Route",
      //   // status: "Cargo En Route",
      //   updatedBy: "WH-210",
      //   remarks: "Shipment Departed",
      // },

       {
    date: "2026-08-16",
    time: "11:00AM",
    location: "Istanbul, Turkey",
    status: "In Transit",
    updatedBy: "WH-210",
    remarks: "Shipment in transit through international air cargo hub",
  },

   {
    date: "2026-08-17",
    time: "02:00PM",
    location: "Eastern Mediterranean Air Route",
    status: "In Transit",
    updatedBy: "WH-210",
    remarks: "Shipment continuing through international air cargo network",
  },

  {
    date: "2026-08-18",
    time: "10:50AM",
    location: "Cairo International Airport, Egypt",
    status: "On Hold",
    updatedBy: "WH-210",
    remarks: "Shipment temporarily placed on hold pending further processing",
    },

    ],
  },

  TRK555111NG: {
    status: "In Transit",
    mapStatus: "In Transit",
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

  TRK222333CA: {
    status: "Delivered",
    mapStatus: "Delivered",
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
      // { country: "USA", coords: [40.7128, -74.006] },
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

  TRK444888FR: {
    status: "On Hold",
    mapStatus: "On Hold",
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

  TRK111999AU: {
    status: "In Transit",
    mapStatus: "In Transit",
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

  TRK666777SA: {
    status: "On Hold",
    mapStatus: "On Hold",
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

  TRK000321ES: {
    status: "Delivered",
    mapStatus: "Delivered",
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
  const oscillatorsRef = useRef(new Set());

  const stop = React.useCallback(() => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
      } catch (e) {}

      try {
        osc.disconnect();
      } catch (e) {}
    });

    oscillatorsRef.current.clear();

    if (ctxRef.current) {
      try {
        ctxRef.current.close();
      } catch (e) {}

      ctxRef.current = null;
    }
  }, []);

  const play = React.useCallback(
    (freq = 800) => {
      if (document.hidden) return;

      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      if (!ctxRef.current) {
        ctxRef.current = new AudioContext();
      }

      const ctx = ctxRef.current;

      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.frequency.value = freq;
      gain.gain.value = 0.1;

      osc.connect(gain);
      gain.connect(ctx.destination);

      oscillatorsRef.current.add(osc);

      osc.onended = () => {
        oscillatorsRef.current.delete(osc);

        try {
          osc.disconnect();
        } catch (e) {}
      };

      osc.start();

      setTimeout(() => {
        try {
          osc.stop();
        } catch (e) {}
      }, 120);
    },
    []
  );

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { play, stop };
};

const Tracknow = () => {
  const [code, setCode] = useState("");
  const [shipment, setShipment] = useState(null);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");

  const moveIntervalRef = useRef(null);
  const beepIntervalRef = useRef(null);

  const { play: beep, stop: stopBeep } = useBeep();
  // AOS animations
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  // Stop beep when browser tab/page is hidden or closed
    useEffect(() => {
  const stopEverything = () => {
    // STOP BEEP INTERVAL IMMEDIATELY
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }

    // STOP MOVEMENT INTERVAL
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }

    // STOP ANY BEEP THAT IS ALREADY PLAYING
    stopBeep();
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopEverything();
    }
  };

  // Leaving/switching away from the page
  document.addEventListener(
    "visibilitychange",
    handleVisibilityChange
  );

  // Page being unloaded
  window.addEventListener("pagehide", stopEverything);

  // Browser/page being unloaded
  window.addEventListener("beforeunload", stopEverything);

  return () => {
    document.removeEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    window.removeEventListener("pagehide", stopEverything);
    window.removeEventListener("beforeunload", stopEverything);

    // Final cleanup
    stopEverything();
  };
}, [stopBeep]);

  // your other useEffects continue here...

  /* =========================
     TRACK SHIPMENT
  ========================= */
  const handleTrack = () => {
    const trackingCode = code.trim().toUpperCase();
    const data = shipmentsData[trackingCode];

    if (!data) {
      setShipment(null);
      setError("Incorrect tracking code.");
      return;
    }

    setError("");
    setShipment(data);
    setIndex(0);
  };


  /* =========================
   LOCAL AUTO MOVEMENT
========================= */

useEffect(() => {
  if (moveIntervalRef.current) {
    clearInterval(moveIntervalRef.current);
    moveIntervalRef.current = null;
  }

  if (!shipment || shipment.status !== "In Transit") {
    return;
  }

  const startMovement = () => {
    if (document.hidden) return;

    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
    }

    moveIntervalRef.current = setInterval(() => {
      if (document.hidden) {
        clearInterval(moveIntervalRef.current);
        moveIntervalRef.current = null;
        return;
      }

      setIndex((prev) => {
        if (prev >= shipment.route.length - 1) {
          return prev;
        }

        return prev + 1;
      });
    }, 7000);
  };

  const stopMovement = () => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }
  };

  const handleVisibility = () => {
    if (document.hidden) {
      stopMovement();
    }
  };

  startMovement();

  document.addEventListener(
    "visibilitychange",
    handleVisibility
  );

  return () => {
    stopMovement();

    document.removeEventListener(
      "visibilitychange",
      handleVisibility
    );
  };
}, [shipment]);


  /* =========================
     LOCAL BEEP
  ========================= */
    useEffect(() => {
  // Always stop the old beep first
  if (beepIntervalRef.current) {
    clearInterval(beepIntervalRef.current);
    beepIntervalRef.current = null;
  }

  stopBeep();

  // Only beep for an active In Transit shipment
  if (
    shipment?.status === "In Transit" &&
    !document.hidden
  ) {
    beepIntervalRef.current = setInterval(() => {
      // Double protection
      if (document.hidden) {
        clearInterval(beepIntervalRef.current);
        beepIntervalRef.current = null;
        stopBeep();
        return;
      }

      beep(850);
    }, 1000);
  }

  return () => {
    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }

    stopBeep();
  };
}, [shipment, beep, stopBeep]);

 

  /* =========================
     CLEAR TRACKING
  ========================= */
  const handleNewTracking = () => {
    setShipment(null);
    setCode("");
    setError("");
    setIndex(0);
  };

  /* =========================
     CURRENT MAP LOCATION
  ========================= */
  const current =
    shipment?.status === "On Hold"
      ? shipment.route[shipment.route.length - 1]
      : shipment?.route[index];

  /* =========================
     ROUTE HISTORY
  ========================= */
  const routeDetails = shipment?.history || [];

  /* =========================
     PRINT RECEIPT
  ========================= */
  const handleReceipt = () => {
    if (!shipment?.receipt) {
      alert("Receipt not available.");
      return;
    }

    const printWindow = window.open(shipment.receipt, "_blank");

    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  /* =====================================================
   OLD SEARCH SCREEN
===================================================== */
if (!shipment) {
  return (
    <div className="smart-tracking-page">
      <div className="smart-panel">

        <h1 className="center-title" data-aos="fade-down">
          Shipment Tracking
        </h1>

        <div className="tracking-guide">
          <p data-aos="zoom-in">
            Enter your tracking number below to see the real-time status of
            your shipment.
          </p>
        </div>

        {error && (
          <p className="tracking-error">
            {error}
          </p>
        )}

        <div className="track-input">

          <input
            type="text"
            placeholder="Enter tracking reference"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTrack();
              }
            }}
          />

          <button onClick={handleTrack}>
            Track
          </button>

        </div>

      </div>
    </div>
  );
}

  /* =====================================================
     MAIN DASHBOARD
  ===================================================== */

  return (
    <div className="tracking-dashboard">

      <div className="tracking-dashboard-header">

        <div className="dashboard-title-area">
          <button
            className="back-track-button"
            onClick={handleNewTracking}
          >
            ←
          </button>

          <div>
            <h1>Shipment Tracking</h1>
            <p>
              Real-time shipment overview and route information
            </p>
          </div>
        </div>

        <div className="dashboard-actions">

          <div
            className={`dashboard-status ${
              shipment.status.toLowerCase().replace(/\s/g, "-")
            }`}
          >
            <span className="status-dot"></span>
            {shipment.status}
          </div>

          {shipment.receipt && (
            <button
              className="receipt-button"
              onClick={handleReceipt}
            >
              Print Receipt
            </button>
          )}

        </div>

      </div>


      {/* =================================================
          TOP DASHBOARD
      ================================================= */}

      <div className="tracking-main-grid">

        {/* ===============================================
            LEFT - SHIPMENT INFORMATION
        =============================================== */}

        <aside className="shipment-sidebar">

          <div className="sidebar-search">
            <span>⌕</span>

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Search shipment"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTrack();
                }
              }}
            />
          </div>


          <div className="sidebar-add">
            <span>+</span>
            Shipment Tracking
          </div>


          <div className="sidebar-heading">
            CURRENT SHIPMENT
          </div>


          <div
            className="shipment-sidebar-card active"
            data-aos="fade-right"
          >

            <div className="sidebar-card-top">

              <strong>
                Cargo ID: #{shipment.packageInfo?.ID || "N/A"}
              </strong>

              <span
                className={`mini-status ${
                  shipment.status
                    .toLowerCase()
                    .replace(/\s/g, "-")
                }`}
              >
                {shipment.status}
              </span>

            </div>


            <div className="sidebar-route">

              <div className="sidebar-route-point">

                <span className="route-dot active-dot"></span>

                <div>
                  <strong>
                    {shipment.dispatchCountry}
                  </strong>

                  <small>
                    Origin
                  </small>
                </div>

              </div>


              <div className="sidebar-route-line"></div>


              <div className="sidebar-route-point">

                <span className="route-dot"></span>

                <div>
                  <strong>
                    {shipment.destinationCountry}
                  </strong>

                  <small>
                    Destination
                  </small>
                </div>

              </div>

            </div>


            <div className="sidebar-card-footer">

              <div>
                <small>Receiver</small>
                <strong>
                  {shipment.receiver.name}
                </strong>
              </div>

              <div className="receiver-avatar">
                {shipment.receiver.name
                  .charAt(0)
                  .toUpperCase()}
              </div>

            </div>

          </div>


          <div className="sidebar-reference">

            <span>Tracking Reference</span>

            <strong>
              {code.toUpperCase()}
            </strong>

          </div>

        </aside>


        {/* ===============================================
            CENTER - MAP
        =============================================== */}

        <section className="map-dashboard-card">

          <div className="dashboard-section-title">
            <div>
              <h2>Map Overview</h2>
              <p>
                Current shipment location
              </p>
            </div>

            <span className="live-indicator">
              <span></span>
              LIVE
            </span>
          </div>


          <div className="dashboard-map-wrapper">

            <MapContainer
              className="dashboard-map"
              center={current?.coords || [20, -30]}
              zoom={3}
              scrollWheelZoom={true}
            >

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution="&copy; OpenStreetMap contributors"
              />


              <MapController
                points={
                  shipment.route.length > 0
                    ? shipment.route.map((r) => r.coords)
                    : [current.coords]
                }
              />


              {/* ROUTE LINE */}

              {shipment.route.length > 1 && (
                <Polyline
                  positions={shipment.route.map(
                    (r) => r.coords
                  )}
                  pathOptions={{
                    color: "#1677ff",
                    weight: 4,
                    opacity: 0.8,
                  }}
                />
              )}

                        {/* CURRENT LOCATION */}

              {current && (
                <>
                  <CircleMarker
                    center={current.coords}
                    radius={18}
                    className={`smart-pulse ${
                      shipment.status === "On Hold"
                        ? "hold"
                        : ""
                    }`}
                  />

                  <Marker position={current.coords}>
                    <Popup>
                      <strong>
                        {shipment.status}
                      </strong>

                      <br />

                      {current.city
                        ? `${current.city}, ${current.country}`
                        : current.country}
                    </Popup>
                  </Marker>

                  <div className="map-overlay-status">

                    <span className="map-status-icon">
                      ●
                    </span>

                    <div>
                      <small>Current location</small>

                      <strong>
                        {current?.city
                          ? `${current.city}, ${current.country}`
                          : current?.country}
                      </strong>
                    </div>

                  </div>
                </>
              )}

            </MapContainer>

          </div>

        </section>


        {/* ===============================================
            RIGHT - ROUTE DETAILS
        =============================================== */}

        {/* <section className="route-details-card"> */}

        {/* ===============================================
            RIGHT - ROUTE DETAILS
        =============================================== */}

        <section className="route-details-card">

          <div className="dashboard-section-title">

            <div>
              <h2>Route Details</h2>
              <p>
                Shipment movement history
              </p>
            </div>

          </div>


          <div className="route-timeline">

            {routeDetails.map((h, i) => (

              <div
                className={`timeline-item ${
                  i === routeDetails.length - 1
                    ? "current-timeline"
                    : ""
                }`}
                key={i}
              >

                <div className="timeline-marker">
                  <span>{i + 1}</span>
                </div>

                <div className="timeline-content">

                  <strong>
                    {h.location}
                  </strong>

                  <small>
                    {h.date} • {h.time}
                  </small>

                  <span
                    className={`timeline-status ${
                      h.status
                        .toLowerCase()
                        .replace(/\s/g, "-")
                    }`}
                  >
                    {h.status}
                  </span>

                </div>

              </div>

            ))}

          </div>
        </section>

      </div>


      {/* =================================================
          INFORMATION CARDS
      ================================================= */}

      <div className="dashboard-information-grid">


        {/* PACKAGE */}

        <div
          className="dashboard-info-card"
          data-aos="fade-up"
        >

          <div className="info-card-heading">

            <div className="info-icon">
              📦
            </div>

            <div>
              <h3>Package</h3>
              <span>
                Shipment information
              </span>
            </div>

          </div>


          <div className="info-details">

            <div>
              <span>Description</span>
              <strong>
                {shipment.packageInfo?.description || "N/A"}
              </strong>
            </div>

            <div>
              <span>Weight</span>
              <strong>
                {shipment.packageInfo?.weight || "N/A"}
              </strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>
                {shipment.packageInfo?.quantity || "N/A"}
              </strong>
            </div>

            <div>
              <span>Type</span>
              <strong>
                {shipment.packageInfo?.Type ||
                  shipment.packageInfo?.shippingType ||
                  "N/A"}
              </strong>
            </div>

          </div>

        </div>


        {/* RECEIVER */}

        <div
          className="dashboard-info-card"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <div className="info-card-heading">

            <div className="info-icon">
              👤
            </div>

            <div>
              <h3>Receiver</h3>
              <span>
                Delivery information
              </span>
            </div>

          </div>


          <div className="info-details">

            <div>
              <span>Name</span>
              <strong>
                {shipment.receiver.name}
              </strong>
            </div>

            <div>
              <span>Country</span>
              <strong>
                {shipment.receiver.country}
              </strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>
                {shipment.receiver.phone}
              </strong>
            </div>

            <div>
              <span>Postal / ZIP</span>
              <strong>
                {shipment.receiver.postal || "N/A"}
              </strong>
            </div>

          </div>

        </div>


        {/* CARGO */}

        <div
          className="dashboard-info-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="info-card-heading">

            <div className="info-icon">
              🚚
            </div>

            <div>
              <h3>Transport</h3>
              <span>
                Cargo movement
              </span>
            </div>

          </div>


          <div className="info-details">

            <div>
              <span>Mode</span>
              <strong>
                {shipment.packageInfo?.mode ||
                  shipment.packageInfo?.shippingType ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>Container</span>
              <strong>
                {shipment.packageInfo?.container ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>Seal Number</span>
              <strong>
                {shipment.packageInfo?.Sealnumber ||
                  "N/A"}
              </strong>
            </div>

            <div>
              <span>Dimensions</span>
              <strong>
                {shipment.packageInfo?.dimensions ||
                  "N/A"}
              </strong>
            </div>

          </div>

        </div>


        {/* LOCATION */}

        <div
          className="dashboard-info-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <div className="info-card-heading">

            <div className="info-icon">
              📍
            </div>

            <div>
              <h3>Locations</h3>
              <span>
                Shipment route
              </span>
            </div>

          </div>


          <div className="location-details">

            <div className="location-row">

              <span className="location-dot start"></span>

              <div>
                <small>Origin</small>

                <strong>
                  {shipment.packageInfo?.origin ||
                    shipment.dispatchCountry}
                </strong>
              </div>

            </div>


            <div className="location-row">

              <span className="location-dot end"></span>

              <div>
                <small>Destination</small>

                <strong>
                  {shipment.packageInfo?.destination ||
                    shipment.destinationCountry}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          SHIPMENT NOTE
      ================================================= */}

      <div
        className="shipment-note-card"
        data-aos="fade-up"
      >

        <div className="note-icon">
          ℹ
        </div>

        <div>

          <strong>
            Shipment Status
          </strong>

          <p>
            {shipment.history?.[
              shipment.history.length - 1
            ]?.remarks ||
              "Shipment information is currently being updated."}
          </p>

        </div>

      </div>


      {/* =================================================
          SERVICES
      ================================================= */}

      <div
        className="shiprlift-filter-container"
        data-aos="fade-up"
      >

        <div className="shiprlift-filter-header">

          <h2>
            Shipment Services
          </h2>

          <p>
            Use the options below to manage or get
            additional information about your shipment.
          </p>

        </div>

      </div>

      <ShiprliftFilter />

    </div>
  );
};

export default Tracknow;
