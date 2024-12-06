import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      Homepage
      <br />
      <ul>
        <li>
          <Link href="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="/rockets">Rockets</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}
