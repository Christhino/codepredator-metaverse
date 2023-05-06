/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/function-component-definition */
/* eslint-disable lines-around-directive */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
'use client';
import React, { Suspense } from 'react'
import { motion } from 'framer-motion';

import { Canvas } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function Model({ url }) {
  const { nodes } = useGLTF(url)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
        <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
      </group>
    </group>
  )
}

const Hero = () => (
  <section className={`py-16  sm:pl-16 pl-6 hero`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Next Level
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-start items-center"
        >
          <h1 className={styles.heroHeading}>Machine</h1> 
        </motion.div>
        <motion.div>
            <h1 className={styles.heroHeading}>intelligence</h1>
        </motion.div>
      
        <motion.div
          // variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <a href="#explore" className="ml-15">
            <img
              src="/Vector.svg"
              alt="stamp"
              className="ligne sm:w-[210px] w-[100px] sm:h-[90px] h-[100px] object-contain"
            />
          </a>
        </motion.div>
        <motion.div 
          className="flex items-center"
          variants={slideIn('right', 'tween', 0.2, 1)}
        >
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#EF09DA] rounded-[32px] gap-[12px]">
            <img
              src="/Polygon.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              play demo
            </span>
          </button>
        </motion.div>
      </div>
      </motion.div>
      <motion.div className="flex items-center">
          <h1 className="relative  font-bold lg:text-[30px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[90px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] w-full flex justify-center items-center text-white">  
              Scroll  to explore 
          </h1>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      
        <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary-white mb-1"
                
              />
              
            </div>
           
          </a>
        </div>
      </motion.div>
      
      

      
  </section>
);

export default Hero;
