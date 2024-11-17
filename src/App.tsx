import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Streamline Regulatory</span>{' '}
              <span className="block text-green-600 xl:inline">Compliance with AI</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Transform your regulatory compliance process with our AI-powered platform. 
              Specifically designed for agrichemical and food industry leaders.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                99.9% Accuracy
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                80% Faster Processing
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                24/7 Compliance Monitoring
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 inset-x-0 h-[37rem] bg-gradient-to-b from-green-50 to-transparent -z-10" />
      </div>

      <Features />

      {/* Waitlist Section */}
      <div id="waitlist" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-green-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1560693512-8f3d7c454ba3?auto=format&fit=crop&q=80"
                alt="Agriculture background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
                Join the Future of Regulatory Compliance
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-center text-xl text-green-100">
                Be among the first to experience our revolutionary AI-powered platform.
                Limited spots available for early access.
              </p>
              <div className="mt-10">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;