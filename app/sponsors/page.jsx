import styles from "./sponsors.module.css";
import animations from "../animations.module.css";
import Link from "next/link";

import { Orbitron, Poppins } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
// const font = Inter({
//   subsets: ["latin"],
// });

export default function Sponsors() {
  // structure:
  // .pitch
  //   - .main
  //   - .tables

  return (
    <div
      className={
        styles.pitch + " " + styles.center_div /*  + " " + font.className */
      }
    >
      <div className={styles.main + " " + styles.center_div}>
        <div
          className={
            styles.support_heading +
            " " +
            techno_font.className +
            " " +
            animations.fade_in +
            " " +
            animations.fade_in_delay_0
          }
        >
          <h2>Transcending Limits</h2>
          <h1>Defying Norms</h1>
        </div>

        <div className={styles.button_container + " " + techno_font.className}>
          <div
            className={
              styles.button_holder +
              " " +
              animations.fade_in +
              " " +
              animations.fade_in_delay_1
            }
          >
            <Link
              className={styles.contact_us}
              href="/contact"
              target="_blank" // open in new tab
            >
              Contact Us
            </Link>
          </div>

          <div
            className={
              styles.button_holder +
              " " +
              animations.fade_in +
              " " +
              animations.fade_in_delay_2
            }
          >
            <Link
              className={styles.contact_us}
              // TODO brochure is too large, takes time to load
              href="/IITB RT Sponsorship Brochure 2025.pdf"
              target="_blank"
            >
              View Brochure
            </Link>
          </div>
        </div>

        <div
          className={
            styles.description +
            " " +
            animations.fade_in +
            " " +
            animations.fade_in_delay_3
          }
        >
          Our team is dedicated to elevating Indian amateur rocketry through
          groundbreaking advancements. Beyond launching rockets, our mission is
          to cultivate technical skills and promote STEM education at all
          levels. Your support will empower us to push the boundaries of
          innovation and inspire the next generation of engineers and
          scientists.
        </div>
      </div>

      <div
        className={
          styles.tables +
          " " +
          animations.fade_in +
          " " +
          animations.fade_in_delay_5
        }
      >
        <h3>&gt; Why you should sponsor us</h3>

        <ol className={styles.reasons}>
          <li>
            <h4>CSR and Tax Exemption</h4>
            <p>
            Support innovation with the IIT Bombay Rocket Team! Your tax-deductible contribution fuels research, empowers young innovators, advances space exploration, and promotes cutting-edge technology. Join us in shaping the future of scientific discovery!
            </p>
          </li>

          <li>
            <h4>Branding Avenues</h4>
            <p>
            Sponsor the IIT Bombay Rocket Team and gain global visibility. Your logo will be displayed on our rocket, team apparel, launch events, and social media (40K+ followers). Connect with top IITB talent, support innovation, and contribute to the future of space exploration.
            </p>
          </li>

          <li>
            <h4>Soar 30000 feet high</h4>
            <p>
              Partner with us and watch your brand reach new heights—literally!
              By sponsoring us, your logo will soar an incredible 30,000 feet
              into the sky on our cutting-edge rocket. Join us in pushing the
              boundaries of innovation while showcasing your brand to a global
              audience.
            </p>
          </li>
        </ol>

        {/* separator */}
        <br />

        <h3>&gt; How you can help us</h3>
        <ol className={styles.help}>
          <li>
            <h4>Monetary Contributions </h4>
            <p>
            We seek funding for competition fees, materials, travel, outreach, and events. Your support enables us to drive innovation, achieve engineering excellence, and compete on global platforms.
            </p>
          </li>

          <li>
            <h4>In-Kind Sponsorships</h4>
            <p>
            We develop high-quality engineering prototypes and welcome in-kind sponsorships for components, materials, tools, and machinery. Your support directly drives innovation and engineering excellence in rocketry.
            </p>
          </li>

          <li>
            <h4>Services and Mentorship</h4>
            <p>
            We seek support for logistics, travel, packaging, and expert guidance. Collaboration on mentorship, stakeholder connections, discounts, and joint marketing will enhance our impact and visibility.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
