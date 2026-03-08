// import React, { useState } from "react";
import "./ShiprliftFilter.css";
// import React, { useState, useContext } from "react";


import ig from "../assets/ig.png"; 
import trlegram from "../assets/trlegram.png";
import imgwhatsapp from "../assets/imgwhatsapp.png";
import shirlogo from "../assets/shirlogo.png";

// ceephone.png
import badphone from "../assets/badphone.png";
// import coke from "../assets/coke.png";


const ShiprliftFilter = () => {
  return (
    <div className="filter-section"> 
     
       <div className="logo-section">
      <div className="section1">
       <h2>SHIPRLIFT</h2>
       <p>Shiprlift is a global logistics company delivering reliable cargo, vessel operations, emergency support, and installation services worldwide.
        </p> 

        <div className="contact-info"> 

          <div className="socials">      
            <img src={ig} alt="ig" />
            <img src={imgwhatsapp} alt="imgwhatsapp"/>
            <img src={trlegram} alt="trlegram" />
          </div>  
      
            <div className="logo">
              
              <div className="lopic">
              <img src={shirlogo} alt="shirlogo"/>
              </div>
              <div className="loh3">
              <h3>Shiprlift</h3> 
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

      <div className="section4">
         <h2>Official Info:</h2>
         <p>
              Office 2104, Marina Plaza <br />
              Al Marsa Street, Dubai Marina <br />
              Dubai, United Arab Emirates
          </p>
       </div>
      

      <div className="section5">
        <h2>Open Hours:</h2>
        <p>Mon - Sat: 8am - 5pm Sunday: CLOSED</p>
        <div className="shirlog">
        <img src={badphone} alt="shirlogo"/>
        <h5>+ 1 985-463-5331</h5>
        </div>
      </div>
      
       {/* <div className="section6">
         <h2>Language:</h2>
           <div style={{color:"#ffff"}} id="google_translate_element"></div>
        </div> */}

        <div className="section7">
                  <section className="newsletter">
         <div className="newsletter-content">
        <h2>Subscribe to our newsletter</h2>
        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>

       <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
       <button>Subscribe</button>
       </div>
       </div>
       </section>
      </div>
      </div>
    </div>
  );
};

export default ShiprliftFilter;