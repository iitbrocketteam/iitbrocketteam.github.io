import Rocket from "./Rocket";
import Slideshow from "./Slideshow";
import styles from "./rockets.module.css";

const data = [
  {
    name: "Adyanta",
    // name: "1",
    year: "2023",
    data: [
      ["Apogee", "9600m"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "1.5m"],
      ["Diameter", "20cm"],
    ],
    videoSrc: "/nextjs-testing/adyanta.mp4",
  },
  {
    name: "Jnr1",
    // name: "2",
    year: "2023",
    data: [
      ["Apogee", "9600m"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "1.5m"],
      ["Diameter", "20cm"],
    ],
    videoSrc: "/nextjs-testing/jnr1.mp4",
  },
  {
    name: "Adhyanta junior",
    // name: "3",
    year: "2023",
    data: [
      ["Apogee", "9600m"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "1.5m"],
      ["Diameter", "20cm"],
    ],
    videoSrc: "/nextjs-testing/adyanta_junior.mp4",
  },
];

export default function Rockets() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Our Rockets</h1>

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
          videoSrc: "/nextjs-testing/agastya01.mp4",
        }}
      />

      <Slideshow rockets_data={data} />
    </div>
  );
}
