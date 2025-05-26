import React from 'react';
import { Dumbbell, Target, Heart, Zap } from 'lucide-react';
import { EXERCISE_CATEGORIES } from '../utils/constants';

const categoryIcons = [
  <Dumbbell className="h-6 w-6 text-blue-500" />,
  <Target className="h-6 w-6 text-blue-500" />,
  <Heart className="h-6 w-6 text-blue-500" />,
  <Zap className="h-6 w-6 text-blue-500" />
];

const Exercises: React.FC = () => {
  return (
    <section id="exercises\" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Exercise Categories
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover a wide range of exercises tailored to your fitness goals, with AI-powered form guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXERCISE_CATEGORIES.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="h-12 w-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                {categoryIcons[index]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.exercises.map((exercise) => (
                  <li key={exercise} className="flex items-center text-gray-300">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {exercise}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Perfect Your Form with AI
              </h3>
              <p className="text-gray-300 mb-6">
                FitBot uses advanced AI to analyze your form, provide real-time feedback, and help prevent injuries.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Form Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Real-time Feedback</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Progress Tracking</span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-900 rounded flex items-center justify-center">
                  <Dumbbell className="h-16 w-16 text-blue-400 opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;