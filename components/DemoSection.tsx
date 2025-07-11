
'use client';

import { useState } from 'react';

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('captions');

  const tabs = [
    { id: 'captions', label: 'Caption Generator', icon: 'ri-quill-pen-line' },
    { id: 'calendar', label: 'Post Calendar', icon: 'ri-calendar-line' },
    { id: 'analytics', label: 'Trend Charts', icon: 'ri-line-chart-line' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Live Demo Preview
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of AI-driven social media management
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="bg-black/30 rounded-2xl p-6 border border-gray-700/30">
            {activeTab === 'captions' && (
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-600/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <i className="ri-robot-line text-black text-xl"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">AI Caption Generator</h4>
                      <div className="bg-black/50 rounded-lg p-4 border border-gray-600/30">
                        <p className="text-gray-300 leading-relaxed">
                          "🚀 Ready to transform your social media game? Our new AI-powered platform is here to revolutionize how you create, schedule, and analyze your content. From engaging captions to smart scheduling - we've got you covered! #SocialMediaAutomation #AITech #GrowthHacking"
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Engaging</span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Professional</span>
                        </div>
                        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
                          <i className="ri-refresh-line"></i> Regenerate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <div className="grid grid-cols-7 gap-2 text-center">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-gray-400 font-semibold py-2">{day}</div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square border border-gray-700/30 rounded-lg p-1 relative">
                      {i % 7 === 2 && (
                        <div className="w-full h-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 rounded border border-yellow-500/30 flex items-center justify-center">
                          <i className="ri-instagram-line text-yellow-500 text-xs"></i>
                        </div>
                      )}
                      {i % 7 === 4 && (
                        <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded border border-blue-500/30 flex items-center justify-center">
                          <i className="ri-twitter-x-line text-blue-400 text-xs"></i>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-green-400 font-semibold">Engagement Rate</h4>
                      <i className="ri-arrow-up-line text-green-400"></i>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">8.4%</div>
                    <div className="text-green-400 text-sm">+2.1% this week</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-blue-400 font-semibold">Reach</h4>
                      <i className="ri-arrow-up-line text-blue-400"></i>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">24.5K</div>
                    <div className="text-blue-400 text-sm">+15% this week</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-purple-400 font-semibold">Followers</h4>
                      <i className="ri-arrow-up-line text-purple-400"></i>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">12.8K</div>
                    <div className="text-purple-400 text-sm">+8% this week</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
