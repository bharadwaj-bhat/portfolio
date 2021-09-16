import styles from "../../Styles/Home.module.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Content = () => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const handleDownload = () => {
    const file = document.createElement("a");
    file.href = `${window.location.origin + "/Resume_draft2.pdf"}`;
    file.open = "Resume_Bharadwaj_Bhat.pdf";
    file.target = "_blank";
    file.click();
  };

  const ResumeBtn = () => {
    return (
      <motion.div
        className={styles.downloadButton2}
        initial={{ y: "-72vh", x: "-68vw" }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href="https://github.com/bharadwaj-bhat"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          rel="noreferrer"
        >
          <GitHubIcon color="inherit" fontSize="inherit" />
        </a>
        <button
          onClick={handleDownload}
          style={{
            background: "rgb(245,0,87)",
            borderRadius: "50%",
            border: "none",
            color: "white",
            padding: "7px 9px",
          }}
        >
          <GetAppIcon color="inherit" />
        </button>
        <a
          href="https://linkedin.com/in/bharadwaj-bhat"
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon color="inherit" style={{ fontSize: "2.5rem" }} />
        </a>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div
        className={styles.ContentWrapper}
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className={styles.jsDiv}>
          <p className={styles.Js}> JAVASCRIPT </p>
        </div>
        <div className={styles.imgWrapperDiv}>
          <div className={styles.imgDiv}>
            <img src={window.location.origin + "/profile.jpeg"} alt="" />
          </div>
          <div className={styles.nameDiv}>
            <p className={styles.NamePTag}> BHARADWAJ BHAT </p>
            <h2> Full Stack Web Developer</h2>
            <Button
              ref={ref}
              style={{ width: "70%", marginTop: "10px" }}
              variant="contained"
              color="secondary"
              startIcon={<GetAppIcon />}
              onClick={handleDownload}
            >
              Resume
            </Button>
          </div>
        </div>
        <div className={styles.iconsDiv}>
          <a
            href="https://github.com/bharadwaj-bhat"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
            rel="noreferrer"
          >
            <GitHubIcon color="inherit" fontSize="inherit" />
          </a>
          <a
            href="https://linkedin.com/in/bharadwaj-bhat"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="inherit" style={{ fontSize: "2.2rem" }} />
          </a>
        </div>
      </motion.div>
      {!inView && <ResumeBtn />}
    </>
  );
};
