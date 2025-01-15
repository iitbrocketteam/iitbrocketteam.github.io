"use client";

import { Table, Rocket } from "./Rocket";
import styles from "./Slideshow.module.css";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

// https://stackoverflow.com/a/4467559/17100530
export default function Slideshow({ rockets_data }) {
  const len = rockets_data.length;
  const [active, setActive] = useState(Math.floor(len / 2));

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow_top}>
        <button
          className={styles.arrow}
          onClick={() => {
            if (active === 0) {
              setActive(len - 1);
            } else {
              setActive(active - 1);
            }
          }}
        >
          <FaAngleLeft />
        </button>

        <div>
          <Image
            className={styles.video}
            src={rockets_data[active].videoSrc}
            width={260}
            height={750}
            alt="Logo"
          />
        </div>

        <button
          className={styles.arrow}
          onClick={() => {
            if (active === len - 1) {
              setActive(0);
            } else {
              setActive(active + 1);
            }
          }}
        >
          <FaAngleRight />
        </button>
      </div>

      <Table props={rockets_data[active]} />
    </div>
  );
}
