import Rocket from "./Rocket";
import Slideshow from "./Slideshow";
import styles from "./rockets.module.css";

const data = [
  {
    name: "Adhyant",
    // name: "1",
    year: "2023",
    data: [
      ["Apogee", "8291feet"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "2.37m"],
      ["Diameter", "150mm"],
    ],
    videoSrc: "/adyanta.mp4",
    description: `Our debut at the Spaceport America Cup was electrifying! Adyant, our pioneering rocket, soared to 66th place internationally in the 10k SRAD category. Equipped with a dual deployment system and a sleek fiberglass body, it carried a 4kg dummy payload to new heights. This achievement marked our team's bold entry into the world's largest intercollegiate rocketry competition, showcasing our innovative spirit and technical prowess on a global stage.`,
  },
  {
    name: "Jnr1",
    // name: "2",
    year: "2023",
    data: [
      ["Apogee", "100m"],
      ["Motor", "SRAD"],
      ["Fuel", "Sorbitol"],
      ["Height", "2 feet"],
      ["Diameter", "8cm"],
    ],
    videoSrc: "/jnr1.mp4",
    description: `Our journey began with JNR1, our pioneering rocket that tested cutting-edge flight computers, recovery systems, and SRAD motors. After two thrilling but failed launches, we achieved a triumphant flight. From humble beginnings at 100 meters, we've soared to new heights, pushing innovation and perseverance to the limit. Each challenge fueled our passion, propelling us toward a brighter future in rocketry.`,
  },
  {
    name: "Adhyanta junior",
    // name: "3",
    year: "2023",
    data: [
      ["Apogee", "1000m"],
      ["Motor", "SRAD"],
      ["Fuel", "Sorbitol with aluminium and KNO3"],
      ["Height", "5.3feet"],
      ["Diameter", "12.4cm"],
    ],
    videoSrc: "/adyanta_junior.mp4",
    description: `Adhyant Junior, our test rocket, boldly paved the way for SACUP24. It successfully endured two thrilling test launches, each reaching 1000 meters, as we pushed the limits of our telemetry, SRAD motor, and reefing recovery system. These trials were crucial in refining our technology, ensuring a robust foundation for future competitions and cementing our team's expertise in rocketry innovation.`,
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
            ["Apogee", "9210 feet"],
            ["Motor", "M2500"],
            ["Fuel", "APCP"],
            ["Height", "234cm"],
            ["Diameter", "12.4cm"],
          ],
          videoSrc: "/agastya01.mp4",
          description: `Our second SA Cup entry soared to new heights, securing an impressive 34th place internationally! This rocket was a marvel of innovation, featuring airbrakes for precise apogee control, a reefing mechanism for smooth recovery, and SRAD telemetry for real-time data. An active weather station payload added a scientific edge, showcasing our team's exceptional engineering prowess and dedication to pushing the boundaries of rocketry.`,
        }}
      />

      <h1 className={styles.heading}>Previous Iterations</h1>

      <Slideshow rockets_data={data} />
    </div>
  );
}
