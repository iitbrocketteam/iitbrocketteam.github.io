import ui from "../ui.module.css";
import styles from "./rockets.module.css";

import Rocket from "./Rocket";
import Carousel from "./Carousel";
import { current, previous } from "./data";

const rockets = [current, ...previous];

export default function Rockets() {
  return (
    <div className={ui.page}>
      <header className={ui.header + " " + styles.header}>
        <div className={ui.label}>Rockets · Flight log</div>
        <h1 className={ui.title}>Our Rockets</h1>
        <p className={ui.lead}>
          Every iteration flies higher than the last - from a 100 m hop on a
          sorbitol motor to 9,210 ft at the Spaceport America Cup.
        </p>
      </header>

      {/* desktop / tablet: one panel per rocket */}
      <div className={styles.list}>
        {rockets.map((rocket, i) => (
          <Rocket key={rocket.name} rocket={rocket} index={i} />
        ))}
      </div>

      {/* phone: swipeable slider, text over the images */}
      <Carousel rockets={rockets} />
    </div>
  );
}
