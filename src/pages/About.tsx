
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
                Shree Foods
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The story behind Blizz - where passion meets premium quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Shree Foods was founded with a simple mission: to create the finest ice cream experience 
                    for our customers. What started as a dream to bring joy through frozen treats has evolved 
                    into the premium Blizz brand, known for its exceptional quality and innovative flavors.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To craft premium ice creams that bring people together, create lasting memories, 
                    and deliver pure joy in every scoop. We believe that great ice cream has the power 
                    to brighten any day and create moments of happiness.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Facility</h3>
                <p className="text-gray-600">
                  State-of-the-art production facility equipped with modern technology 
                  and maintained to the highest hygiene standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🌟</div>
                  <CardTitle>Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We never compromise on quality, using only the finest ingredients 
                    and maintaining strict quality control standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔬</div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Constantly developing new flavors and improving our processes 
                    to stay ahead in the competitive market.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🤝</div>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building strong relationships with our customers, suppliers, 
                    and the communities we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="glass-card max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl">Vision for the Future</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision Blizz becoming India's most beloved premium ice cream brand, 
                  known for its exceptional quality, innovative flavors, and commitment to 
                  bringing joy to families across the nation. Our goal is to expand our reach 
                  while maintaining the artisanal quality that makes us special.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
