import React from 'react'
import { StickyScroll } from '../components/sticky-scroll'
import Image from 'next/image';

import apiImage from '../ressources/api.png'
import historyImage from '../ressources/history.png'
import globalImage from '../ressources/global.png'
import onlineImage from '../ressources/online.png'
import stockImage from '../ressources/stock.png'
import transferImage from '../ressources/transfert.png'
import { BackgroundLines } from '../components/background-lines'

function Third() {

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
      
    <section className="w-full relative overflow-hidden py-4">

    <StickyScroll
      content={content}
    />
  </section>  )
}

export default Third