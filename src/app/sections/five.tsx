"use client"
import React from 'react'
import { LampContainer } from '../components/lamp'
import Button from '../components/button'
import { motion } from "framer-motion";

function Five
() {
  return (

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
      </section>  )
}

export default Five
