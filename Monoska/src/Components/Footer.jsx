import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const rok = new Date().getFullYear();
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="./src/assets/Snímek obrazovky 2024-12-02 085635.png" alt="Logo" width="450" height="300" />
      </div>

      <div className="footer-center">
        <div>
          <iframe src="https://maps.google.com/maps?width=450&amp;height=300&amp;hl=en&amp;q=monosh%20s.r.o.+(Armax)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" width="450" height="300" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" data-ruffle-polyfilled=""></iframe>
          <FontAwesomeIcon icon={faMapMarker} />
          <p>
            <span>MONOSH s.r.o.
            Podmostní 39/5</span>405 02 Děčín 7, CZ
          </p>
        </div>

        <div>
          <FontAwesomeIcon icon={faPhone} />
          <p>Telefon 603 548 297</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <a href="mailto:info@monosh.cz">info@monosh.cz</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>O nás</span> Společnost MONOSH s.r.o. se specializuje na velkosériové, malosériové i kusové obrábění železných i neželezných kovů a plastů, navrhování a výrobu jednoúčelových strojů, linek a přípravků.
        </p>
        
        {/* Sekce pro partnery */}
        <div className="footer-partners">
          <h3>Naši partneři</h3>
          <div className="partners-logos">
            <img src="./src/assets/partner1.svg" alt="Partner 1" width="100" height="50" />
            <img src="./src/assets/partner2.svg" alt="Partner 2" width="100" height="50" />
            <img src="./src/assets/partner3.svg" alt="Partner 3" width="100" height="50" />
            <img src="./src/assets/partner4.svg" alt="Partner 4" width="100" height="50" />
            <img src="./src/assets/partner5.svg" alt="Partner 5" width="100" height="50" />
            <img src="./src/assets/partner6.svg" alt="Partner 6" width="100" height="50" />
            <img src="./src/assets/TRCZ-logo.jpg" alt="Partner 7" width="100" height="50" />
          </div>
        </div>
        
        <div className="footer-icons">
          <h3>Soc. Sítě</h3>
          <a href="https://www.facebook.com/profile.php?id=950484265015663&_rdr">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p className="footer-company-name">Monosh &copy; {rok}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
