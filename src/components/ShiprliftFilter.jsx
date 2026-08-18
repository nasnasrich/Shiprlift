import React, { useState, useEffect } from "react";
import "./ShiprliftFilter.css";

import { CircularProgress } from "@mui/material";
import { sendMail } from "./controllers/mailController";

import ig from "../assets/ig.png";
import trlegram from "../assets/trlegram.png";
import imgwhatsapp from "../assets/imgwhatsapp.png";
import shirlogo from "../assets/shirlogo.png";
import badphone from "../assets/badphone.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ShiprliftFilter = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendMail(
        e,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE,
        "newsletterForm",
        "Thanks for subscribing!"
      );

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <footer className="filter-section">
      <div className="logo-section">

        {/* ================= ABOUT ================= */}
        <div className="section1" data-aos="fade-right">
          <h2>SHIPRLIFT</h2>

          <p>
            Shiprlift is a global logistics company delivering reliable cargo,
            vessel operations, emergency support, and installation services
            worldwide.
          </p>

          <div className="contact-info">

            {/* SOCIAL ICONS */}
            <div
              className="socials"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={ig} alt="Instagram" />
              <img src={imgwhatsapp} alt="WhatsApp" />
              <img src={trlegram} alt="Telegram" />
            </div>

            {/* LOGO */}
            <div className="logo" data-aos="flip-left">
              <div className="lopic">
                <img src={shirlogo} alt="Shiprlift logo" />
              </div>

              <div className="loh3">
                <h3>Shiprlift</h3>
              </div>
            </div>

          </div>
        </div>


        {/* ================= OFFICIAL INFO ================= */}
        <div className="section4" data-aos="fade-up">
          <h2>Official Info:</h2>

          <p>
            Office 1, Alwakalat Street
            <br />
            Alfoyhat, Ahmed Mehdawi Building
            <br />
            Benghazi, Libya
          </p>

          {/* EMAIL */}
          <div className="mailbox">
            <span className="mail-symbol">✉</span>

            <a
              href="mailto:mail@shiprlift.com"
              className="mail-link"
            >
              mail@shiprlift.com
            </a>
          </div>
        </div>


        {/* ================= OPEN HOURS ================= */}
        <div className="section5" data-aos="fade-up">
          <h2>Open Hours:</h2>

          <p>
            Mon - Sat: 8am - 5pm
            <br />
            Sunday: CLOSED
          </p>

          <div className="shirlog">
            <img src={badphone} alt="Phone" />

            <a
              href="tel:+14796524016"
              className="phone-link"
            >
              +1 479-652-4016
            </a>
          </div>
        </div>


        {/* ================= NEWSLETTER ================= */}
        <div
          className="section7"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <section className="newsletter">

            <div className="newsletter-content">
              <h2>Subscribe to our newsletter</h2>

              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>

              <form
                id="newsletterForm"
                className="newsletter-form"
                onSubmit={handleSubmit}
              >

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress
                      size={20}
                      sx={{ color: "#fff" }}
                    />
                  ) : (
                    "Subscribe"
                  )}
                </button>

              </form>
            </div>

          </section>
        </div>

      </div>
    </footer>
  );
};

export default ShiprliftFilter;