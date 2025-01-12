import styles from "./Grid.module.css";
import data from "./data.json";
import Image from "next/image";

export default function Grid() {
  console.log(data);

  const content = data.map((subsystem) => (
    <li className={styles.subsystem} key={subsystem.name}>
      <h3>{subsystem.name}</h3>

      <ul className={styles.member_list}>
        {subsystem.members.map((member) => (
          <div key={member.name} className={styles.member}>
            <Image
              className={styles.profile_pic}
              src={`/nextjs-testing/team/${member.name}.jpg`}
              width={400}
              height={400}
              alt=""
            />

            <h4>{member.name}</h4>
            <h5>{member.role}</h5>
          </div>
        ))}
      </ul>
    </li>
  ));

  return <ul className={styles.list}>{content}</ul>;
}
