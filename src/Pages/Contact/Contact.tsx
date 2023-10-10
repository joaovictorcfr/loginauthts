import styles from "./Contact.module.css";
import Nav from "../../Components/Layout/Nav/Nav";
import Footer from "../../Components/Layout/Footer/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function Email(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todas as informações!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_1vl45su",
        "template_aob7ge5",
        templateParams,
        "n0LZ3xg5w1ZAcoadS"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro", err);
        }
      );
  }
  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.title}>Contato</h1>
      <div className={styles.container_contact}>
        <form className={styles.form} onSubmit={Email}>
          <label className={styles.labelNome}>Nome:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label className={styles.labelEmail}>Email:</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className={styles.labelMessage}>Menssagem:</label>
          <textarea
            className={styles.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className={styles.button} type="submit" value="Enviar" />
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
