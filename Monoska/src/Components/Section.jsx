import React from "react";
import "../styles/Section.css";

const Section = ({ title, content, icon }) => {
  return (
    <div className="section">
       {icon && <img src={icon} alt="Icon" className="section-icon" />}
      <h3 className="section-title">{title}</h3>
      <p className="section-content">{content}</p>
    </div>
  );
};

export default Section;
