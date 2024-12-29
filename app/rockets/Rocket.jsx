import styles from "./rockets.module.css";
import Image from "next/image";

import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Rocket({ name, year, data, videoSrc }) {
  const rows = data.map((element) => (
    <tr key={element[0]}>
      <th>{element[0]}</th>
      <td>{element[1]}</td>
    </tr>
  ));

  return (
    <div className={styles.rocket_container}>
      <table className={styles.table + " " + roboto_mono.className}>
        <thead>
          <tr>
            <th>{name}</th>
            <td>{year}</td>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>

      {/* <Image className={styles.video} src="/rocket.png" width={260} height={750} alt="Logo" /> */}

      <video className={styles.video} width="356" height="800" loop autoPlay>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
