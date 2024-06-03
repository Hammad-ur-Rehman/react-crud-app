import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ to, onClick, className, children }) => {
  if (to) {
    return (
      <Link to={to}>
        <button className={className}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  to: null,
  onClick: null,
};

export default Button;