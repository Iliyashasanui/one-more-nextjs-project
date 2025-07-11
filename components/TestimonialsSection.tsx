
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Manager',
      company: 'TechStart Inc.',
      content: 'SocBos transformed our social media strategy completely! The AI-generated captions are spot-on and save us hours every week. Our engagement rates have increased by 40% since we started using it.',
      avatar: 'SJ',
      rating: 5,
      emoji: '💡'
    },
    {
      name: 'Mike Chen',
      role: 'Content Creator',
      company: '850K Followers',
      content: 'As a full-time creator, SocBos is a game-changer. The smart scheduling feature ensures I never miss optimal posting times, and the analytics help me understand what content performs best.',
      avatar: 'MC',
      rating: 5,
      emoji: '🚀'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Agency Owner',
      company: 'Social Boost Agency',
      content: 'Managing 50+ client accounts was overwhelming until we found SocBos. The automation features and competitor insights have made us 10x more efficient. Our clients love the results!',
      avatar: 'LR',
      rating: 5,
      emoji: '🔥'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied users who've transformed their social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                hoveredTestimonial === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredTestimonial(index)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Emoji hover effect */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl transform transition-all duration-300 ${
                  hoveredTestimonial === index ? 'scale-110 animate-bounce' : 'scale-0'
                }`}>
                  {testimonial.emoji}
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-500"></i>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-yellow-100 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-yellow-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Join Happy Users
          </button>
        </div>
      </div>
    </section>
  );
}
