import ui from "../ui.module.css";
import styles from "./achievements.module.css";

import Image from "next/image";
import data from "./event_data.json";

const highlights = [
  { value: "#1", label: "National · SA Cup 2023", accent: true },
  { value: "34th", label: "Global · SA Cup 2024" },
  { value: "1st", label: "Engineers Conclave · IIT Madras" },
  { value: "1st", label: "Techexpo · IIT Guwahati" },
  { value: "2nd", label: "Techzibition" },
];

// Finalists of Techkriti, 2nd Runner Up in Anveshan 2023, Finalists of
// Debris-o-Locus - not listed for now

export default function Achievements() {
  return (
    <div className={ui.page}>
      <header className={ui.header}>
        {/* <div className={ui.label}>Achievements · Mission record</div> */}
        <h1 className={ui.title}>Achievements</h1>
        <p className={ui.lead}>
          From our debut at the Spaceport America Cup, the world&apos;s largest
          intercollegiate rocketry competition, to national tech expos - here
          is where we&apos;ve flown and what we&apos;ve won.
        </p>
      </header>

      <section className={ui.stats}>
        {highlights.map((h, i) => (
          <div key={i} className={ui.stat}>
            <div className={ui.stat_value + (h.accent ? " " + ui.accent : "")}>
              {h.value}
            </div>
            <div className={ui.stat_label}>{h.label}</div>
          </div>
        ))}
      </section>

      {data.map((event, i) => (
        <section key={event.title} className={styles.event}>
          <div className={styles.event_header}>
            <div className={ui.label}>
              Event · {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className={styles.event_title}>{event.title}</h2>
          </div>

          {/* images repeated 3x and scrolled by one third, so the loop is seamless */}
          <div className={styles.marquee}>
            <div className={styles.track}>
              {[0, 1, 2].map((copy) =>
                event.images.map((image_name) => (
                  <div className={styles.slide} key={copy + image_name}>
                    <Image
                      width={480}
                      height={320}
                      src={`/achievements/${image_name}.jpg`}
                      alt={copy === 0 ? event.title : ""}
                      aria-hidden={copy !== 0}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
