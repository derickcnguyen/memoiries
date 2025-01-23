import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Brain, Calendar } from 'lucide-react';
import { SocialLinks } from '../components/SocialLinks';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Book size={48} className="text-black" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
              Memoiries
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your personal space for capturing life's moments, emotions, and memories
            </p>
            <Link
              to="/app"
              className="inline-block px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start Journaling
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Emotional Tracking</h3>
            <p className="text-gray-600">
              Track your mood and emotions with our intuitive rating system, helping you understand your emotional patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Personal Growth</h3>
            <p className="text-gray-600">
              Reflect on your experiences and track your personal growth journey through regular journaling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Memories</h3>
            <p className="text-gray-600">
              Capture your daily moments with text and images, creating a beautiful timeline of your life's journey.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-y-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Memoiries?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">🎨 Express Yourself</h3>
              <p className="text-gray-600">
                Customize your memories with color schemes that match your mood and personality. Make each entry uniquely yours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">🔒 Private & Secure</h3>
              <p className="text-gray-600">
                Your memories are yours alone. We use industry-standard encryption to keep your journal entries private and secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📱 Access Anywhere</h3>
              <p className="text-gray-600">
                Whether on your phone, tablet, or computer, your memories are always just a click away.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">🌱 Track Growth</h3>
              <p className="text-gray-600">
                Watch your journey unfold as you document your experiences, challenges, and achievements over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Book size={24} className="mr-2" />
              <span className="font-bold text-xl">Memoiries</span>
            </div>
            <div className="flex space-x-4">
              <SocialLinks
                twitter="https://x.com/1dericknguyen"
                linkedin="https://www.linkedin.com/in/1derick-nguyen/"
                github="https://github.com/derickcnguyen/"
              />
            </div>
          </div>
          <div className="mt-4 text-center text-gray-600">
            © {new Date().getFullYear()} Memoiries. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};