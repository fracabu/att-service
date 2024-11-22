import React from 'react';
import { FileText, Users, Clock, Globe, FileCheck, Settings } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "99% Accurate Transcription",
    description: "AI-powered processing with human verification ensures exceptional accuracy"
  },
  {
    icon: Users,
    title: "Smart Speaker Identification",
    description: "Automatically detect and label different speakers in your audio"
  },
  {
    icon: Clock,
    title: "Precise Timestamps",
    description: "Navigate long transcripts easily with accurate time markers"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Support for English, Italian, Spanish, French, and German"
  },
  {
    icon: FileCheck,
    title: "Unlimited Revisions",
    description: "We'll keep refining until you're completely satisfied"
  },
  {
    icon: Settings,
    title: "Technical Excellence",
    description: "Support for MP3, WAV, M4A formats with unlimited file size"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Transcription Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect for podcasts, interviews, meetings, educational content, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Perfect For</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Podcast Episodes',
              'Business Meetings',
              'Educational Content',
              'Research Interviews',
              'Social Media',
              'Legal Depositions'
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}