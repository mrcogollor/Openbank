import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetSteps, prevStep, nextStep } from '../../store/actions';
import { withTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetSteps()),
  prev: () => dispatch(prevStep()),
  next: () => dispatch(nextStep()),
});

const ConnectedStepperButtons = (props) => {
  const { t } = props;
  const resetSteps = () => {
    props.reset();
    props.resetSteps();
  };

  const prevStep = () => {
    props.prev();
    props.prevStep();
  };

  const nextStep = () => {
    props.next(); // Update Store
    props.nextStep();
  };

  let resetButton, prevButton, nextButton;
  if (props.resetSteps !== false) {
    resetButton = <Button text={t('steps.buttons.reset')} onClick={resetSteps} />;
  }
  if (props.prevStep !== false) {
    prevButton = <Button text={t('steps.buttons.prev')} className="step-buttons__prev" onClick={prevStep} />;
  }
  if (props.nextStep !== false) {
    nextButton = (
      <Button text={t('steps.buttons.next')} className="step-buttons__next" onClick={nextStep} disabled={props.nextDisabled} />
    );
  }

  return (
    <div className={`step-buttons ${props.className}`}>
      {resetButton}
      {prevButton}
      {nextButton}
    </div>
  );
};

ConnectedStepperButtons.defaultProps = {
  className: '',
  resetSteps: false,
  prevStep: false,
  nextStep: false,
  nextDisabled: true,
};

ConnectedStepperButtons.propTypes = {
  className: PropTypes.string,
  resetSteps: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  prevStep: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  nextStep: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  nextDisabled: PropTypes.bool,
};

const StepButtons = connect(null, mapDispatchToProps)(ConnectedStepperButtons);

export default withTranslation('translations')(StepButtons);
