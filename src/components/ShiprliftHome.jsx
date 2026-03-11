// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import "./ShiprliftHome.css";
import ShiprliftFilter from "./ShiprliftFilter";


import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";

import { motion } from "framer-motion";

/* ICONS / IMAGES */
import mail from "../assets/mail.png";
import whatsappoffer from "../assets/whatsappoffer.png";
import ejetpic from "../assets/ejetpic.jpg";
// import hand from "../assets/hand.png";   
import felomen from "../assets/felomen.jpg";
import shipepo from "../assets/shipepo.jpg";
import rseteam from "../assets/rseteam.png";
import trckin from "../assets/trckin.jpg";
import sickin from "../assets/sickin.jpg";


import mapbep from "../assets/mapbep.png";


import {
  FaPlane,
  FaShip,
  FaWarehouse,
  FaBoxOpen,
  FaLayerGroup,
  FaClipboardList
} from "react-icons/fa";


import womanPic from "../assets/woman.jpg";
import oldmanPic from "../assets/oldman.jpg";
import oldboiPic from "../assets/oldboi.jpg";



import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
// import logo3 from "../assets/logo3.jpg";
// import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.jpg";

import cagotak from "../assets/cagotak.jpg"
/* HERO IMAGES */
import hero1 from "../assets/shiprlift_plane_at_airport_with_cargo_containers.png";
import hero2 from "../assets/shiping.jpg";
import hero3 from "../assets/hand.jpg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";




/* ================= WHY CHOOSE US CARDS ================= */
const whyChooseCards = [
  {
    id: 1,
    title: "24/7 Customer Support",
    description: "Our team is available anytime to assist you.",
    image: felomen,
  },
  {
    id: 2,
    title: "Global Network",
    description: "Strong partnerships across international markets.",
    image: rseteam,
  },
  {
    id: 3,
    title: "Secure & Reliable",
    description: "Advanced tracking and cargo protection systems.",
    image: trckin,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Competitive freight rates with no hidden fees.",
    image: sickin,
  },
];

/* ================= STATS COUNTER ================= */
import { FaTruck, FaSmile, FaAward, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

// Keep raw numbers
const statsData = [
  { icon: <FaTruck />, number: 2000000, label: "Company Deliveries" }, // 2m+
  { icon: <FaSmile />, number: 1000000, label: "Satisfied Clients" }, // 1m+
  { icon: <FaAward />, number: 30, label: "Award Winner" },
  { icon: <FaUsers />, number: 180, label: "Team Members" },
];

 const StatsCounter = ({ startCount }) => {
  return (
    <div className="stats-parent">
      {statsData.map((stat, index) => (
        <CounterCard key={index} stat={stat} start={startCount} />
      ))}
    </div>
  );
};

const CounterCard = ({ stat, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const increment = stat.number / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= stat.number) {
        setCount(stat.number);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(startValue));
      }
    }, 100);

    return () => clearInterval(counter);
  }, [start, stat.number]);

  // Format large numbers as m+
  const formatNumber = (num) => {
    if (num >= 1000000) {
      const mValue = (num / 1000000).toFixed(1);
      return `${mValue}m+`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="stat-card">
      <div className="icon">{stat.icon}</div>
      <h2>{formatNumber(count)}</h2>
      <p>{stat.label}</p>
    </div>
  );
};




