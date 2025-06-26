
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blueberry-400 to-strawberry-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
                Blizz
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Premium ice creams crafted with love by Shree Foods. 
              Bringing joy to every scoop since our beginning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-blueberry-600 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-blueberry-600 transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blueberry-600 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blueberry-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Shree Foods Private Limited</p>
              <p>Email: info@shreefoods.com</p>
              <p>Phone: +91 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 Shree Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
