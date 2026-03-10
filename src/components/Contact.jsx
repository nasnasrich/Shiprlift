import React, { useState } from "react";
import "./Contact.css";
import ShiprliftFilter from "./ShiprliftFilter";
import mrshir from "../assets/mrshir.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../assets/newig.jpg";
import slide2 from "../assets/mapbep.png"; 
import slide3 from "../assets/tergem.png";

import { Card, CardContent, TextField, MenuItem, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [slide1, slide2, slide3];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    freightType: "",
    email: "",
    departureCountry: "",
    weight: "",
    deliveryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Freight Request Sent Successfully!");
    setFormData({
      freightType: "",
      email: "",
      departureCountry: "",
      weight: "",
      deliveryDate: "",
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

        <div className="Contactpick">
          <div className="ContactTeam">
            <div className="slide-container">
              <Slide
                duration={1000}
                transitionDuration={0}
                arrows={false}
                autoplay={true}
                pauseOnHover={false}
                canSwipe={false}
                infinite={true}
                easing="linear"
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

    

      <div className="Contacded">
        <div className="contentmom">
          <h1><span>CONTACT Shiprlift</span></h1>
          <h2>Reliable support for shipping, tracking, and pricing. Our experts help move your cargo anywhere with efficiency and care.</h2>
          <div className="contact-buttons">
            <a href="tel:+2348012345678"><button>Call Support</button></a>
            <a href="https://wa.me/2348012345678"><button className="secondary">WhatsApp Us</button></a>
          </div>
        </div>

        {/* === REPLACED CONTACT FORM WITH HOME PAGE BBB FORM === */}

        <div className="Contacdedfrom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Card sx={{ borderRadius: 2, boxShadow: "none",  width: "100%", height: "100%",  }}>
              <CardContent
                sx={{
                  p: 4,
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" align="center" gutterBottom>
                  Freight Booking Form
                </Typography>

                <form
                  style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%", overflowY: "auto" }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    select
                    label="Freight Type"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="air">Air Freight</MenuItem>
                    <MenuItem value="sea">Sea Freight</MenuItem>
                    <MenuItem value="road">Road Freight</MenuItem>
                  </TextField>

                  <TextField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Departure Country"
                    name="departureCountry"
                    value={formData.departureCountry}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Total Weight (KG)"
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Expected Delivery Date"
                    type="text"
                    name="deliveryDate"
                    placeholder="DD/MM/YYYY"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    helperText="Enter date as DD/MM/YYYY"
                    required
                    fullWidth
                  />

                  <Button type="submit" variant="contained" size="large" sx={{ mt: 1 }}>
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

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

export default ContactForm;