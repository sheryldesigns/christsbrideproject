'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Nairobi, Kenya",
      text: "Christ's Bride Diaries transformed my life during my darkest season. The devotional books and daily check-ins gave me hope when I felt hopeless. The WhatsApp support is incredibly caring and timely.",
      category: "Mental Health",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20African%20woman%20smiling%20peacefully%2C%20professional%20headshot%2C%20warm%20lighting%2C%20natural%20background%2C%20happy%20and%20content%20expression%2C%20inspirational%20portrait%2C%20soft%20colors%2C%20peaceful%20atmosphere&width=200&height=200&seq=testimonial1&orientation=squarish"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      text: "The relationship guidance helped save my marriage. The biblical principles combined with practical advice made all the difference. My wife and I are stronger than ever thanks to the resources here.",
      category: "Relationships",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20with%20gentle%20smile%2C%20confident%20and%20peaceful%20expression%2C%20natural%20lighting%2C%20clean%20background%2C%20inspirational%20portrait%2C%20warm%20colors%2C%20trustworthy%20appearance&width=200&height=200&seq=testimonial2&orientation=squarish"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      location: "Mombasa, Kenya",
      text: "I discovered my purpose through the life coaching resources. The online planners keep me focused on my goals while staying connected to my faith. The subscription service is worth every penny.",
      category: "Purpose of Life",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Young%20African%20woman%20with%20bright%20smile%2C%20confident%20and%20determined%20expression%2C%20professional%20appearance%2C%20natural%20lighting%2C%20inspiring%20portrait%2C%20warm%20and%20encouraging%20atmosphere&width=200&height=200&seq=testimonial3&orientation=squarish"
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Mexico City, Mexico",
      text: "The financial wellness resources taught me biblical stewardship principles that completely changed how I manage money. I'm now debt-free and helping others achieve financial peace.",
      category: "Financial Wellness",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Hispanic%20man%20with%20warm%20smile%2C%20successful%20and%20peaceful%20expression%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20professional%20portrait%2C%20confident%20and%20trustworthy%20appearance&width=200&height=200&seq=testimonial4&orientation=squarish"
    },
    {
      id: 5,
      name: "Ruth Mwangi",
      location: "Eldoret, Kenya",
      text: "As a single mother, I struggled with depression and anxiety. The daily devotionals and positive affirmation cards became my daily strength. The community support is amazing.",
      category: "Mental Health",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20African%20woman%20with%20gentle%20smile%2C%20motherly%20and%20caring%20expression%2C%20warm%20lighting%2C%20peaceful%20background%2C%20inspirational%20portrait%2C%20hope%20and%20strength%20in%20her%20eyes&width=200&height=200&seq=testimonial5&orientation=squarish"
    },
    {
      id: 6,
      name: "James Parker",
      location: "London, UK",
      text: "The career guidance helped me align my professional goals with my Christian values. I found a new job that allows me to serve others while growing professionally. Truly life-changing!",
      category: "Career Growth",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20British%20man%20with%20kind%20smile%2C%20business%20attire%2C%20confident%20and%20successful%20expression%2C%20natural%20lighting%2C%20clean%20background%2C%20inspirational%20portrait%2C%20warm%20atmosphere&width=200&height=200&seq=testimonial6&orientation=squarish"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Lives Transformed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found hope, healing, and purpose through Christ's Bride Diaries.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-pink-50 to-purple-50">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-pink-200"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-semibold text-purple-800 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm mb-2">
                        {testimonial.location}
                      </div>
                      <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
          >
            <i className="ri-arrow-left-line text-purple-700 group-hover:text-pink-600 transition-colors duration-300"></i>
          </button>
          
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 group"
          >
            <i className="ri-arrow-right-line text-purple-700 group-hover:text-pink-600 transition-colors duration-300"></i>
          </button>
        </div>
      </div>
    </section>
  );
}