import styles from "./Car.module.css";
import Nav from "../../Components/Layout/Nav/Nav";

function Car() {
  return (
    <div className={styles.container}>
      <Nav/>
      <h1>Carrinho de compras</h1>
    </div>
  );
}

export default Car;
