"use client";
import React from 'react'
import Button from '../components/button'
import { sampleArcs } from '@/data/sampleArcs';
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/app/components/globe").then((mod) => mod.default), { ssr: false });
function Fouth() {
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

  return (

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
      </section>  )
}

export default Fouth