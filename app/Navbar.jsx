import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pages = [
    { name: "sponsors", path: "/sponsors" },
    { name: "rockets", path: "/rockets" },
    { name: "events", path: "/events" },
    { name: "team", path: "/team" },
  ];

  return (
    <div className={styles.navbar}>
      <div  className={styles.logo_name}>
        <Image src="/rtlogo1.png" width={384} height={222} alt="Logo" />
        <div>IIT-B Rocket Team</div>
      </div>

      <ul className={styles.links}>
        {pages.map((page) => (
          <li key={page.name}>
            <Link href={page.path} className={styles.Link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
