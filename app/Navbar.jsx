"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space_Mono } from "next/font/google";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// import {
//   Helv
//   Inter,
// } from "next/font/google";
// const techno_font = techno_font_class({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

const links = [
  ["/", "Home"],
  ["/team", "Team"],
  ["/sponsors", "Sponsors"],
  ["/achievements", "Achievements"],
  ["/rockets", "Rockets"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const links_content = links.map((link) => (
    <Link
      href={link[0]}
      key={link[0]}
      className={
        styles.subpage_link +
        " " +
        (link[0] === pathname ? styles.active : styles.inactive)
      }
    >
      {link[1]}
    </Link>
  ));

  return (
    <nav className={styles.navbar + " " + font.className}>
      <Link className={styles.logo_link} href="/">
        <Image
          className={styles.logo}
          src="/nextjs-testing/rtlogo1.png"
          width={384}
          height={222}
          alt="Logo"
        />
      </Link>

      <div className={styles.links}>{links_content}</div>

      {/* for spacing: */}
      <div></div>

      {/* <div className={styles.buttons}>
        <Link className={styles.reach_out} href="/contact">
          REACH OUT TO US
        </Link>
      </div> */}
      {/* 
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
      </div> */}
    </nav>
  );
}
