
'use client';

import { useState } from 'react';

export default function UseCasesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const useCases = [
    {
      title: 'Creators',
      description: 'Content creators, influencers, and personal brands looking to scale their social presence',
      icon: 'ri-user-star-line',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'from-pink-500/10 to-purple-600/5',
      borderColor: 'border-pink-500/20'
    },
    {
      title: 'Agencies',
      description: 'Marketing agencies managing multiple client accounts with efficient automation',
      icon: 'ri-team-line',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/5',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Ecommerce',
      description: 'Online stores driving sales through strategic social media marketing campaigns',
      icon: 'ri-shopping-bag-line',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/5',
      borderColor: 'border-green-500/20'
    },
    {
      title: 'Media',
      description: 'Media companies and publishers amplifying content reach across platforms',
      icon: 'ri-newspaper-line',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/5',
      borderColor: 'border-orange-500/20'
    },
    {
      title: 'Startups',
      description: 'Growing startups building brand awareness and community engagement',
      icon: 'ri-rocket-line',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-600/5',
      borderColor: 'border-yellow-500/20'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Perfect For Every Business
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From solo creators to enterprise teams, SocBos adapts to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${useCase.bgColor} border ${useCase.borderColor} backdrop-blur-sm cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                hoveredCard === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${useCase.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-100 transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Find Your Solution
          </button>
        </div>
      </div>
    </section>
  );
}
