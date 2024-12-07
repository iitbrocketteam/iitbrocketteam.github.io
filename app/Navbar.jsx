import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const pages = [
    { name: "sponsors", path: "/sponsors" },
    { name: "rockets", path: "/rockets" },
    { name: "events", path: "/events" },
    { name: "team", path: "/team" },
  ];

  return (
    <ul className={styles.navbar}>
      {pages.map((page) => (
        <li key={page.name}>
          <Link href={page.path} className={styles.Link}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
