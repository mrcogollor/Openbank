import React from 'react';
import { StepperContext } from 'react-material-stepper';
import store from '../store';

export function useStepData(stepId) {
  const stepsCompleted = store.getState().stepsCompleted;
  // If we already went through this step, get the data from this step
  // If not, the state will initialize with the default empty state
  const { getData } = React.useContext(StepperContext);
  let stepData = getData(stepId);
  if (typeof stepData === 'undefined' && stepsCompleted) {
    stepData = store.getState().survey;
  }

  return stepData;
}
