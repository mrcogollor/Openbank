import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { setMaxSteps } from '../../store/actions';
import Stepper, { Step } from 'react-material-stepper';
import ProductInformation from '../../components/Steps/Step1/ProductInformation';
import Form from '../../components/Steps/Step2/Form';
import Feedback from '../../components/Steps/Step3/Feedback';

const STEPS = [
  {
    id: '1',
    step: ProductInformation,
  },
  {
    id: '2',
    step: Form,
  },
  {
    id: '3',
    step: Feedback,
  },
];

const mapStateToProps = (state) => ({
  step: state.step,
  maxSteps: state.maxSteps,
});

const mapDispatchToProps = (dispatch) => ({
  setMaxSteps: (maxSteps) => dispatch(setMaxSteps(maxSteps)),
});

const ConnectedWizard = (props) => {
  props.setMaxSteps(STEPS.length);

  return (
    <section>
      <div className="wrapper">
        <Stepper activeStep={props.step}>
          {STEPS.map((step, index) => {
            const StepName = step.step;
            return (
              <Step key={index} stepId={step.id} title={step.title}>
                <StepName />
              </Step>
            );
          })}
        </Stepper>
      </div>
    </section>
  );
};

const Wizard = connect(mapStateToProps, mapDispatchToProps)(ConnectedWizard);
export default withTranslation('translations')(Wizard);
