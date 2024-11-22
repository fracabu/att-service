import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: [
      'Up to 10 minutes of audio',
      '2 speakers',
      '1-day delivery',
      'Speaker identification',
      'Time markers',
      'AI Processing',
      'Human Verification',
      'Professional Formatting'
    ]
  },
  {
    name: 'Standard',
    price: '79',
    popular: true,
    features: [
      'Up to 30 minutes of audio',
      '4 speakers',
      '1-day delivery',
      'Speaker identification',
      'Time markers',
      'AI Processing',
      'Human Verification',
      'Professional Formatting',
      'Priority Support'
    ]
  },
  {
    name: 'Premium',
    price: '149',
    features: [
      'Up to 60 minutes of audio',
      '5 speakers',
      '1-day delivery',
      'Speaker identification',
      'Time markers',
      'AI Processing',
      'Human Verification',
      'Professional Formatting',
      'Priority Support',
      'Custom Formatting Options'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg text-center transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}