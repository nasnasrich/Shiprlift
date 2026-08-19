import React, { useState } from "react";
import { sendMail } from "./controllers/mailController";
import "./ShiprliftFilter.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";

import shirlogo from "../assets/shirlogo.png";

const ShiprliftFilter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Shiprlift, I would like to make an enquiry."
  );

  const whatsappLink = `https://wa.me/14796524016?text=${whatsappMessage}`;

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || loading) return;

  setLoading(true);

  try {
    await sendMail(
      e,
      import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE,
      "newsletterForm",
      "Thanks for subscribing!"
    );

    setEmail("");
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <footer className="shiprlift-footer">
      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-column footer-company">
          <div className="footer-brand">
            <img src={shirlogo} alt="Shiprlift logo" />

            <div>
              <h2>SHIPRLIFT</h2>
              <span>CARGO EXPRESS</span>
            </div>
          </div>

          <p className="footer-description">
            Shiprlift is a global logistics company delivering reliable cargo,
            vessel operations, emergency support, and installation services
            worldwide.
          </p>

          <div className="footer-socials">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon"
            >
              <WhatsAppIcon />
            </a>

            <a
              href="#"
              aria-label="X"
              className="social-icon"
            >
              <XIcon />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/OurServices">Services</a>
          <a href="/Tracknow">Track Shipment</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* OFFICIAL INFO */}
        <div className="footer-column footer-info">
          <h3>Official Info</h3>

          <p>
            Office 1, Alwakalat Street
            <br />
            Alfoyhat, Ahmed Mehdawi Building
            <br />
            Benghazi, Libya
          </p>

          <div className="footer-contact">
            <EmailIcon />
            <a href="mailto:mail@shiprlift.com">
               mail@shiprlift.com
            </a>
          </div>

          <div className="footer-contact">
            <PhoneIcon />
            <a href="tel:+14796524016">
              +1 479-652-4016
            </a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-column footer-newsletter">
          <h3>Newsletter</h3>

          <p>
            Subscribe to receive the latest news, articles, and resources
            directly in your inbox.
          </p>

          <form
            id="newsletterForm"
            className="footer-newsletter-form"
            onSubmit={handleSubmit}
          >
          

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "..." : "Subscribe"}
            </button>
          </form>

          <div className="footer-hours">
            <h4>Open Hours</h4>
            <p>Mon - Sat: 8am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shiprlift. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default ShiprliftFilter;