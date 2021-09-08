import styles from "../Styles/Projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import "../Styles/awesome-slider-override.css";
import Divider from "@material-ui/core/Divider";

const AutoplaySlider = withAutoplay(AwesomeSlider);
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
          <AutoplaySlider
            cssModule={AwsSliderStyles}
            infinite={true}
            play={false}
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
          <br />
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
          <AutoplaySlider
            cssModule={AwsSliderStyles}
            infinite={true}
            play={false}
            cancelOnInteraction={true}
            interval={2000}
          >
            <div data-src={window.location.origin + "/travel_guru/tr1.png"} />
            <div data-src={window.location.origin + "/travel_guru/tr2.png"} />
            <div data-src={window.location.origin + "/travel_guru/tr3.png"} />
            <div data-src={window.location.origin + "/travel_guru/tr4.png"} />
            <div data-src={window.location.origin + "/travel_guru/tr5.png"} />
            <div data-src={window.location.origin + "/travel_guru/tr6.png"} />
          </AutoplaySlider>
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
          <AutoplaySlider
            cssModule={AwsSliderStyles}
            infinite={true}
            play={false}
            cancelOnInteraction={true}
            interval={2000}
          >
            <div
              data-src={window.location.origin + "/milaapImages/milaap1.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap2.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap3.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap4.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap5.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap6.png"}
            />
            <div
              data-src={window.location.origin + "/milaapImages/milaap7.png"}
            />
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};
