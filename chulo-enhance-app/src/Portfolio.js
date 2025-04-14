import homeServices from "./assets/home-services.jpg";
import closetFloorBefore from "./assets/projects/closet_floor_before.png";
import closetFloorAfter from "./assets/projects/closet_floor_after.png";
import entertainBefore from "./assets/projects/entertainment_unit_before.png";
import entertainAfter from "./assets/projects/entertainment_unit_after.png";
import bathroomBefore1 from "./assets/projects/bathroom_before1.png";
import bathroomBefore2 from "./assets/projects/bathroom_before2.png";
import bathroomBefore3 from "./assets/projects/bathroom_before3.png";
import bathroomBefore4 from "./assets/projects/bathroom_before4.png";
import bathroomAfter1 from "./assets/projects/bathroom_after1.png";
import bathroomAfter2 from "./assets/projects/bathroom_after2.png";
import bathroomAfter3 from "./assets/projects/bathroom_after3.png";
import bathroomAfter4 from "./assets/projects/bathroom_after4.png";
import bathroomAfter5 from "./assets/projects/bathroom_after5.png";
import bathroomAfter6 from "./assets/projects/bathroom_after6.png";
import bathroomAfter7 from "./assets/projects/bathroom_after7.png";
import bathroomAfter8 from "./assets/projects/bathroom_after8.png";
import halfBathroomBefore1 from "./assets/projects/half_bathroom_before1.png";
import halfBathroomBefore2 from "./assets/projects/half_bathroom_before2.png";
import halfBathroomBefore3 from "./assets/projects/half_bathroom_before3.png";
import halfBathroomAfter1 from "./assets/projects/half_bathroom_after1.png";
import halfBathroomAfter2 from "./assets/projects/half_bathroom_after2.png";
import halfBathroomAfter3 from "./assets/projects/half_bathroom_after3.png";
import halfBathroomAfter4 from "./assets/projects/half_bathroom_after4.png";
import halfBathroomAfter5 from "./assets/projects/half_bathroom_after5.png";
import halfBathroomAfter6 from "./assets/projects/half_bathroom_after6.png";
import kitchenBefore1 from "./assets/projects/kitchen_before1.png";
import kitchenBefore2 from "./assets/projects/kitchen_before2.png";
import kitchenBefore3 from "./assets/projects/kitchen_before3.png";
import kitchenBefore4 from "./assets/projects/kitchen_before4.png";
import kitchenBefore5 from "./assets/projects/kitchen_before5.png";
import kitchenBefore6 from "./assets/projects/kitchen_before6.png";
import kitchenBefore7 from "./assets/projects/kitchen_before7.png";
import kitchenAfter1 from "./assets/projects/kitchen_after1.png";
import kitchenAfter2 from "./assets/projects/kitchen_after2.png";
import kitchenAfter3 from "./assets/projects/kitchen_after3.png";
import kitchenAfter4 from "./assets/projects/kitchen_after4.png";
import kitchenAfter5 from "./assets/projects/kitchen_after5.png";
import kitchenAfter6 from "./assets/projects/kitchen_after6.png";
import kitchenAfter7 from "./assets/projects/kitchen_after7.png";
import kitchenBacksplashBefore1 from "./assets/projects/kitchen_backsplash_before1.png";
import kitchenBacksplashBefore2 from "./assets/projects/kitchen_backsplash_before2.png";
import kitchenBacksplashBefore3 from "./assets/projects/kitchen_backsplash_before3.png";
import kitchenBacksplashAfter1 from "./assets/projects/kitchen_backsplash_after1.png";
import kitchenBacksplashAfter2 from "./assets/projects/kitchen_backsplash_after2.png";
import kitchenBacksplashAfter3 from "./assets/projects/kitchen_backsplash_after3.png";
import kitchenBacksplashAfter4 from "./assets/projects/kitchen_backsplash_after4.png";
import nyBathroomBefore1 from "./assets/projects/ny_bathroom_before1.png";
import nyBathroomBefore2 from "./assets/projects/ny_bathroom_before2.png";
import nyBathroomAfter1 from "./assets/projects/ny_bathroom_after1.png";
import nyBathroomAfter2 from "./assets/projects/ny_bathroom_after2.png";
import nyBathroomAfter3 from "./assets/projects/ny_bathroom_after3.png";
import nyHalfBathroomBefore1 from "./assets/projects/ny_half_bathroom_before1.png";
import nyHalfBathroomAfter1 from "./assets/projects/ny_half_bathroom_after1.png";
import nyHalfBathroomAfter2 from "./assets/projects/ny_half_bathroom_after2.png";
import Project from "./Project";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-hero">
        <img src={homeServices} />
      </div>

      <h1 className="portfolio-title">Portfolio</h1>

      <div className="portfolio-card-container">
        <Project
          beforeImgs={[closetFloorBefore]}
          afterImgs={[closetFloorAfter]}
          type="Flooring"
          location="New Jersey"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[entertainBefore]}
          afterImgs={[entertainAfter]}
          type="Entertainment Center"
          location="New York"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[
            bathroomBefore1,
            bathroomBefore2,
            bathroomBefore3,
            bathroomBefore4,
          ]}
          afterImgs={[
            bathroomAfter1,
            bathroomAfter2,
            bathroomAfter3,
            bathroomAfter4,
            bathroomAfter5,
            bathroomAfter6,
            bathroomAfter7,
            bathroomAfter8,
          ]}
          type="Bathroom"
          location="New Jersey"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[
            halfBathroomBefore1,
            halfBathroomBefore2,
            halfBathroomBefore3,
          ]}
          afterImgs={[
            halfBathroomAfter1,
            halfBathroomAfter2,
            halfBathroomAfter3,
            halfBathroomAfter4,
            halfBathroomAfter5,
            halfBathroomAfter6,
          ]}
          type="Half Bathroom"
          location="New Jersey"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[
            kitchenBefore1,
            kitchenBefore2,
            kitchenBefore3,
            kitchenBefore4,
            kitchenBefore5,
            kitchenBefore6,
            kitchenBefore7,
          ]}
          afterImgs={[
            kitchenAfter1,
            kitchenAfter2,
            kitchenAfter3,
            kitchenAfter4,
            kitchenAfter5,
            kitchenAfter6,
            kitchenAfter7,
          ]}
          type="Kitchen"
          location="Connecticut"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[
            kitchenBacksplashBefore1,
            kitchenBacksplashBefore2,
            kitchenBacksplashBefore3,
          ]}
          afterImgs={[
            kitchenBacksplashAfter1,
            kitchenBacksplashAfter2,
            kitchenBacksplashAfter3,
            kitchenBacksplashAfter4,
          ]}
          type="Kitchen Backsplash"
          location="New Jersey"
        />

        <hr className="portfolio-card-line" />

        <Project
          beforeImgs={[nyBathroomBefore1, nyBathroomBefore2]}
          afterImgs={[nyBathroomAfter1, nyBathroomAfter2, nyBathroomAfter3]}
          type="Bathroom"
          location="New York"
        />
      </div>

      <hr className="portfolio-card-line" />

      <Project
        beforeImgs={[nyHalfBathroomBefore1]}
        afterImgs={[nyHalfBathroomAfter1, nyHalfBathroomAfter2]}
        type="Entertainment Center"
        location="New York"
      />
    </div>
  );
}

export default Portfolio;
