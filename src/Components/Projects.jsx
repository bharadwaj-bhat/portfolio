import styles from "../Styles/Projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import "../Styles/awesome-slider-override.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
export const Projects = () => {
  return (
    <div id="Projects" className={styles.ProjectsWrapper}>
      <h3> Some of my </h3>
      <h1> Projects </h1>
      <div className={styles.sliderWrapper}>
        <div>
          <h4
            style={{
              padding: "0px 0px",
              marginBottom: "-15px",
              marginTop: "20px",
            }}
          >
            {" "}
            <span style={{ fontWeight: "600" }}>Groww.in</span>
          </h4>
          <h4>
            A financial website that allows users to buy and sell stocks with
            just a click of a button.{" "}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "-10px",
              color: "#878a8f",
            }}
          >
            <p> Tech Stacks - </p>
            <img
              style={{ width: "20px" }}
              src={window.location.origin + "/iconImages/htmlBlackIcon.png"}
              alt=""
            />{" "}
            <img
              style={{ width: "20px" }}
              src={window.location.origin + "/iconImages/css.png"}
              alt=""
            />
            <img
              style={{ width: "20px", border: "1px solid black" }}
              src={window.location.origin + "/iconImages/javascript.png"}
              alt=""
            />
          </div>
          <AutoplaySlider
            cssModule={AwsSliderStyles}
            infinite={true}
            play={true}
            cancelOnInteraction={true}
            interval={2000}
          >
            <div
              data-src={window.location.origin + "//growwImages/groww1.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww2.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww3.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww4.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww5.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww6.png"}
            />
            <div
              data-src={window.location.origin + "/growwImages/groww7.png"}
            />
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};
