import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StepperContext } from 'react-material-stepper';
import StepButtons from '../StepButtons/StepButtons';
import store from '../../store';
import { updateSurvey, setStepsCompleted, setStep } from '../../store/actions';
import { useTranslation } from 'react-i18next';

const mapDispatchToProps = (dispatch) => ({
  updateSurvey: (survey) => dispatch(updateSurvey(survey)),
  setStep: (step) => dispatch(setStep(step)),
  setStepsCompleted: (isCompleted) => dispatch(setStepsCompleted(isCompleted)),
});

const ConnectedStep = (props) => {
  const { t } = useTranslation('translations');
  const { resolve, goAt } = React.useContext(StepperContext);
  const maxSteps = store.getState().maxSteps;
  const step = store.getState().step;

  const prevStep = () => {
    if (props.prevStep !== false) {
      goAt(props.prevStep);
    }
  };

  const nextStep = () => {
    resolve(props.data);
    if (props.nextStep !== false) {
      goAt(props.nextStep);
    }
    const survey = {
      ...store.getState().survey,
      ...props.data,
    };
    props.updateSurvey(survey);
  };

  const lastStep = () => {
    resolve(props.data);

    // Update data from the last step
    const survey = {
      ...store.getState().survey,
      ...props.data,
    };
    props.updateSurvey(survey);
    props.setStepsCompleted(true);
  };

  useEffect(() => {
    document.title = 'Survey ' + step + '/ ' + maxSteps + ' - Openbank Test';
  });

  return (
    <div className="step">
      {step !== maxSteps && (
        <h2 className="t-h2 step__title-step">
          <span>{t('steps.step1.title')}</span>
        </h2>
      )}
      <div className="step__content">{props.children}</div>
      {step !== maxSteps && (
        <div className="step-buttons__wrapper">
          {props.prevStep && <StepButtons prevStep={prevStep} />}
          {!props.lastStep && <StepButtons nextStep={nextStep} nextDisabled={props.nextDisabled} />}
          {props.lastStep && <StepButtons nextStep={lastStep} nextDisabled={props.nextDisabled} />}
        </div>
      )}
    </div>
  );
};

const Step = connect(null, mapDispatchToProps)(ConnectedStep);

Step.defaultProps = {
  prevStep: false,
  nextDisabled: false,
  nextStep: false,
  lastStep: false,
};

Step.propTypes = {
  prevStep: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  nextDisabled: PropTypes.bool,
  nextStep: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Step;
