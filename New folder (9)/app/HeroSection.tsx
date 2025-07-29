'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20serene%20Christian%20woman%20reading%20devotional%20book%20in%20peaceful%20garden%20setting%20with%20warm%20golden%20sunlight%2C%20soft%20pastel%20colors%2C%20flowers%20blooming%2C%20gentle%20breeze%2C%20inspirational%20atmosphere%2C%20faith-based%20imagery%2C%20hope%20and%20peace%2C%20minimalist%20clean%20background%20with%20soft%20gradients%20from%20warm%20pink%20to%20gentle%20purple%2C%20creating%20perfect%20contrast%20for%20text%20overlay&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 via-purple-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Peace Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300"> Faith</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
            Discover hope, healing, and purpose through our Christian-based mental health resources, devotional books, and spiritual guidance designed to transform your life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/products" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-center whitespace-nowrap">
              Explore Products
            </Link>
            
            <Link href="/subscription" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap">
              Start Your Journey
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-pink-100">Lives Transformed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-pink-100">Devotional Books</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-pink-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-purple-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-32 w-8 h-8 bg-yellow-400/30 rounded-full animate-ping"></div>
    </section>
  );
}