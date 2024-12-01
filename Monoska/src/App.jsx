import React from "react";
import "./styles/global.css";
import Header from "./Components/Header";  // Import komponenty Header
import SectionGrid from "./Components/SectionGrid";
import IndustryInfo from "./Components/IndustryInfo";
import EngineeringInfo from "./Components/EngineeringInfo";
import Main from "./Components/main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />  
      <Main /> 
      <SectionGrid />
      <IndustryInfo />
      <EngineeringInfo />
      <Footer/>
    </div>
  );
}

export default App;
