import React from 'react'
import Button from '../components/button'
import { CodeBlock } from '../components/codeblock'

function Six() {
  return (

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
  </section>  )
}

export default Six