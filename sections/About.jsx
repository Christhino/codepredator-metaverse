/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-trailing-spaces */
/* eslint-disable lines-around-directive */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent-props */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TypingText } from '../components';
import { NewFeatures, TitleText } from '../components';
import { planetVariants } from '../utils/motion';
import styles from '../styles';
// eslint-disable-next-line no-unused-vars
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const translate = useTranslations('ABOUT');
  return (
    <>
      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/hande.png"
        alt="arrow down"
        className="object-contain mt-[28px]"
      /> */}
        <section className={`${styles.paddings} relative z-10`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
          >
            <motion.div
              variants={planetVariants('left')}
              className={`flex-1 ${styles.flexCenter}`}
            >
              <img
                src="/ia.png"
                alt="get-started"
                className="w-[90%] h-[90%] object-contain image-AI"
              /> 
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="flex-[0.95] flex justify-center flex-col"
            >
              <TypingText title="| Whats new?" />
              <TitleText title={<>What's new about Metaversus?</>} />
            
            </motion.div>
            
          </motion.div>
          <motion.div className={`${styles.innerWidth} mx-auto`}>
           <hr className="border-t-2 border-gray-400 my-4"></hr>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
          >
            
          </motion.div>
        
        </section>
    </>
  );
};

export default About;
