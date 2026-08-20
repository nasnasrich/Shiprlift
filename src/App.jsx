import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import ShiprliftHome from "./components/ShiprliftHome.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import Track from "./components/Track.jsx";
import Tracknow from "./components/Track.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import OurServices from "./components/OurServices.jsx";
import ContactPage from "./components/ContactPage.jsx";
import PrivacyNotice from "./components/PrivacyNotice";
import Terms from "./components/Terms";

/* WHATSAPP + EMAIL IMAGES */
import mail from "./assets/mail.png";
import whatsappoffer from "./assets/whatsapp.png";

function App() {

  const message = encodeURIComponent(
    "Hello Shiprlift, I would like to make an enquiry."
  );

  useEffect(() => {
    // Preload the contact images immediately
    const images = [mail, whatsappoffer];

    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <>
      <ResponsiveAppBar />

      {/* FLOATING EMAIL + WHATSAPP */}
      <div className="live-contact">

        {/* EMAIL */}
        <a href="mailto:shiprlift@gmail.com">
          <img
            src={mail}
            alt="Email"
            loading="eager"
            fetchPriority="high"
          />
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/14796524016?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappoffer}
            alt="WhatsApp"
            className="whatsapp-beep"
            loading="eager"
            fetchPriority="high"
          />
        </a>

      </div>

      <Routes>
        <Route path="/" element={<ShiprliftHome />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Tracknow" element={<Tracknow />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/PrivacyNotice" element={<PrivacyNotice />} />
        <Route path="/Terms" element={<Terms />} />

        {/* SAFETY NET */}
        <Route
          path="*"
          element={<h2 style={{ padding: 40 }}>Page not found</h2>}
        />
      </Routes>
    </>
  );
}

export default App;