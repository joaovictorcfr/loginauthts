import { useState } from "react";
import styles from "./Register.module.css";
import { ApiRegister } from "../../services/ApiRegister";
import { Link } from "react-router-dom"; // Supondo que você está usando React Router para navegação

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fazer a requisição para registrar o usuário
      const response = await ApiRegister.post("", {
        email,
        password,
      });

      if (response.status === 200) {
        // Registro bem-sucedido
        alert("Usuário registrado com sucesso!");
        console.log("User cadastrado");
        // Redirecionar para a página de login ou outra página desejada
      } else {
        // Tratar erros de registro aqui, se necessário
        alert("Erro ao registrar o usuário.");
      }
    } catch (error) {
      // Tratar erros de rede ou outros erros aqui
      console.error("Erro ao registrar o usuário:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>
        Registrar <span>usuário</span>
      </h1>
      <div className={styles.container_register}>
        <form onSubmit={handleSubmit} className={styles.register_form}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            id="name"
            required
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite uma senha"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className={styles.btn_register}>
            <Link to={"/"}>Cadastrar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
