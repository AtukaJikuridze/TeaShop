import "./FirstSection.css";
import LandingImage from "../../../../images/Landing Main Image.png";
export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="container">
        <div className="fsec-flex">
          <img src={LandingImage} alt="TeaImage" />
          <div className="fsec-rightside">
            <h1>Every day is unique, just like our tea</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
              amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
              lacus nibh eros in.
            </p>
            <button>BROWES TEAS</button>
          </div>
        </div>
      </div>
    </section>
  );
}
