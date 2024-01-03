import React from "react";
import "./style.css";

export const Footer = ({ logo = "https://rb.gy/yc1ega" }) => {
  return (
    <div className="footer">
      <div className="div">
        <div className="frame-2">
          <img className="img" alt="Logo" src={logo} />
          <p className="p">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-2">Our Technologies</div>
            <div className="frame-5">
              <div className="text-wrapper-3">Reactjs</div>
              <div className="text-wrapper-4">Gatsby</div>
              <div className="text-wrapper-4">Nextjs</div>
              <div className="text-wrapper-4">Nodejs</div>
              <div className="text-wrapper-4">Graphql</div>
              <div className="text-wrapper-4">Laravel</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-2">Our Services</div>
            <div className="frame-6">
              <div className="social-media">Social Media Marketing</div>
              <p className="text-wrapper-5">Web &amp; Mobile App Development</p>
              <div className="text-wrapper-5">Data &amp; Analytics</div>
              <div className="text-wrapper-5">Google Marketing Solutions</div>
              <div className="text-wrapper-5">Search Engine Optimization</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-7">
        <img className="line" alt="Line" src="https://rb.gy/ng9be3" />
        <div className="frame-8">
          <div className="text-wrapper-3">Privacy Policy</div>
          <img className="line-2" alt="Line" src="https://rb.gy/3b7ir4" />
          <div className="text-wrapper-3">Terms &amp; Conditions</div>
        </div>
      </div>
    </div>
  );
};
