import styles from "./rockets.module.css";

export default function Rocket({ name, year, data }) {
  const rows = data.map((element) => (
    <tr key={element[0]}>
      <th>{element[0]}</th>
      <td>{element[1]}</td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{name}</th>
          <td>{year}</td>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}
