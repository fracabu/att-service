import React from 'react';
import { Shield, Zap, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600">
            Our service combines cutting-edge Azure Cognitive Services with human expertise 
            to deliver accurate, multilingual transcriptions. Whether it's a podcast, 
            business meeting, or educational content, we've got you covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Shield,
              title: 'Trusted Quality',
              description: 'Every transcription is verified by professional editors'
            },
            {
              icon: Zap,
              title: 'Lightning Fast',
              description: '24-hour delivery guaranteed for all projects'
            },
            {
              icon: Globe2,
              title: 'Global Support',
              description: 'Support for multiple languages and accents'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}