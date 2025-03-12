import styles from "./sponsors.module.css";
import Link from "next/link";

import { Orbitron, Poppins } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Sponsors() {
  // structure:
  // .pitch
  //   - .main
  //   - .tables

  return (
    <div
      className={styles.pitch + " " + styles.center_div + " " + font.className}
    >
      <div className={styles.main + " " + styles.center_div}>
        <div className={styles.support_heading + " " + techno_font.className}>
          <h2>Transcending Limits</h2>
          <h1>Defying Norms</h1>
        </div>

        <div className={styles.button_container + " " + techno_font.className}>
          <div className={styles.button_holder}>
            <Link
              className={styles.contact_us}
              href="/contact"
              target="_blank" // open in new tab
            >
              Contact Us
            </Link>
          </div>

          <div className={styles.button_holder}>
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
        <div className={styles.description}>
          Our team is dedicated to elevating Indian amateur rocketry through
          groundbreaking advancements. Beyond launching rockets, our mission is
          to cultivate technical skills and promote STEM education at all
          levels. Your support will empower us to push the boundaries of
          innovation and inspire the next generation of engineers and
          scientists.
        </div>
      </div>

      <div className={styles.tables}>
        <h3>&gt; Why you should sponsor us</h3>

        <ol className={styles.reasons}>
          <li>
            <h4>CSR and Tax Exemption</h4>
            <p>
              Support groundbreaking scientific innovation with the IIT Bombay
              Rocket Team! Your contributions qualify for tax rebates under the
              Income Tax Act for scientific research. This is a unique
              opportunity to promote cutting-edge technology, empower young
              innovators, and make a meaningful impact on the future of space
              exploration and scientific advancement.
            </p>
          </li>

          <li>
            <h4>Branding Avenues</h4>
            <p>
              Gain global exposure by sponsoring the IIT Bombay Rocket Team!
              Your logo will shine on our rocket soaring 30,000 feet, featured
              at launch events, on T-shirts, and across social media (40k+
              followers). Connect with thousands of attendees and talented IITB
              students for internships while supporting cutting-edge innovation
              and space exploration
            </p>
          </li>

          <li>
            <h4>Soar 30000 feet high</h4>
            <p>
              Partner with us and watch your brand reach new heights—literally!
              By sponsoring the IIT Bombay Rocket Team, your logo will soar an
              incredible 30,000 feet into the sky on our cutting-edge rocket.
              Join us in pushing the boundaries of innovation while showcasing
              your brand to a global audience.
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
              We seek monetary support to cover essential expenses, including
              competition fees, materials, travel allowances, outreach,
              publicity, and event costs. Your contributions will enable us to
              manage operational expenses efficiently, allowing the IIT Bombay
              Rocket Team to focus on innovation, engineering excellence, and
              achieving success in national and international competitions.
            </p>
          </li>

          <li>
            <h4>In-Kind Sponsorships</h4>
            <p>
              The IIT Bombay Rocket Team designs and builds high-quality
              engineering prototypes. We invite in-kind sponsorships to provide
              mechanical and electrical components, specialized materials,
              tools, machinery, and other essential supplies for rocket
              manufacturing. Your contributions will directly support our
              projects, helping us achieve engineering excellence and advance
              the boundaries of scientific innovation.
            </p>
          </li>

          <li>
            <h4>Services and Mentorship</h4>
            <p>
              We seek services such as shipping, accommodation, travel planning,
              and packaging. Access to your technical experts for guidance would
              be invaluable. We value mentorship, assistance in connecting with
              stakeholders, securing purchase discounts, and collaborating on
              joint marketing initiatives like press releases and social media
              campaigns to maximize visibility and impact.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