/* ================= SHIPRLIFT HOME ================= */
const ShiprliftHome = () => {

  
  const [startCount, setStartCount] = useState(false);

  const [formData, setFormData] = useState({
    freightType: "",
    email: "",
    departureCountry: "",
    weight: "",
    deliveryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Freight request submitted successfully!");
  };
  

  /* HERO */

  /* HERO SLIDESHOW */

const slides = [hero1, hero2, hero3];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  // const heroImages = [hero1, hero2, hero3];
  // const heroWriteUps = [
  //   {
  //     title: "Welcome To Shiprlift",
  //   text:
  //   "We are a leading independent shipping & freight forwarder delivering excellence across air, ocean, road and warehousing.",},
  //   {
  //     title: "Trusted Worldwide",
  //     text:
  //       "Shiprlift connects businesses to international markets through efficient freight forwarding.",
  //   },
  //   {
  //     title: "Moving Cargo With Confidence",
  //     text:
  //       "From pickup to final destination, we ensure secure handling and smooth supply chain operations.",
  //   },
  // ];

  // const [heroIndex, setHeroIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHeroIndex((prev) => (prev + 1) % heroImages.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const message = encodeURIComponent(
    "Hello Shiprlift, I would like to make an enquiry."
  );

  // const labels = {
  //   0.5: "Useless",
  //   1: "Useless+",
  //   1.5: "Poor",
  //   2: "Poor+",
  //   2.5: "Ok",
  //   3: "Ok+",
  //   3.5: "Good",
  //   4: "Good+",
  //   4.5: "Excellent",
  //   5: "Excellent+",
  // };

  const value = 3.5;
    const testimonials = [
  {
    id: 1,
    image: womanPic,
    name: "Michael A.",
    comment:
      "Topping up my shipment was very easy. Shiprlift kept me updated throughout the process and my package arrived earlier than expected!",
  },
  {
    id: 2,
    image: oldmanPic,
    name: "Sandra K.",
    comment:
      "Best logistics experience I've had so far. Their top-up feature saved me extra shipping costs. Highly recommended!",
  },
  {
    id: 3,
    image: oldboiPic,
    name: "David O.",
    comment:
      "Reliable and fast service. Adding more items to my shipment was seamless and the customer support was excellent.",
  },
];




const faqData = [
  {
    table: "Shipping Questions",
    questions: [
      {
        q: "What is Shiprlift?",
        a: "Shiprlift is a logistics platform that helps you ship packages globally with speed, reliability, and real-time tracking."
      },
      {
        q: "How long does delivery take?",
        a: "Delivery typically takes 3–7 business days depending on the destination."
      },
      {
        q: "Can I track my shipment?",
        a: "Yes, every shipment comes with a tracking ID so you can monitor it in real-time."
      }
    ]
  },
  {
    table: "Account & Payments",
    questions: [
      {
        q: "How do I create an account?",
        a: "Click the signup button, verify your email, and you’re ready to start shipping."
      },
      {
        q: "What payment methods are supported?",
        a: "We support debit cards, credit cards, and secure online payment gateways."
      },
      {
        q: "Is my payment secure?",
        a: "Absolutely. Shiprlift uses encrypted payment systems to protect your transactions."
      }
    ]
  }
];

const [openIndex, setOpenIndex] = useState({});

  const toggle = (tableIndex, questionIndex) => {
    const key = `${tableIndex}-${questionIndex}`;

    setOpenIndex((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };




  return (
    <div className="shiprlift-home">
       <div
className="hero"
style={{ backgroundImage: `url(${slides[index]})` }}
>

<div className="hero-content">

<h1>
Moving Cargo With Confidence</h1>

<p>
Shiprlift delivers fast, secure, and reliable cargo transportation across
international routes. From vessel operations to emergency logistics,
we move your business forward.
</p>

<div className="hero-buttons">

<Link to="/Contact">
<button className="primary-btn">
 Contact Us
</button>
</Link>

<Link to="/Track">
<button className="secondary-btn">
Track Shipment
</button>
</Link>

</div>



</div>
</div>
      

<div>
  
</div>


      {/* HERO */}

      {/* WHATSAPP + MAIL */}
      <div className="mog">
        <div>
          <h5>
            ...
            {/* 10+ Years We have more than years of experience in Cargo handling */}
          </h5>
        </div>

        
      </div>


      <div className="shotline">
       <hr />
      
    </div>



<div className="packing-storage-section">
  <div className="content" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", }}>
    
    {/* Text Content */}
    <div className="text" style={{ flex: "1 1 500px" }}>
     

       <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Welcome to Shiprlift Cargo Express
      </Typography>
     
      <div className="oneli">
      <li>Shiprlift Cargo Express is a one-stop freight and Courier solution, providing services to companies of all sizes, be it a small delivery across town or an industrial shipment to the other side of the globe.</li>
      <li>Based on a solid financial footing and having invested remarkable amount of money time on information technology and other over heads, the company’s capabilities of sourcing new clients as well as improving cost efficiency are the key attributes for our success.</li>
      <li>Shiprlift Cargo Express has maintained a significant role in the total transportation arena for over a short time with its professional accredited staff who are our real assets.</li>
      </div>

      
      
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Shiprlift Cargo Care
      </Typography>
      
      <Typography className="ulme">
        {/* <ul style={{ marginBottom: "20px", }}> */}
        <li>Founded in 2016 by Hussain Futtaim, Shiprlift Cargo Care has grown into a global logistics leader, now led by the fourth Ewals generation.</li>
        {/* </ul> */}
      </Typography>

      <div className="StarIcon">
              <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                
              
              </Box>
            </div>
            
           <marquee behavior="" direction="">
              <h5 style={{fontFamily:"monospace"}}>In a world where businesses depend on fast and secure cargo transportation to remain competitive, many global companies rely on Shiprlift Logistics to manage complex shipping operations with efficiency, accuracy, and professionalism, delivering dependable freight solutions that connect international markets while ensuring every shipment is handled with advanced logistics expertise, reliable coordination, and a strong commitment to customer satisfaction</h5>
              </marquee> 
    </div>

    {/* Image / Optional Visual */}
    <div className="image" style={{ flex: "1 1 400px", textAlign: "center" }}>
      <img 
        src={ejetpic} 
        alt="Packing & Storage" 
        style={{ width: "100%", maxWidth: "400px", borderRadius: "4px", objectFit: "cover" }} 
      />
    </div>

  </div>
</div>

<div className="terb">
  <h2>PACKING & STORAGE</h2>

  <div className="terb-grid">

    {/* Card 1 */}
    <div className="terb-card">
      <div className="terb-icon"><FaPlane /></div>
      <div className="terb-card-content">
        <h3>Air Cargo Solutions</h3>
        <p>Fast air cargo handling with secure airport operations.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="terb-card">
      <div className="terb-icon"><FaShip /></div>
      <div className="terb-card-content">
        <h3>Sea Cargo Handling</h3>
        <p>Reliable ocean freight with global port coverage.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="terb-card">
      <div className="terb-icon"><FaWarehouse /></div>
      <div className="terb-card-content">
        <h3>Secure Warehousing</h3>
        <p>Safe storage with real-time monitoring systems.</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="terb-card">
      <div className="terb-icon"><FaBoxOpen /></div>
      <div className="terb-card-content">
        <h3>Custom Packaging</h3>
        <p>Professional packing services to protect your goods.</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="terb-card">
      <div className="terb-icon"><FaLayerGroup /></div>
      <div className="terb-card-content">
        <h3>Consolidation Services</h3>
        <p>Combine shipments to save cost and space.</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="terb-card">
      <div className="terb-icon"><FaClipboardList /></div>
      <div className="terb-card-content">
        <h3>Inventory Management</h3>
        <p>Real-time tracking and stock optimization.</p>
      </div>
    </div>

  </div>
</div>


      {/* FORM & IMAGE SIDE BY SIDE */}
       <div className="frommmmto">
        <div className="frompic">
          <img
            src={shipepo}
            alt="cargo"
            // width={500}
            // height={350}
            style={{ objectFit: "cover", }}
          />
        </div> 

        <div className="bbb" >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                width: "100%",
                height: "100%",
              }}
            >
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
                  Shipment Request Form
                </Typography>

                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    height: "100%",
                    overflowY: "auto",
                  }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    select
                    label="Shipment Type"
                    name="ShipmentType"
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

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 1 }}
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="carddad">
        <div className="cardtext">
          <h2>Why Choose Us?</h2>
          <p>Find reasons to choose us as your freight partner</p>
        </div>

        <div className="cardone">
  {whyChooseCards.map((card) => (
    <Card key={card.id} sx={{ maxWidth: 317, }}>
      <CardActionArea>
        <CardMedia component="img" height="210" image={card.image} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {card.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
      <Link to="/OurServices">
        <Button size="small">Learn More</Button>
      </Link>
      </CardActions>
    </Card>
  ))}
</div>

         <div className="Ourlist">
          <p>
            Our list of services does not end here. Find out how we can help
            your business. <Link to="/OurServices"><b>More Services →</b></Link>
          </p>
         </div>
      </div>

    <div className="fornow" onMouseEnter={() => { if (!startCount) setStartCount(true);}}>
     <div className="hand">
       <h5>Your Trusted Partner in Global Logistics</h5>
     </div>

      <div className="fornowpic">
        <Link to="/Track">
          <img src={mapbep} alt="Track" />
          <span className="tooltip">track</span>
       </Link>
      </div>

    </div>


      {/* CARDNUMBER with StatsCounter */}
      <div className="cardnumber">
        <h3>WE SPECIALISE IN THE TRANSPORTATION</h3>
        <h4>Together, we have your logistical challenges covered</h4>
        <StatsCounter startCount={startCount} />
      </div>


       {/* TESTIMONIALS */}
<div className="testimonials-section">
  <h2 className="testimonials-title">What Our Customers Say</h2>

  <div className="testimonials-container">
    {testimonials.map((user) => (
      <div key={user.id} className="testimonial-card">
        <img
          src={user.image}
          alt={user.name}
          className="testimonial-image"
        />

        <p className="testimonial-comment">“{user.comment}”</p>

        <h4 className="testimonial-name">{user.name}</h4>
      </div>
    ))}
  </div>
</div>

  <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-flex">
        {faqData.map((table, tableIndex) => (
          <div className="faq-table" key={tableIndex}>
            <h3>{table.table}</h3>

            {table.questions.map((item, questionIndex) => {
              const key = `${tableIndex}-${questionIndex}`;

              return (
                <div className="faq-item" key={questionIndex}>
                  <div
                    className="faq-tab"
                    onClick={() => toggle(tableIndex, questionIndex)}
                  >
                    {item.q}
                    <span>{openIndex[key] ? "-" : "+"}</span>
                  </div>

                  {openIndex[key] && (
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>


     <div className="bigcar">
        <div className="bigcarmom">
          <div className="intext">
            <h2>Reliable Shiplift & Transportation Solutions for Every Cargo Need</h2>
            <p>We provide efficient shiplift services alongside secure cargo handling, container logistics, and dependable lorry transportation to ensure your goods move safely and on time from port to destination.</p>
          </div>
        </div>

        <div className="bigcarsonimg">
           <img src={cagotak} alt="cargo" />
        </div>
     </div>


     <div className="colaboss">
         <h4>Built on Reliable Partnerships</h4>
        <div className="colabospic">
           <img src={logo1} alt="cargo" />
           <img src={logo2} alt="cargo" />
           {/* <img src={logo3} alt="cargo" /> */}
           {/* <img src={logo4} alt="cargo" /> */}
           <img src={logo5} alt="cargo" />
           <img src={logo6} alt="cargo" />
         </div>
     </div>


     <div className="live-contact">

<a href="mailto:teslamodelbrand@gmail.com">
<img src={mail} alt="mail" />
</a>

<a
href={`https://wa.me/14796524016?text=${message}`}
target="_blank"
rel="noopener noreferrer"
>
<img src={whatsappoffer} alt="whatsapp" />
</a>

</div>


     <div className="footer">
   <ShiprliftFilter />
</div>

</div>
  );
};

export default ShiprliftHome;
