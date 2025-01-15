import Rocket from "./Rocket";
import styles from "./rockets.module.css";

export default function Rockets() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Our Rockets</h1>

      <ul>
        <li>
          <Rocket
            props={{
              name: "Agastya",
              year: "2024",
              data: [
                ["Apogee", "9800m"],
                ["Motor", "M2500"],
                ["Fuel", "APCP"],
                ["Height", "2.0m"],
                ["Diameter", "20cm"],
                ["Airframe Filament", "Glass Fibre"],
              ],
            }}
            videoSrc="/nextjs-testing/agastya01.mp4"
          />

          <Rocket
            props={{
              name: "Adyanta",
              year: "2023",
              data: [
                ["Apogee", "9600m"],
                ["Motor", "M2500"],
                ["Fuel", "APCP"],
                ["Height", "1.5m"],
                ["Diameter", "20cm"],
              ],
            }}
            videoSrc="/nextjs-testing/adyanta01.png"
          />

          <Rocket
            props={{
              name: "Jnr1",
              year: "2023",
              data: [
                ["Apogee", "9600m"],
                ["Motor", "M2500"],
                ["Fuel", "APCP"],
                ["Height", "1.5m"],
                ["Diameter", "20cm"],
              ],
            }}
            videoSrc="/nextjs-testing/adyanta01.png"
          />

          <Rocket
            props={{
              name: "Adhyanta junior",
              year: "2023",
              data: [
                ["Apogee", "9600m"],
                ["Motor", "M2500"],
                ["Fuel", "APCP"],
                ["Height", "1.5m"],
                ["Diameter", "20cm"],
              ],
            }}
            videoSrc="/nextjs-testing/adyanta01.png"
          />
        </li>
      </ul>
    </div>
  );
}
