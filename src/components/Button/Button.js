import React from "react";
import "./style.css";

export const Button = ({ text = "GET FREE CONSULTATION" }) => {
  return (
    <button className="button">
      <div className="get-free">{text}</div>
    </button>
  );
};
