"use client";

import { Table, Rocket } from "./Rocket";
import styles from "./Slideshow.module.css";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

function Video({ class_name, src }) {
  return (
    <video
      className={class_name}
      key={src}
      width="356"
      height="800"
      loop
      autoPlay
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

// https://stackoverflow.com/a/4467559/17100530
export default function Slideshow({ rockets_data }) {
  const len = rockets_data.length;
  const [active, setActive] = useState(Math.floor(len / 2));

  const modulo = (n) => ((n % len) + len) % len;

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow_top}>
        <button
          className={styles.arrow}
          onClick={() => {
            setActive(active - 1);
          }}
        >
          <FaAngleLeft />
        </button>

        {/* Trigerring video src change: https://stackoverflow.com/a/47382850/17100530 */}
        <Video
          class_name={styles.video_inactive}
          src={rockets_data[modulo(active - 1)].videoSrc}
        />
        <Video
          class_name={styles.video_active}
          src={rockets_data[modulo(active)].videoSrc}
        />
        <Video
          class_name={styles.video_inactive}
          src={rockets_data[modulo(active + 1)].videoSrc}
        />

        <button
          className={styles.arrow}
          onClick={() => {
            setActive(active + 1);
          }}
        >
          <FaAngleRight />
        </button>
      </div>

      <Table props={rockets_data[modulo(active)]} />
    </div>
  );
}
