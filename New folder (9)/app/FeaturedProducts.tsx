'use client';

import Link from 'next/link';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Daily Devotional: Walking with Faith",
      description: "30-day devotional guide for strengthening your relationship with God and finding peace in daily struggles.",
      category: "Devotional Books",
      price: "$19.99",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20devotional%20book%20cover%20with%20cross%20symbol%20and%20warm%20golden%20light%20rays%2C%20peaceful%20Christian%20imagery%2C%20soft%20pastel%20colors%2C%20inspirational%20design%2C%20hope%20and%20faith%20themed%2C%20clean%20simple%20background%20with%20gentle%20gradients&width=400&height=500&seq=book1&orientation=portrait"
    },
    {
      id: 2,
      title: "Gratitude Journal & Jar Set",
      description: "Complete gratitude practice kit with guided journal and beautiful decorative jar for daily blessings.",
      category: "Gratitude Jars",
      price: "$24.99",
      image: "https://readdy.ai/api/search-image?query=Elegant%20gratitude%20jar%20with%20colorful%20notes%20and%20matching%20journal%2C%20warm%20lighting%2C%20peaceful%20setting%2C%20Christian%20themed%20decorations%2C%20flowers%20and%20soft%20colors%2C%20inspiring%20and%20uplifting%20atmosphere%2C%20clean%20minimalist%20background&width=400&height=500&seq=jar1&orientation=portrait"
    },
    {
      id: 3,
      title: "Digital Life Planner",
      description: "Interactive online planner with Bible verses, goal setting, and spiritual growth tracking features.",
      category: "Online Planners",
      price: "$15.99",
      image: "https://readdy.ai/api/search-image?query=Modern%20digital%20planner%20interface%20on%20tablet%20with%20Bible%20verses%2C%20calendar%2C%20goals%2C%20and%20spiritual%20growth%20tracking%2C%20warm%20colors%2C%20Christian%20symbols%2C%20clean%20design%2C%20inspirational%20layout%2C%20peaceful%20workspace%20setting&width=400&height=500&seq=planner1&orientation=portrait"
    },
    {
      id: 4,
      title: "Positive Affirmation Cards",
      description: "52 beautifully designed cards with Bible-based affirmations for daily encouragement and mental wellness.",
      category: "Positive Cards",
      price: "$12.99",
      image: "https://readdy.ai/api/search-image?query=Set%20of%20beautiful%20positive%20affirmation%20cards%20with%20Bible%20verses%2C%20elegant%20design%2C%20soft%20pastels%2C%20inspirational%20typography%2C%20Christian%20symbols%2C%20scattered%20arrangement%2C%20warm%20lighting%2C%20peaceful%20background&width=400&height=500&seq=cards1&orientation=portrait"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of faith-based resources designed to support your mental health and spiritual growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-700">
                    {product.price}
                  </span>
                  <Link href={`/products/${product.id}`} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}