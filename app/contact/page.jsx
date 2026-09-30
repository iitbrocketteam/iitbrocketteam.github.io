"use client";

import ui from "../ui.module.css";
import styles from "./contact.module.css";

import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

// Send Form results to Google Sheet:
// https://github.com/levinunnink/html-form-to-google-sheet
// SHEET: https://docs.google.com/spreadsheets/d/1HWI5mobyBb-3KjCRrCiLHj-tHKyDQj-W9S4o7nJTwk8/edit?usp=sharing

const socials = [
  ["Instagram", "https://www.instagram.com/iitb.rocket.team/", FaInstagram],
  ["LinkedIn", "https://www.linkedin.com/company/iitbrocketteam/", FaLinkedin],
  ["Facebook", "https://www.facebook.com/iitbrocketteam", FaFacebook],
];

const status_text = {
  sending: "Transmitting…",
  sent: "Message received - we'll get back to you soon.",
  error: "Couldn't send. Please email us instead.",
};

export default function Contact() {
  // idle | sending | sent | error
  const [status, set_status] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    set_status("sending");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        set_status("sent");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        set_status("error");
      });
  };

  return (
    <div className={ui.page}>
      <header className={ui.header}>
        <div className={ui.label}>Contact · Open channel</div>
        <h1 className={ui.title}>Contact Us</h1>
        <p className={ui.lead}>
          Sponsorships, collaborations, or just curious about rockets - send us
          a message and the team will get back to you.
        </p>
      </header>

      <section className={ui.columns}>
        <div className={ui.column}>
          <div className={ui.label}>01 / Reach us</div>
          <div className={styles.entries}>
            <div className={ui.entry}>
              <div className={styles.key}>Email</div>
              <a href="mailto:iitbrocketteam@gmail.com" className={styles.link}>
                iitbrocketteam@gmail.com
              </a>
            </div>
            <div className={ui.entry}>
              <div className={styles.key}>Address</div>
              <p>
                IIT Bombay
                <br />
                Powai, Mumbai - 400076
              </p>
            </div>
            <div className={ui.entry}>
              <div className={styles.key}>Resources</div>
              <a
                href="https://drive.google.com/drive/folders/1Nb8fV42-rMY1Dj-B-6YNH9x0v0Vwfh9y"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Google Drive folder ↗
              </a>
            </div>
            <div className={ui.entry}>
              <div className={styles.key}>Social</div>
              <div className={styles.socials}>
                {socials.map(([name, href, Icon]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.social}
                  >
                    <Icon aria-hidden="true" />
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={ui.column}>
          <div className={ui.label}>02 / Send a message</div>
          <form
            className={styles.form}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxc837YAmC-9N9e7Zjs69MoXy2DBdugmGJafxfJKRgV8-Id4dI8jBodtGk5M4TBgBLn/exec"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />

            <div className={styles.submit_row}>
              <button
                type="submit"
                className={ui.button}
                disabled={status === "sending"}
              >
                Send →
              </button>
              <p className={styles.status} role="status">
                {status_text[status]}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
