import {
  PREV_STEP,
  NEXT_STEP,
  RESET_STEPS,
  SET_MAX_STEPS,
  UPDATE_SURVEY,
  SET_STEPS_COMPLETED,
  RESET_STORE,
  SET_STEP,
} from '../actions';

const initialState = {
  step: 1,
  maxSteps: 3,
  stepsCompleted: false,
  survey: {
    password: '',
    repeatPass: '',
    clueText: '',
    check: false,
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        ...{
          step: action.payload,
        },
      };
    case RESET_STORE:
      return {
        ...initialState,
      };
    case SET_MAX_STEPS:
      return {
        ...state,
        ...{
          maxSteps: action.payload,
        },
      };
    case PREV_STEP:
      return {
        ...state,
        ...{
          step: state.step === 1 ? 1 : state.step - 1,
        },
      };
    case NEXT_STEP:
      return {
        ...state,
        ...{
          step: state.step === state.maxSteps ? state.maxSteps : state.step + 1,
        },
      };
    case RESET_STEPS:
      return {
        ...state,
        ...{
          step: 1,
        },
      };
    case UPDATE_SURVEY:
      return {
        ...state,
        ...{
          survey: action.payload,
        },
      };
    case SET_STEPS_COMPLETED:
      return {
        ...state,
        ...{
          stepsCompleted: action.payload,
        },
      };
    default:
      break;
  }
  return state;
}

export default rootReducer;
