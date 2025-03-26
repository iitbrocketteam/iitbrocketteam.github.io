import styles from "./Stars.module.css";

function Star({ x, y, scale, delay, color }) {
  // SVG from https://storybook.js.org/
  console.log(scale, delay);
  return (
    <div
      className={styles.star}
      style={{ left: x + "vw", top: y + "vh", animationDelay: `${delay}s` }}
    >
      <svg
        height="14"
        viewBox="0 0 14 14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `scale(${scale})` }}
      >
        <path
          d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z"
          fill="url(#gradient)"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="gradient"
            x1="7"
            x2="7"
            y1="0"
            y2="14"
          >
            <stop stopColor={`rgb(${color}, ${color}, ${color})`}></stop>
            <stop offset="1" stopColor="#000000" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Stars() {
  const stars = Array(100)
    .fill(0)
    .map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const scale = Math.random() * 1.3;
      const delay = Math.random() * 3;
      const color = 255 - Math.random() * 100;
      return (
        <Star key={i} x={x} y={y} scale={scale} delay={delay} color={color} />
      );
    });
  return <div className="stars">{stars}</div>;
}
