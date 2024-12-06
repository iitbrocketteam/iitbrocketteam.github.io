import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      Homepage
      <br />
      <Link href="/rockets">Rockets</Link>
    </div>
  );
}
