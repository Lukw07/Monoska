import React from "react";
import Section from "./Section.jsx";
import "../styles/SectionGrid.css";

const SectionGrid = () => {
  const sections = [
    {
      title: "Kovovýroba CNC frézování",
      content:
        "Velkosériová výroba: Vedle vysoce produktivních strojů FANUC Robodrill s výměnou nástroje pod 2s, rychlými posuvy a vysokým zrychlením máme zkušenosti s výrobou a kvalitativními nároky pro AUTOMOTIVE.",
      icon: "./src/assets/laser-cutting_9284610.gif", // Example icon
    },
    {
      title: "Malosériová výroba",
      content:
        "Máme také stroje optimálně kombinující rychlost s tuhostí, vhodné pro malosériové a kusové obrábění (OKUMA, KOVOSVIT MAS).",
      icon: "./src/assets/hook_9284596.gif", // Example icon
    },
    {
      title: "CNC soustružení",
      content:
        "Malosériová a kusová výroba: Na našich strojích s otáčkami a tuhostí optimální pro kusovou a malosériovou výrobu můžeme soustružit až do průměru 630mm nad ložem a 2000mm délky.",
        icon: "./src/assets/table_17888932.gif", // Example icon
    },
    {
      title: "Dělení materiálu",
      content:
        "Velkosériově, malosériově i kusově dělíme materiál na jedno i dvouhlavých kotoučových pilách s možností řezu pod úhlem.",
        icon: "./src/assets/struggle_17513867.gif", // Example icon
    },
    {
      title: "Speciální a konvenční obrábění",
      content:
        "Sériově obrábíme také na jednoúčelových strojích vlastní výroby. V naší plně vybavené nástrojárně jsou pro Vaše díly k dispozici konvenční frézky, vrtačky, soustruh, brusky na plocho i na kulato a další stroje, zařízení a nářadí.",
        icon: "./src/assets/jackhammer_10690628.gif", // Example icon
    },
  ];

  return (
    <div className="section-grid">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          icon={section.icon}
        />
      ))}
    </div>
  );
};
export default SectionGrid;