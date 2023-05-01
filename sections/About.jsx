'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const translate = useTranslations('ABOUT');
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title={translate('TYPING_TEXT')} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">{translate('TITLE')}</span>{translate('TEXT1')}{' '}
          <span className="font-extrabold text-white">
            {translate('TEXT2')}
          </span>{' '}
          {translate('TEXT3')}{' '}
          <span className="font-extrabold text-white">{translate('TEXT4')}</span> {translate('TEXT5')}{' '}
          <span className="font-extrabold text-white">{translate('TEXT6')}</span> {translate('TEXT7')}
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
