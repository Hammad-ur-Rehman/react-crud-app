// import React from 'react';
// import styles from "./Footer.module.css"
// const Footer = () => {
//   console.log(styles)
//   return (
//     <footer className={styles.crud_footer}>
//       <p>© 2024 Your Company. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


//After Typescript Add


import React, { FC } from 'react';
import styles from "./Footer.module.css";

const Footer: FC = () => {
  console.log(styles);
  return (
      <footer className={styles.crud_footer}>
      <p>2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
