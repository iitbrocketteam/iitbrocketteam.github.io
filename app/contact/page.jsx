import styles from "./contact.module.css";

import { Roboto, Poppins } from "next/font/google";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const font = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// TODO use https://www.npmjs.com/package/react-modal
// this https://www.npmjs.com/package/reactjs-popup gives uses client error

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contact_info}>
        <h1>Contact us.</h1>
        <p>iitbrocketteam@gmail.com</p>
        <p>IIT BOMBAY</p>
        <p>Powai , Mumbai -400076</p>
        <div className={styles.social_icons}>
          <a href="https://www.instagram.com/iitb.rocket.team/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/iitbrocketteam">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/iitbrocketteam/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.contact_form}>
        <form action="#" method="post">
          <label htmlFor="first-name">First Name (required)</label>
          <input type="text" id="first-name" name="first-name" required />

          <label htmlFor="last-name">Last Name (required)</label>
          <input type="text" id="last-name" name="last-name" required />

          <label htmlFor="email">Email (required)</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message (required)</label>
          <textarea id="message" name="message" rows="4" required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
