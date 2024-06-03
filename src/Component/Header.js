import React from 'react';
import Button from './Button';
import "./Header.css";
const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Button to="/" className="nav-button">Home</Button>
          </li>
          <li style={styles.navItem}>
            <Button to="/create" className="nav-button">Create Data</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '10px 20px',
    backgroundColor: '#696969',
    color: 'white',
    position : "fixed",
    top : "0px",
    left : "0px",
    right : "0px", 
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
};

export default Header;
