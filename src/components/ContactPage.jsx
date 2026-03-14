import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [mode, setMode] = useState("advice"); // "advice" or "quote"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shipmentDetails: "",
    shipmentType: "",
    weight: "",
    destination: "",
  });

  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "advice") {
      alert("Thank you! Our experts will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        shipmentDetails: "",
        shipmentType: "",
        weight: "",
        destination: "",
      });
      setQuote(null);
    } else if (mode === "quote") {
      let basePrice = 20;
      let weightMultiplier = parseFloat(formData.weight) || 1;
      let estimatedPrice = basePrice * weightMultiplier;
      setQuote(estimatedPrice.toFixed(2));
    }
  };

  return (
    <div className="combined-container">
      <h1>Shiprlift Support</h1>
      <div className="mode-buttons">
        <button
          className={mode === "advice" ? "active" : ""}
          onClick={() => {
            setMode("advice");
            setQuote(null);
          }}
        >
          Get Expert Advice
        </button>
        <button
          className={mode === "quote" ? "active" : ""}
          onClick={() => setMode("quote")}
        >
          Get a Free Quote
        </button>
      </div>

      <p className="mode-description">
        {mode === "advice"
          ? "Not sure which courier fits your shipment? Fill out the form below and our logistics experts will guide you."
          : "Fill in your shipment details below and get an instant estimate from our logistics experts."}
      </p>

      <form className="combined-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {mode === "advice" ? (
          <textarea
            name="shipmentDetails"
            placeholder="Shipment Details"
            value={formData.shipmentDetails}
            onChange={handleChange}
            rows="4"
            required
          />
        ) : (
          <>
            <select
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Shipment Type</option>
              <option value="Documents">Documents</option>
              <option value="Parcel">Parcel</option>
              <option value="Freight">Freight</option>
            </select>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">{mode === "advice" ? "Submit" : "Get Quote"}</button>
      </form>

      {mode === "quote" && quote && (
        <div className="quote-result">
          <h3>Estimated Price:</h3>
          <p>${quote} USD</p>
        </div>
      )}

      <div className="tips-section">
        <h3>Tips:</h3>
        <ul>
          {mode === "advice" ? (
            <>
              <li>Provide accurate shipment details.</li>
              <li>Include destination and expected delivery time.</li>
              <li>Our experts will guide you to the best courier.</li>
            </>
          ) : (
            <>
              <li>Provide correct weight and dimensions.</li>
              <li>Specify destination city or country.</li>
              <li>Choose the shipment type carefully.</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;