import styles from "../Styles/About.module.css";

export const About = () => {
  return (
    <div id="About" className={styles.AboutWrapper}>
      <h3>About</h3>
      <h1> Myself </h1>
      <div>
        <p>
          {" "}
          The name's Bharadwaj Bhat, I am a tireless seeker of knowledge,
          occassional puryevor of wisdom and I enjoy building robust and
          responsive web applications using MERN Stack.
        </p>
        <img src={window.location.origin + "/work.gif"} alt="" />
      </div>
    </div>
  );
};
