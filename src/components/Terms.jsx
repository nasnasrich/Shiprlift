import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">

      {/* HERO */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <h1>Terms & Conditions</h1>
          <p>
            Please read these terms carefully before using Shiprlift's
            services and website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="terms-container">

        <div className="terms-intro">
          <p>
            Welcome to Shiprlift. These Terms & Conditions govern your use
            of the Shiprlift website and our logistics and shipping-related
            services. By accessing our website or using our services, you
            acknowledge that you have read, understood, and agreed to these
            terms.
          </p>
        </div>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Shiprlift's website and services, you agree
            to comply with these Terms & Conditions. If you do not agree with
            any part of these terms, please do not use our website or services.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Our Services</h2>
          <p>
            Shiprlift provides logistics and cargo-related services, which may
            include shipment coordination, cargo transportation, tracking,
            freight support, vessel operations, emergency support, and
            installation services.
          </p>
          <p>
            Services may vary depending on the shipment, destination,
            transportation method, and applicable requirements.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Shipment Information</h2>
          <p>
            Customers are responsible for providing accurate and complete
            information when arranging a shipment. This may include the
            sender's information, receiver's information, shipment
            description, weight, dimensions, destination, and other required
            details.
          </p>
          <p>
            Incorrect or incomplete information may result in delays,
            additional charges, or difficulties with shipment processing.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Prohibited Items</h2>
          <p>
            Customers must not use Shiprlift's services to transport items
            that are prohibited by applicable laws, regulations, carriers,
            ports, airports, customs authorities, or other relevant
            authorities.
          </p>
          <p>
            Customers are responsible for declaring shipment contents
            accurately and providing any required documentation.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Shipment Tracking</h2>
          <p>
            Shiprlift may provide tracking information to help customers
            monitor the progress of their shipments.
          </p>
          <p>
            Tracking information is provided for informational purposes and
            may change as a shipment moves through different locations,
            carriers, customs processes, ports, airports, or transportation
            stages.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Delivery Times</h2>
          <p>
            Estimated delivery times are provided as guidance and are not
            necessarily guaranteed. Delivery may be affected by weather,
            customs procedures, transportation conditions, operational
            issues, documentation, security requirements, or other
            circumstances beyond Shiprlift's reasonable control.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Payments and Charges</h2>
          <p>
            Customers agree to pay applicable charges associated with the
            services requested from Shiprlift. Additional charges may apply
            where a shipment requires special handling, additional
            transportation, storage, customs-related processing, or other
            services.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Customs and Documentation</h2>
          <p>
            International shipments may be subject to customs requirements,
            duties, taxes, inspections, and other governmental procedures.
          </p>
          <p>
            Customers are responsible for providing accurate documentation
            and information required for their shipment.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Delays and Circumstances Beyond Our Control</h2>
          <p>
            Shiprlift shall not be responsible for delays or interruptions
            caused by circumstances outside our reasonable control. These
            circumstances may include severe weather, natural disasters,
            government restrictions, customs delays, strikes, transportation
            disruptions, security events, or other unforeseen circumstances.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. User Responsibilities</h2>
          <p>
            Users agree not to misuse the Shiprlift website, attempt to gain
            unauthorized access to our systems, interfere with website
            functionality, submit fraudulent information, or use our
            services for unlawful purposes.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Website Information</h2>
          <p>
            Shiprlift makes reasonable efforts to keep information on its
            website accurate and up to date. However, information may change
            without notice and should not be considered a guarantee of a
            particular service, price, delivery time, or availability.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Intellectual Property</h2>
          <p>
            The Shiprlift name, logo, website design, graphics, text, and
            other website materials may be protected by applicable
            intellectual property laws. These materials may not be copied,
            reproduced, modified, or distributed without appropriate
            authorization.
          </p>
        </section>

        <section className="terms-section">
          <h2>13. Privacy</h2>
          <p>
            Information submitted through our website or services may be
            processed in accordance with our Privacy Policy. By using our
            services, you acknowledge that you should review our Privacy
            Policy to understand how information is handled.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law, Shiprlift shall not be
            liable for indirect, incidental, consequential, or unforeseen
            losses arising from the use of our website or services.
          </p>
        </section>

        <section className="terms-section">
          <h2>15. Changes to These Terms</h2>
          <p>
            Shiprlift may update or modify these Terms & Conditions when
            necessary. Updated terms may be posted on this page, and continued
            use of our website or services after changes are posted may
            constitute acceptance of the updated terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>16. Contact Us</h2>
          <p>
            If you have questions regarding these Terms & Conditions, you can
            contact Shiprlift using the information below.
          </p>

          <div className="terms-contact">
            <p>
              <strong>Shiprlift</strong>
            </p>

            <p>
              Office 1, Alwakalat Street<br />
              Alfoyhat, Ahmed Mehdawi Building<br />
              Benghazi, Libya
            </p>

            <p>
              Email:{" "}
              <a href="mailto:mail@shiprlift.com">
                mail@shiprlift.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a href="tel:+14796524016">
                +1 479-652-4016
              </a>
            </p>
          </div>
        </section>

        <div className="terms-updated">
          <p>
            Last updated: August 2026
          </p>
        </div>

      </main>
    </div>
  );
};

export default Terms;

