import ui from "../ui.module.css";
import styles from "./team.module.css";

import Image from "next/image";
import Grid from "./Grid.jsx";

export default function Team() {
  return (
    <div className={ui.page}>
      <header className={ui.header}>
        <div className={ui.label}>Team · IIT Bombay</div>
        <h1 className={ui.title}>Our Team</h1>
        <p className={ui.lead}>
          We are a team of 30+ members, including undergraduates and PhD
          students, united by a shared passion for advancing rocketry and space
          sciences in India.
        </p>
      </header>

      <section className={styles.photo_section}>
        <figure className={styles.photo_frame}>
          <Image
            className={styles.group_photo}
            src="/group_photo.jpg"
            width={3789}
            height={1944}
            alt="The IIT Bombay Rocket Team"
            priority
          />
          <div className={ui.scanlines} />
          <figcaption className={styles.caption}>
            <span className={ui.rec}>
              <span className={ui.rec_dot} />
              Crew · &apos;25–&apos;26
            </span>
          </figcaption>
        </figure>

        <p className={styles.mentors}>
          We are guided by experienced faculty from ISRO and IIT Bombay, along
          with a TRA Level-3 certified international mentor who will be our
          Flyer of Record for the competition.
        </p>
      </section>

      <Grid />
    </div>
  );
}
