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
            <div className={styles.img_holder}>
              <Image
                className={styles.profile_pic}
                src={`/nextjs-testing/team/${member.name}.jpg`}
                width={400}
                height={400}
                alt=""
              />
              <ul className={styles.popup}>
                <li>
                  {/* TODO add linkedin links data */}
                  <a href="https://www.linkedin.com/in/sayan-vishwakarma-6b2386286">
                    🔗 LinkedIn
                  </a>
                  <li>Graduation Year: {member.year}</li>
                  <li>Major: {member.major}</li>
                </li>
              </ul>
            </div>

            <h4>{member.name}</h4>
            <h5>{member.role}</h5>
          </div>
        ))}
      </ul>
    </li>
  ));

  return <ul className={styles.list}>{content}</ul>;
}
