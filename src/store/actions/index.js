export const SET_MAX_STEPS = 'SET_MAX_STEPS';
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const RESET_STEPS = 'RESET_STEPS';
export const UPDATE_SURVEY = 'UPDATE_SURVEY';
export const SET_STEPS_COMPLETED = 'SET_STEPS_COMPLETED';
export const RESET_STORE = 'RESET_STORE';
export const SET_STEP = 'SET_STEP';

export function setMaxSteps(payload) {
  return { type: SET_MAX_STEPS, payload };
}

export function nextStep(payload) {
  return { type: NEXT_STEP, payload };
}

export function setStep(payload) {
  return { type: SET_STEP, payload };
}

export function prevStep(payload) {
  return { type: PREV_STEP, payload };
}

export function resetSteps(payload) {
  return { type: RESET_STEPS, payload };
}

export function updateSurvey(payload) {
  return { type: UPDATE_SURVEY, payload };
}

export function setStepsCompleted(payload) {
  return { type: SET_STEPS_COMPLETED, payload };
}

export function resetStore() {
  return { type: RESET_STORE };
}
