import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaRocket, FaHandshake, FaPeopleArrows } from "react-icons/fa";

import { Roboto_Mono, Inter, Orbitron, Poppins } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
// const roboto_mono = Roboto_Mono({ weight: "400", subsets: ["latin"] });
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.page + " " + font.className}>
      <header className={styles.header + " " + techno_font.className}>
        <div className={styles.text_container}>
          <h1 className={styles.blast_text}>Welcome to the IITB Rocket Team</h1>
          <div className={styles.trail}></div>
        </div>
        <p>Achieving New Frontiers in High Powered Rocketry</p>
      </header>

      <section className={styles.vision}>
        <div className={styles.team_info}>
          <h2>Rocket Team</h2>
          <p>
            Our team is a group of 30+ members, including undergraduates, dual
            degree and PhD students, united by a shared passion for advancing
            rocketry and space sciences in India. We are dedicated to nurture a
            robust STEM community and are guided by experienced faculty from
            ISRO and IIT Bombay, along with a TRA Level-3 certified
            international mentor who will be our Flyer of Record for the
            competition.
          </p>
        </div>
        <div className={styles.other}>
          <div className={styles.achieve}>
            <h2>Achievements</h2>
            <p>
              The IIT Bombay Rocket Team has consistently excelled at the
              prestigious Spaceport America Cup, the world’s largest
              intercollegiate rocketry competition. Currently ranked 34th among
              150+ global teams at SA Cup 2024, we proudly secured the National
              First Position at SA Cup 2023, solidifying our place as India’s
              top collegiate rocketry team.
            </p>
          </div>
          <div className={styles.compi}>
            <h2>Competitions</h2>
            <p>
              The IIT Bombay Rocket Team is proud to compete in two prestigious
              platforms: the Intercollegiate Rocket Engineering Competition
              (IREC) at Spaceport America Cup and the INSPACE competition. At
              IREC, we showcase advanced engineering by launching rockets to
              altitudes of 10,000, while INSPACE highlights our expertise in
              low-altitude rocketry with deployable payloads.{" "}
            </p>
          </div>
          <div className={styles.rnd}>
            <h2>RnD in Fuel</h2>
            <p>
              The IIT Bombay Rocket Team has successfully developed and designed
              a solid rocket fuel composed of sorbitol and potassium nitrate
              (KNO₃). This formulation, known as KNSB (potassium
              nitrate-sorbitol), is widely recognized for its affordability,
              safety, and high reliability in amateur and student rocketry.
            </p>
          </div>
          <div className={styles.vis}>
            <h2>Vision</h2>
            <p>
              Our team is dedicated to elevate Indian amateur rocketry through
              groundbreaking advancements. Beyond launching rockets, our mission
              is to cultivate technical skills and promote STEM education at all
              levels.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.stats_section}>
        <h2>At a Glance </h2>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h1>6</h1>
            <p>Rockets</p>
          </div>
          <div className={styles.stat}>
            <h1>45</h1>
            <p>Team members</p>
          </div>
          <div className={styles.stat}>
            <h1>4</h1>
            <p>Subsytems</p>
          </div>
          <div className={styles.stat}>
            <h1>5</h1>
            <p>Years of Hard Work</p>
          </div>
        </div>
      </section>

      <section className={styles.slidercontainer}>
        <div className={styles.slides}>
          <div className={styles.rocketContainer}>
            {/* Rocket Info */}
            <div className={styles.info}>
              <h2>Rocket Ahiliya</h2>
              <p>
                Ahiliya marks our third iteration in the 10k rocket series for
                the prestigious IREC competition. This year, we have achieved a
                significant milestone by developing our proprietary solid rocket
                fuel and integrating a deployable payload, showcasing our
                advancements in propulsion technology and payload deployment
                systems.
              </p>
            </div>

            {/* Image beside the info */}
            <div className={styles.imageContainer}>
              <img
                src="/public/rtlogo1.png"
                alt="Rocket Ahiliya"
                className={styles.rocketImage}
              />
            </div>
          </div>

          <div className={styles.rocketContainer}>
            {/* Rocket Info */}
            <div className={styles.info}>
              <h2>Rocket Akarsh</h2>
              <p>
                Aarksh is our inaugural project for the INSPACE competition,
                designed to achieve an apogee of 1,000 meters. This rocket
                features a deployable payload, demonstrating our expertise in
                precision engineering and innovation in low-altitude rocketry
                for scientific and technological applications.
              </p>
            </div>

            {/* Image beside the info */}
            <div className={styles.imageContainer}>
              <img
                src="/public/rtlogo1.png"
                alt="Rocket Akarsh"
                className={styles.rocketImage}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.subsystem}>
        <div className={styles.sub_info}>
          <h2>Rocket Team</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam doloremque eum quod temporibus magni veritatis recusandae deleniti. Quo, ratione?</p>
        </div>
        <div className={styles.other_one}>
          <div className={styles.avionics}>
            <h2>Avionics</h2>
            <p>Design, development and manufacturing of the electronics systems inside the rocket and supporting equipment</p>
          </div>
          <div className={styles.propulsion}>
            <h2>Propulsion</h2>
            <p>Research, analyze, and characterize new propellants that can be utilized to achieve better performance for the rocket. Developing new alternatives for propellant manufacturing for better scalability and  reliability</p>
          </div>
          <div className={styles.airframe}>
            <h2>Airframe</h2>
            <p>Develop and manufacture the rocket’s airframe and aerodynamic surfaces for stability, strength, and optimal flight performance.
            </p>
          </div>
          <div className={styles.business}>
            <h2>Payload</h2>
            <p>Design of payloads, its mechanical movements and supporting hardware to gather key data for the rocket</p>
          </div>
        </div>

      </section>  
    </div>
  );
}
