// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from "./Button.module.css";

// const Button = ({ to, onClick, className,variant, children }) => {
//   const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

//   if (to) {
//     return (
//       <Link to={to}>
//         <button className={combinedClassName}>{children}</button>
//       </Link>
//     );
//   }

//   return (
//     <button className={combinedClassName} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// Button.propTypes = {
//   to: PropTypes.string,                // 'to' prop should be a string, used for navigation links
//   onClick: PropTypes.func,             // 'onClick' prop should be a function, used for click handlers
//   className: PropTypes.string.isRequired,
//   variant: PropTypes.string.isRequired, // 'className' prop should be a string and is required
//   children: PropTypes.node.isRequired, // 'children' prop should be a React node (any renderable content) and is required
// };

// Button.defaultProps = {
//   to: null,
//   onClick: null,
//   className:"",
// };

//  function Buttonlayout() {
//   return (
//     <div>
//       <Button variant="btn-primary">Primary Button</Button>
//       <Button variant="btn-secondary">Secondary Button</Button>
//       <Button variant="btn-success">Success Button</Button>
//       <Button variant="btn-danger">Danger Button</Button>
//       <Button variant="btn-warning">Warning Button</Button>
//       <Button variant="btn-info">Info Button</Button>
//       <Button variant="btn-light">Light Button</Button>
//       <Button variant="btn-dark">Dark Button</Button>
//     </div>
//   );
// }

// export default Button;



//After Typescript Add


import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Button.module.css";

interface ButtonProps {
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ to, onClick, className = "", variant, children }) => {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <button className={combinedClassName}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

const Buttonlayout: FC = () => {
  return (
    <div>
      <Button variant="btn-primary">Primary Button</Button>
      <Button variant="btn-secondary">Secondary Button</Button>
      <Button variant="btn-success">Success Button</Button>
      <Button variant="btn-danger">Danger Button</Button>
      <Button variant="btn-warning">Warning Button</Button>
      <Button variant="btn-info">Info Button</Button>
      <Button variant="btn-light">Light Button</Button>
      <Button variant="btn-dark">Dark Button</Button>
    </div>
  );
}

export default Button;
export { Buttonlayout };


