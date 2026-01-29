import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>Royalestate</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="footer-social">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* BUY */}
        <div className="footer-col">
          <h4>Buy</h4>
          <ul>
            <li>Home For Sale</li>
            <li>Open Houses</li>
            <li>New Listing</li>
            <li>Recently Reduce</li>
            <li>Off-Market Homes</li>
          </ul>
        </div>

        {/* SELL */}
        <div className="footer-col">
          <h4>Sell</h4>
          <ul>
            <li>Sell Your Home</li>
            <li>Get A Home Valuation</li>
            <li>Local Home Prices</li>
            <li>Guides & Rules</li>
            <li>Others</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Have a Questions?</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+2 392 3929 210</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          Copyright ©2026 All rights reserved | This template is made with ❤ by Vrushabh Digraje
        </p>
      </div>
    </footer>
  );
};

export default Footer;
