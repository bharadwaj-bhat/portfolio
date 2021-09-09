import styles from "../Styles/Projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import "../Styles/awesome-slider-override.css";
import Carousel from "react-material-ui-carousel";
const sliderCounter = [0, 1, 2, 3, 4, 5, 6];

export const Projects = () => {
  return (
    <div id="Projects" className={styles.ProjectsWrapper}>
      <h3> Some of my </h3>
      <h1> Projects </h1>
      <div className={styles.sliderWrapper}>
        <div>
          <div
            style={{
              height: "120px",
              marginTop: "20px",
            }}
          >
            <h4
              style={{
                padding: "0px 0px",
                marginBottom: "-15px",
              }}
            >
              {" "}
              <span>Groww.in</span>
            </h4>
            <h4>
              A financial website that allows users to buy and sell stocks with
              just a click of a button.{" "}
            </h4>
          </div>
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
              src={window.location.origin + "/iconImages/htmlBlackIcon.png"}
              alt=""
            />{" "}
            <img src={window.location.origin + "/iconImages/css.png"} alt="" />
            <img
              style={{ border: "1px solid black" }}
              src={window.location.origin + "/iconImages/javascript.png"}
              alt=""
            />
          </div>
          <div className={styles.buttonDiv}>
            <a
              href="https://github.com/Rakesh-pilly/project_grow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              Demo{" "}
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              Watch Demo{" "}
            </a>
          </div>

          <Carousel animation="slide">
            {sliderCounter.map((el) => (
              <img
                style={{ width: "100%" }}
                src={window.location.origin + `/growwImages/groww${el + 1}.png`}
                alt=""
              />
            ))}
          </Carousel>
        </div>
        <div>
          <div style={{ height: "120px", marginTop: "20px" }}>
            <h4
              style={{
                padding: "0px 0px",
                marginBottom: "-15px",
              }}
            >
              {" "}
              <span>Travel Guru</span>
            </h4>
            <h4>
              A Travel website that allows users to book homestays and hotels at
              your desired destination.{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "-10px",
              color: "#878a8f",
            }}
          >
            <p> Tech Stacks - </p>
            <img
              src={window.location.origin + "/iconImages/reactBlueIcon.png"}
              alt=""
            />{" "}
            <img
              src={window.location.origin + "/iconImages/reduxIcon.png"}
              alt=""
            />
          </div>
          <div className={styles.buttonDiv}>
            <a
              href="https://github.com/bharadwaj-bhat/Travel_Guru"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Watch Demo
            </a>
          </div>
          <Carousel animation="slide">
            {sliderCounter.map((el) => (
              <img
                style={{ width: "100%" }}
                src={window.location.origin + `/travel_guru/tr${el + 1}.png`}
                alt=""
              />
            ))}
          </Carousel>
        </div>
        <div>
          <div
            style={{
              height: "120px",
              marginTop: "20px",
            }}
          >
            <h4
              style={{
                padding: "0px 0px",
                marginBottom: "-15px",
              }}
            >
              {" "}
              <span>Milaap.org</span>
            </h4>
            <h4>
              A humanitarian website that allows users to start a fundraiser and
              as well as donate for other causes.{" "}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "-10px",
              color: "#878a8f",
            }}
          >
            <p> Tech Stacks - </p>
            <img
              src={window.location.origin + "/iconImages/reactBlueIcon.png"}
              alt=""
            />{" "}
          </div>
          <div className={styles.buttonDiv}>
            <a
              href="https://github.com/bharadwaj-bhat/Project_milaap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Watch Demo
            </a>
          </div>
          <Carousel animation="slide">
            {sliderCounter.map((el) => (
              <img
                style={{ width: "100%" }}
                src={
                  window.location.origin + `/milaapImages/milaap${el + 1}.png`
                }
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
