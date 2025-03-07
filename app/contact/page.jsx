"use client";

import styles from "./contact.module.css";

import { Roboto, Poppins, Inter } from "next/font/google";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const font = Inter({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Send Form results to Google Sheet:
// https://github.com/levinunnink/html-form-to-google-sheet
// SHEET: https://docs.google.com/spreadsheets/d/1HWI5mobyBb-3KjCRrCiLHj-tHKyDQj-W9S4o7nJTwk8/edit?usp=sharing

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  const data = new FormData(e.target);
  const action = e.target.action;

  console.log(data, action);

  fetch(action, {
    method: "POST",
    body: data,
  })
    .then(() => {
      console.log("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function Contact() {
  return (
    <div className={styles.container + ' ' + font.className}>
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
        <form
          method="POST"
          action="https://script.google.com/macros/s/AKfycbxc837YAmC-9N9e7Zjs69MoXy2DBdugmGJafxfJKRgV8-Id4dI8jBodtGk5M4TBgBLn/exec"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">First Name (required)</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email (required)</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message (required)</label>
          <textarea id="message" name="message" rows="6" required />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
