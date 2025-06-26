
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      name: "Classic Vanilla",
      description: "Rich and creamy vanilla made with Madagascar vanilla beans",
      flavor: "🍦",
      category: "Classic",
      features: ["Premium Vanilla", "Creamy Texture", "All Natural"]
    },
    {
      name: "Chocolate Fudge",
      description: "Decadent chocolate ice cream with fudge swirls",
      flavor: "🍫",
      category: "Classic",
      features: ["Belgian Chocolate", "Fudge Swirls", "Rich & Smooth"]
    },
    {
      name: "Strawberry Bliss",
      description: "Fresh strawberry ice cream with real fruit pieces",
      flavor: "🍓",
      category: "Fruity",
      features: ["Real Strawberries", "Natural Color", "Refreshing"]
    },
    {
      name: "Mint Chocolate Chip",
      description: "Cool mint ice cream with premium chocolate chips",
      flavor: "🌿",
      category: "Specialty",
      features: ["Fresh Mint", "Chocolate Chips", "Cooling Effect"]
    },
    {
      name: "Cookies & Cream",
      description: "Vanilla ice cream loaded with cookie crumbles",
      flavor: "🍪",
      category: "Specialty",
      features: ["Cookie Crumbles", "Creamy Base", "Crunchy Texture"]
    },
    {
      name: "Mango Tango",
      description: "Tropical mango ice cream with a tangy twist",
      flavor: "🥭",
      category: "Exotic",
      features: ["Alphonso Mango", "Tropical Taste", "Seasonal Special"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
                Premium Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted range of premium ice cream flavors, each made with the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{product.flavor}</div>
                  <div className="flex justify-center mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-cream-100 to-cream-200">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-blueberry-400 to-strawberry-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl">Coming Soon</CardTitle>
                <CardDescription className="text-lg">
                  More exciting flavors in development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🥥</div>
                    <p className="text-sm text-gray-600">Coconut Dream</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🍨</div>
                    <p className="text-sm text-gray-600">Kulfi Special</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🌰</div>
                    <p className="text-sm text-gray-600">Pistachio Delight</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🍒</div>
                    <p className="text-sm text-gray-600">Cherry Cheesecake</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  We're constantly innovating and developing new flavors to surprise and delight our customers. 
                  Stay tuned for these exciting additions to our premium collection!
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

export default Products;
