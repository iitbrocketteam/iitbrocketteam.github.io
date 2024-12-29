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

        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rem
          quia commodi ex et porro sequi nisi magnam fugit distinctio nobis
          dolorem quaerat nam vel neque magni eaque ut, eligendi minus!
          Consequuntur dolorum fugit inventore, optio, architecto harum facere
          iusto deserunt molestias totam dolorem. Ratione porro saepe asperiores
          dignissimos neque!
        </p>
      </div>

      {/* <Image className={styles.video} src="/rocket.png" width={260} height={750} alt="Logo" /> */}

      <video className={styles.video} width="356" height="800" loop autoPlay>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
