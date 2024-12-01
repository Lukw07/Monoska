import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/Header.css';

const languageOptions = [
  { value: 'cz', label: 'CZ', flagUrl: 'https://www.iconarchive.com/download/i109116/wikipedia/flags/CZ-Czech-Republic-Flag.1024.png' },
  { value: 'en', label: 'EN', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  { value: 'de', label: 'DE', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
  { value: 'fr', label: 'FR', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' }
];

function Header() {
  const [language, setLanguage] = useState('cz');

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption.value);
    // Your logic for language change here
  };

  const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
      <img src={data.flagUrl} alt={data.label} className="flag-icon" />
      {data.label}
    </div>
  );

  return (
    <header className="header">
      <div className="logo">
        <a href="localhost:5173">
          <img
            src="https://www.monosh.com/img/logo.png"
            alt="Logo"
            srcSet=""
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
      <div className="language-selector">
        <Select
          value={languageOptions.find(option => option.value === language)}
          onChange={handleLanguageChange}
          options={languageOptions}
          getOptionLabel={(e) => (
            <div className="custom-option">
              <img src={e.flagUrl} alt={e.label} className="flag-icon" />
              {e.label}
            </div>
          )}
          components={{ SingleValue: customSingleValue }}
        />
      </div>
    </header>
  );
}

export default Header;