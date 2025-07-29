'use client';

import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: "Mental Health",
      description: "Resources for anxiety, depression, and emotional wellness through faith-based guidance.",
      icon: "ri-heart-pulse-fill",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      link: "/categories/mental-health",
      image: "https://readdy.ai/api/search-image?query=Peaceful%20meditation%20scene%20with%20person%20in%20prayer%2C%20mental%20wellness%20imagery%2C%20soft%20lighting%2C%20calming%20atmosphere%2C%20Christian%20symbols%2C%20flowers%20and%20nature%2C%20healing%20and%20peace%2C%20warm%20colors%2C%20clean%20background&width=400&height=300&seq=mental1&orientation=landscape"
    },
    {
      id: 2,
      title: "Relationships",
      description: "Guidance for healthy relationships, communication, and building strong bonds with others.",
      icon: "ri-heart-2-fill",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      link: "/categories/relationships",
      image: "https://readdy.ai/api/search-image?query=Loving%20couple%20or%20family%20in%20peaceful%20setting%2C%20relationship%20harmony%2C%20Christian%20love%2C%20togetherness%2C%20warm%20embracing%20scene%2C%20soft%20colors%2C%20peaceful%20background%2C%20faith-based%20imagery&width=400&height=300&seq=relation1&orientation=landscape"
    },
    {
      id: 3,
      title: "Purpose of Life",
      description: "Discover your God-given purpose and find meaning in your life journey.",
      icon: "ri-compass-3-fill",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      link: "/categories/purpose",
      image: "https://readdy.ai/api/search-image?query=Person%20standing%20on%20mountain%20top%20with%20arms%20raised%2C%20discovering%20purpose%2C%20spiritual%20journey%2C%20sunrise%20or%20sunset%2C%20inspirational%20scene%2C%20hope%20and%20direction%2C%20Christian%20symbolism%2C%20peaceful%20landscape&width=400&height=300&seq=purpose1&orientation=landscape"
    },
    {
      id: 4,
      title: "Financial Wellness",
      description: "Biblical wisdom for managing finances, stewardship, and achieving financial peace.",
      icon: "ri-coins-fill",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      link: "/categories/finances",
      image: "https://readdy.ai/api/search-image?query=Person%20managing%20finances%20with%20calculator%20and%20papers%2C%20peaceful%20money%20management%2C%20stewardship%20concept%2C%20organized%20workspace%2C%20Christian%20financial%20wisdom%2C%20calm%20and%20prosperous%20atmosphere%2C%20soft%20lighting&width=400&height=300&seq=finance1&orientation=landscape"
    },
    {
      id: 5,
      title: "Career Growth",
      description: "Professional development through Christian values and ethical business practices.",
      icon: "ri-briefcase-fill",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      link: "/categories/career",
      image: "https://readdy.ai/api/search-image?query=Professional%20person%20in%20office%20environment%2C%20career%20success%2C%20Christian%20work%20ethics%2C%20peaceful%20workplace%2C%20personal%20development%2C%20achievement%20through%20faith%2C%20modern%20office%20setting%2C%20inspirational%20atmosphere&width=400&height=300&seq=career1&orientation=landscape"
    },
    {
      id: 6,
      title: "Marriage & Family",
      description: "Strengthen your marriage and family relationships with biblical principles.",
      icon: "ri-home-heart-fill",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      link: "/categories/marriage",
      image: "https://readdy.ai/api/search-image?query=Happy%20Christian%20family%20together%2C%20marriage%20and%20family%20harmony%2C%20children%20playing%2C%20love%20and%20unity%2C%20peaceful%20home%20setting%2C%20warm%20family%20moments%2C%20faith-based%20family%20values%2C%20joyful%20atmosphere&width=400&height=300&seq=family1&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Life Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand that life brings different challenges. Our resources are organized by life areas to help you find exactly what you need for your current season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={category.link} key={category.id} className="group">
              <div className={`${category.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-pink-100`}>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-purple-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-purple-700 group-hover:text-pink-600 transition-colors duration-300">
                  <span className="text-sm font-medium">Explore Resources</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Need Personal Guidance?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI-powered recommendation system can suggest personalized resources based on your specific needs and challenges.
            </p>
            <Link href="/assessment" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Take Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}