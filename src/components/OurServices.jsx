import React from "react";
import "./OurServices.css";
import ShiprliftFilter from "./ShiprliftFilter";


import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

import bus from "../assets/bus.jpg";



import { useLanguage } from "./LanguageContext";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import { red } from "@mui/material/colors";

// import img1 from "../assets/sister.jpg";
// import img2 from "../assets/famly.jpg";
// import img3 from "../assets/grop.jpg";
// import img4 from "../assets/woman.jpg";


const cardsData = [
  {
    id: 1,
    title: {
      en: "Fast Delivery",
      es: "Entrega Rápida",
      fr: "Livraison Rapide",
      de: "Schnelle Lieferung"
    },
    description: {
      en: "We deliver your packages quickly and safely.",
      es: "Entregamos sus paquetes rápida y seguramente.",
      fr: "Nous livrons vos colis rapidement et en toute sécurité.",
      de: "Wir liefern Ihre Pakete schnell und sicher."
    },
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />
  },
  {
    id: 2,
    title: {
      en: "Secure Shipping",
      es: "Envío Seguro",
      fr: "Expédition Sécurisée",
      de: "Sicherer Versand"
    },
    description: {
      en: "Your products are protected during transit.",
      es: "Sus productos están protegidos durante el transporte.",
      fr: "Vos produits sont protégés pendant le transport.",
      de: "Ihre Produkte sind während des Transports geschützt."
    },
    icon: <SecurityIcon sx={{ fontSize: 50 }} />
  },
  {
    id: 3,
    title: {
      en: "24/7 Support",
      es: "Soporte 24/7",
      fr: "Support 24/7",
      de: "24/7 Unterstützung"
    },
    description: {
      en: "Our team is available anytime you need help.",
      es: "Nuestro equipo está disponible cuando lo necesite.",
      fr: "Notre équipe est disponible à tout moment.",
      de: "Unser Team ist jederzeit für Sie da."
    },
    icon: <SupportAgentIcon sx={{ fontSize: 50 }} />
  },
  {
    id: 4,
    title: {
      en: "Worldwide Service",
      es: "Servicio Mundial",
      fr: "Service Mondial",
      de: "Weltweiter Service"
    },
    description: {
      en: "We deliver across the globe with reliability.",
      es: "Entregamos en todo el mundo con fiabilidad.",
      fr: "Nous livrons dans le monde entier avec fiabilité.",
      de: "Wir liefern weltweit zuverlässig."
    },
    icon: <PublicIcon sx={{ fontSize: 50 }} />
  }
];


const couriers = [
  {
    name: "DHL Express",
    points: [
      "Strong coverage across APAC and Europe",
      "3 to 5 day delivery on most lanes",
      "Best for small parcels and documents"
    ]
  },
  {
    name: "UPS",
    points: [
      "Excellent access to USA and Canada",
      "Good options for heavier small parcels",
      "Robust brokerage and tracking tools"
    ]
  },
  {
    name: "FedEx",
    points: [
      "Time-definite services to USA and EU",
      "Real-time online tracking",
      "Perfect for small parcels and urgent samples"
    ]
  },
  {
    name: "TNT",
    points: [
      "Europe focused network via FedEx",
      "Competitive pricing for EU deliveries",
      "Stable transit with clear tracking"
    ]
  }
];


