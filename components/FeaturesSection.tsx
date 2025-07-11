
'use client';

import { useState } from 'react';

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: 'ri-quill-pen-line',
      title: 'AI Captions',
      description: 'Generate engaging captions instantly with advanced AI that understands your brand voice and audience.'
    },
    {
      icon: 'ri-calendar-schedule-line',
      title: 'Smart Scheduler',
      description: 'Optimize posting times across all platforms with AI-powered scheduling for maximum engagement.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Real-time Analytics',
      description: 'Track performance metrics, engagement rates, and growth insights across all your social platforms.'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Competitor Insights',
      description: 'Stay ahead with detailed competitor analysis and trending content recommendations.'
    },
    {
      icon: 'ri-repeat-line',
      title: 'One-click Reposting',
      description: 'Effortlessly repurpose high-performing content across multiple platforms with smart adaptations.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Content Storage',
      description: 'Organize and access your entire content library with AI-powered tagging and search capabilities.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your social media strategy with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                hoveredCard === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 mb-6 group-hover:border-yellow-500/60 transition-all duration-300`}>
                  <i className={`${feature.icon} text-2xl text-yellow-500`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
