
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your social media? Let's discuss how SocBos can help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 focus:bg-black/70 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 focus:bg-black/70 transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 focus:bg-black/70 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                    required
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-full flex items-center justify-center">
                    <i className="ri-whatsapp-line text-green-400"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-400">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-full flex items-center justify-center">
                    <i className="ri-linkedin-line text-blue-400"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-gray-400">@nav-digital</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-red-400"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">hello@socbos.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-time-line text-yellow-500"></i>
                  <span className="text-gray-300">Average response time: 2 hours</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <i className="ri-customer-service-2-line text-yellow-500"></i>
                  <span className="text-gray-300">24/7 support for Pro users</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-yellow-500"></i>
                  <span className="text-gray-300">Schedule a demo call</span>
                </div>
              </div>
            </div>

            {/* Social Icons with Glow Effect */}
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-full flex items-center justify-center hover:border-green-500/60 hover:bg-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <i className="ri-whatsapp-line text-green-400"></i>
              </button>
              
              <button className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-full flex items-center justify-center hover:border-blue-500/60 hover:bg-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <i className="ri-linkedin-line text-blue-400"></i>
              </button>
              
              <button className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-full flex items-center justify-center hover:border-purple-500/60 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <i className="ri-twitter-x-line text-purple-400"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
