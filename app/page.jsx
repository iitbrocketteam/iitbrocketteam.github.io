"use client";

import styles from "./page.module.css";
import animations from "./animations.module.css";
import {
  FaRocket,

  // vision icons
  FaShieldAlt,
  FaTrophy,
  FaFlask,
  FaGlobe,

  // subsystems
  FaBolt,
  FaFire,
  FaPlane,
  FaParachuteBox,
} from "react-icons/fa";

import { Roboto_Mono, Inter, Orbitron, Poppins } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";

// add npm dep: "react-animate-on-scroll": "^2.1.9"
// this conflicts with react, so have to add --force in npm install
// import ScrollAnimation from "react-animate-on-scroll";

const techno_font = Orbitron({
  // weight: "400",
  subsets: ["latin"],
});

// const font = Inter({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

const icon_size = "1.5rem";

export default function Home() {
  return (
    <div className={styles.page /*  + ' ' + font.className */}>
      <header className={styles.header + " " + techno_font.className}>
        <h1>Welcome to the IITB Rocket Team</h1>

        <h2>
          <Typewriter
            words={["Achieving New Frontiers in High Powered Rocketry"]}
            loop={0}
            typeSpeed={30}
            deleteSpeed={10}
            delaySpeed={1000000} // keep it there infinitely
          />
        </h2>
      </header>

      <section className={styles.vision + " " + styles.slant}>
        <div
          className={
            styles.team_info +
            " " +
            animations.fade_in +
            " " +
            animations.fade_in_delay_0
          }
        >
          <h2>
            Rocket Team
            <FaRocket size={icon_size} style={{ marginLeft: "1rem" }} />
          </h2>

          <p>
            Our team comprises 30+ members, united by a shared vision for
            advancing rocketry and the space science community in India.
            <br />
            We are guided by experienced faculty from ISRO and IIT Bombay, along
            with a TRA Level-3 certified international mentor who will be our
            Flyer of Record for the competition.
          </p>
        </div>

        <div className={styles.other}>
          <div
            className={animations.fade_in + " " + animations.fade_in_delay_1}
          >
            <h2>
              Competitions
              <FaShieldAlt size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              We are proud to compete on two prestigious platforms:
              <br />
              1. The Intercollegiate Rocket Engineering Competition (IREC) at
              the prestigious <strong>Spaceport America Cup</strong>. At IREC,
              we showcase advanced engineering by launching rockets to altitudes
              of 10,000m.
              <br />
              2. The <strong>INSPACE</strong> competition, which highlights our
              expertise in low-altitude rocketry with deployable payloads.
            </p>
          </div>

          <div
            className={animations.fade_in + " " + animations.fade_in_delay_2}
          >
            <h2>
              Achievements
              <FaTrophy size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              We have consistently excelled at the prestigious Spaceport America
              Cup, the world’s largest intercollegiate rocketry competition.
              <br />
              Currently ranked 34th among 150+ global teams at SA Cup 2024, we
              proudly secured the <strong>National First Position</strong> at SA
              Cup 2023, solidifying our place as India’s top collegiate rocketry
              team.
            </p>
            <a href="/achievements">See all our achievements &rarr;</a>
          </div>

          <div
            className={animations.fade_in + " " + animations.fade_in_delay_3}
          >
            <h2>
              RnD in Fuel
              <FaFlask size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              {/* TODO we have progressed beyond this. add hybird motor info */}
              We have successfully developed and designed a solid rocket fuel
              composed of sorbitol and potassium nitrate (KNO₃). This
              formulation, known as KNSB (potassium nitrate-sorbitol),high
              reliability affordability, and safety in amateur and student
              rocketry.
            </p>
          </div>
          <div
            className={animations.fade_in + " " + animations.fade_in_delay_5}
          >
            <h2>
              Vision
              <span className={styles.icon}>
                <FaGlobe size={icon_size} />
              </span>
            </h2>
            <p>
              Our team is dedicated to elevate Indian amateur rocketry through
              groundbreaking advancements. Beyond launching rockets, our mission
              is to cultivate technical skills and promote STEM education at all
              levels.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.stats_section + " " + styles.slant}>
        <h2>At a Glance </h2>
        <div className={styles.stats}>
          <div className={styles.stat + " " + animations.stat_1}>
            <h1></h1>
            <p>Rockets</p>
          </div>
          <div className={styles.stat + " " + animations.stat_2}>
            <h1></h1>
            <p>Team members</p>
          </div>
          <div className={styles.stat + " " + animations.stat_3}>
            <h1></h1>
            <p>Subsystems</p>
          </div>
          <div className={styles.stat + " " + animations.stat_4}>
            <h1></h1>
            <p>Years of RnD</p>
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
              {/* FIXME add Ahiliya image */}
              {/* <img
                src="/public/rtlogo1.png"
                alt="Rocket Ahiliya"
                className={styles.rocketImage}
              /> */}
            </div>
          </div>

          <div className={styles.rocketContainer}>
            {/* Rocket Info */}
            <div className={styles.info}>
              <h2>Rocket Akarsh</h2>
              <p>
                Akarsh is our inaugural project for the INSPACE competition,
                designed to achieve an apogee of 1,000 meters. This rocket
                features a deployable payload, demonstrating our expertise in
                precision engineering and innovation in low-altitude rocketry
                for scientific and technological applications.
              </p>
            </div>

            {/* Image beside the info */}
            <div className={styles.imageContainer}>
              {/* FIXME add Akarsh image */}
              {/* <img
                src="/public/rtlogo1.png"
                alt="Rocket Akarsh"
                className={styles.rocketImage}
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.subsystems_container + " " + styles.slant}>
        <h2>Subsystems</h2>

        <div className={styles.subsystems}>
          <div>
            <h2>
              Avionics
              <FaBolt size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              Design, development and manufacturing of the electronics systems
              inside the rocket and supporting equipment
            </p>
          </div>
          <div>
            <h2>
              Propulsion
              <FaFire size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              Research, analyze, and characterize new propellants that can be
              utilized to achieve better performance for the rocket. Developing
              new alternatives for propellant manufacturing for better
              scalability and reliability
            </p>
          </div>
          <div>
            <h2>
              Airframe
              <FaPlane size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              Develop and manufacture the rocket’s airframe and aerodynamic
              surfaces for stability, strength, and optimal flight performance.
            </p>
          </div>
          <div>
            <h2>
              Payload
              <FaParachuteBox size={icon_size} style={{ marginLeft: "1rem" }} />
            </h2>
            <p>
              Design of payloads, its mechanical movements and supporting
              hardware to gather key data for the rocket
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
