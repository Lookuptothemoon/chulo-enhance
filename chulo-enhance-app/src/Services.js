import homeServices from "./assets/home-services.jpg";
import hammer from "./assets/hammer.jpg";
import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="services-hero">
        <img src={homeServices} />
      </div>

      <h1 className="services-title">Services</h1>

      <div className="services-card-container">
        <div className={"services-card"}>
          <div className="services-card-img">
            <img src={hammer} />
          </div>
          <div className="services-card-info">
            <div className="services-card-title">Full Home Renovations</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-info">
            <div className="services-card-title">Kitchen Remodeling</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
          <div className="services-card-img">
            <img src={hammer} />
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-img">
            <img src={hammer} />
          </div>
          <div className="services-card-info">
            <div className="services-card-title">Bathroom Renovations</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-info">
            <div className="services-card-title">Basement Finishing</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
          <div className="services-card-img">
            <img src={hammer} />
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-img">
            <img src={hammer} />
          </div>
          <div className="services-card-info">
            <div className="services-card-title">
              Home Repairs & Maintenance
            </div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-info">
            <div className="services-card-title">Outdoor Living Spaces</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
          <div className="services-card-img">
            <img src={hammer} />
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-img">
            <img src={hammer} />
          </div>
          <div className="services-card-info">
            <div className="services-card-title">Custom Carpentry & Design</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-info">
            <div className="services-card-title">Energy-Efficient Upgrades</div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
          <div className="services-card-img">
            <img src={hammer} />
          </div>
        </div>

        <div className="services-card">
          <div className="services-card-img">
            <img src={hammer} />
          </div>
          <div className="services-card-info">
            <div className="services-card-title">
              Home Extensions & Additions
            </div>
            <div className="services-card-description">
              This is some random text for testing purposes and testing purposes
              only. This is some more random text that I am using to test the
              styling of this page. Just a little more text for testing
              purposes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
