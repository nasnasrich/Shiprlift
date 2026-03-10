// import React from "react";
import "./Contact.css";
import React, { useState } from "react";
import ShiprliftFilter from "./ShiprliftFilter";


import mrshir from "../assets/mrshir.jpg";
// import shirlogo from "../assets/shirlogo.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../assets/newig.jpg";
import slide2 from "../assets/mapbep.png"; 
import slide3 from "../assets/tergem.png";

// import grilcalls from "../assets/grilcalls.jpg";


// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import shirlogo from "../assets/shirlogo.png";
// import slide1 from "../assets/newig.jpg";
// import slide2 from "../assets/mapbep.png";
// import slide3 from "../assets/tergem.png";
// import support from "../assets/grilcalls.jpg";


const images = [
  slide1,
  slide2,
  slide3,
];




// const images = [slide1, slide2, slide3];




const Contact = () => { 
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("Message Sent Successfully ");
  setForm({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
};

  return (
  <div className="Contact">
    <div className="Contactheroo">
      <div className="Contacttex">
        <div className="Contactnum">
        <h2>SHIPRLIFT</h2>
        <h1>GET IN TOUCH</h1>
        <h3>Have questions? Visit us or send an email anytime.</h3>
        </div>

        <div className="Contaimg">
          <img src={mrshir} alt="cargo" />
        </div>

      </div>
          
      {/* <p>CONTACT OUR TEAM</p> */}
       
      <div className="Contactpick">
        <div className="ContactTeam">
        {/* <h1>CONTACT OUR TEAM</h1> */}

        <div className="slide-container">
        <Slide
         duration={1000}
         transitionDuration={0}
         arrows={false}
         autoplay={true}
         pauseOnHover={false}
         canSwipe={false}      // prevents swipe pause on mobile
         infinite={true}       // ensures endless looping
         easing="linear"       // removes the slight "slow-down" feel
        >


       {images.map((img, index) => (
        <div key={index} className="each-slide">
        <img src={img} alt={`slide-${index}`} />
        </div>
         ))}
       </Slide>
        </div>

        </div>

      </div>
    </div>


    <div className="contentson">
      <h2>CONTACT OUR TEAM</h2> 
    </div> 


<div className="Contacded">

   <div className="contentmom">
     <h1><span>Shiprlift</span></h1>
     <h2>Have questions about shipping, tracking, or pricing? Our logistics experts are ready to help you move anything, anywhere - faster and safer.</h2>
     <div className="contact-buttons"> 
      <a href="tel:+2348012345678"> <button className="primary">Call Support</button> </a> 
      <a href="https://wa.me/2348012345678"> <button className="secondary">WhatsApp Us</button> </a> 
      </div>
   </div> 
  
   <div className="Contactform">
  <form onSubmit={handleSubmit} className="contact-form-wrapper">
    
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={form.email}
      onChange={handleChange}
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={form.phone}
      onChange={handleChange}
      required
    />

    <input
      type="text"
      name="subject"
      placeholder="Your Subject"
      value={form.subject}
      onChange={handleChange}
      required
    />

    <textarea
      name="message"
      placeholder="Send Message"
      rows="5"
      value={form.message}
      onChange={handleChange}
      required
    />

    <button type="submit" className="send-btn">
      Send Request
    </button>

  </form>
</div>

</div>

   
   {/* MAP */}
   <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK_HERE"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Shiprlift Location"
  ></iframe>
</div>
     
    <div className="footerpage">
             <ShiprliftFilter />
    </div>
       
  </div>
  );
};

export default Contact; // ⭐ THIS is what you are missing
