import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <div className="grid md:grid-cols-5 gap-8 w-11/12 mx-auto ">
        <div>
          <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
          <p className="text-sm">
            CS — Ticket System is a platform that centralizes, tracks, and
            manages requests or issues, converting them into unique "Tickets"
            for efficient resolution and communication
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">University</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Administrator</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Tickets & Services</li>
            <li>Customer Reviews</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <FontAwesomeIcon icon={faTwitter} />
              @CS — Ticket System
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
              @CS — Ticket System
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
              @CS — Ticket System
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              support@cst.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left md:text-center text-gray-500 text-sm mt-8 w-11/12 mx-auto ">
        © 2025 CS — Ticket System.
        <br className="block md:hidden" /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
