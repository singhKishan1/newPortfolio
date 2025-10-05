import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // placeholder: you can POST to your Spring Boot API here
    alert("Message sent — replace with real API call");
    setMsg("");
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={submit} className={styles.form}>
        <label>Name</label>
        <input required />
        <label>Email</label>
        <input type="email" required />
        <label>Message</label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
