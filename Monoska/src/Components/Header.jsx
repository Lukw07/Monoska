import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/Header.css';

function Header() {
  const [language, setLanguage] = useState('cz');

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption.value);
    
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="http://localhost:5173">
          <img
            src="https://www.monosh.com/img/logo.png"
            alt="Logo"
          />
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#kovovyroba">Kovovýroba</a></li>
          <li><a href="#jednoucelove-stroje">Jednoúčelové stroje</a></li>
          <li><a href="#konstrukce-a-vyvoj">Konstrukce a vývoj</a></li>
          <li><a href="#mereni">Měření</a></li>
          <li><a href="#onas">O nás</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>
      <div>
        <Select
          value={{ value: language, label: language.toUpperCase() }}
          onChange={handleLanguageChange}
          options={[
            { value: 'cz', label: 'CZ' },
            { value: 'en', label: 'EN' },
            { value: 'de', label: 'DE' },
            { value: 'fr', label: 'FR' },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
