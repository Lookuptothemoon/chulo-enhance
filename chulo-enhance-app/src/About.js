import homeBlueprint from "./assets/home-blueprint.jpg";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about-hero-img">
        <img src={homeBlueprint} />
      </div>
      <div className="about-container">
        <div className="about-us-section">
          <h1 className="about-us-title">About Us</h1>
          <div className="about-us-description">
            LDG Construction is a tri-state area home renovation company
            dedicated to transforming your uninspired space into your dream
            home. With over a decade of experience, we have built a reputation
            of delivering an exceptional final product reflective of our
            client's personal style and project needs. Whether it's a full home
            makeover, kitchen remodel, bathroom upgrade, or room refresh, our
            team of skilled professionals works with clients to bring their
            vision to life.
          </div>
        </div>

        <div className="about-mission-section">
          <h3 className="about-mission-title">Our Mission/Value Proposition</h3>
          <div className="about-mission-description">
            Our mission is to improve the quality of life for homeowners by
            creating beautiful, functional, and sustainable living spaces. Our
            process is client-centered, ensuring that our clients feel respected
            and at ease during this process. We provide full transparency around
            budgeting, timeline, and costs, from the initial concept phase to
            finishing touches. We pride ourselves on our attention to detail,
            craftsmanship, being straight-forward with our clients, and a
            commitment to exceeding customer expectations. From start to finish,
            we ensure that every project is handled with professionalism and a
            desire to maximize value to the client.
          </div>
        </div>

        <div className="about-services-section">
          <h3 className="about-services-title">Services Offered:</h3>
          <div className="about-services-list">
            <ul>
              <li>Full Home Renovations</li>
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovations</li>
              <li>Basement Finishing</li>
              <li>Home Repairs & Maintenance</li>
              <li>Outdoor Living Spaces</li>
              <li>Custom Carpentry & Design</li>
              <li>Energy-Efficient Upgrades</li>
              <li>Home Extensions & Additions</li>
            </ul>
          </div>
        </div>

        <div className="about-why-choose-us-section">
          <h3 className="about-why-choose-us-title">Why Choose Us?</h3>
          <div className="about-why-choose-us-list">
            <ul>
              <li>
                Experienced Team: We are licensed and insured and bring over XXX
                years of combined experience.
              </li>
              <li>
                Reputation: We have a track record of completely satisfied
                clients on both small and big jobs. We receive ongoing referrals
                and positive testimonials, and we are so grateful.
              </li>
              <li>
                Quality Craftsmanship: We use only the best materials and ensure
                that every detail is executed with precision.
              </li>
              <li>
                Client-Centric Approach: Your vision and budget is our top
                priority. We work with you at every step to ensure your
                satisfaction.
              </li>
              <li>
                Sustainable Practices: We integrate eco-friendly materials and
                energy-saving solutions when possible to make your home more
                efficient.
              </li>
              <li>
                Transparency: From initial consultation to project completion,
                we keep you informed and involved.
              </li>
              <li>
                Reliability, Respect, & Professionalism: Our clients know that
                when we sign on for a project, we show up on time, we are
                reliable, and we respect the home as if it is our own.{" "}
              </li>
            </ul>
            <div className="about-why-choose-us-closing">
              Let LDG Construction help turn your living space into the home of
              your dreams.
            </div>
          </div>
        </div>

        <div className="about-contact">
          <div className="about-contact-link">Work with us!</div>
        </div>
      </div>
    </div>
  );
}

export default About;
