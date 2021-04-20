import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { submitForm } from '../../../services/api';
import store from '../../../store';
import { resetStore } from '../../../store/actions';

import { Button } from '../../Button/Button';
import Spinner from '../../Spinner/Spinner';
import Step from '../Step';

import ko from '../../../assets/img/ko.png';
import ok from '../..//../assets/img/ok.png';

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(resetStore()),
});

const FeedbackStep = (props) => {
  const { t } = useTranslation('translations');
  const [success, _setSuccess] = useState(null);
  const history = useHistory();

  const resetApp = () => {
    props.resetStore();
    history.push('/');
  };

  useEffect(() => {
    let survey = store.getState().survey;
    submitForm(survey.password, survey.repeatPass, survey.clueText)
      .then((response) => {
        _setSuccess(response.status);
      })
      .catch((error) => {
        _setSuccess(error.status);
      });
  });

  return (
    <Step>
      <div className="steps step-feedback">
        {(() => {
          if (success === 200) {
            return (
              <div className="step-feedback__wrapper">
                <img className="step-feedback__image" src={ok} alt="null" />
                <div>
                  <h2 className="t-h2 step-feedback__title">{t('steps.step3.titleSuccess')}</h2>
                  <p>{t('steps.step3.subtitleSuccess')}</p>
                  <Button text={t('steps.step3.ctaSuccess')} link onClick={resetApp} />
                </div>
              </div>
            );
          } else if (success === 401) {
            return (
              <div className="step-feedback__wrapper">
                <img className="step-feedback__image" src={ko} alt="null" />
                <div>
                  <h2 className="t-h2 step-feedback__title">{t('steps.step3.titleError')}</h2>
                  <p>{t('steps.step3.subtitleError')}</p>
                  <Button text={t('steps.step3.ctaError')} link onClick={resetApp} />
                </div>
              </div>
            );
          } else {
            return <Spinner />;
          }
        })()}
      </div>
    </Step>
  );
};

const Feedback = connect(null, mapDispatchToProps)(FeedbackStep);

export default Feedback;
