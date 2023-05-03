/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable semi */
import { TranslateIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdTranslate } from "react-icons/md";
import { useLang } from '../shared/translate/IntlProvider';

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()
  const { selectedLang, setLang } = useLang()
  const changLang = () => {
    if (selectedLang == 'fr') {
      setLang('en');
    }
    if (selectedLang == 'en') {
      setLang('fr');
    }
  };
  return (
    <>
      {/* <Link passHref href={asPath} locale={locale === 'en' ? 'fr' : 'en'} scroll={false}> */}
      <button
          // eslint-disable-next-line jsx-quotes
        onClick={changLang}
        aria-label='LangSwitcher'
        className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
      >
        <MdTranslate className='h-6 w-6' /> {selectedLang}
      </button>
      {/* </Link> */}
    </>
  )
}

export default LangSwitcher
