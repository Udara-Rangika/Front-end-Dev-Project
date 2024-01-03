import React from "react";
import "./style.css";

export const TopNavigation = ({ logo = "https://rb.gy/yc1ega" }) => {
  return (
    <div className="top-navigation">
      <img className="logo" alt="Logo" src={logo} />
      <div className="frame">
        <div className="text-wrapper">SERVICES</div>
        <div className="text-wrapper">ABOUT US</div>
        <div className="text-wrapper">CONTACT US</div>
        <div className="text-wrapper">CAREERS</div>
      </div>
    </div>
  );
};
