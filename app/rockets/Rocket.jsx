import styles from "./rockets.module.css";
import Image from "next/image";

import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Rocket({ name, year, data }) {
  const rows = data.map((element) => (
    <tr key={element[0]}>
      <th>{element[0]}</th>
      <td>{element[1]}</td>
    </tr>
  ));

  return (
    <div>
      <table className={styles.table + " " + roboto_mono.className}>
        <thead>
          <tr>
            <th>{name}</th>
            <td>{year}</td>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>

      <Image src="/rtlogo1.png" width={384} height={222} alt="Logo" />
    </div>
  );
}
