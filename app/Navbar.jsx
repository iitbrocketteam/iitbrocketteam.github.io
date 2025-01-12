import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          className={styles.logo}
          src="/nextjs-testing/rtlogo1.png"
          width={384}
          height={222}
          alt="Logo"
        />
      </div>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/rockets">Rockets</Link>
      </div>

      <div className={styles.buttons}>
        <button className={styles.reach_out}>REACH OUT TO US</button>
      </div>

      <div className={styles.buttons}>
        <a
          href="https://www.instagram.com/iitb.rocket.team/"
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
          href="mailto:iitbrocketteam@gmail.com"
          target="_blank"
          className={styles.social_icon}
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
}
