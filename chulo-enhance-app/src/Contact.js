import plug from "./assets/plug-connect.png";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us!</h1>
      <div className="contact-info-container">
        <div className="contact-info-img">
          <img src={plug} />
        </div>

        <div className="contact-info-details">
          <div className="contact-info-details-title">LDG</div>
          <div className="contact-info-details-address">New York, NY</div>
          <div className="contact-info-details-email">
            Email: lalcantarahome@gmail.com
          </div>
          <div className="contact-info-details-phone">
            Phone: (929) 288-1673
          </div>
        </div>
      </div>
      {/* <div className="contact-social">
        <div className="contact-social-item">INSTAGRAM</div>
        <div className="contact-social-item">TWITTER</div>
      </div> */}
    </div>
  );
}

export default Contact;
