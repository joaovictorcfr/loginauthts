import Nav from "../../Components/Layout/Nav/Nav";
import styles from "./Home.module.css";
import img from "../../img/home-img.jpeg"
import Footer from "../../Components/Layout/Footer/Footer";

function Home() {
  return (
    <div className={styles.Container}>
      <Nav />
      <div
        className={styles.Container_home}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={styles.c_title}>
          <div className={styles.title}>
            <h1>
              "Café fresco <br />
              Pela manhã"
            </h1>
          </div>
          <p>
            O café é a prova de que pequenos momentos podem ser grandes fontes
            de prazer.
          </p>
          <button type="submit">Compre agora</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
