import styles from "./About.module.css";
import Nav from "../../Components/Layout/Nav/Nav";
import about from "../../img/about-img.jpeg";
import Footer from "../../Components/Layout/Footer/Footer";

function About() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Nav />
        <h1>
          Sobre<span> nós</span>
        </h1>
        <div className={styles.container_content}>
          <div className={styles.about_image}>
            <img src={about} alt="image-about" />
          </div>
          <div className={styles.about_title}>
            <h2>Por que o nosso café é tão especial?</h2>
            <p>
              É considerado um café especial aquele que tem qualidade durante
              todo seu processo de produção até chegar na xícara, tem
              complexidade sensorial e possui ausência de defeitos. O café é um
              fruto dividido em duas principais espécies: a arábica, usada no
              especial, e a robusta, usada no café tradicional.
              <br />
              Toda a magia que envolve o café Gourmet começa pelos grãos. O
              Gourmet é composto por grãos arábica (50% menos cafeína que o
              Robusta), com forte controle de qualidade, desde a genética até a
              torrefação. Tem menos cafeína que o grão robusta, aquele que é
              usado no preparo do café no dia a dia. Tanto cuidado e controle
              permitem, inclusive, obter um café com nuances diferentes, que se
              destaca pelo sabor e aroma mais acentuado.
            </p>
            <button type="submit">Compre agora</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
