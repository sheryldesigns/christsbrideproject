'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-grid-fill' },
    { id: 'books', name: 'Devotional Books', icon: 'ri-book-open-fill' },
    { id: 'planners', name: 'Online Planners', icon: 'ri-calendar-fill' },
    { id: 'jars', name: 'Gratitude Jars', icon: 'ri-gift-fill' },
    { id: 'notebooks', name: 'Notebooks', icon: 'ri-book-fill' },
    { id: 'cards', name: 'Positive Cards', icon: 'ri-heart-fill' }
  ];

  const products = [
    {
      id: 1,
      title: "Daily Devotional: Walking with Faith",
      description: "30-day devotional guide for strengthening your relationship with God and finding peace in daily struggles.",
      category: "books",
      price: "$19.99",
      originalPrice: "$24.99",
      rating: 4.9,
      reviews: 234,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20devotional%20book%20cover%20with%20cross%20symbol%20and%20warm%20golden%20light%20rays%2C%20peaceful%20Christian%20imagery%2C%20soft%20pastel%20colors%2C%20inspirational%20design%2C%20hope%20and%20faith%20themed%2C%20clean%20simple%20background%20with%20gentle%20gradients&width=400&height=500&seq=book1&orientation=portrait"
    },
    {
      id: 2,
      title: "Gratitude Journal & Jar Set",
      description: "Complete gratitude practice kit with guided journal and beautiful decorative jar for daily blessings.",
      category: "jars",
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      reviews: 189,
      image: "https://readdy.ai/api/search-image?query=Elegant%20gratitude%20jar%20with%20colorful%20notes%20and%20matching%20journal%2C%20warm%20lighting%2C%20peaceful%20setting%2C%20Christian%20themed%20decorations%2C%20flowers%20and%20soft%20colors%2C%20inspiring%20and%20uplifting%20atmosphere%2C%20clean%20minimalist%20background&width=400&height=500&seq=jar1&orientation=portrait"
    },
    {
      id: 3,
      title: "Digital Life Planner",
      description: "Interactive online planner with Bible verses, goal setting, and spiritual growth tracking features.",
      category: "planners",
      price: "$15.99",
      originalPrice: "$19.99",
      rating: 4.7,
      reviews: 312,
      image: "https://readdy.ai/api/search-image?query=Modern%20digital%20planner%20interface%20on%20tablet%20with%20Bible%20verses%2C%20calendar%2C%20goals%2C%20and%20spiritual%20growth%20tracking%2C%20warm%20colors%2C%20Christian%20symbols%2C%20clean%20design%2C%20inspirational%20layout%2C%20peaceful%20workspace%20setting&width=400&height=500&seq=planner1&orientation=portrait"
    },
    {
      id: 4,
      title: "Positive Affirmation Cards",
      description: "52 beautifully designed cards with Bible-based affirmations for daily encouragement and mental wellness.",
      category: "cards",
      price: "$12.99",
      originalPrice: "$16.99",
      rating: 4.9,
      reviews: 156,
      image: "https://readdy.ai/api/search-image?query=Set%20of%20beautiful%20positive%20affirmation%20cards%20with%20Bible%20verses%2C%20elegant%20design%2C%20soft%20pastels%2C%20inspirational%20typography%2C%20Christian%20symbols%2C%20scattered%20arrangement%2C%20warm%20lighting%2C%20peaceful%20background&width=400&height=500&seq=cards1&orientation=portrait"
    },
    {
      id: 5,
      title: "Prayer & Reflection Notebook",
      description: "Guided notebook for daily prayers, reflections, and spiritual growth with structured prompts.",
      category: "notebooks",
      price: "$18.99",
      originalPrice: "$22.99",
      rating: 4.8,
      reviews: 198,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20prayer%20notebook%20with%20cross%20design%2C%20peaceful%20writing%20setting%2C%20soft%20lighting%2C%20inspirational%20quotes%2C%20Christian%20symbols%2C%20feminine%20and%20elegant%20design%2C%20warm%20colors%2C%20clean%20background&width=400&height=500&seq=notebook1&orientation=portrait"
    },
    {
      id: 6,
      title: "Anxiety & Peace Devotional",
      description: "40-day devotional focused on overcoming anxiety and finding God's peace in troubled times.",
      category: "books",
      price: "$21.99",
      originalPrice: "$26.99",
      rating: 4.9,
      reviews: 287,
      image: "https://readdy.ai/api/search-image?query=Calming%20devotional%20book%20cover%20with%20dove%20symbol%2C%20peaceful%20imagery%2C%20anxiety%20relief%20theme%2C%20soft%20blue%20and%20pink%20colors%2C%20Christian%20peace%20symbols%2C%20serene%20background%2C%20hope%20and%20tranquility%20design&width=400&height=500&seq=book2&orientation=portrait"
    },
    {
      id: 7,
      title: "Marriage Blessing Jar",
      description: "Special jar filled with marriage affirmations and blessing cards for couples to strengthen their bond.",
      category: "jars",
      price: "$28.99",
      originalPrice: "$34.99",
      rating: 4.8,
      reviews: 145,
      image: "https://readdy.ai/api/search-image?query=Romantic%20marriage%20blessing%20jar%20with%20heart%20decorations%2C%20couple%20themed%20cards%2C%20wedding%20colors%2C%20love%20and%20unity%20symbols%2C%20Christian%20marriage%20imagery%2C%20elegant%20design%2C%20warm%20romantic%20lighting&width=400&height=500&seq=jar2&orientation=portrait"
    },
    {
      id: 8,
      title: "Weekly Life Planner",
      description: "Comprehensive weekly planner with Bible verses, goal tracking, and spiritual habit formation.",
      category: "planners",
      price: "$22.99",
      originalPrice: "$27.99",
      rating: 4.7,
      reviews: 203,
      image: "https://readdy.ai/api/search-image?query=Modern%20weekly%20planner%20with%20Bible%20verses%2C%20goal%20tracking%20sections%2C%20spiritual%20habits%20tracker%2C%20clean%20layout%2C%20Christian%20symbols%2C%20productive%20workspace%2C%20organized%20design%2C%20inspirational%20colors&width=400&height=500&seq=planner2&orientation=portrait"
    }
  ];

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated collection of faith-based resources designed to support your mental health, spiritual growth, and life transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-purple-700 hover:bg-pink-50 border border-pink-200 hover:border-pink-300'
                }`}
              >
                <i className={`${category.icon} w-5 h-5 flex items-center justify-center`}></i>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', '')) * 100))}% OFF
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-fill text-yellow-400 text-sm ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}`}></i>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-700">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                
                <Link href={`/products/${product.id}`} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block whitespace-nowrap">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get personalized recommendations based on your specific needs and life challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Take Assessment
            </Link>
            <Link href="/subscription" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              View Subscription
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}