/* eslint-disable import/no-cycle */
import { createContext, useContext, useState } from 'react';
import { I18nProvider } from './index';

const initialState = {
  selectedLang: 'en',
  // eslint-disable-next-line no-unused-vars
  setLang: (lang) => {},
};

const I18nContext = createContext(initialState);
export const IntlProvider = ({ children }) => {
  const [selectedLang, setLang] = useState(initialState.selectedLang);
  return (
    <I18nContext.Provider value={{ selectedLang, setLang }}>
      <I18nProvider>
        {children}
      </I18nProvider>
    </I18nContext.Provider>
  );
};
export const useLang = () => useContext(I18nContext);
