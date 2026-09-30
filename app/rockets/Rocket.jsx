import Image from "next/image";

import ui from "../ui.module.css";
import styles from "./rockets.module.css";

export default function Rocket({ rocket }) {
  return (
    <div className={styles.rocket}>
      <div className={styles.info}>
        <div className={styles.name_row}>
          <h2 className={styles.name}>{rocket.name}</h2>
          <span className={styles.year}>{rocket.year}</span>
        </div>

        <dl className={styles.specs}>
          {rocket.data.map(([key, value]) => (
            <div key={key} className={styles.spec}>
              <dt>{key}</dt>
              <dd className={value === "TBA" ? styles.tba : ""}>{value}</dd>
            </div>
          ))}
        </dl>

        {rocket.description && (
          <p className={styles.description}>{rocket.description}</p>
        )}
      </div>

      <figure
        className={styles.media + (rocket.image ? " " + styles.photo : "")}
      >
        <figcaption className={styles.rec_bar}>
          <span className={ui.rec}>
            <span className={ui.rec_dot} />
            {rocket.image ? "Launch" : "REC"} · {rocket.name}
          </span>
          <span>{rocket.year}</span>
        </figcaption>
        {rocket.image ? (
          <Image
            key={rocket.image}
            className={styles.video}
            src={rocket.image}
            width={800}
            height={1000}
            alt={`${rocket.name} lifting off`}
          />
        ) : (
          // key: remount so the new source loads when switching rockets
          <video
            key={rocket.videoSrc}
            className={styles.video}
            src={rocket.videoSrc}
            width={356}
            height={800}
            muted
            loop
            autoPlay
            playsInline
          />
        )}
      </figure>
    </div>
  );
}
