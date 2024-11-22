import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Audio into Precise Text with{' '}
            <span className="text-indigo-600">AI-Powered</span>, Human-Verified Transcription
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Fast, accurate, and multilingual transcription services for your audio needs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-50 transition-colors">
              Request a FREE Sample Test
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              '99% Accurate Transcriptions',
              '24-Hour Delivery Guaranteed',
              'Multilingual Support',
              'Unlimited Revisions'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}