"use client";

import { useState } from "react";
import Image from "next/image";

import ui from "../ui.module.css";
import styles from "./Grid.module.css";
import data from "./data.json";

export default function Grid() {
  const [active, setActive] = useState(0);
  const subsystem = data[active];

  return (
    <section>
      <div className={ui.tabs} role="tablist" aria-label="Subsystems">
        {data.map((s, index) => (
          <button
            key={s.name}
            role="tab"
            aria-selected={index === active}
            className={ui.tab + (index === active ? " " + ui.tab_active : "")}
            onClick={() => setActive(index)}
          >
            <span className={ui.tab_index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        <div className={styles.panel_header}>
          <div className={ui.label}>{subsystem.name}</div>
          <div className={styles.count}>
            {subsystem.members.length}{" "}
            {subsystem.members.length === 1 ? "member" : "members"}
          </div>
        </div>

        <ul className={styles.members}>
          {subsystem.members.map((member) => (
            <li key={member.name} className={styles.member}>
              <div className={styles.photo}>
                <Image
                  className={styles.profile_pic}
                  src={`/team/${member.name}.jpg`}
                  width={400}
                  height={400}
                  alt={member.name}
                />

                {(member.major || member.year || member.linkedin) && (
                  <div className={styles.details}>
                    {member.major && <div>{member.major}</div>}
                    {member.year && <div>Class of {member.year}</div>}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.name}>{member.name}</div>
              {member.role && <div className={styles.role}>{member.role}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
