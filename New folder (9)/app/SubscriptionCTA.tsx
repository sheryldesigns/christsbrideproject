'use client';

import Link from 'next/link';

export default function SubscriptionCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Start Your Healing Journey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300"> Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            Join thousands who have found peace, purpose, and mental wellness through our faith-based resources. 
            Get personalized support, weekly check-ins, and access to our complete library.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-200/20">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Library</h3>
              <p className="text-purple-100 text-sm">Access 500+ devotional books, planners, and resources</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-200/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-whatsapp-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-purple-100 text-sm">WhatsApp and email support whenever you need it</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-200/20">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Care</h3>
              <p className="text-purple-100 text-sm">Weekly check-ins and personalized recommendations</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/subscription" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
              Choose Your Plan
            </Link>
            
            <Link href="/trial" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Start Free Trial
            </Link>
          </div>

          <div className="text-center">
            <p className="text-purple-200 text-sm mb-4">
              Join our community of believers finding hope and healing
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-green-400 mr-2"></i>
                <span>No commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}