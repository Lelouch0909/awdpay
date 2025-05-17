import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
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
      </footer>  )
}

export default Footer