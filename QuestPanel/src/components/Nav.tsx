import { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Quest Panel</h1>

      <div className={styles.hamburgerWrapper}>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {menuOpen && (
          <ul className={styles.dropdown}>
            <li className={styles.dropdownItem}>Misiones</li>
            <li className={styles.dropdownItem}>En curso</li>
            <li className={styles.dropdownItem}>Completadas</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
