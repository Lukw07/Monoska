import React from "react";

function Main() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="text-content">
          <h1>Kovovýroba pro průmysl</h1>
          <p>Specializujeme se na CNC frézování, soustružení a výrobu jednoúčelových strojů.</p>
          <a href="#services" className="cta-button">Prozkoumat</a>
        </div>
        <div className="gif-content">
          <img src="./src/assets/3d-rendering-hydraulic-elements.png" alt="CNC obrábění GIF" />
        </div>
      </section>
    </div>
  );
}

export default Main;