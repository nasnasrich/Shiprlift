import React, { useState } from "react";
import "./PrivacyNotice.css";

const sections = [
  {
    title: "Information We Collect",
    content: "When you use Shiprlift services, we may collect your name, contact details, shipment addresses, and shipment information needed to deliver your luggage or cargo safely.",
  },
  {
    title: "How We Use Your Information",
    content: "Your information helps us process shipments, track deliveries, improve our logistics services, and communicate with you about your shipments.",
  },
  {
    title: "Information Protection",
    content: "Shiprlift Cargo Express uses modern security systems and procedures to protect your information and ensure it is handled safely and responsibly.",
  },
  {
    title: "Your Privacy Rights",
    content: "You may request access, correction, or deletion of your personal information depending on applicable laws.",
  },
  {
    title: "Contact Shiprlift",
    content: "If you have questions about this Privacy Notice, please contact our privacy team.\n\nEmail: privacy@shiprlift.com\nPhone: +1 985-463-5331",
  },
];

const PrivacyNotice = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="privacy-container">
      <div className="privacy-hero">
        <h1>Shiprlift Privacy Notice</h1>
        <p>We respect your privacy and are committed to protecting your personal information when using Shiprlift's services worldwide.</p>
      </div>

      <div className="privacy-accordion">
        {sections.map((section, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-title" onClick={() => toggleSection(index)}>
              {section.title}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>▼</span>
            </button>
            {openIndex === index && (
              <div className="accordion-content">
                {section.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyNotice;