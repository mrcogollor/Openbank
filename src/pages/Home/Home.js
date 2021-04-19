import React from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import OpenbankLogo from '../../assets/img/logo_openbank.png';
import KeyOpenbank from '../../assets/img/key_openbank.png';
import { Button } from '../../components/Button/Button';

const Home = ({ t }) => {
  const history = useHistory();

  return (
    <section>
      <div className="wrapper">
        <div className="home">
          <h1 className="t-h1">
            {t('home.welcome')} <img src={OpenbankLogo} className="home__openLogo" alt={'openbank-logo'} />
            <img src={KeyOpenbank} className="home__keyLogo" alt={'key-openbank-logo'} />
          </h1>
          <Button text={t('home.start')} onClick={() => history.push('/form')} />
        </div>
      </div>
    </section>
  );
};

export default withTranslation('translations')(Home);
