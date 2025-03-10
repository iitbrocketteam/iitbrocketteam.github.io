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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam doloremque eum quod temporibus magni veritatis recusandae deleniti. Quo, ratione?</p>
        </div>
        <div className={styles.other}>
          <div className={styles.achieve}>
            <h2>Achievements</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, consequatur.</p>
          </div>
          <div className={styles.compi}>
            <h2>Competitions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut?</p>
          </div>
          <div className={styles.rnd}>
            <h2>RnD in Fuel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deleniti?</p>
          </div>
          <div className={styles.vis}>
            <h2>Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
          </div>
        </div>

      </section>

      <section className={styles.stats_section}>
        <div className={styles.stats}>
          <h2>At a Glance </h2>
          <div className={styles.stat}>
            <h1>4</h1>
            <p>Rockets</p>
          </div>
          <div className={styles.stat}>
            <h1>40</h1>
            <p>Team members</p>
          </div>
          <div className={styles.stat}>
            <h1>4</h1>
            <p>Subsytems</p>
          </div>
        </div>
      </section>

      <section className={styles.slidercontainer}>
        <div className={styles.slides}>

          <div className={styles.rocketContainer}>
            {/* Rocket Info */}
            <div className={styles.info}>
              <h2>Rocket Akash</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus beatae nemo ad omnis explicabo atque aut assumenda quae repellat!</p>
            </div>

            {/* Image beside the info */}
            <div className={styles.imageContainer}>
              <img src="/public/rtlogo1.png" alt="Rocket Akash" className={styles.rocketImage} />
            </div>
          </div>

          <div className={styles.rocketContainer}>
            {/* Rocket Info */}
            <div className={styles.info}>
              <h2>Rocket Advyant</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ducimus beatae nemo ad omnis explicabo atque aut assumenda quae repellat!</p>
            </div>

            {/* Image beside the info */}
            <div className={styles.imageContainer}>
              <img src="/public/rtlogo1.png" alt="Rocket Akash" className={styles.rocketImage} />
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, consequatur.</p>
          </div>
          <div className={styles.propulsion}>
            <h2>Propulsion</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut?</p>
          </div>
          <div className={styles.airframe}>
            <h2>Airframe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deleniti?</p>
          </div>
          <div className={styles.business}>
            <h2>Business</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum.</p>
          </div>
        </div>

      </section>  
    </div>
  );
}
