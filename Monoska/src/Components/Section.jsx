import React from "react";
import "../styles/Section.css";

const Section = ({ title, content }) => {
  return (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      <p className="section-content">{content}</p>
    </div>
  );
};

export default Section;
