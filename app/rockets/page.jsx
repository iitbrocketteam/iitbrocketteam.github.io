import Rocket from "./Rocket";
import ui from "../ui.module.css";
import styles from "./rockets.module.css";

// TODO specs for Ananta and Ahilya

const current = {
  name: "Ananta",
  year: "2026",
  data: [
    ["Apogee", "TBA"],
    ["Motor", "TBA"],
    ["Fuel", "TBA"],
    ["Height", "TBA"],
    ["Diameter", "TBA"],
  ],
  image: "/ananta_launch.jpeg",
  description: "",
};

// newest first after `current`; image = launch photo, else the old render video
const previous = [
  {
    name: "Ahilya",
    year: "2025",
    data: [
      ["Apogee", "TBA"],
      ["Motor", "TBA"],
      ["Fuel", "TBA"],
      ["Height", "TBA"],
      ["Diameter", "TBA"],
    ],
    image: "/ahilya_launch.jpg",
    description: `Ahilya marks our third iteration in the 10k rocket series for the prestigious IREC competition. This year, we have achieved a significant milestone by developing our proprietary solid rocket fuel and integrating a deployable payload, showcasing our advancements in propulsion technology and payload deployment systems.`,
  },
  {
    name: "Agastya",
    year: "2024",
    data: [
      ["Apogee", "9210 ft"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "2340mm"],
      ["Diameter", "124mm"],
    ],
    image: "/agastya_launch.jpeg",
    description: `Our second SA Cup entry soared to new heights, securing an impressive 34th place internationally! This rocket was a marvel of innovation, featuring airbrakes for precise apogee control, a reefing mechanism for smooth recovery, and SRAD telemetry for real-time data. An active weather station payload added a scientific edge, showcasing our team's exceptional engineering prowess and dedication to pushing the boundaries of rocketry.`,
  },
  {
    name: "Adhyant",
    // name: "1",
    year: "2023",
    data: [
      ["Apogee", "8291 ft"],
      ["Motor", "M2500"],
      ["Fuel", "APCP"],
      ["Height", "2370mm"],
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
      ["Apogee", "328 ft"],
      ["Motor", "SRAD"],
      ["Fuel", "Sorbitol"],
      ["Height", "610mm"],
      ["Diameter", "80mm"],
    ],
    videoSrc: "/jnr1.mp4",
    description: `Our journey began with JNR1, our pioneering rocket that tested cutting-edge flight computers, recovery systems, and SRAD motors. After two thrilling but failed launches, we achieved a triumphant flight. From humble beginnings at 100 meters, we've soared to new heights, pushing innovation and perseverance to the limit. Each challenge fueled our passion, propelling us toward a brighter future in rocketry.`,
  },
  {
    name: "Adhyanta junior",
    // name: "3",
    year: "2023",
    data: [
      ["Apogee", "3280 ft"],
      ["Motor", "SRAD"],
      ["Fuel", "Sorbitol with aluminium and KNO3"],
      ["Height", "1615mm"],
      ["Diameter", "124mm"],
    ],
    videoSrc: "/adyanta_junior.mp4",
    description: `Adhyant Junior, our test rocket, boldly paved the way for SACUP24. It successfully endured two thrilling test launches, each reaching 1000 meters, as we pushed the limits of our telemetry, SRAD motor, and reefing recovery system. These trials were crucial in refining our technology, ensuring a robust foundation for future competitions and cementing our team's expertise in rocketry innovation.`,
  },
];

export default function Rockets() {
  return (
    <div className={ui.page}>
      <header className={ui.header}>
        <div className={ui.label}>Rockets · Flight log</div>
        <h1 className={ui.title}>Our Rockets</h1>
        <p className={ui.lead}>
          Every iteration flies higher than the last - from a 100 m hop on a
          sorbitol motor to 9,210 ft at the Spaceport America Cup.
        </p>
      </header>

      {[current, ...previous].map((rocket, i) => (
        <section key={rocket.name}>
          <div className={styles.section_label}>
            <div className={ui.label}>
              {String(i + 1).padStart(2, "0")} /{" "}
              {i === 0 ? "Latest flight" : rocket.year}
            </div>
          </div>
          <Rocket rocket={rocket} />
        </section>
      ))}
    </div>
  );
}
