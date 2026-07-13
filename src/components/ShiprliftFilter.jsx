// import React, { useState } from "react";
import "./ShiprliftFilter.css";
import React, { useState, useContext } from "react";

import { CircularProgress } from "@mui/material"; // optional if using MUI

import { sendMail } from "./controllers/mailController"; // your controller

import ig from "../assets/ig.png";
import trlegram from "../assets/trlegram.png";
import imgwhatsapp from "../assets/imgwhatsapp.png";
import shirlogo from "../assets/shirlogo.png";

// ceephone.png
import badphone from "../assets/badphone.png";
// import coke from "../assets/coke.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ShiprliftFilter = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendMail(
        e,
        "template_52gjjxe",
        "newsletterForm",
        "Thanks for subscribing!",
      );

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    } catch (error) {
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
    <div className="filter-section">
      <div className="logo-section">
        <div className="section1" data-aos="fade-right">
          <h2 data-aos="zoom-in">SHIPRLIFT</h2>
          <p data-aos="zoom-in">
            Shiprlift is a global logistics company delivering reliable cargo,
            vessel operations, emergency support, and installation services
            worldwide.
          </p>

          <div className="contact-info">
            <div className="socials" data-aos="zoom-in" data-aos-delay="200">
              {" "}
              <img src={ig} alt="ig" />
              <img src={imgwhatsapp} alt="imgwhatsapp" />
              <img src={trlegram} alt="trlegram" />
            </div>

            <div className="logo" data-aos="flip-left">
              <div className="lopic">
                <img src={shirlogo} alt="shirlogo" />
              </div>
              <div className="loh3">
                <h3 data-aos="zoom-in">Shiprlift</h3>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section2">
         <h2>SERVICES</h2>
         <p>Aceon Freigh</p>
         <p>Storeage</p>
         <p>Air Freight</p>
         <p>Warehousing</p>
      </div> */}

        {/* <div className="section3">
         <h2>QUICK LINKS</h2>
         <p>About Us</p>
         <p>Track</p>
         <p>Contact Us</p>
         <p>Services</p>
      </div> 
       */}

        <div className="section4" data-aos="fade-up" data-aos-delay="100">
          <h2 data-aos="zoom-in">Official Info:</h2>
          <p>
              Office 2104, Marina Plaza <br />
              Al Marsa Street, Dubai Marina <br />
              Dubai, United Arab Emirates
          </p>

          {/* <p data-aos="zoom-in">Office 2104, The Shard <br />
            32 London Bridge Street  <br />
            London SE1 9SG <br />
            United Kingdom</p>
       </div>  */}

          {/* <p data-aos="zoom-in">
            Office 2104, Hormuud Tower
            <br />
            Airport Road Mogadishu
            <br />
            Banadir Region
            <br />
            Somalia
          </p> */}
        </div>

        <div className="section5" data-aos="fade-up" data-aos-delay="200">
          {" "}
          <h2 data-aos="zoom-in">Open Hours:</h2>
          <p data-aos="zoom-in">Mon - Sat: 8am - 5pm Sunday: CLOSED</p>
          <div className="shirlog">
            <img src={badphone} alt="shirlogo" />
            <h5 data-aos="zoom-in">+ 1 479-652-4016</h5>
          </div>
        </div>

        {/* <div className="section6">
         <h2>Language:</h2>
           <div style={{color:"#ffff"}} id="google_translate_element"></div>
        </div> */}

        <div className="section7" data-aos="zoom-in-up" data-aos-delay="300">
          {" "}
          <section className="newsletter">
            <div className="newsletter-content" data-aos="fade-left">
              <h2 data-aos="zoom-in">Subscribe to our newsletter</h2>
              <p data-aos="zoom-in">
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
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <CircularProgress size={20} style={{ color: "#fff" }} />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShiprliftFilter;
