import React from "react";
import "./styles/global.css";
import Header from "./Components/Header";  // Import komponenty Header
import SectionGrid from "./Components/SectionGrid";
import IndustryInfo from "./Components/IndustryInfo";
import EngineeringInfo from "./Components/EngineeringInfo";
import Main from "./Components/main";

function App() {
  return (
    <div className="App">
      <Header />  
      <Main /> 
      <SectionGrid />
      <IndustryInfo />
      <EngineeringInfo />
    </div>
  );
}

export default App;
