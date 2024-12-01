import React from "react";
import '../styles/Footer.css'; 

const Footer = () => {
  // Získání aktuálního roku
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="col col1">
        <h3>Monosh</h3>
        <p>
          Vyrobil <span style={{ color: "#BA6573" }}>❤</span> Kryštof Tůma
        </p>
        <div className="social">
          <a
            href="https://codepen.io/Juxtopposed"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img
              src="https://assets.codepen.io/9051928/codepen_1.png"
              alt="CodePen"
            />
          </a>
          <a
            href="https://twitter.com/juxtopposed"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img
              src="https://assets.codepen.io/9051928/x.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://youtube.com/@juxtopposed"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img
              src="https://assets.codepen.io/9051928/youtube_1.png"
              alt="YouTube"
            />
          </a>
        </div>
        <p style={{ color: "#818181", fontSize: "smaller" }}>
          {currentYear} © All Rights Reserved
        </p>
      </div>
      <div className="col col2">
        <p>About</p>
        <p>Our mission</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
      </div>
      <div className="col col3">
        <p>Services</p>
        <p>Products</p>
        <p>Join our team</p>
        <p>Partner with us</p>
      </div>
      <div className="backdrop"></div>
    </footer>
  );
};

export default Footer;
