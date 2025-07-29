'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-pink-700 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <i className="ri-heart-fill text-white"></i>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                Christ's Bride Diaries
              </span>
            </div>
            <p className="text-purple-100 text-sm">
              Empowering lives through faith-based mental health resources, devotional books, and spiritual guidance for a purposeful life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors duration-300">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors duration-300">
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors duration-300">
                <i className="ri-twitter-fill text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/products" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Products</Link></li>
              <li><Link href="/subscription" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Subscription</Link></li>
              <li><Link href="/account" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">My Account</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/mental-health" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Mental Health</Link></li>
              <li><Link href="/categories/relationships" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Relationships</Link></li>
              <li><Link href="/categories/purpose" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Purpose of Life</Link></li>
              <li><Link href="/categories/finances" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Financial Wellness</Link></li>
              <li><Link href="/categories/career" className="text-purple-100 hover:text-pink-300 transition-colors duration-300">Career Growth</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-purple-100 text-sm">
                <i className="ri-phone-fill mr-2"></i>
                +254 700 000 000
              </p>
              <p className="text-purple-100 text-sm">
                <i className="ri-mail-fill mr-2"></i>
                info@christsbridediaries.com
              </p>
              <p className="text-purple-100 text-sm">
                <i className="ri-map-pin-fill mr-2"></i>
                Nairobi, Kenya
              </p>
              <div className="mt-4">
                <a href="https://wa.me/254700000000" className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 whitespace-nowrap">
                  <i className="ri-whatsapp-fill"></i>
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-600 mt-8 pt-8 text-center">
          <p className="text-purple-100 text-sm">
            © 2024 Christ's Bride Diaries. All rights reserved. | Made with ❤️ for God's glory
          </p>
        </div>
      </div>
    </footer>
  );
}