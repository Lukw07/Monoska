import React from "react";
import Section from "./Section.jsx";
import "../styles/SectionGrid.css";

const SectionGrid = () => {
  const sections = [
    {
      title: "Kovovýroba CNC frézování",
      content:
        "Velkosériová výroba: Vedle vysoce produktivních strojů FANUC Robodrill s výměnou nástroje pod 2s, rychlými posuvy a vysokým zrychlením máme zkušenosti s výrobou a kvalitativními nároky pro AUTOMOTIVE.",
    },
    {
      title: "Malosériová výroba",
      content:
        "Máme také stroje optimálně kombinující rychlost s tuhostí, vhodné pro malosériové a kusové obrábění (OKUMA, KOVOSVIT MAS).",
    },
    {
      title: "CNC soustružení",
      content:
        "Malosériová a kusová výroba: Na našich strojích s otáčkami a tuhostí optimální pro kusovou a malosériovou výrobu můžeme soustružit až do průměru 630mm nad ložem a 2000mm délky.",
    },
    {
      title: "Dělení materiálu",
      content:
        "Velkosériově, malosériově i kusově dělíme materiál na jedno i dvouhlavých kotoučových pilách s možností řezu pod úhlem.",
    },
    {
      title: "Speciální a konvenční obrábění",
      content:
        "Sériově obrábíme také na jednoúčelových strojích vlastní výroby. V naší plně vybavené nástrojárně jsou pro Vaše díly k dispozici konvenční frézky, vrtačky, soustruh, brusky na plocho i na kulato a další stroje, zařízení a nářadí.",
    },
  ];

  return (
    <div className="section-grid">
      {sections.map((section, index) => (
        <Section key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default SectionGrid;
