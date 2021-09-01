import styles from "../../Styles/Home.module.css";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.Home}>
      <div className={styles.LogoDiv}>
        <div> Logo </div>
        <div className={styles.NameDiv}>
          <h1> Bharadwaj Bhat</h1>
          <p> WEB DEVELOPER</p>
        </div>
      </div>
      <div onClick={() => setOpen(true)}>
        {" "}
        <MenuIcon />{" "}
      </div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {
          setOpen(true);
        }}
      >
        <h1> one </h1>
        <h2> Two </h2>
      </SwipeableDrawer>
    </div>
  );
};
