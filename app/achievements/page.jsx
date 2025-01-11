import styles from "./achievements.module.css";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className={styles.page}>
      <h1>ACHIEVEMENTS</h1>
      <section className={styles.timeline}>
        <ul>
          <li>
            <div className="timeline-content">
              <h2 class="date">2024</h2>
              {/* <h1>Heading 1</h1> */}
              <p>19th in our category, 34th worldwide</p>
            </div>
          </li>

          <li>
            <div class="timeline-content">
              <h2 class="date">2023</h2>
              {/* <h1>Heading 2</h1> */}
              <div class="bullet-points">
                <p>1) first sa cup entry secured first national rank.</p>
                <p>2) 2nd position in techzibtion 23 at iit roorkee.</p>
                <p>
                  3) 1st position at engineers conclave at inter iit tech meet
                  11.0 in iit madras.
                </p>
                <p>4) Placed 1st in techexpo iit guwahati.</p>
                <p>5) Aveshaan place third.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h2 class="date">2022</h2>
              {/* <h1>Heading 3</h1> */}
              <p>First Test launch.</p>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <h2 class="date">2019</h2>
              <h1></h1>
              <p>Team is established.</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
