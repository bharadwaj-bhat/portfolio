import styles from "../Styles/Contact.module.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

export const Contact = () => {
  return (
    <div id="Contact" className={styles.contactWrapper}>
      <h3> Contact </h3>

      <h1> Get in touch - let's work together. </h1>
      <h4>
        Got a project? Reach out if you want to work together on something
        exciting. Big or small. Mobile or web.
      </h4>
      <div className={styles.contactDiv}>
        <div>
          <a
            href="tel:9742593327"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PhoneIcon fontSize="inherit" />
          </a>
          <p> Call me at 9742593327 </p>
        </div>
        <div>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:sbhatbharadwaj24@gmail.com"
          >
            <EmailIcon fontSize="inherit" />
          </a>
          <p> Mail </p>
        </div>
      </div>
    </div>
  );
};
