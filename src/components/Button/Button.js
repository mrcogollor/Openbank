import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Button = ({ type, text, link, disabled, onClick, className }) => {
  const classes = cx(
    'button',
    {
      'button--primary': !link,
      'button--link': link,
    },
    className
  );

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      <span className="t-button">{text}</span>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  secondary: false,
  type: 'button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
