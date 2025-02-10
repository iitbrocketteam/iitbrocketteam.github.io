"use client";
import { useState } from "react";
import styles from "./Grid.module.css";
import data from "./data.json";
import Image from "next/image";

export default function Grid() {
  const subsystemContent = (subsystem) => (
    <div className={styles.subsystem} key={subsystem.name}>
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
                  {member.linkedin ? (
                    <a href="https://www.linkedin.com/in/sayan-vishwakarma-6b2386286">
                      🔗 LinkedIn
                    </a>
                  ) : (
                    <a></a>
                  )}
                </li>
                {member.year ? (
                  <li>Graduation Year: {member.year}</li>
                ) : (
                  <li></li>
                )}
                {member.major ? <li>Major: {member.major}</li> : <li></li>}
              </ul>
            </div>

            <h4>{member.name}</h4>
            <h5>{member.role}</h5>
          </div>
        ))}
      </ul>
    </div>
  );

  // const content = data.map(subsystemContent);
  // return <ul className={styles.list}>{content}</ul>;

  const [active, setActive] = useState(0);

  return (
    <div className={styles.grid}>
      {
        <ul className={styles.tabs}>
          {data.map((subsystem, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(index);
              }}
              className={index === active ? styles.active : styles.inactive}
            >
              {subsystem.name}
            </li>
          ))}
        </ul>
      }

      {subsystemContent(data[active])}
    </div>
  );
}
