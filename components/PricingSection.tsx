
'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '2 Social Accounts',
        '10 AI Captions/month',
        'Basic Analytics',
        'Manual Scheduling',
        'Community Support'
      ],
      buttonText: 'Get Started',
      popular: false,
      buttonStyle: 'border-2 border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-500'
    },
    {
      name: 'Pro',
      price: '₹499',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        '10 Social Accounts',
        'Unlimited AI Captions',
        'Advanced Analytics',
        'Smart Auto-Scheduling',
        'Competitor Insights',
        'Priority Support',
        'Content Calendar',
        'Team Collaboration'
      ],
      buttonText: 'Start Pro Trial',
      popular: true,
      buttonStyle: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500'
    },
    {
      name: 'Enterprise',
      price: '₹1499',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited Accounts',
        'White-label Solution',
        'Advanced AI Models',
        'Custom Integrations',
        'Dedicated Manager',
        '24/7 Phone Support',
        'Custom Reporting',
        'API Access',
        'Advanced Security'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      buttonStyle: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your social media success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                plan.popular
                  ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/50 shadow-2xl shadow-yellow-500/20'
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-yellow-500/30'
              } ${
                hoveredPlan === index ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2 whitespace-nowrap">
                    <i className="ri-star-fill"></i>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-check-line text-yellow-500"></i>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-500"></i>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-refund-2-line text-blue-500"></i>
              <span>30-day Refund</span></div>
            <div className="flex items-center space-x-2">
              <i className="ri-customer-service-2-line text-purple-500"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
