import { Link } from "react-router-dom";
import logo from "../assets/ldg-logo.png";
import "./DesktopMenu.scss";

function DesktopMenu() {
  return (
    <div className="desktop-menu">
      <div className="desktop-menu-section">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="desktop-menu-section">
        <div className="desktop-menu-logo">
          <img src={logo} />
        </div>
      </div>

      <div className="desktop-menu-section">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default DesktopMenu;
