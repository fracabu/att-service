import React from 'react';
import { Menu, X, Headphones } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Headphones className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">TranscribeAI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>

          <button className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Get Started
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#pricing" className="block text-gray-600 hover:text-indigo-600">Pricing</a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600">How It Works</a>
            <a href="#about" className="block text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="block text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}