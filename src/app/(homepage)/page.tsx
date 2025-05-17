"use client"
import React, { useState } from 'react'
import './homepage.css'
import LeftHand from '../ressources/left_hand.png'
import RightHand from '../ressources/right_hand.png'
import Image from 'next/image'
import { StickyScroll } from './components/sticky-scroll'
import { motion } from "framer-motion";

import { World } from './components/globe'
import { sampleArcs } from '@/data/sampleArcs'
import Button from './components/button'
import { LampContainer } from './components/lamp'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TextGenerateEffect } from './text-generate'

import apiImage from '../ressources/api.png'
import historyImage from '../ressources/history.png'
import globalImage from '../ressources/global.png'
import onlineImage from '../ressources/online.png'
import stockImage from '../ressources/stock.png'
import transferImage from '../ressources/transfert.png'
import { CodeBlock } from './components/codeblock'
import { BackgroundLines } from './components/background-lines'

function Homepage() {
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const content = [
    {
      title: "Deposit Money",
      subtitle: "Instant Funding",
      marketing_title: "Your Money, Available Instantly",
      description:
        "Whether it's through bank transfers, cards, or mobile money, add funds to your account in seconds. No waiting periods, no complicated processes - just simple, immediate access to your money.",
      content: (
        <BackgroundLines className="  px-4 relative
           h-full w-full text-white
        
          ">
          <Image src={stockImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
    {
      title: "Online Purchases",
      subtitle: "Smart Shopping",
      marketing_title: "Shop Smarter, Not Harder",
      description:
        "Experience seamless shopping with our one-click checkout at thousands of partner merchants. Save your payment details securely and enjoy swift, hassle-free purchases whenever you want, wherever you are.",
      content: (
        <BackgroundLines className="  px-4 relative
           h-full w-full text-white
        
          ">
          <Image src={onlineImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
    {
      title: "Instant Transfers",
      subtitle: "Lightning Fast",
      marketing_title: "Send Money at Light Speed",
      description:
        "Transfer funds instantly to any AWDpay user worldwide. No more waiting for bank processing or dealing with international transfer fees. Quick, secure, and reliable money transfers at your fingertips.",
      content: (
        <BackgroundLines className="  px-4 relative
           h-full w-full text-white
        
          ">
          <Image src={transferImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
    {
      title: "Payment API",
      subtitle: "Developer Ready",
      marketing_title: "Power Your Platform with Our API",
      description:
        "Integrate our robust payment solution into your website or application with just a few lines of code. Our well-documented API provides everything you need for seamless payment processing, from simple transactions to complex payment flows.",
      content: (
        <BackgroundLines className="  px-4 relative
         h-full w-full text-white
      
        ">
          <Image src={apiImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
    {
      title: "Global Payments",
      subtitle: "Worldwide Access",
      marketing_title: "Accept Payments from Anywhere",
      description:
        "Expand your reach globally with our comprehensive payment solutions. From mobile money to cryptocurrency, bank cards to local payment methods, we ensure you never miss a sale, no matter where your customers are located.",
      content: (
        <BackgroundLines className="  px-4 relative
           h-full w-full text-white
        
          ">
          <Image src={globalImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
    {
      title: "Transaction History",
      subtitle: "Smart Analytics",
      marketing_title: "Your Financial Story, Clearly Told",
      description:
        "Get complete visibility into your financial activities with our detailed transaction tracking. Access comprehensive reports, analyze spending patterns, and make informed decisions with our intuitive transaction history interface.",
      content: (
        <BackgroundLines className="  px-4 relative
           h-full w-full text-white
        
          ">
          <Image src={historyImage} alt="linear board demo" className=" h-80 w-96 z-100 object-cover">

          </Image>
        </BackgroundLines>

      ),
    },
  ];



  return (
    <div className='  te  xt-center text-black overflow-x-hidden' >
      <section className='  w-  [100lvw] h-[89lvh] '>
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
              <div className='text-black text-5xl font-bold'>
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

      </section>
      <section className='w-[100lvw] px-60 relative z-10 mt-0 bg-gradient-to-b from-transparent to-gray-50/30 bg-light '>
        <div className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-8">
            {[
              "Ivory Coast",
              "Benin",
              "Guinea",
              "Togo",
              "Burkina Faso",
              "Niger",
              "Mali",
              "Senegal"
            ].map((pays, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className={`p-3 ${index % 4 !== 3 ? 'border-r' : ''} border-dashed border-gray-200/50`}
              >
                <p className="text-xl  tracking-wide text-center font-light text-gray-500 font-geist-sans hover:text-highlight transition-colors duration-300">{pays}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full relative overflow-hidden py-4">

        <StickyScroll
          content={content}
        />
      </section>
      <section className='w-[100lvw] h-[80lvh] bg-dark
            flex justify-center items-center relative
            '>

        <div className='w-full p-30 pr-0  overflow-hidden h-[80lvh] relative   flex  items-center'>
          <div className='flex max-w-[50lvw] justify-center p-0 m-0 text-start items-start text-light flex-col gap-4  '>
            <div className="text-highlight text-sm font-bold">Global scale</div>
            <div className='text-light text-4xl font-bold'>
              <h1>A smarter way to manage online transactions —<span className='text-[#2273c5]'> all in one place.</span></h1>
            </div>
            <div className="text-light text-sm font-light">
              <p>Fast, Secure and Reliable Payment Gateway. No queues, No cash, No delays. Accessible to everyone, everywhere.</p>
            </div>
            <Button >Get Started</Button>
          </div>
          <div className='  w-[80lvw] h-[80lvw] absolute right-0 top-0 z-0 translate-x-1/4'>
            <World
              globeConfig={{
                ...globeConfig,
                globeColor: "#062056",
                emissive: "#0066cc",
                atmosphereColor: "#4d94ff",
                atmosphereAltitude: 0.2,
                polygonColor: "rgba(255,255,255,0.3)",
                pointLight: "#4d94ff",
                initialPosition: { lat: 22.3193, lng: 114.1694 },
                autoRotate: true,
                autoRotateSpeed: 0.5,

              }} data={sampleArcs}></World>
          </div>

        </div>
      </section>
      <section className='w-[100lvw]  bg-gradient-to-b from-transparent pb-20 to-gray-50/30 flex justify-center items-center relative'>
        <LampContainer className='bg-light'>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-0  min-h-[40lvh]  flex flex-col justify-center items-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent "
          >
            <div>
              <h1 className='text-4xl font-bold md:text-7xl '>
                Simple<br /> Transparent Pricing<br />
              </h1>
              <p>
                No monthly fees, no hidden hidden charges. Pay only for what you use.

              </p>
              <div className="mx-auto absolute max-h-[60lvh]  bg-dark left-0 right-0 w-full  mt-8 max-w-xl rounded-xl overflow-hidden shadow-lg
             ">
                <div className="bg-[#ff7300] text-white text-center py-3 text-lg font-semibold rounded-t-xl">
                  Transaction Fee
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-[#fcfcfd]">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl font-bold text-[#ff7300]">2%</span>
                    <span className="text-gray-700 text-sm">Per transaction</span>
                  </div>
                  <div className="flex-1 flex flex-col md:items-end items-start mt-4 md:mt-0">
                    <span className="text-gray-700 text-sm mb-2">No setup fees. No monthly fees. No hidden charges.</span>
                    <Button >Get Started</Button>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="text-light  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 px-8 py-6 text-sm">
                  <div>
                    <span className="font-semibold">What&apos;s included:</span>
                    <ul className="mt-2 text-light space-y-1">
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>Unlimited transactions</li>
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>Global payment acceptance</li>
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>Fraud protection</li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <ul className="mt-7 space-y-1">
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>Instant payments</li>
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>24/7 customer support</li>
                      <li className="flex items-center"><span className="text-[#ff7300] mr-2">✔</span>Developer-friendly API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.h1>

        </LampContainer>
      </section>
      <section className="w-full h-screen flex   bg-[#0A2540] py-24 px-4 md:px-0 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="text-[#FF6600] font-semibold mb-2">Designed for developers</div>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ship faster with powerful<br />and easy-to-use APIs
            </h2>
            <p className="text-slate-200 mb-6">
              Save engineering time with unified payments functionality. We obsess over the maze of gateways, payments rails, and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.
            </p>
            <Button >
              Read the docs &rarr;
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-slate-200 text-sm">
              <div>
                <div className="font-semibold text-white mb-2">Use AWDpay with your stack</div>
                <p>We offer client and server libraries in everything from React and PHP to .NET and iOS.</p>
                <a href="#" className="text-[#FF6600] hover:underline mt-2 inline-block">See libraries &rarr;</a>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Build AI agents</div>
                <p>Create agents that can manage money and handle support tasks using the AWDpay API.</p>
                <a href="#" className="text-[#FF6600] hover:underline mt-2 inline-block">View docs &rarr;</a>
              </div>

            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#132c44] rounded-lg p-6 w-full max-w-md shadow-lg mb-8">
              <CodeBlock
                language="javascript"
                filename="payment.js"
                code={`const awd = new AWD("api-key")
await awd.payment.create({amount: 1000, devise: 'fcfa'})`}
              />
              <div className="mt-4 flex justify-end">
                <Button>
                  Try the API
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-[#FF6600] via-[#FF6600]/80 to-[#0A2540] transform -skew-y-3" style={{ zIndex: 1 }} />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-[#0A2540] via-[#FF6600]/60 to-[#FF6600] transform skew-y-3" style={{ zIndex: 1 }} />
      </section>

      <footer className="bg-white  text-gray-800 pt-24 pb-8 px-4 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-10">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#FF6600]">AWD</span>pay
            </div>
            <div className="text-sm mb-6 text-gray-500">Simplifying global payments since 2022.</div>
            <div className="flex items-center justify-center space-x-5 text-2xl mt-4">
              <a href="#" aria-label="Twitter" className="hover:text-[#FF6600] transition"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Facebook" className="hover:text-[#FF6600] transition"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#FF6600] transition"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6600] transition"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4">Product</div>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-[#FF6600] transition">Features</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Pricing</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">API</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Documentation</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-[#FF6600] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Careers</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Blog</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">Support</div>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-[#FF6600] transition">Help Center</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-200 mb-6" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>© 2025 AWDpay. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FF6600] transition">Privacy</a>
            <a href="#" className="hover:text-[#FF6600] transition">Terms</a>
            <a href="#" className="hover:text-[#FF6600] transition">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage