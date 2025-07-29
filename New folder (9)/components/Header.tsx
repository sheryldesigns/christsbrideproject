'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-50 to-yellow-50 shadow-lg border-b-2 border-pink-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <i className="ri-heart-fill text-white text-lg"></i>
            </div>
            <span className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Pacifico, serif' }}>
              Christ's Bride Diaries
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium"
              >
                <span>Products</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-pink-200 z-50">
                  <div className="p-4 space-y-2">
                    <Link href="/products/books" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Devotional Books
                    </Link>
                    <Link href="/products/planners" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Online Planners
                    </Link>
                    <Link href="/products/gratitude-jars" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Gratitude Jars
                    </Link>
                    <Link href="/products/notebooks" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Notebooks
                    </Link>
                    <Link href="/products/cards" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Positive Cards
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center space-x-1 text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium"
              >
                <span>Categories</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-pink-200 z-50">
                  <div className="p-4 space-y-2">
                    <Link href="/categories/relationships" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Relationships
                    </Link>
                    <Link href="/categories/mental-health" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Mental Health
                    </Link>
                    <Link href="/categories/purpose" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Purpose of Life
                    </Link>
                    <Link href="/categories/finances" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Financial Wellness
                    </Link>
                    <Link href="/categories/career" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Career Growth
                    </Link>
                    <Link href="/categories/marriage" className="block px-4 py-2 text-purple-700 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                      Marriage & Family
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
              About
            </Link>
            
            <Link href="/subscription" className="text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
              Subscription
            </Link>
          </nav>

          {/* Account & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/account" className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium whitespace-nowrap">
              My Account
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-purple-700 hover:text-pink-600 transition-colors duration-300"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl border border-pink-200 p-4">
            <div className="space-y-3">
              <Link href="/" className="block text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="/products" className="block text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                Products
              </Link>
              <Link href="/categories" className="block text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                Categories
              </Link>
              <Link href="/about" className="block text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="/subscription" className="block text-purple-700 hover:text-pink-600 transition-colors duration-300 font-medium">
                Subscription
              </Link>
              <Link href="/account" className="block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium">
                My Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}