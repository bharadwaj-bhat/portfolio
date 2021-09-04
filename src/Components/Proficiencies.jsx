import styles from "../Styles/Proficiencies.module.css";

export const Proficiencies = () => {
  return (
    <div id="skills" className={styles.ProficienciesWrapper}>
      <h3> SKILLS AND </h3>
      <h1> Proficiencies </h1>
      <div className={styles.iconsWrapper}>
        <div>
          <div>
            <img
              src={window.location.origin + "/iconImages/htmlBlackIcon.png"}
              alt="html logo"
            />
            <p> HTML 5</p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/css.png"}
              alt="css logo"
            />
            <p> CSS 3</p>
          </div>
          <div>
            <img
              style={{ border: "1px solid black" }}
              src={window.location.origin + "/iconImages/javascript.png"}
              alt=" Js icon"
            />
            <p> Java Sript </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/reactBlueIcon.png"}
              alt="react icon"
            />
            <p> React Js</p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/reduxIcon.png"}
              alt="redux icon"
            />
            <p> Redux </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/materialUiIcon.png"}
              alt="Material UI icon"
            />
            <p> Material UI </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/node.png"}
              alt="Material UI icon"
            />
            <p> Node Js </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/express.png"}
              alt="express Js icon"
            />
            <p> Express Js </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/mongoDb.png"}
              alt="mongo DB icon"
            />
            <p> Mongo DB </p>
          </div>
          <div>
            <img
              style={{ width: "40px" }}
              src={window.location.origin + "/iconImages/fireBase.png"}
              alt="fire base icon"
            />
            <p> Firebase </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/gitIcon.png"}
              alt="Git icon"
            />
            <p> Version Control (Git) </p>
          </div>
          <div>
            <img
              src={window.location.origin + "/iconImages/ds.png"}
              alt="Data stuctures icon"
            />
            <p> Data Stuctures</p>
          </div>
        </div>
      </div>
    </div>
  );
};
