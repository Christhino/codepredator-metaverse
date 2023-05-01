const I18N_KEY = 'I18N_KEY';

export const setLang = (lang) => {
  localStorage.setItem(I18N_KEY, lang);
};

export const getLang = () => {
  if (typeof window !== 'undefined') return localStorage.getItem(I18N_KEY) || 'en';
  return 'en';
};
