import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTitle = (title) => {
  const { t } = useTranslation('translations');

  useEffect(() => {
    document.title = t('seo.pattern', { title });
  }, [title, t]);
};

export default useTitle;
