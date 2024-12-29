import Rocket from "./Rocket";
import styles from "./rockets.module.css";

export default function Rockets() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Our Rockets</h1>

      <ul>
        <li>
          <Rocket
            name="Agastya"
            year="2024"
            data={[
              ["Height", "2.0m"],
              ["Diameter", "20cm"],
              ["Launch Mass", "2.0kg"],
              ["Motor Diameter", "10cm"],
            ]}
            videoSrc="/agastya01.mp4"
          />

          <Rocket
            name="Adyanta"
            year="2023"
            data={[
              ["Length", "1.5m"],
              ["Mass", "1.5kg"],
            ]}
            videoSrc="/agastya01.mp4"
          />
        </li>
      </ul>
    </div>
  );
}
