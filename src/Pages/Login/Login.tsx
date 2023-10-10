import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import styles from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const auth = useAuth();
  const navigate = useNavigate(); // Correção aqui: é useNavigate, não history

  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();

    try {
      await auth.authenticate(email, password); // Use 'email' e 'password' diretamente
      navigate("/home"); // Use 'navigate' para redirecionar para a página inicial
    } catch (error) {
      alert("Usuario ou senha invalido!");
    }
  };

  return (
    <div className={styles.login_container}>
      <h1>
        Login <span>user</span>
      </h1>
      <div className={styles.login_form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            placeholder="Digite o nome do usuário"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite a senha"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p>Não possui conta?</p>
          <Link to={"/register"}>Criar conta agora!</Link>
          <br />
          <button type="submit" className={styles.login_btn}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
