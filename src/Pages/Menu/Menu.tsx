import styles from "./Menu.module.css";
import Nav from "../../Components/Layout/Nav/Nav";
import Footer from "../../Components/Layout/Footer/Footer";
import menu_1 from "../../img/menu-1.png";
import menu_2 from "../../img/menu-2.png";
import menu_3 from "../../img/menu-3.png";
import menu_4 from "../../img/menu-4.png";
import menu_5 from "../../img/menu-5.png";
import menu_6 from "../../img/menu-6.png";

function Menu() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.container_menu}>
        <h2>
          Nosso <span>menu</span>
        </h2>
        <div className={styles.container_card_1}>
          <div className={styles.card}>
            <img src={menu_1} alt="img01" />
            <h3>Café com leite</h3>
            <p>
              R$5.50 <span>6.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>

          <div className={styles.card}>
            <img src={menu_2} alt="img02" />
            <h3>Café com creme</h3>
            <p>
              R$7.50 <span>7.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>

          <div className={styles.card}>
            <img src={menu_3} alt="img03" />
            <h3>Café com chocolate</h3>
            <p>
              R$6.50 <span>12.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>
        </div>
        <div className={styles.container_card_2}>
          <div className={styles.card}>
            <img src={menu_4} alt="img04" />
            <h3>Capuccino de chocolate</h3>
            <p>
              R$9.50 <span>12.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>

          <div className={styles.card}>
            <img src={menu_5} alt="img05" />
            <h3>Capuccino de caramelo</h3>
            <p>
              R$9.50 <span>12.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>

          <div className={styles.card}>
            <img src={menu_6} alt="img06" />
            <h3>Pingado da terra</h3>
            <p>
              R$5.50 <span>6.99</span>
            </p>
            <button>Add Carrinho</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
