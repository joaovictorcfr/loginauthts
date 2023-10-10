import styles from "../Footer/Footer.module.css"
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.container}>
      <h2>Redes sociais</h2>
      <p>
        Cafena<span> levando o melhor café até você</span>
      </p>
      <div className={styles.container_footer}>
        <ul>
          <li>
            <a href="#">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineWhatsApp />
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="_blank">
              <AiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
