
'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'News', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Status', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: 'ri-twitter-x-line', href: '#', color: 'hover:text-blue-400' },
    { icon: 'ri-linkedin-line', href: '#', color: 'hover:text-blue-600' },
    { icon: 'ri-instagram-line', href: '#', color: 'hover:text-pink-500' },
    { icon: 'ri-youtube-line', href: '#', color: 'hover:text-red-500' },
    { icon: 'ri-whatsapp-line', href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold font-pacifico text-white hover:text-yellow-500 transition-colors mb-6 block">
              SocBos
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI-powered social media management platform that automates caption writing, post scheduling, analytics, and growth insights for modern businesses.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-lg hover:shadow-yellow-500/20 ${social.color}`}
                >
                  <i className={`${social.icon}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 SocBos by Nav Digital. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-yellow-500 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-600 text-sm">
            Made with ❤️ in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}
