import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gfay-900">RegAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefits</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Join Waitlist
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-green-600">Features</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-green-600">Benefits</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contact</a>
            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
