import Link from "next/link";

import ui from "./ui.module.css";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={ui.page + " " + styles.page}>
      <div className={ui.label}>Error 404</div>
      <h1 className={ui.title}>Page not found</h1>
      <p className={styles.text}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className={ui.button}>
        Back to home →
      </Link>
    </div>
  );
}
