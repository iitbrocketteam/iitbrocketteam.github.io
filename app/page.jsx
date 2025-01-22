import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            error commodi saepe quisquam dolores aspernatur dolorem accusamus,
            soluta nostrum culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt
            autem praesentium ducimus omnis est ullam laboriosam vitae qui
            obcaecati, distinctio facilis rem reprehenderit cumque consequatur
            quo aliquam? Adipisci, ipsam.
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
            <div className={styles.card_icon}>🚀</div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>🤝</div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.card_icon}>👥</div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
