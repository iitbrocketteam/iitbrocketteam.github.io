import styles from "./contact.module.css";

// TODO use https://www.npmjs.com/package/react-modal
// this https://www.npmjs.com/package/reactjs-popup gives uses client error

export default function Contact() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Contact Us!</h1>

      <form className={styles.form}>
        <input
          placeholder="Organization"
          className={styles.input}
          type="text"
          id="org"
          name="org"
        />

        <input
          placeholder="Email"
          className={styles.input}
          type="email"
          id="email"
          name="email"
        />

        <input
          placeholder="Phone"
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />

        <textarea
          placeholder="Message"
          className={styles.input}
          id="message"
          name="message"
          rows="4"
          cols="20"
        ></textarea>

        <input className={styles.submit} type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
