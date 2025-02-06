import styles from "./page.module.css";
import Link from "next/link";
import { FaRocket, FaHandshake, FaPeopleArrows } from "react-icons/fa";

import { Roboto_Mono, Inter, Orbitron } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ weight: "400", subsets: ["latin"] });
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.page + " " + inter.className}>
      <header className={styles.header + " " + techno_font.className}>
        <div className={styles.text_container}>
          <h1 className={styles.blast_text}>Welcome to the IITB Rocket Team</h1>
          <div className={styles.trail}></div>
        </div>
        <p>Achieving New Frontiers in High Powered Rocketry</p>
      </header>

      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <div className={styles.typewriter_container}>
          <p className={styles.typewriter_text}></p>
        </div>
        <div className={styles.fade_in_items}>
          <p>
            Our team is dedicated to elevating Indian amateur rocketry through
            groundbreaking advancements. Beyond launching rockets, our mission
            is to cultivate technical skills and promote STEM education at all
            levels. Your support will empower us to push the boundaries of
            innovation and inspire the next generation of engineers and
            scientists.
          </p>
        </div>
      </section>

      <section className={styles.stats_section}>
        <div className={styles.stats}>
          <h2>At a Glance </h2>
          <div className={styles.stat}>
            <h1>4</h1>
            <p>Rockets</p>
          </div>
          <div className={styles.stat}>
            <h1>40</h1>
            <p>Team members</p>
          </div>
          <div className={styles.stat}>
            <h1>4</h1>
            <p>Subsytems</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h1>Our Ambitions</h1>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <div className={styles.card_icon}>
              {/* 🚀 */}
              <FaRocket />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>
              {/* 🤝 */}
              <FaHandshake />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>
              {/* 👥 */}
              <FaPeopleArrows />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
