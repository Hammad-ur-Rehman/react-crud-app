import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '10px 20px',
    backgroundColor: '#696969',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
