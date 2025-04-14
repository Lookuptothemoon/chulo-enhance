import logo from "./assets/ldg-logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} />
        </div>

        <div className="footer-contact">
          <div className="footer-contact-email">lalcantarahome@gmail.com</div>
          <div className="footer-contact-phone">(929) 288-1673</div>
          <div className="footer-contact-address">New York, NY</div>
        </div>

        <div className="footer-copyright">
          2021 Chulo's Living Enhancements LLC, all rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
