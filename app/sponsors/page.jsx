import styles from "./sponsors.module.css";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <div className={styles.pitch + " " + styles.center_div}>
        <Image
          className={styles.background}
          src="/agastya02.jpg"
          width={1403}
          height={2104}
          alt="Logo"
        />

        <h1 className={styles.support_h1}>
          {/* Support the Team! */}
          Transcending Limits
          <br />
          Defying Norms
        </h1>

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
            // href="https://1drv.ms/b/s!AvV62ePKU4vKi5BaRrqnnAjQ2IuQGw?e=WplGkc"
            href="/brochure.pdf"
            target="_blank"
          >
            View Brochure
          </a>
        </div>

        <div className={styles.description}>
          Our team is dedicated to elevating Indian amateur rocketry through
          groundbreaking advancements. Beyond launching rockets, our mission is
          to cultivate technical skills and promote STEM education at all
          levels. Your support will empower us to push the boundaries of
          innovation and inspire the next generation of engineers and
          scientists.
        </div>

        <div className={styles.reasons}>
          <h3 className={styles.description}>Why you should sponsor us:</h3>

          <ol>
            <li>
              <h4>CSR and Tax Exemption</h4>
              <p>
                Contributions to the IITB Rocket Team qualify for tax rebates
                under the relevant sections of the Income Tax Act for scientific
                research. This presents an opportunity to support scientific
                innovation and research while benefiting from tax advantages
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.thanks + " " + styles.center_div}>
        <div className={styles.thanks_msg + " " + styles.center_div}>
          <h2>Thanks to our Sponsors!</h2>
        </div>
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
