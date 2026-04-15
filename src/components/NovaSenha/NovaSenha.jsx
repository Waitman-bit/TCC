import styles from './Senha.module.css';

function EsqueceuSenha() {
  return (
    <div className={styles.container}>
      <h1>Crie uma nova senha</h1>
      <p className={styles.subtitle}>Digite sua nova senha abaixo</p>

      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          required
        />

        <input
          type="password"
          placeholder="Digite a nova senha"
          minLength="6"
          required
        />

        <input
          type="password"
          placeholder="Confirme a senha"
          minLength="6"
          required
        />

        <button className={styles.confirm}>
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default EsqueceuSenha;