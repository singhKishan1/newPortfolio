import styles from "./Contact.module.css";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [msg, setMsg] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder: you can POST to your Spring Boot API here

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    axios
      .post("/api/contact/sendMessage", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });

    console.log(formValues);
    setMsg("");
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Name</label>
        <input type="text" name="sendername" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          name="message"
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
