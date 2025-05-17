"use client"
import React, { useState } from 'react'
import Button from '../components/button'
import LeftHand from '../ressources/left_hand.png'
import RightHand from '../ressources/right_hand.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import { TextGenerateEffect } from '../components/text-generate'

function First() {
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  return (
    <section className='  w-[100lvw] h-[89lvh] '>
      <div className=' w-full  absolute top-0 left-0 z-0'>
        <ul className="background shapedividers_com-1751 w-full ">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="custom-shape-divider-bottom-1747183291">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

      </div>
      <div className=' w-full  absolute top-0 left-0 z-0'>

        <ul className="background shapedividers_com-1751 w-full ">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="custom-shape-divider-bottom-1747183291">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>

      </div>
      <div className='relative w-[100lvw] flex flex-col justify-center items-center'>
        <motion.header
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='w-[80lvw] h-[10lvh] flex justify-around items-center text-black z-10'
        >
          <div className="text-highlight text-2xl font-bold">
            AWD <span className='text-black'>pay</span>
          </div>
          <ul className=' text-xl flex gap-10 '>
            <li >
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#api">Get API</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className='flex gap-5 justify-center items-center'>
            <a href='#login' className='log'>Log In</a>
            <Button >Get Started</Button>
          </div>
        </motion.header>

        <div className='flex justify-between w-full h-[90lvh] items-center'>
          <div className='flex-1/2 text-left pl-30 flex-col gap-4 justify-start items-start flex'>
            <div className='text-black text-5xl max-w-[50lvw] font-bold'>
              <TextGenerateEffect
                words={" A smarter way to manage online transactions"}
                onComplete={() => setTitleAnimationComplete(true)}
              />
              {titleAnimationComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='text-highlight'> all in one place.</div>
                </motion.div>
              )}
            </div>

            {titleAnimationComplete && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='text-black text-sm font-light'
                >
                  <p>Fast, Secure and Reliable Payment Gateway. No queues, No cash, No delays. Accessible to everyone, everywhere.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className='flex gap-5 justify-center items-center'
                >
                  <Button>Get Started now</Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className='flex justify-center items-center'
                >
                  <div className='flex justify-center items-center'>
                    <Image src={LeftHand} alt='illustration-3' className='w-7 h-7  border-white
                                        border-2 rounded-full'></Image>
                    <Image src={LeftHand} alt='illustration-3' className='w-7 h-7  border-white
                                        border-2  -translate-x-3
                                        bg-gray-500 rounded-full'></Image>
                    <Image src={LeftHand} alt='illustration-3' className='w-7 h-7  border-white
                                        border-2 -translate-x-5 rounded-full'></Image>
                  </div>
                  <p className='text-sm  -translate-x-2'>Trusted by  <span className='font-semibold'>90000+</span > users in over <span className='font-semibold'>200</span> countries</p>
                </motion.div>
              </>
            )}
          </div>

          {titleAnimationComplete && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="illustration flex justify-center items-center overflow-hidden"
            >
              <Image src={LeftHand} className='translate-y-40 max-h-[70lvh] w-auto' alt='first illustration'></Image>
              <Image src={RightHand} alt='first illustration ' className='max-h-[70lvh] w-auto'></Image>
            </motion.div>
          )}
        </div>
      </div>

    </section>)
}

export default First