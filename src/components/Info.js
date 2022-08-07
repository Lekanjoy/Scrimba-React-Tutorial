import React from "react";
import Image from '../assets/Rectangle 90.svg'
import Mail from '../assets/Mail.svg'
import LinkedIn from "../assets/linkedin.svg";

function Info() {
  let name = 'Laura Smith'
  let num = true;

  return (
    <div className="info">
      <div className="image">
        <img src={Image} alt={name} />
      </div>

      <div className="text">
        <h1>{num ? name : "No Name"}</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
      </div>

      <div className="btn">
        <button>
          <img src={Mail} alt="Mail" />
          <p>Email</p>
        </button>

        <button className="linkedin">
          <img src={LinkedIn} alt="LinkedIn" />
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}

export default Info;
