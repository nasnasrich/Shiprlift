import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShiprliftHome from "./components/ShiprliftHome.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";
import Track from "./components/Track.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import OurServices from "./components/OurServices.jsx";
import ContactPage from "./components/ContactPage.jsx";
import PrivacyNotice from "./components/PrivacyNotice";
// import { LanguageProvider } from "./components/LanguageContext.jsx"; // ✅ Important

function App() {
  return (
      <>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<ShiprliftHome />} />
          <Route path="/Track" element={<Track />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/PrivacyNotice" element={<PrivacyNotice />} />

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