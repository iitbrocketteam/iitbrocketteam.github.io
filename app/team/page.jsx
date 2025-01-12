import styles from "./team.module.css";
import Image from "next/image";

import Grid from "./Grid.jsx";

export default function Team() {
  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <h2>Our Team</h2>
        <div className={styles.description}>
          <p>
            Our team is a group of 30+ members, including undergraduates, dual
            degree and PhD students, united by a shared passion for advancing
            rocketry and space sciences in India. We are dedicated to nurture a
            robust STEM community and are guided by experienced faculty from
            ISRO and IIT Bombay, along with a TRA Level-3 certified
            international mentor who will be our Flyer of Record for the
            competition.
          </p>

          <Image
            className={styles.group_photo}
            src="/nextjs-testing/group_photo_800_cropped.jpg"
            width={800}
            height={418}
            alt="Group Photo"
          />
        </div>
        <div className={styles.click_command}>
          Click on any of our members below to learn more about them!
        </div>
      </main>

      <Grid />
    </div>
  );
}
