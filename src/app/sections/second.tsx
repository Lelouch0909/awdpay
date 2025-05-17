"use client"
import React from 'react'
import { motion } from "framer-motion";

function Second() {
  return (

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
      </section>  )
}

export default Second