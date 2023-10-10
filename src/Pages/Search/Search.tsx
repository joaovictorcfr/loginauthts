import styles from "./Search.module.css"
import Nav from "../../Components/Layout/Nav/Nav";

function Search() {
  return (
    <div className={styles.Container}>
      <Nav/>
      <h1>Resultado para a busca de produtos</h1>
    </div>
  );
}

export default Search;
