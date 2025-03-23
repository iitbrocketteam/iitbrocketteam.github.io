import styles from "./achievements.module.css";
import Image from "next/image";
import { Montserrat, Poppins, Inter } from "next/font/google";
import data from "./event_data.json";

// const font = Inter({
// weight: ["100","200","300","400","500" "400", "700"],
//   subsets: ["latin"],
// });

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
          {/* TODO why need so many? fix in CSS */}
          {image_list_content(event.images)}
          {image_list_content(event.images)}
          {image_list_content(event.images)}
        </div>
      </div>
    </section>
  ));

  return (
    <div className={styles.page /*  + " " + font.className */}>
      <h1 className={styles.h1_achieveme}>ACHIEVEMENTS</h1>
      <section className={styles.achievements}>
        <ul className={styles.timeline}>
          {/* TODO set this with js expr. also n */}
          <li>
            <p>
              <span>First National Rank</span> at SA cup &apos;23
            </p>
          </li>
          <li>
            <p>
              <span>34th Rank</span> at SA cup &apos;23
            </p>
          </li>

          <li>
            <p>
              <span>1st Position</span> in Engineers Conclave, IIT Madras{" "}
              {/* 2023 */}
            </p>
          </li>

          <li>
            <p>
              <span>1st Position</span>
              at Techexpo, IIT Guwahati {/* 2023 */}
            </p>
          </li>

          <li>
            <p>
              <span>2nd Position</span> in Techzibition
            </p>
          </li>

          {/* <li>
            <p>
              <span>Finalists</span> of Techkriti
            </p>
          </li> */}

          {/* <li>
            <span>2nd Runner Up</span> in Anveshan 2023
          </li> */}

          {/* <li>
            <span>Finalists</span> of Debris-o-Locus
          </li> */}

          {/* 19th in our category, 34th worldwide */}
        </ul>
      </section>

      {/* events images */}

      <h1 className={styles.events_heading}>EVENTS</h1>

      <div className={styles.events_container}>{events}</div>
    </div>
  );
}
