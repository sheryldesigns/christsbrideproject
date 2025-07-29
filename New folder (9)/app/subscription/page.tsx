'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      description: 'Perfect for getting started with your spiritual journey',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        'Access to 50+ devotional books',
        'Monthly positive affirmation cards',
        'Basic online planner',
        'Email support',
        'Monthly check-ins'
      ],
      color: 'from-pink-500 to-rose-600',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      description: 'Our most popular choice for comprehensive support',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        'Access to 500+ devotional books',
        'All gratitude jars & notebooks',
        'Advanced online planners',
        'WhatsApp & email support',
        'Weekly personalized check-ins',
        'AI-powered recommendations',
        'Community access',
        'Priority support'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      id: 'family',
      name: 'Family Plan',
      description: 'Perfect for families seeking spiritual growth together',
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        'Everything in Premium',
        'Up to 6 family members',
        'Family devotional books',
        'Marriage & parenting resources',
        'Family therapy sessions',
        'Couple\'s check-ins',
        'Children\'s activities',
        'Family progress tracking'
      ],
      color: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: 'ri-bank-card-fill', description: 'Visa, MasterCard, American Express' },
    { id: 'mpesa', name: 'M-Pesa', icon: 'ri-smartphone-fill', description: 'For Kenyan users' },
    { id: 'paypal', name: 'PayPal', icon: 'ri-paypal-fill', description: 'Secure PayPal payments' }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your journey towards mental wellness and spiritual growth with our comprehensive subscription plans designed to support you every step of the way.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-purple-800' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
              }`}></div>
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-purple-800' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save up to 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-300 ${
              plan.popular ? 'border-pink-300 scale-105' : 'border-pink-100'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <i className="ri-heart-fill text-white text-2xl"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-purple-800 text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {plan.description}
                </p>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-purple-700">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-600 text-sm mt-2">
                      Save ${getSavings(plan).toFixed(2)} per year
                    </p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <i className="ri-check-line text-green-500 text-lg mt-0.5"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">
            Payment Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center space-x-4 p-4 border border-pink-200 rounded-lg hover:bg-pink-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className={`${method.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">{method.name}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-pink-200 pb-4">
              <h3 className="font-semibold text-purple-800 mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access to all features until the end of your current billing period.</p>
            </div>
            <div className="border-b border-pink-200 pb-4">
              <h3 className="font-semibold text-purple-800 mb-2">What happens during the free trial?</h3>
              <p className="text-gray-600">You get full access to your chosen plan for 7 days completely free. No charges until your trial ends.</p>
            </div>
            <div className="border-b border-pink-200 pb-4">
              <h3 className="font-semibold text-purple-800 mb-2">How does the WhatsApp support work?</h3>
              <p className="text-gray-600">Our trained support team is available 24/7 via WhatsApp for Premium and Family plan subscribers. You can reach us anytime for encouragement, guidance, or technical support.</p>
            </div>
            <div className="border-b border-pink-200 pb-4">
              <h3 className="font-semibold text-purple-800 mb-2">Is my payment information secure?</h3>
              <p className="text-gray-600">Absolutely! We use industry-standard encryption and work with trusted payment processors to ensure your information is completely secure.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Subscribers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "The Premium plan changed my life completely. The weekly check-ins and personalized recommendations helped me overcome my anxiety and find my purpose."
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Beautiful%20African%20woman%20smiling%20peacefully%2C%20professional%20headshot%2C%20warm%20lighting%2C%20natural%20background%2C%20happy%20and%20content%20expression%2C%20inspirational%20portrait%2C%20soft%20colors%2C%20peaceful%20atmosphere&width=60&height=60&seq=sub1&orientation=squarish"
                  alt="Sarah"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-purple-200">Premium Subscriber</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "The Family plan brought our family closer to God and each other. The children's activities and couple's sessions are amazing!"
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Happy%20family%20man%20with%20warm%20smile%2C%20fatherly%20expression%2C%20peaceful%20and%20content%2C%20natural%20lighting%2C%20professional%20portrait%2C%20inspirational%20atmosphere%2C%20warm%20colors&width=60&height=60&seq=sub2&orientation=squarish"
                  alt="David"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">David K.</p>
                  <p className="text-sm text-purple-200">Family Subscriber</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/254700000000" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 whitespace-nowrap">
              <i className="ri-whatsapp-fill"></i>
              <span>WhatsApp Support</span>
            </a>
            <a href="mailto:support@christsbridediaries.com" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 whitespace-nowrap">
              <i className="ri-mail-fill"></i>
              <span>Email Support</span>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}