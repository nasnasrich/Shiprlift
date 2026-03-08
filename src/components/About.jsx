import React from "react";
import "./About.css";
import ShiprliftFilter from "./ShiprliftFilter";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";  
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import grop from "../assets/grop.jpg";
import mapbep from "../assets/mapbep.png";

import airline from "../assets/airline.jpg";
import bus from "../assets/bus.jpg";
import ship from "../assets/ship.jpg";
import sister from "../assets/sister.jpg";

import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

// NEW: single hero image for About
import abutimg from "../assets/abutimg.png"; 

const cards = [
  { id: 1, title: 'AIR SHIPPING', description: 'Efficient air freight solutions connecting global destinations, ensuring fast, reliable delivery with complete tracking and professional cargo handling services.', image: airline },
  { id: 2, title: 'TRANSPORT HUB', description: 'Comprehensive logistic planning and management, optimizing supply chains, coordinating transport, warehousing, and distribution with precision and efficiency worldwide.', image: bus },
  { id: 3, title: 'CARGO HADLING', description: 'Safe cargo handling at ports, managing loading, unloading, and storage operations, guaranteeing timely delivery across international maritime routes.', image: ship },
  { id: 4, title: 'LACAL TRANSPORT ', description: 'Reliable domestic transport services, moving goods across cities and regions efficiently, with full tracking and secure, timely delivery solutions.', image: sister },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', { backgroundColor: '#1A2027' }),
}));

const ShiprliftAbout = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="about">

      {/* NEW HERO */}
      <section
        className="aboutHeroNew"
        style={{ backgroundImage: `url(${abutimg})` }}
      >
        <div className="aboutHeroNewOverlay">
          <div className="aboutHeroNewContent">
            <h1>Reliable Cargo With Precision</h1>
            <p>
              Shiprlift provides trusted, efficient, and global logistics solutions. From vessel handling to freight management, we keep your cargo moving.
            </p>
            <div className="aboutHeroNewButtons">
              <Link to="/OurServices">
                <button className="primaryBtn">Explore Services</button>
              </Link>
              <Link to="/Contact">
                <button className="secondaryBtn">Contact Our Team</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat">
          <h1>12K+</h1>
          <p>Successful Deliveries</p>
        </div>
        <div className="stat">
          <h1>75+</h1>
          <p>Global Ports Connected</p>
        </div>
        <div className="stat">
          <h1>20+</h1>
          <p>Industry Awards</p>
        </div>
        <div className="stat">
          <h1>99%</h1>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card"><h3>Reliability</h3><p>We deliver what we promise — on time, every time.</p></div>
          <div className="value-card"><h3>Innovation</h3><p>We leverage modern technology to optimize logistics.</p></div>
          <div className="value-card"><h3>Safety</h3><p>Every shipment is handled with strict safety protocols.</p></div>
          <div className="value-card"><h3>Customer Focus</h3><p>Your success remains our highest priority.</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="about-services">
        <h2>OUR PROFESSIONS</h2>
        <div className="about-servicesmom">
          <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 280px)', gap: 2, justifyContent: "center" }}>
            {cards.map((card, index) => (
              <Card key={card.id} sx={{ height: "100%" }}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{ height: '100%' }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{ height: 180, width: "100%", objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{card.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>

        <div className="ourh2"><h2>THE ROAD WE'VE TRAVELED</h2></div>

        {/* TIMELINE */}
        <div className="Time">
          <Box sx={{ width:{xs: "100%", md: "50%"} }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid size={6}><Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>2016 <br /> Shiprlift was established.</Item></Grid>
              <Grid size={6}><Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>2018 <br /> Expanded operations across international routes.</Item></Grid>
              <Grid size={6}><Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>2021 <br /> Introduced advanced cargo tracking technology.</Item></Grid>
              <Grid size={6}><Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>2024 <br /> Became a trusted logistics partner worldwide.</Item></Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, width: {xs: "100%", md: 580},display: "flex", flexDirection: {xs: "column", md:"row"} }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Stack spacing={2}>
                  <Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>Built on Excellence</Item>
                  <Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>Your Maritime Partner</Item>
                  <Item sx={{ color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>Anchored in Trust</Item>
                </Stack>
              </Grid>
              <Grid size={8}>
                <Item sx={{ height: '100%', boxSizing: 'border-box', paddingTop: 5, color: "black", transition: "0.3s", "&:hover": { color: "primary.main" } }}>
                  Delivering reliable vessel transfer and marine solutions, Shiprlift combines innovation, safety, and precision to keep maritime operations running smoothly.
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="leader-card">
          <img src={grop} alt="CEO" />
          <div>
            <h2>Message From Our Leadership</h2>
            <p>
              “At Shiprlift, logistics is more than transportation —
              it is about building connections that empower global commerce.
              Our commitment to excellence drives everything we do.”
            </p>
            <h4>— Daniel Crawford</h4>
            <h5>Chief Executive Officer</h5>
          </div>
        </div>

        <div className="impct">
          <h5>OUR IMPCT</h5>
          <h2>Every day, around the globe, we are delivering what matters.</h2>
          <p>At Shiprlift, we’re focused on making credible, purposeful changes to adapt and achieve our sustainability goals to help build stronger communities and a healthier environment.. It's about ...</p>
          <Link to="/OurServices"><button>SEE MORE IMPCT</button></Link>
          <div className="impctpic">
            <Link to="/Track">
              <img src={mapbep} alt="Track" />
              <span className="tooltip">track</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Partner With Shiprlift Today</h2>
        <p>Experience logistics built on speed, precision, and trust.</p>
        <Button variant="contained" startIcon={<CallIcon />} href="tel:+2348012345678">
          Call Support
        </Button>
      </section>

      <div className="footerpage">
        <ShiprliftFilter />
      </div>
    </div>
  );
};

export default ShiprliftAbout;