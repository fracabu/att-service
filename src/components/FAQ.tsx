import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What languages do you support?",
    answer: "We currently support English, Italian, Spanish, French, and German. Our team of expert linguists ensures accurate transcription across all supported languages."
  },
  {
    question: "What formats are accepted?",
    answer: "We accept MP3, WAV, and M4A audio formats. All files should be clear recordings for the best results."
  },
  {
    question: "How do you handle multiple speakers?",
    answer: "Our AI system automatically detects and labels different speakers. We can handle up to 5 speakers in Premium plans, with clear speaker identification throughout the transcript."
  },
  {
    question: "Can I get a sample before ordering?",
    answer: "Yes! We offer a free sample test of up to 2 minutes of audio so you can experience our quality firsthand."
  },
  {
    question: "What's your turnaround time?",
    answer: "We guarantee 24-hour delivery for all plans. Rush delivery options are available upon request."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 100% satisfaction guarantee. If you're not happy with our service, we'll either fix it or provide a full refund."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}