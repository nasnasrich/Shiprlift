import React, { useState } from "react";
import "./Contact.css";
import ShiprliftFilter from "./ShiprliftFilter";
import { Link } from "react-router-dom";

import mrshir from "../assets/mrshir.jpg";
import mailwith from "../assets/mailwith.png";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../assets/newig.jpg";
import slide2 from "../assets/mapbep.png";
import slide3 from "../assets/tergem.png"; 

import badphone from "../assets/badphone.png";
import phoneblack from "../assets/phoneblack.png";


import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";

const images = [slide1, slide2, slide3];

const ContactPage = () => {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
    agree: false
  });

  const handleMessageChange = (e) => {
    const { name, value, type, checked } = e.target;

    setMessage({
      ...message,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (!message.agree) {
      alert("You must agree to the Privacy Notice before submitting.");
      return;
    }

    alert("Message Sent Successfully! Our team will contact you shortly.");

    setMessage({
      name: "",
      email: "",
      message: "",
      agree: false
    });
  };

  return (
    <div className="shiprlift-contactpage">

      {/* HERO */}

      <div className="shiprlift-contactpage-hero">

        <div className="shiprlift-contactpage-herotext">

          <h2>SHIPRLIFT</h2>
          <h1>Contact Our Logistics Experts</h1>

          <p>
            Have questions about shipping, pricing or tracking?
            Our team is ready to help you.
          </p>

          {/* <div className="shiprlift-contactpage-buttons">
           
            <a href="tel:+2348012345678">
              <button>Call Support</button>
            </a>

            <a href="https://wa.me/2348012345678">
              <button className="secondary">WhatsApp</button>
            </a>

          </div> */}

          {/* SLIDER */}

          <div className="shiprlift-contactpage-slider">

            <Slide duration={3000} arrows={false} autoplay>

              {images.map((img, index) => (
                <div key={index} className="shiprlift-contactpage-slide">
                  <img src={img} alt="slide" />
                </div>
              ))}

            </Slide>

          </div>

        </div>

        <div className="shiprlift-contactpage-heroimg">
          <img src={mrshir} alt="contact" />
        </div>

      </div>

      {/* CONTACT CARDS */}
      <div className="info">
        <p> Our logistics experts are available to assist you with shipment
            tracking, freight booking, and general enquiries.</p>
      </div>
      
      {/* WHY CHOOSE */}

      <div className="shiprlift-contactpage-why">

        <h1>Why Choose Shiprlift</h1>

        <div className="shiprlift-contactpage-whygrid">

          <div className="shiprlift-contactpage-whycard">
            <h3>Global Network</h3>
            <p>Ship cargo to more than 120 countries worldwide.</p>
          </div>

          <div className="shiprlift-contactpage-whycard">
            <h3>Fast Delivery</h3>
            <p>Efficient logistics ensures your goods arrive on time.</p>
          </div>

          <div className="shiprlift-contactpage-whycard">
            <h3>Secure Handling</h3>
            <p>Professional cargo handling and monitoring.</p>
          </div>

          <div className="shiprlift-contactpage-whycard">
            <h3>24/7 Support</h3>
            <p>Our experts are always ready to assist you.</p>
          </div>

        </div>

      </div>

      {/* MESSAGE FORM */}

      <div className="shiprlift-contactpage-forms">

        <div className="shiprlift-contactpage-formbox">

          <Card>

            <CardContent>

              <Typography variant="h5" align="center">
                Send Us A Message
              </Typography>

              <form
                onSubmit={handleMessageSubmit}
                className="shiprlift-contactpage-form"
              >

                <TextField
                  label="Full Name"
                  name="name"
                  value={message.name}
                  onChange={handleMessageChange}
                  required
                />

                <TextField
                  label="Email Address"
                  name="email"
                  value={message.email}
                  onChange={handleMessageChange}
                  required
                />

                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={0}
                  value={message.message}
                  onChange={handleMessageChange}
                  required
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="agree"
                      checked={message.agree}
                      onChange={handleMessageChange}
                    />
                  }
                  label="By completing this form, you confirm that you agree to SGL Privacy Notice."
                />

                <Button type="submit" variant="contained">
                  Send Message
                </Button>

              </form>

            </CardContent>

          </Card>
        </div>

       <div className="lk">
        <div className="ikk">
        <h2>We connect the world. Let us connect yours.</h2>
        <p>If you provide the 'when', 'where', 'what', we deliver uncomplicated logistics. Reach out to our local complexity killers who are ready to help move your goods and solve any challenge, anywhere in the world, at any time. We take your data protection seriously. You can read more about how we process your personal data in our Privacy Notice.</p>

            <h3>
            Read more about our privacy notice{" "}
            <Link to="/privacy" className="privacy-arrow">→</Link>
            </h3>
        <h1>Contact Global HQ</h1>

        <div className="shirlogg">
          <img src={badphone} alt="shirlogo"/>
          <h5>+ 1 985-463-5331</h5>
        </div>
        
         <div className="shirloggtwo">
            <img src={mailwith} alt="shirlogo"/>
            <h7>shiprlift@gmail.com</h7>
        </div>
        

        <div className="phoneopicc">
            <img src={phoneblack} ait="phoneo"/>
          </div>
        </div>
       </div>

      </div>

      {/* MAP */}

      <div className="shiprlift-contactpage-map">

        <iframe
          src="https://www.google.com/maps?q=Copenhagen&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          title="Shiprlift Location"
        />

      </div>

      {/* FOOTER */}

      <div className="shiprlift-contactpage-footer">
        <ShiprliftFilter />
      </div>

    </div>
  );
};

export default ContactPage;