"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ui from "../ui.module.css";
import styles from "./rockets.module.css";
import { eyebrow, Specs, RocketVideo } from "./Rocket";

// narrow screens only (hidden by CSS on desktop): tabs + a row of sliding
// cards, text overlaid on each image. Native scroll-snap does the swiping.
export default function Carousel({ rockets }) {
  const [active, setActive] = useState(0);
  const tabs = useRef(null);
  const track = useRef(null);

  // which card is snapped in, from the scroll position
  const on_scroll = () => {
    const el = track.current;
    const first = el && el.children[0];
    if (!first) return;
    const step = el.children[1]
      ? el.children[1].offsetLeft - first.offsetLeft
      : first.offsetWidth;
    const i = Math.round(el.scrollLeft / step);
    setActive(Math.max(0, Math.min(rockets.length - 1, i)));
  };

  const go = (i) => {
    const el = track.current;
    const card = el && el.children[Math.max(0, Math.min(rockets.length - 1, i))];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.children[0].offsetLeft, behavior: "smooth" });
  };

  // keep the active tab centred in the scrolling tab strip
  useEffect(() => {
    const strip = tabs.current;
    const tab = strip && strip.children[active];
    if (!tab) return;
    strip.scrollTo({
      left: tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <section className={styles.carousel}>
      <div className={ui.tabs} role="tablist" aria-label="Rockets" ref={tabs}>
        {rockets.map((rocket, i) => (
          <button
            key={rocket.name}
            role="tab"
            aria-selected={i === active}
            className={ui.tab + (i === active ? " " + ui.tab_active : "")}
            onClick={() => go(i)}
          >
            <span className={ui.tab_index}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {rocket.name}
          </button>
        ))}
      </div>

      <div className={styles.track} ref={track} onScroll={on_scroll}>
        {rockets.map((rocket, i) => (
          <article
            key={rocket.name}
            className={
              styles.card +
              (i === active ? " " + styles.card_active : "") +
              (rocket.image ? "" : " " + styles.card_video)
            }
            role="tabpanel"
            aria-label={rocket.name}
            onClick={() => i !== active && go(i)}
          >
            <div className={styles.card_media}>
              {rocket.image ? (
                <Image
                  src={rocket.image}
                  width={800}
                  height={1000}
                  alt={`${rocket.name} lifting off`}
                  // right-aligned crop on narrow screens
                  style={{
                    objectPosition: "100% " + rocket.position.split(" ")[1],
                  }}
                />
              ) : (
                <RocketVideo rocket={rocket} />
              )}
            </div>
            <div className={styles.card_shade} />

            <div className={styles.card_text}>
              <div className={styles.eyebrow}>{eyebrow(rocket, i)}</div>
              <div className={styles.name_row}>
                <h2 className={styles.name}>{rocket.name}</h2>
                <span className={styles.year}>{rocket.year}</span>
              </div>
              <Specs rocket={rocket} />
              {rocket.description && (
                <p className={styles.description}>{rocket.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Previous rocket"
        >
          ←
        </button>
        <div className={styles.progress}>
          {rockets.map((rocket, i) => (
            <button
              key={rocket.name}
              className={
                styles.progress_bar +
                (i === active ? " " + styles.progress_bar_active : "")
              }
              onClick={() => go(i)}
              aria-label={rocket.name}
            />
          ))}
        </div>
        <button
          className={styles.arrow}
          onClick={() => go(active + 1)}
          disabled={active === rockets.length - 1}
          aria-label="Next rocket"
        >
          →
        </button>
      </div>
    </section>
  );
}
