import { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [cpf, setCpf] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfpasswordChange = (event) => {
    setConfpassword(event.target.value);
  };
  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione lógica para autenticar o usuário aqui
  };

  return (
    <div className={styles.container}>
      <h1>
        Registrar <span>usuario</span>
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
          <label htmlFor="confpassword">Confirme sua senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            id="confpassword"
            value={confpassword}
            onChange={handleConfpasswordChange}
            required
          />
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            placeholder="Digite seu CPF"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
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
