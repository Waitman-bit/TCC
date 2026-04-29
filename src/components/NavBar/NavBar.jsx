import React from 'react';
import styles from './Navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // lógica de busca
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <a href="/src/components/imagens/Logo-sem-fundo.png" className={styles.logo}>
          <img
            src="imagens/Logo-sem-fundo.png"
            alt="Logo"
          />
        </a>

        {/* Busca */}
        <form
          className={styles.searchBox}
          onSubmit={handleSearch}
        >
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button type="submit" className={styles.searchButton}>
            <i className="fas fa-search"></i>
          </button>
        </form>

        {/* Nav Links */}
        <ul className={styles.navList}>
          <li>
            <a className={styles.navLink} href="#">
              Entrar
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#">
              Compras
            </a>
          </li>
          <li>
            <a
              className={`${styles.navLink} ${styles.cart}`}
              href="#"
            >
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;