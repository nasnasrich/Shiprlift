import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Left side text */}
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>Have any questions? We'd love to hear from you, write to us now!</p>

        <h2>Visit Us</h2>
        <p>
          Room 209-210, 2/F, Xinggang Tongchuanghui Tianxuan Building <br />
          Shenzhen, China
        </p>

        <h2>Get In Touch</h2>
        <p>+86 1341 0237 131<br />+86 755-33160729<br />info@zggship.com<br />sales@zggship.com</p>
      </div>

      {/* Right side form */}
      <div className="contact-right">
        <h3>Freight Booking Form</h3>
        <form>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address*" required />
          <textarea placeholder="Tell Us How We Can Help*" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
