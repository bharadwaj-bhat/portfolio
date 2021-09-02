import styles from "../../Styles/Home.module.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Content = () => {
  return (
    <div className={styles.ContentWrapper}>
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
            style={{ width: "70%", marginTop: "10px" }}
            variant="contained"
            color="secondary"
            startIcon={<GetAppIcon />}
          >
            {" "}
            Resume
          </Button>
        </div>
      </div>
      <div className={styles.iconsDiv}>
        <GitHubIcon fontSize="inherit" />
        <LinkedInIcon style={{ fontSize: "2.2rem" }} />
      </div>
    </div>
  );
};
