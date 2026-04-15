import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>

      {/* Criar Conta */}
      <div className={`${styles.formContainer} ${styles.signUp}`}>
        <form>
          <h1 className={styles.title}>Criar Conta</h1> <br/>
          <span>Informe suas credenciais para continuar</span>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input
            type="tel"
            pattern="\(\d{2}\)\s\d{5}-\d{4}"
            placeholder="(16) 99999-9999"
          />
          <input type="password" placeholder="Senha" />
          <button type="submit">Registrar</button>
        </form>
      </div>

      {/* Login */}
      <div className={`${styles.formContainer} ${styles.signIn}`}>
        <form>
          <h1 className={styles.title}>Fazer Login</h1> <br/>
          <span>Preencha com suas informações!</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Link to="/nova-senha" className={styles.link}>
            Esqueceu a Senha?
          </Link>
          <button type="submit">Fazer Login</button>
        </form>
      </div>

      {/* Painéis */}
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>

          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Voltar Para o Login!</h1>
            <br/>
            <button
              className={styles.hidden}
              onClick={() => setIsActive(false)}
            >
              Voltar
            </button>
          </div>

          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h2>Não Tem Conta?</h2>
            <h1>Realizar Cadastro!</h1> <br/>
            <button
              className={styles.hidden}
              onClick={() => setIsActive(true)}
            >
              Seguir
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;