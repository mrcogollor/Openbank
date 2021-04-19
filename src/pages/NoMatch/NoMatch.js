import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

const NoMatch = () => {
  const { t } = useTranslation('translations');
  const history = useHistory();

  return (
    <div className="wrapper">
      <div className="error">
        <h1 className="t-h1">{t('error.title404')}</h1>
        <p>{t('error.body404')}</p>
        <Button text={t('error.cta')} link onClick={() => history.push('/')} />
      </div>
    </div>
  );
};

export default NoMatch;
