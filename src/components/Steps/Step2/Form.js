import { useStepData } from '../../../utils/useStepData';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Step from '../Step';
// import RegisterInput from '../../RegisterInput/RegisterInput';

import { validatePassword } from '../../../utils/validation';

const STEP_ID = '2';
const PREV_STEP = '1';

const Form = () => {
  const { t } = useTranslation('translations');

  const defaultState = {
    password: '',
    repeatPass: '',
    clueText: '',
  };

  const stepData = useStepData(STEP_ID);
  const data = stepData || defaultState;

  const [state, setState] = useState(data);

  const updateStepData = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const [showPassword, _setShowPassword] = useState(false);
  const togglePassword = () => _setShowPassword(!showPassword);

  const [showRepeatPassword, _setShowRepeatPassword] = useState(false);
  const toogleRepeatPassword = () => _setShowRepeatPassword(!showRepeatPassword);

  const [errorLengthPass, _setErrorLengthPass] = useState(true);
  const [isNotValidPass, _setIsNotValidPass] = useState(true);
  const [hasEqualPassword, _setHasEqualPassword] = useState(true);

  useEffect(() => {
    let isValidPasswordLength, hasValidFormat, equalPassword;
    isValidPasswordLength = state.password.length < 8 || state.password.length > 24;
    _setErrorLengthPass(isValidPasswordLength);
    hasValidFormat = !validatePassword(state.password);
    _setIsNotValidPass(hasValidFormat);
    equalPassword = state.password !== state.repeatPass;
    _setHasEqualPassword(equalPassword);
  }, [state.password, state.repeatPass]);

  return (
    <Step
      data={{ ...state }}
      prevStep={PREV_STEP}
      lastStep={true}
      nextDisabled={errorLengthPass || isNotValidPass || hasEqualPassword}
    >
      <div className="steps step-form">
        <p dangerouslySetInnerHTML={{ __html: t('steps.step2.title') }}></p>
        <div className="step-form__wrapper-password">
          <div className="step-form__input-password">
            <label className="t-label" htmlFor="password">
              {t('steps.step2.passLabel')}
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onChange={updateStepData}
              placeholder={t('steps.step2.passPlacehoder')}
            />
            <button
              type="button"
              className="step-form__icon-eye"
              onClick={togglePassword}
              tabIndex="0"
              aria-label={showPassword ? t('steps.step2.passwordHideLabel') : t('steps.step2.passwordShowLabel')}
              aria-pressed={showPassword}
            />
            {state.password !== '' && errorLengthPass && (
              <span className="step-form__input-error">{t('steps.formErrors.invalidLength')}</span>
            )}
            {state.password !== '' && isNotValidPass && !errorLengthPass && (
              <span className="step-form__input-error">{t('steps.formErrors.passwordIsWeak')}</span>
            )}
          </div>
          <div className="step-form__input-password">
            <label className="t-label" htmlFor="repeatPass">
              {t('steps.step2.repeatPassLabel')}
            </label>
            <input
              id="repeatPass"
              name="repeatPass"
              type={showRepeatPassword ? 'text' : 'password'}
              onChange={updateStepData}
              placeholder={t('steps.step2.repeatPassPlaceholder')}
            />
            <button
              type="button"
              className="step-form__icon-eye"
              onClick={toogleRepeatPassword}
              tabIndex="0"
              aria-label={
                showRepeatPassword ? t('steps.step2.passwordRepeatHideLabel') : t('steps.step2.passwordRepeatShowLabel')
              }
              aria-pressed={showRepeatPassword}
            />
            {hasEqualPassword && <span className="step-form__input-error">{t('steps.formErrors.passwordIsDifferent')}</span>}
          </div>
        </div>
        <p>{t('steps.step2.titleClue')}</p>
        <div className="step-form__clue-password">
          <label className="t-label" htmlFor="clueText">
            {t('steps.step2.labelClue')}
          </label>
          <input
            id="clueText"
            name="clueText"
            type="text"
            onChange={updateStepData}
            placeholder={t('steps.step2.cluePlacehoder')}
          />
        </div>
      </div>
    </Step>
  );
};

export default Form;