const OurServices = () => {
  const { lang } = useLanguage();

  return (
    <div className="OurServicespage">
      
      {/* HERO SECTION */}
      <div className="OurServiceshero">
        <h1>Our Services</h1>
        <p>
          Professional Express delivers safety products to your doorstep.
          We care so much about the people that choose us for their product delivery.
          We also keep in mind that your product should be safe.
        </p>
        <h4>Experience To Be Trusted</h4>
      </div>

      {/* SERVICES SECTION */}
      <div className="ServiceTeb">
        <div className="ServiceTebtex">
         <h2>Our Services</h2>
         <div className="we"><h1>What We Offer To Highest Quality Services</h1></div>
        </div>


        <div className="ServiceCade">
  {cardsData.map((card) => (
    <Card key={card.id} sx={{ width: "100%" }}>
      <CardActionArea>
        <CardContent sx={{ textAlign: "center", transition: "all 0.3s ease", "&:hover": {transform: "translateY(5px)"} }}>
          <div style={{ marginBottom: "10px", }}>
            {card.icon}
          </div>

          <Typography variant="h6" gutterBottom>
            {card.title[lang]}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {card.description[lang]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ))}
       </div>
      </div>

      <div className="ServicesExpress">
        <div className="Expressone">
          <h2>Shiprlift Express Services</h2>
          <h1>Express Shipping from China, Fast and Reliable</h1>
          <p>Ship worldwide with Shiprlift, UPS, FedEx and TNT. Get clear pricing, time‑definite delivery, and real‑time tracking. Next day delivery is available in select APAC cities for eligible parcels.</p>
          <ul>
          <li>3 to 5 day delivery to most destinations</li>
          <li>Next day service in select APAC cities, cut off applies</li>
          <li>Same day pickup in major China cities</li>
          <li>Amazon FBA labeling and small‑parcel support</li>
          <button>Get a Free Quote</button>
          </ul>
          </div>

         <div className="Expresstwo">
          <img src={bus} alt="Shiprlift operations" />
         </div>
         
      </div>



    
    <div className="Choose">
  <div className="Chooseone">
    <h1>When to Choose Express</h1>
    <p>
      Express courier is the best choice when speed and certainty matter for
      small or medium parcels.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}
    >
      {[
        {
          title: "Urgent Shipments",
          text: "Send product samples with 3 to 5 day delivery.",
        },
        {
          title: "Small parcel orders",
          text: "Ship lightweight eCommerce parcels with predictable tracking and delivery.",
        },
        {
          title: "Documents and certificates",
          text: "Move time sensitive paperwork or spare parts with minimal customs steps.",
        },
        {
          title: "FBA top up",
          text: "Replenish Amazon inventory quickly when air or sea is too slow.",
        }
      ].map((item, index) => (
       <Card
  key={index}
  sx={{
    textAlign: "center",
    padding: 2,
    transition: "none",
    "&:hover": {
      transform: "none",
      boxShadow: 6
    }
  }}
>
  <CardActionArea
  disableRipple
  disableTouchRipple
  sx={{
    "&:hover": {
      backgroundColor: "rgba(0, 38, 104, 0.01)"
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(0, 0, 0, 0.01)"
    }
  }}
>
  <CardContent>
    <Typography gutterBottom variant="h6">
      {item.title}
    </Typography>

    <Typography variant="body2" color="text.secondary">
      {item.text}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
      ))}
    </div>
   </div>

   <div className="Choosetwo">
     <table className="shipping-table">
  <thead>
    <tr>
      <th>Shipping Method</th>
      <th>Typical Transit Time</th>
      <th>Best For</th>
      <th>Cost Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Express Courier</strong></td>
      <td>3 to 5 days, next day in select APAC cities</td>
      <td>Small parcels, documents, urgent samples, FBA top up</td>
      <td>Highest</td>
    </tr>
  </tbody>

   <tbody>
    <tr>
      <td><strong>Air Freight</strong></td>
      <td>1 to 7 days</td>
      <td>Urgent or high‑value cargo, heavier parcels than express</td>
      <td>Medium to high</td>
    </tr>
  </tbody>

   
   <tbody>
    <tr>
      <td><strong>Sea Freight FCL</strong></td>
      <td>12 to 35 days on water</td>
      <td>Full containers, bulk pallets</td>
      <td>Lowest per unit</td>
    </tr>
  </tbody>


  <tbody>
    <tr>
      <td><strong>Rail to Europe</strong></td>
      <td>15 to 20 days</td>
      <td>Medium volume to EU</td>
      <td>Medium</td>
    </tr>
   </tbody>
  </table>
     <p>Notes: next day depends on eligibility and cut off. Ocean time is port to port only. Your quote will confirm the exact schedule.</p>
   </div>
  </div>


   <div className="courier-section">
      <h1>Courier Choices</h1>
      <p>
        We select the right courier based on route, weight, size,
        and the delivery date you need.
      </p>

      <div className="courier-grid">
        {couriers.map((courier, index) => (
          <div className="courier-card" key={index}>
            <h2>{courier.name}</h2>
            <ul>
              {courier.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div className="courier-choice">
     <h1>Not sure which courier fits your shipment? <br /> <button>Get expert advice</button></h1>
    </div>

        <div className="imgesout">
          <h5>...</h5>
        </div>

      
    <section className="process-section">
  <div className="process-header">
    <h2>How Our Express Process Works</h2>
    <p>
      From pickup in China to final delivery, our process keeps your parcel
      moving fast and your team fully informed.
    </p>
  </div>

  <div className="process-grid">
    <div className="process-card">
      <h3>Request a Quote</h3>
      <p>
        Share weight, dimensions, destination, commodity and HS codes.
        We confirm the rate, service level and cut off time.
      </p>
    </div>

    <div className="process-card">
      <h3>Pickup and labeling</h3>
      <p>
        Same day pickup is available in major China cities. We apply
        labels, verify item count and pack to courier rules.
      </p>
    </div>

    <div className="process-card">
      <h3>Export handover</h3>
      <p>
        We prepare the commercial invoice and packing list, lodge export
        info and hand over to DHL, UPS, FedEx or TNT.
      </p>
    </div>

    <div className="process-card">
      <h3>Delivery and tracking</h3>
      <p>
        You receive real time tracking, customs updates and proof of
        delivery once the parcel arrives.
      </p>
    </div>
    </div>
   </section>



 <section className="quote-section">
  <div className="quote-container">
    
    {/* LEFT SIDE */}
    <div className="quote-left">
      <h2>Get a Free Quote Today</h2>
      <p>
        Tell us about your shipment, and our team will get back to you
        within 12 hours — no obligation, no hidden fees.
      </p>

      <button className="whatsapp-btn">
        Message us on WhatsApp
      </button>
    </div>

    {/* RIGHT SIDE (FORM CARD) */}
    <div className="quote-form-card">
      <form>
        <div className="row">
          <div className="form-group">
            <label>Name <span>*</span></label>
            <input type="text" placeholder="e.g. John Chen" />
          </div>

          <div className="form-group">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="e.g. john@example.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input type="text" placeholder="e.g. ABC Electronics Co., Ltd." />
        </div>

        <div className="form-group">
          <label>Message <span>*</span></label>
          <textarea placeholder="Enter your needs"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>

      <p className="privacy-text">
        We’ll never share your contact info — your info is 100% safe.
      </p>
    </div>

   </div>
  </section>

   <div className="footerpage">
    <ShiprliftFilter />
    </div>
    </div>
  );
};

export default OurServices;