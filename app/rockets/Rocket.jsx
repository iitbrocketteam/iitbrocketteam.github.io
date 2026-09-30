import Image from "next/image";

import ui from "../ui.module.css";
import styles from "./rockets.module.css";

// "01 / Latest flight", then "02 / 2025" ...
export function eyebrow(rocket, index) {
  const n = String(index + 1).padStart(2, "0");
  return n + " / " + (index === 0 ? "Latest flight" : rocket.year);
}

export function Specs({ rocket }) {
  return (
    <dl className={styles.specs}>
      {rocket.data.map(([key, value]) => (
        <div key={key} className={styles.spec}>
          <dt>{key}</dt>
          <dd className={value === "TBA" ? styles.tba : ""}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function RocketVideo({ rocket }) {
  return (
    <video
      className={styles.video}
      src={rocket.videoSrc}
      width={356}
      height={800}
      muted
      loop
      autoPlay
      playsInline
    />
  );
}

// desktop panel: blurred copy of the photo behind everything, text on the
// shaded left, sharp square photo feathered into the backdrop on the right
export default function Rocket({ rocket, index }) {
  const photo = !!rocket.image;

  return (
    <section className={styles.panel}>
      {photo && (
        <>
          <Image
            className={styles.backdrop}
            src={rocket.image}
            width={800}
            height={1000}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: rocket.position }}
          />
          <div className={styles.shade} />
        </>
      )}

      <div className={styles.panel_grid}>
        <div className={styles.panel_text}>
          <div className={styles.eyebrow}>{eyebrow(rocket, index)}</div>
          <div className={styles.name_row}>
            <h2 className={styles.name}>{rocket.name}</h2>
            <span className={styles.year}>{rocket.year}</span>
          </div>
          <Specs rocket={rocket} />
          {rocket.description && (
            <p className={styles.description}>{rocket.description}</p>
          )}
        </div>

        {photo ? (
          <div className={styles.square}>
            <Image
              className={styles.photo}
              src={rocket.image}
              width={1280}
              height={1280}
              alt={`${rocket.name} lifting off the rail`}
              style={{ objectPosition: rocket.position }}
            />
          </div>
        ) : (
          <div className={styles.video_slot}>
            {/* the renders have a white background, so the REC label sits in a bar above */}
            <figure className={styles.video_frame}>
              <figcaption className={styles.rec_bar}>
                <span className={ui.rec}>
                  <span className={ui.rec_dot} />
                  REC · {rocket.name}
                </span>
                <span>{rocket.year}</span>
              </figcaption>
              <RocketVideo rocket={rocket} />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
