import styles from "../../Styles/Home.module.css";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const breakPoint = 900;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const useStyles = makeStyles({
    drawerDiv: {
      fontSize: "1.3rem",
      margin: "5px",
      textAlign: "left",
      color: "rgb(240,0,84)",
    },
    p: {
      padding: "10px 15px",
      color: "rgb(15, 20, 30);",
    },
  });

  const classes = useStyles();

  return (
    <motion.div
      className={styles.Home}
      initial={{ y: "100vh", opacity: "0" }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className={styles.LogoDiv}>
        <div> Logo </div>
        <div className={styles.NameDiv}>
          <h1> Bharadwaj Bhat</h1>
          <p> WEB DEVELOPER</p>
        </div>
      </div>
      {width < breakPoint ? (
        <>
          <div onClick={() => setOpen(true)}>
            {" "}
            <MenuIcon />{" "}
          </div>
          <SwipeableDrawer
            className={classes.drawer}
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {
              setOpen(true);
            }}
          >
            <div className={classes.drawerDiv}>
              <div style={{ marginLeft: "10px" }}>
                <ArrowBackIcon
                  onClick={() => setOpen(false)}
                  fontSize="large"
                  color="inherit"
                />
              </div>
              <Link
                to="Home"
                onClick={() => setOpen(false)}
                smooth={true}
                duration={600}
              >
                <p className={classes.p}> Home </p>
              </Link>

              <Link
                to="About"
                onClick={() => setOpen(false)}
                smooth={true}
                duration={500}
              >
                <p className={classes.p}> About </p>
              </Link>
              <Link
                to="skills"
                onClick={() => setOpen(false)}
                smooth={true}
                duration={500}
              >
                <p className={classes.p}> Proficiencies </p>
              </Link>
              <Link
                to="Projects"
                onClick={() => setOpen(false)}
                smooth={true}
                duration={600}
              >
                <p className={classes.p}> Projects </p>
              </Link>
              <Link
                to="Contact"
                onClick={() => setOpen(false)}
                smooth={true}
                duration={600}
              >
                <p className={classes.p}> Contact </p>
              </Link>
            </div>
          </SwipeableDrawer>
        </>
      ) : (
        <div className={styles.NavigationLinks}>
          <Link to="Home" smooth={true} duration={600}>
            <p> Home </p>
          </Link>
          <Link to="About" smooth={true} duration={500}>
            <p> About </p>
          </Link>
          <Link to="skills" smooth={true} duration={400} offset={-80}>
            <p> Proficiencies </p>
          </Link>
          <Link to="Projects" smooth={true} duration={600}>
            <p> Projects </p>
          </Link>

          <Link to="Contact" smooth={true} duration={600}>
            <p> Contact </p>
          </Link>
        </div>
      )}
    </motion.div>
  );
};
