/* eslint-disable import/no-cycle */
import { NextIntlProvider } from 'next-intl';
import { useMemo } from 'react';
import frMessagge from './messages/fr.json';
import enMessagge from './messages/en.json';
import { useLang } from './IntlProvider';

const allMessage = {
  fr: frMessagge,
  en: enMessagge,
};
export const I18nProvider = ({ children }) => {
  const { selectedLang } = useLang();
  const messages = useMemo(() => allMessage[selectedLang], [selectedLang]);
  return (
    <NextIntlProvider locale={selectedLang} messages={messages}>
      {children}
    </NextIntlProvider>
  );
};
