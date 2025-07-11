
'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          {/* AI Bot Illustration */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-bounce">
            <i className="ri-mail-line text-3xl text-black"></i>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Get the latest AI social media insights, tips, and feature updates delivered straight to your inbox
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-400">You're now subscribed to our newsletter. Welcome to the SocBos community!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-600/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 focus:bg-black/70 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Join 10,000+ marketers already subscribed. No spam, unsubscribe anytime.
              </p>
            </form>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-full flex items-center justify-center">
              <i className="ri-lightbulb-line text-blue-400"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI Insights</h4>
            <p className="text-gray-400 text-sm">Latest trends and strategies</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-full flex items-center justify-center">
              <i className="ri-gift-line text-green-400"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Exclusive Features</h4>
            <p className="text-gray-400 text-sm">Early access to new tools</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-full flex items-center justify-center">
              <i className="ri-graduation-cap-line text-purple-400"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Expert Tips</h4>
            <p className="text-gray-400 text-sm">Pro strategies from industry leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
