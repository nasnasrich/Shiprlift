import React, { useState } from "react";
import "./Contact.css";
import ShiprliftFilter from "./ShiprliftFilter";

import mrshir from "../assets/mrshir.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../assets/newig.jpg";
import slide2 from "../assets/mapbep.png";
import slide3 from "../assets/tergem.png";

import {
Card,
CardContent,
TextField,
MenuItem,
Button,
Typography,
Checkbox,
FormControlLabel
} from "@mui/material";

import { motion } from "framer-motion";

const images=[slide1,slide2,slide3];

const ContactPage=()=>{

const [freight,setFreight]=useState({
freightType:"",
email:"",
country:"",
weight:"",
date:""
});

const handleFreightChange=(e)=>{
const{name,value}=e.target;
setFreight({...freight,[name]:value});
};

const handleFreightSubmit=(e)=>{
e.preventDefault();
alert("Freight Request Sent Successfully!");
setFreight({
freightType:"",
email:"",
country:"",
weight:"",
date:""
});
};

const [message,setMessage]=useState({
name:"",
email:"",
message:"",
agree:false
});

const handleMessageChange=(e)=>{
const{name,value,type,checked}=e.target;

setMessage({
...message,
[name]:type==="checkbox"?checked:value
});
};

const handleMessageSubmit=(e)=>{
e.preventDefault();

if(!message.agree){
alert("You must agree to the Privacy Notice before submitting.");
return;
}

alert("Message Sent Successfully! Our team will contact you shortly.");

setMessage({
name:"",
email:"",
message:"",
agree:false
});
};

return(

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

<div className="shiprlift-contactpage-buttons">

<a href="tel:+2348012345678">
<button>Call Support</button>
</a>

<a href="https://wa.me/2348012345678">
<button className="secondary">WhatsApp</button>
</a>

</div>


{/* SLIDER */}

<div className="shiprlift-contactpage-slider">

<Slide duration={0} arrows={false} autoplay infinite>

{images.map((img,index)=>(
<div key={index} className="shiprlift-contactpage-slide">
<img src={img} alt="slide"/>
</div>
))}

</Slide>

</div>
</div>

<div className="shiprlift-contactpage-heroimg">
<img src={mrshir} alt="contact"/>
</div>




</div>


{/* CONTACT CARDS */}

<div className="shiprlift-contactpage-info">

<div className="shiprlift-contactpage-card">
<h3>Phone</h3>
<p> +1 985-463-5331</p>
</div>

<div className="shiprlift-contactpage-card">
<h3>Email</h3>
<p>support@shiprlift.com</p>
</div>

<div className="shiprlift-contactpage-card">
<h3>Head Office</h3>
<p>Copenhagen, Denmark</p>
</div>

<div className="shiprlift-contactpage-card">
<h3>Working Hours</h3>
<p>Mon-Sat</p>
<p>08:00-18:00</p>
</div>
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

{/* FORMS */}

<div className="shiprlift-contactpage-forms">

<div className="shiprlift-contactpage-formbox">

<motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>

<Card>

<CardContent>

<Typography variant="h5" align="center">
Freight Booking Form
</Typography>

<form onSubmit={handleFreightSubmit} className="shiprlift-contactpage-form">

<TextField select label="Freight Type" name="freightType" value={freight.freightType} onChange={handleFreightChange} required>

<MenuItem value="air">Air Freight</MenuItem>
<MenuItem value="sea">Sea Freight</MenuItem>
<MenuItem value="road">Road Freight</MenuItem>

</TextField>

<TextField label="Email" name="email" value={freight.email} onChange={handleFreightChange} required/>

<TextField label="Departure Country" name="country" value={freight.country} onChange={handleFreightChange} required/>

<TextField label="Weight (KG)" name="weight" type="number" value={freight.weight} onChange={handleFreightChange} required/>

<TextField label="Expected Delivery Date" name="date" value={freight.date} onChange={handleFreightChange} required/>

<Button type="submit" variant="contained">
Submit Request
</Button>

</form>

</CardContent>

</Card>

</motion.div>

</div>

{/* MESSAGE FORM */}

<div className="shiprlift-contactpage-formbox">

<Card>

<CardContent>

<Typography variant="h5" align="center">
Send Us A Message
</Typography>

<form onSubmit={handleMessageSubmit} className="shiprlift-contactpage-form">

<TextField label="Full Name" name="name" value={message.name} onChange={handleMessageChange} required/>

<TextField label="Email Address" name="email" value={message.email} onChange={handleMessageChange} required/>

<TextField label="Your Message" name="message" multiline rows={0} value={message.message} onChange={handleMessageChange} required/>

<FormControlLabel
control={<Checkbox name="agree" checked={message.agree} onChange={handleMessageChange}/>}
label="By completing this form, you confirm that you agree to SGL Privacy Notice. This form will be sent to our Headquarter in Copenhagen."
/>

<Button type="submit" variant="contained">
Send Message
</Button>

</form>

</CardContent>

</Card>

</div>

</div>

{/* MAP */}

<div className="shiprlift-contactpage-map">

<iframe
src="https://www.google.com/maps?q=Copenhagen&output=embed"
width="100%"
height="400"
style={{border:0}}
title="Shiprlift Location"
/>

</div>

{/* FOOTER */}

<div className="shiprlift-contactpage-footer">
<ShiprliftFilter/>
</div>

</div>

);

};

export default ContactPage;