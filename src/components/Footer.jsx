import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { id: 'home', label: 'Home' },
    { id: 'whoWeAre', label: 'Who We Are' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  const socialLinks = [

    { name: 'Instagram Reelbe', icon: Instagram, url: 'https://www.instagram.com/realbestudio?igsh=cDA4NWY2NWh4eXhs' },
    { name: 'Instagram Khalid ', icon: Instagram, url: 'https://www.instagram.com/khaaleed02?igsh=MWRhMWEwbjlmZDRmdQ==' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/KhalidEdris0' }
   
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo and CTA Section */}
          <div className="lg:col-span-2 col-span-1">
            <div className="flex items-center gap-2">
              <img
                src=".\IMG\home\Capture.jpg"
                alt="Logo"
                className="w-25 h-15 object-contain"
              />
            </div>

            {/* Call to Action */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-2xl font-bold mb-2">
                Get in touch to design 
              </h3>
              <p className="text-2xl md:text-3xl">
                <span className="text-amber-600">administration interior</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs text-gray-400 mb-2 tracking-wider">WHATSAPP</h4>
                <p className="text-sm mb-1">
                  <a
                    href="https://wa.me/+966582989417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +966 58 298 9417
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-xs text-gray-400 mb-2 tracking-wider">SEND A MESSAGE</h4>
                <p className="text-sm">info@realbe.net</p>
              </div>
            </div>
          </div>

          {/* Company Links and Social Links - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-bold mb-4 tracking-wider">COMPANY LINKS</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-gray-300 hover:text-amber-600 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold mb-4 tracking-wider">FOLLOW US</h4>
              <ul className="space-y-3">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-amber-600 transition-colors duration-300"
                    >
                      <social.icon size={16} />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              Copyright © 2025 Realbe All rights reserved. No part of this website could be replicated without prior permission of Realbe.
            </p>
            <p>
              This website is designed by{' '}
              <a
                href="https://wa.me/+201507135815"
                className="text-amber-600 hover:text-amber-500 transition-colors"
              >
               Devnity code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;