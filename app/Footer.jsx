import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaCopyright,
} from "react-icons/fa";

import { Space_Mono, Poppins } from "next/font/google";
// const font = Space_Mono({ weight: "400", subsets: ["latin"] });
const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={styles.footer + " " + font.className}>
      <div className={styles.footer_container}>
        <Image
          className={styles.logo}
          src="/nextjs-testing/rtlogo1.png"
          width={384}
          height={222}
          alt="Logo"
        />

        <div className={styles.footer_sitemap}>
          <h3>Site Map</h3>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link href="/achievements">Achievements</Link>
            </li>
            <li>
              <Link href="/rockets">Rockets</Link>
            </li>
            {/* <li>
              <a href="#apply">Apply</a>
            </li> */}
          </ul>
        </div>

        <div className={styles.footer_social}>
          <h3>Social Media</h3>

          <div className={styles.social_icons}>
            <a
              href="https://www.instagram.com/iitb.rocket.team/?hl=en"
              target="_blank"
              className={styles.social_icon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://in.linkedin.com/company/iitbrocketteam"
              target="_blank"
              className={styles.social_icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/iitbrocketteam/"
              target="_blank"
              className={styles.social_icon}
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <FaCopyright />
        2024 IIT-B Rocket Team
      </div>
    </footer>
  );
}
