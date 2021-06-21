import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";

function Footer() {
 
  return (
      <>
    <div className="footer-container">
      <div className="menu">
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About us</Link>
          </li>
          <li className="">
            <Link to="/find">Find Vehicle</Link>
          </li>
          <li className="">
            <Link to="/finance">Finance</Link>
          </li>
          <li className="">
            <Link to="/broker-service">Broker Service</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
          <div className="phone"><i className="fas fa-phone"></i>
                <a href="tel:+1-555-555-1212">555-555-1212</a></div>
          <div className="mail">
              <i className="fas fa-envelope"></i> <a href="mailto:leylana@code.edu.az">leylana@code.edu.az</a>
          </div>
          <div className="address">
          <i className="fas fa-map-marker-alt"></i> <p> Alasgar Alakbarov 10A</p>
          </div>
      </div>
      <iframe
            title="map"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baku%20Yasamal%20Alasgar%20Alakbarov+(Cal%20Motors)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe> 
    </div>
    </>
  );
}

export default Footer;
