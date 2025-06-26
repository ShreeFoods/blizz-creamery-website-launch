
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy{' '}
              <span className="bg-gradient-to-r from-blueberry-600 to-strawberry-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us at Shree Foods
            </p>
          </div>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We collect information you provide directly to us, such as when you contact us through our website, 
                subscribe to our newsletter, or interact with our services.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
                <li>Website usage information (cookies, analytics)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our products and services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. 
                You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">Shree Foods Private Limited</p>
                <p className="text-gray-600">Email: privacy@shreefoods.com</p>
                <p className="text-gray-600">Phone: +91 XXX XXX XXXX</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the effective date.
              </p>
              <p className="text-gray-600 font-semibold">
                Effective Date: January 1, 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
