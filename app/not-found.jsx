import Link from "next/link";

import ui from "./ui.module.css";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={ui.page + " " + styles.page}>
      <div className={ui.rec}>
        <span className={ui.rec_dot} />
        Error 404 · Signal lost
      </div>
      <h1 className={ui.title}>Page not found</h1>
      <p className={styles.text}>
        This page drifted off course. Let&apos;s get you back to the launch pad.
      </p>
      <Link href="/" className={ui.button}>
        Back to home →
      </Link>
    </div>
  );
}
