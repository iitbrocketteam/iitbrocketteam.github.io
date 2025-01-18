import styles from "./achievements.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Achievements() {
  return (
    <div className={styles.page + ' ' + font.className}>
      <h1>ACHIEVEMENTS</h1>
      <section className={styles.timeline}>
        <ul>
          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2024</h2>
              {/* <h1>Heading 1</h1> */}
              <p>19th in our category, 34th worldwide</p>
            </div>
          </li>

          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2023</h2>
              {/* <h1>Heading 2</h1> */}
              <div class="bullet-points">
                <p>1) First SA cup entry secured first national rank.</p>
                <p>2) 2nd position in Techzibtion 23 at IIT Roorkee.</p>
                <p>
                  3) 1st position at Engineers Conclave at Inter-IIT tech meet
                  11.0 in IIT Madras.
                </p>
                <p>4) Placed 1st in TechExpo IIT Guwahati.</p>
                <p>5) Aveshaan place third.</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2022</h2>
              {/* <h1>Heading 3</h1> */}
              <p>First Test launch.</p>
            </div>
          </li>
          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2019</h2>
              <h1></h1>
              <p>Team is established.</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
