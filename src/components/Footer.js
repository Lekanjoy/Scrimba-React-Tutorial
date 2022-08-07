import React from "react";
import Facebook from "../assets/Facebook Icon.svg";
import Github from "../assets/GitHub Icon.svg";
import Instagram from "../assets/Instagram Icon.svg";
import Twitter from "../assets/Twitter Icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Twitter} alt="Twitter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      <img src={Github} alt="Github" />
    </div>
  );
}
// src\components\Footer.js