import React from 'react';
import { Upload, Cpu, FileText } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Audio',
    description: 'Easily upload your files (MP3, WAV, M4A)'
  },
  {
    icon: Cpu,
    title: 'We Transcribe It',
    description: 'AI-powered and human-verified for 99% accuracy'
  },
  {
    icon: FileText,
    title: 'Get Your Text',
    description: 'Delivered in 24 hours with unlimited revisions'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to get your transcription
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-indigo-600" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-indigo-100 -translate-y-1/2 -translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}