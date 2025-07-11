
'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [animateFeatures, setAnimateFeatures] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateFeatures(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: '✍️', text: 'AI Writing' },
    { icon: '📅', text: 'Scheduling' },
    { icon: '📊', text: 'Analytics' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                Automate.
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-white bg-clip-text text-transparent">
                Analyze.
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                Accelerate.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
              AI for Social Media, from captions to insights
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 transform transition-all duration-500 ${
                  animateFeatures ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-lg text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Try Free
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 whitespace-nowrap">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full animate-spin-slow"></div>
            
            <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-black rounded-full border border-yellow-500/30 flex items-center justify-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full">
                <i className="ri-robot-line text-3xl text-black"></i>
              </div>
            </div>

            {/* Orbiting Platform Icons */}
            <div className="absolute inset-0 animate-spin-reverse">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border border-yellow-500/50 rounded-full flex items-center justify-center">
                <i className="ri-twitter-x-line text-yellow-500"></i>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-black border border-yellow-500/50 rounded-full flex items-center justify-center">
                <i className="ri-instagram-line text-yellow-500"></i>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border border-yellow-500/50 rounded-full flex items-center justify-center">
                <i className="ri-youtube-line text-yellow-500"></i>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-black border border-yellow-500/50 rounded-full flex items-center justify-center">
                <i className="ri-linkedin-line text-yellow-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
