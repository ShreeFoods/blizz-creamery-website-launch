
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating Ice Cream Decorations */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-cream-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-strawberry-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blueberry-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-cream-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blueberry-400 to-strawberry-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">B</span>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blueberry-600 via-strawberry-500 to-cream-600 bg-clip-text text-transparent">
              Blizz
            </h1>
            <p className="text-lg text-gray-600 -mt-2">by Shree Foods</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="text-4xl md:text-6xl">🍦</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Something Cool & Creamy
            <br />
            <span className="ice-cream-gradient bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We're crafting premium ice creams that will make your taste buds dance with joy. 
            Get ready for an unforgettable frozen treat experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 mb-2">Stay tuned for updates</p>
              <p className="text-2xl font-bold text-gray-800">Launch 2025</p>
            </div>
            
            <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
            
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blueberry-500 to-strawberry-500 hover:from-blueberry-600 hover:to-strawberry-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Follow our journey as we prepare to bring you the finest ice cream experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
