import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import cx from 'classnames';

const RegisterInput = React.forwardRef(({ type, name, label, errors }, ref) => {
  debugger;
  const { t } = useTranslation('translations');

  const [showPassword, _setShowPassword] = useState(false);
  const togglePassword = () => _setShowPassword(!showPassword);

  const hasError = Boolean(errors);
  const errorId = `error-${name}`;

  const inputClasses = cx('register-input__input', {
    'has-error': hasError,
    'is-password': type === 'password',
    'is-showingPassword': showPassword,
  });

  // const spanClasses = cx('register-input', {
  //   'register-input--read-only': props.readOnly,
  // });

  return (
    <span>
      <label className="register-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        ref={ref}
        className={inputClasses}
        type={showPassword ? 'text' : type}
        id={name}
        name={name}
        aria-describedby={errorId}
        aria-invalid={hasError}
      />
      {type === 'password' ? (
        <button
          type="button"
          className="icon icon-eye input-password__button"
          onClick={togglePassword}
          style={{ fontSize: '24' }}
          tabIndex="0"
          aria-label={showPassword ? t('registerForm.passwordHideLabel') : t('registerForm.passwordShowLabel')}
          aria-pressed={showPassword}
        />
      ) : null}
      {hasError && (
        <span id={errorId} className="validation-error">
          {t(errors.message)}
        </span>
      )}
    </span>
  );
});

RegisterInput.propTypes = {
  tipo: PropTypes.oneOf(['text', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errors: PropTypes.object,
};

export default RegisterInput;
