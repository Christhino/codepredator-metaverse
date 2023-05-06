/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable semi */
/* eslint-disable lines-around-directive */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import LangSwitcher from './LangSwitcher';

const Navbar = () => {
  const translate = useTranslations();
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative gradient-nav`}
    >
      <div className="absolute w-[50%] inset-0 " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          {translate('TITLE')}
        </h2>
        <LangSwitcher/>
      </div>
    </motion.nav>
  );
};

export default Navbar;
