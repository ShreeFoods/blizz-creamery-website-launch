
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
                Blizz
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium ice creams by Shree Foods - Where every scoop tells a story of quality and taste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cream-400 to-cream-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🍦</span>
                </div>
                <CardTitle className="text-xl">Premium Quality</CardTitle>
                <CardDescription>
                  Made with the finest ingredients and traditional methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our ice creams are crafted using premium dairy and natural flavors, ensuring every bite is a delightful experience.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blueberry-400 to-blueberry-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <CardTitle className="text-xl">Unique Flavors</CardTitle>
                <CardDescription>
                  Innovative combinations that surprise and delight
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From classic vanilla to exotic fusion flavors, we offer a diverse range that caters to every palate.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-strawberry-400 to-strawberry-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <CardTitle className="text-xl">Made with Love</CardTitle>
                <CardDescription>
                  Every batch is prepared with care and attention to detail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our passionate team ensures that each product meets our high standards of quality and taste.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're putting the finishing touches on our premium ice cream collection. 
                Get ready for an unforgettable frozen treat experience.
              </p>
              <div className="flex justify-center space-x-4 text-4xl">
                <span className="animate-bounce">🍦</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🍨</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🧁</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
