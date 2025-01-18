import styles from "./achievements.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import data from "./event_data.json";

const font = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Achievements() {
  const image_list_content = (image_list) =>
    image_list.map((image_name) => (
      <div className={styles.slide} key={image_name}>
        <Image
          width={300}
          height={300}
          src={`/nextjs-testing/achievements/${image_name}.jpg`}
          alt={image_name}
        />
      </div>
    ));

  const events = data.map((event) => (
    <section key={event.title} className={styles.events_section}>
      <h2>{event.title}</h2>
      <div className={styles.infinite_slideshow}>
        <div className={styles.slideshow_track}>
          {image_list_content(event.images)}
          {image_list_content(event.images)}
        </div>
      </div>
    </section>
  ));

  return (
    <div className={styles.page + " " + font.className}>
      <h1>ACHIEVEMENTS</h1>
      <section className={styles.timeline}>
        <ul>
          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2024</h2>
              <p>19th in our category, 34th worldwide</p>
            </div>
          </li>

          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2023</h2>
              <div className={styles.bullet_points}>
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
              <p>First Test launch.</p>
            </div>
          </li>
          <li>
            <div className={styles.timeline_content}>
              <h2 className={styles.date}>2019</h2>
              <p>Team is established.</p>
            </div>
          </li>
        </ul>
      </section>

      <h1 className={styles.events_heading}>EVENTS</h1>

      <div className={styles.events_container}>{events}</div>
    </div>
  );
}
