// export const REQUIRED_FIELD_ERROR_MESSAGE = 'formErrors.isRequired';
// export const requiredFieldRegisterOptions = {
//   required: REQUIRED_FIELD_ERROR_MESSAGE,
// };

// export const MIN_LENGTH_ERROR_MESSAGE = 'formErrors.insufficientMinLength';
// export const createMinLengthRegisterOptions = (min) => ({
//   minLength: {
//     value: min,
//     message: MIN_LENGTH_ERROR_MESSAGE,
//   },
// });

// export const MAX_LENGTH_ERROR_MESSAGE = 'formErrors.exceededMaxLength';
// export const createMaxLengthRegisterOptions = (max) => ({
//   maxLength: {
//     value: max,
//     message: MAX_LENGTH_ERROR_MESSAGE,
//   },
// });

// export const PASSWORD_MISMATCH_ERROR_MESSAGE = 'formErrors.passwordIsDifferent';
// export const createConfirmPasswordRegisterOptions = (password) => ({
//   validate: (value) => value === password || PASSWORD_MISMATCH_ERROR_MESSAGE,
// });

// export const PASSWORD_ERROR_MESSAGE = 'formErrors.passwordIsWeak';
export const validatePassword = (password) => {
  // if (password.length < 8 || password.length > 24) return false;
  if (/\s/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
};
// export const passwordRegisterOptions = { validate: (value) => validatePassword(value) || PASSWORD_ERROR_MESSAGE };
