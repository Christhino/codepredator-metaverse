import { NextIntlProvider } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import frMessagge from './messages/fr.json';
import enMessagge from './messages/en.json';
import { getLang } from '../utils/storage';

const allMessage = {
  fr: frMessagge,
  en: enMessagge,
};
export const I18nProvider = ({ children }) => {
  const [local, setLocal] = useState('en');
  useEffect(() => {
    if (getLang) setLocal(getLang);
  }, [getLang()]);
  const messages = useMemo(() => allMessage[local] || allMessage.en, [local]);
  return (
    <NextIntlProvider locale={local} messages={messages}>
      {children}
    </NextIntlProvider>
  );
};
