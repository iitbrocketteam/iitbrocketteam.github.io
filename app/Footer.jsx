import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const sitemap = [
  ["/", "Home"],
  ["/rockets", "Rockets"],
  ["/team", "Team"],
  ["/sponsors", "Sponsors"],
  ["/achievements", "Achievements"],
  ["/contact", "Contact"],
];

const socials = [
  ["Instagram", "https://www.instagram.com/iitb.rocket.team/", FaInstagram],
  ["LinkedIn", "https://in.linkedin.com/company/iitbrocketteam", FaLinkedin],
  ["Facebook", "https://www.facebook.com/iitbrocketteam/", FaFacebook],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            className={styles.logo}
            src="/rtlogo1.png"
            width={384}
            height={222}
            alt="IITB Rocket Team"
          />
          <p>Achieving new frontiers in high powered rocketry.</p>
        </div>

        <div className={styles.column}>
          <div className={styles.label}>Site map</div>
          <ul>
            {sitemap.map(([href, name]) => (
              <li key={href}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.label}>Follow</div>
          <ul>
            {socials.map(([name, href, Icon]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.label}>Contact</div>
          <ul>
            <li>
              <a href="mailto:iitbrocketteam@gmail.com">
                iitbrocketteam@gmail.com
              </a>
            </li>
            <li className={styles.muted}>IIT Bombay, Powai</li>
            <li className={styles.muted}>Mumbai - 400076</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} IIT Bombay Rocket Team</span>
        <span className={styles.signal}>
          <span className={styles.dot} />
          All systems nominal
        </span>
      </div>
    </footer>
  );
}
