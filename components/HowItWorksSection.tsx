
'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Connect Accounts',
      description: 'Link all your social media platforms in seconds with secure OAuth integration.',
      icon: 'ri-link-line'
    },
    {
      number: '02',
      title: 'Define Goals',
      description: 'Set your objectives, target audience, and brand preferences for AI optimization.',
      icon: 'ri-target-line'
    },
    {
      number: '03',
      title: 'Automate Workflow',
      description: 'Let AI handle content creation, scheduling, and performance optimization automatically.',
      icon: 'ri-robot-line'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-yellow-500/50 via-yellow-500 to-yellow-500/50"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-500/30 rounded-full flex items-center justify-center group-hover:border-yellow-500/60 group-hover:bg-yellow-500/10 transition-all duration-500">
                  <i className={`${step.icon} text-3xl text-yellow-500`}></i>
                </div>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-100 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
