import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Login.css";

function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      
      {/* Criar Conta */}
      <div className="form-container sign-up">
        <form>
          <h1 className="title">Criar Conta</h1> <br/>
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
      <div className="form-container sign-in">
        <form>
          <h1 className="title">Fazer Login</h1> <br/>
          <span>Preencha com suas informações!</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <Link to="/nova-senha" className="link">
            Esqueceu a Senha?
          </Link>
          <button type="submit">Fazer Login</button>
        </form>
      </div>

      {/* Painéis */}
      <div className="toggle-container">
        <div className="toggle">
          
          <div className="toggle-panel toggle-left">
            <h1>Voltar Para o Login!</h1>
            <br/>
            <button
              className="hidden"
              onClick={() => setIsActive(false)}
            >
              Voltar
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h2>Não Tem Conta?</h2>
            <h1>Realizar Cadastro!</h1> <br/>
            <button
              className="hidden"
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


