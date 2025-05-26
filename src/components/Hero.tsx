import React from 'react';
import { ArrowRight, Dumbbell, Activity, Trophy } from 'lucide-react';
import { SITE_TITLE, SITE_DESCRIPTION } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {SITE_TITLE}
              <span className="block text-blue-400 mt-1">Smart Fitness AI</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 max-w-lg">
              {SITE_DESCRIPTION}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                Start Training Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-500 text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200">
                View Exercises
              </button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Dumbbell className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">Custom Plans</span>
              </div>
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">Form Check</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-sm text-gray-300">Progress Tracking</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-64 rounded-lg flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-2xl font-bold mb-2">FitBot AI Trainer</h3>
                  <p className="opacity-90">Your intelligent workout companion</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-400 text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-gray-600 rounded-lg p-3 text-sm text-gray-200">
                    Ready to start your workout? I can help you with exercise form, routines, and tracking progress.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex items-center justify-center h-10 px-4 bg-blue-500 text-white text-sm rounded-full">
                    Ask FitBot a question
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;