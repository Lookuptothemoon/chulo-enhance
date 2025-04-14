import coverImg from "./assets/cover-img.jpg";
import kitchenImg from "./assets/kitchen-remodel.jpg";
import bathroomImg from "./assets/bathroom-remodel.jpg";
import bedroomImg from "./assets/bedroom-remodel.jpg";
import homeRemodel from "./assets/home-remodel.jpg";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="cover-img">
        <img src={coverImg} />
      </div>

      <div className="home-service-section">
        <h1 className="home-service-container-title">
          LDG Renovation Services
        </h1>

        <div className="home-service-card-container">
          <div className="home-service-card">
            <div className="home-service-card-img">
              <img src={kitchenImg} />
            </div>

            <div className="home-service-card-title">Kitchen Remodeling</div>

            <div className="home-service-card-description">
              Whether you're looking to renovate your entire kitchen or just
              your backsplash, choose LDG to do the job.
            </div>

            <div className="home-service-card-link">
              <Link to="/portfolio">Learn More</Link>
            </div>
          </div>

          <div className="home-service-card">
            <div className="home-service-card-img">
              <img src={bathroomImg} />
            </div>

            <div className="home-service-card-title">Bathroom Remodeling</div>

            <div className="home-service-card-description">
              Have an outdated bathroom and want a revamp, let LDG bring it back
              to life.
            </div>

            <div className="home-service-card-link">
              <Link to="/portfolio">Learn More</Link>
            </div>
          </div>

          <div className="home-service-card">
            <div className="home-service-card-img">
              <img src={bedroomImg} />
            </div>

            <div className="home-service-card-title">Bedroom Remodeling</div>

            <div className="home-service-card-description">
              Want the bedroom of your dreams, let LDG grant your wish.
            </div>

            <div className="home-service-card-link">
              <Link to="/portfolio">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-contact-section">
        <div className="home-contact-container">
          <div className="home-contact-modal">
            <div className="home-contact-model-title">LDG Renovations</div>
            <div className="home-contact-model-description">
              LDG is dedicated to providing customers with the best work
              possible. Reach out to have us renovate your space next.
            </div>
            <div className="home-contact-model-link">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-testimonial-section">
        <div className="home-testimonial-card-container">
          <div className="home-testimonial-card">
            <div className="home-testimonial-card-text">
              "LDG renovated our bathroom and did an awesome job!"
            </div>
            <div className="home-testimonial-card-author">- Client #1</div>
          </div>

          <div className="home-testimonial-card">
            <div className="home-testimonial-card-text">
              "LDG renovated our bathroom last summer. I have never seen such
              professional work!"
            </div>
            <div className="home-testimonial-card-author">- Client #2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
