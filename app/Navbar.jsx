"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space_Mono, Poppins, Inter } from "next/font/google";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const font = Inter({ weight: "400", subsets: ["latin"] });

// TODO add social media links as well as links to share the website

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

  const [dropdown_closed, set_dropdown_closed] = useState(true);

  const mobile_active = (
    <div
      className={styles.mobile_active}
      onClick={() => {
        set_dropdown_closed(!dropdown_closed);
      }}
    >
      {links.find((link) => link[0] === pathname)[1]}
    </div>
  );

  const links_content = links.map((link) => (
    <Link
      href={link[0]}
      key={link[0]}
      className={
        styles.subpage_link +
        " " +
        (link[0] === pathname ? styles.active : styles.inactive)
      }
      onClick={() => {
        set_dropdown_closed(true);
        console.log("hello", dropdown_closed);
      }}
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

      {mobile_active}
      <div
        className={
          styles.links + (dropdown_closed ? " " + styles.dropdown_closed : "")
        }
      >
        {links_content}
      </div>

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