import ui from "../ui.module.css";
import styles from "./sponsors.module.css";

import Link from "next/link";

const reasons = [
  {
    title: "CSR and Tax Exemption",
    text: "Support innovation with the IIT Bombay Rocket Team! Your tax-deductible contribution fuels research, empowers young innovators, advances space exploration, and promotes cutting-edge technology. Join us in shaping the future of scientific discovery!",
  },
  {
    title: "Branding Avenues",
    text: "Sponsor the IIT Bombay Rocket Team and gain global visibility. Your logo will be displayed on our rocket, team apparel, launch events, and social media (40K+ followers). Connect with top IITB talent, support innovation, and contribute to the future of space exploration.",
  },
  {
    title: "Soar 30000 feet high",
    text: "Partner with us and watch your brand reach new heights—literally! By sponsoring us, your logo will soar an incredible 30,000 feet into the sky on our cutting-edge rocket. Join us in pushing the boundaries of innovation while showcasing your brand to a global audience.",
  },
];

const ways_to_help = [
  {
    title: "Monetary Contributions",
    text: "We seek funding for competition fees, materials, travel, outreach, and events. Your support enables us to drive innovation, achieve engineering excellence, and compete on global platforms.",
  },
  {
    title: "In-Kind Sponsorships",
    text: "We develop high-quality engineering prototypes and welcome in-kind sponsorships for components, materials, tools, and machinery. Your support directly drives innovation and engineering excellence in rocketry.",
  },
  {
    title: "Services and Mentorship",
    text: "We seek support for logistics, travel, packaging, and expert guidance. Collaboration on mentorship, stakeholder connections, discounts, and joint marketing will enhance our impact and visibility.",
  },
];

function Cards({ items }) {
  return (
    <div className={ui.cards}>
      {items.map((item, i) => (
        <div key={item.title} className={ui.card}>
          <div className={styles.card_index}>
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className={ui.entry_key}>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className={ui.page}>
      <header className={styles.hero}>
        <div
          className={styles.hero_image}
          role="img"
          aria-label="Agastya lifting off at the Spaceport America Cup"
        />
        <div className={styles.hero_fade} />
        <div className={ui.scanlines} />

        <div className={styles.headline}>
          <h1>
            <span className={styles.eyebrow}>Transcending limits</span>
            <span className={ui.title}>Defying Norms</span>
          </h1>

          <div className={styles.headline_row}>
            <p className={styles.pitch}>
              Your support will empower us to push the boundaries of innovation
              and inspire the next generation of engineers and scientists.
            </p>

            <div className={styles.buttons}>
              <Link href="/contact" className={ui.button}>
                Contact Us →
              </Link>
              {/* TODO brochure is too large, takes time to load */}
              <a
                href="/IITB RT Sponsorship Brochure 2025.pdf"
                target="_blank"
                rel="noreferrer"
                className={ui.button_outline}
              >
                View Brochure ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.mission}>
        <div className={ui.label}>01 / Our mission</div>
        <p className={styles.mission_text}>
          Our team is dedicated to elevating Indian amateur rocketry through
          groundbreaking advancements. Beyond launching rockets, our mission is
          to cultivate technical skills and promote STEM education at all
          levels.
        </p>
      </section>

      <section className={ui.section}>
        <div className={ui.label}>02 / Why you should sponsor us</div>
        <Cards items={reasons} />
      </section>

      <section className={ui.section}>
        <div className={ui.label}>03 / How you can help us</div>
        <Cards items={ways_to_help} />
      </section>
    </div>
  );
}
