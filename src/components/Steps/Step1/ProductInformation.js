import { useStepData } from '../../../utils/useStepData';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Step from '../Step';

import KeepPass from '../../../assets/img/group.svg';
import KeyMaster from '../../../assets/img/group-3.svg';

const STEP_ID = '1';

const ProductInformation = () => {
  const { t } = useTranslation('translations');
  const defaultState = {
    check: false,
  };

  // If we already went through this step, get the data from this step
  // If not, the state will initialize with the default empty state
  const stepData = useStepData(STEP_ID);
  const data = stepData || defaultState;

  // And set it to the state
  const [state, setState] = useState(data);
  // Additional state to check if the next button is disabled
  const [nextDisabled, setNextDisabled] = useState(true);

  const updateStepData = (e) => {
    let value = e.target.checked;
    setState({ ...state, check: value });
  };

  useEffect(() => {
    let isNextDisabled = !state.check;
    setNextDisabled(isNextDisabled);
  }, [state.check]);

  return (
    <Step data={{ ...state }} nextDisabled={nextDisabled}>
      <div className="steps step-product-information">
        <ul className="step-product-information__images">
          <li className="step-product-information__group-image">
            <img src={KeepPass} alt=""></img>
            <p>{t('steps.step1.labelImageKeepPass')}</p>
          </li>
          <li className="step-product-information__group-image">
            <img src={KeyMaster} alt=""></img>
            <p>{t('steps.step1.labelImageKeepMaster')}</p>
          </li>
        </ul>
        <p className="step-product-information__title">{t('steps.step1.how.title')}</p>
        <p>{t('steps.step1.how.content')}</p>
        <p className="step-product-information__title">{t('steps.step1.what.title')}</p>
        <p>{t('steps.step1.what.content')}</p>
        <label htmlFor="consent" tabIndex="0">
          <input id="consent" name="consent" type="checkbox" checked={state.check} onChange={updateStepData} />
          <span dangerouslySetInnerHTML={{ __html: t('steps.step1.consent') }}></span>
        </label>
      </div>
    </Step>
  );
};

export default ProductInformation;
