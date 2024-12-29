import styles from "./sponsors.module.css";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <div className={styles.pitch + " " + styles.center_div}>
        {/* <Image
          className={styles.background}
          src="/support-bg2.jpg"
          width={714}
          height={276}
          alt="Logo"
        /> */}
        <h1 className={styles.support_h1}>Support the Team!</h1>

        <div className={styles.button_container}>
          <a
            className={styles.contact_us}
            href="/contact"
            target="_blank" // open in new tab
          >
            Contact Us
          </a>

          <a
            className={styles.contact_us}
            href="https://1drv.ms/b/s!AvV62ePKU4vKi5BaRrqnnAjQ2IuQGw?e=WplGkc"
            target="_blank"
          >
            View Brochure
          </a>
        </div>
      </div>
      <div className={styles.thanks + " " + styles.center_div}>
        <h2>Thanks to our Sponsors!</h2>
        <div
          className={
            styles.tier + " " + styles.platinum + " " + styles.center_div
          }
        >
          <h3>Platinum</h3>

          <Image
            className={styles.background}
            src="/ansys-logo.png"
            width={577}
            height={189}
            alt="Logo"
          />
        </div>
        <div
          className={styles.tier + " " + styles.gold + " " + styles.center_div}
        >
          Gold
        </div>
        <div
          className={
            styles.tier + " " + styles.silver + " " + styles.center_div
          }
        >
          Silver
        </div>
      </div>
    </>
  );
}
