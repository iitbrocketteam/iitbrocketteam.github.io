import styles from "./rockets.module.css";
import Image from "next/image";

import { Inter, Poppins } from "next/font/google";

// const font = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export function Table({ props }) {
  const rows = props.data.map((element) => (
    <tr key={element[0]}>
      <th>{element[0]}</th>
      <td>{element[1]}</td>
    </tr>
  ));

  return (
    <table className={styles.table /* + " " + font.className */}>
      <thead>
        <tr>
          <th>{props.name}</th>
          <td>{props.year}</td>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default function Rocket({ props }) {
  return (
    <div className={styles.rocket_container}>
      <div>
        <Table props={props} />

        <p className={styles.para}>{props.description}</p>
      </div>

      {/* <Image className={styles.video} src="/rocket.png" width={260} height={750} alt="Logo" /> */}

      <video className={styles.video} width="356" height="800" loop autoPlay>
        <source src={props.videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
