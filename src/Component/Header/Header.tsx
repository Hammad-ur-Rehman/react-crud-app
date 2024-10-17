import React, { FC } from 'react';
import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navlist}>
          <li className={styles.navitem}>
            <Button to="/" className={styles.nav_button} variant="home">Home</Button>
          </li>
          <li className={styles.navitem}>
            <Button to="/create" className={styles.nav_button} variant="create">Create Data</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
