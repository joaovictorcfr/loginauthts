import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import logo from "../../../img/logo.png"
import { BiSolidLogInCircle } from "react-icons/bi";

function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.logodiv}>
        <img src={logo} alt="logo-coffee" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contato</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/about"}>Sobre</Link>
          </li>
        </ul>
      </div>
      <div className={styles.icons}>
        {" "}
        <span className={styles.icn}>
          <Link to={"/search"}>
            <IoIosSearch />
          </Link>
        </span>
        <span className={styles.icn}>
          <Link to={"/car"}>
            <IoIosCart />
          </Link>
        </span>
        <span className={styles.icn}>
          <Link to={"/"}>
            <BiSolidLogInCircle />
          </Link>
        </span>
      </div>
      {/* linha a cima dividindo o header */}
      <hr />
    </div>
  );
}

export default Nav;
