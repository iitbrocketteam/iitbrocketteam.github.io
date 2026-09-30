"use client";

import { useState } from "react";

import ui from "../ui.module.css";
import Rocket from "./Rocket";

// previous iterations, one at a time behind the same tabs as the team page
export default function Slideshow({ rockets_data }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={ui.tabs} role="tablist" aria-label="Previous rockets">
        {rockets_data.map((rocket, index) => (
          <button
            key={rocket.name}
            role="tab"
            aria-selected={index === active}
            className={ui.tab + (index === active ? " " + ui.tab_active : "")}
            onClick={() => setActive(index)}
          >
            <span className={ui.tab_index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {rocket.name}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        <Rocket rocket={rockets_data[active]} />
      </div>
    </div>
  );
}
