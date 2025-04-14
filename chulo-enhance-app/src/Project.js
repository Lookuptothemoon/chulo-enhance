import "./Project.scss";

function Project({ beforeImgs, afterImgs, type, location }) {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div className="portfolio-before-after">
          <div className="portfolio-before">
            <h3>Before:</h3>
            <div className="portfolio-img">
              {beforeImgs.map(function (img) {
                return <img src={img} loading="lazy" />;
              })}
            </div>
          </div>

          <div className="portfolio-after">
            <h3>After:</h3>
            <div className="portfolio-img">
              {afterImgs.map(function (img) {
                return <img src={img} loading="lazy" />;
              })}
            </div>
          </div>
        </div>

        <div className="portfolio-info">
          <ul className="portfolio-info-list">
            <li>
              <span className="bold-text">Type: </span> {type}
            </li>
            <li>
              <span className="bold-text">Location: </span> {location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
