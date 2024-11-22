import React from 'react';
import { Headphones, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Headphones className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">TranscribeAI</span>
            </div>
            <p className="text-gray-400">
              Professional audio transcription services powered by AI and human expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Audio Transcription</a></li>
              <li><a href="#" className="hover:text-indigo-400">Video Transcription</a></li>
              <li><a href="#" className="hover:text-indigo-400">Multilingual Services</a></li>
              <li><a href="#" className="hover:text-indigo-400">Enterprise Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TranscribeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}