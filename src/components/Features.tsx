import React, { useState } from 'react';
import { MessageSquare, Activity, Dumbbell } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('chat');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'chat':
        return (
          <div className="bg-gray-800 rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-400 text-xs font-bold">AI</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-sm text-gray-200">
                  Hello! I'm FitBot. How can I help with your workout today?
                </div>
              </div>
              
              <div className="flex items-start justify-end">
                <div className="bg-gray-700 rounded-lg p-3 text-sm text-gray-200">
                  I want to improve my squat form. Can you help?
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-400 text-xs font-bold">AI</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-sm text-gray-200">
                  Here are key points for proper squat form:
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Keep your chest up and core engaged</li>
                    <li>Feet shoulder-width apart, toes slightly pointed out</li>
                    <li>Push your hips back as if sitting in a chair</li>
                    <li>Keep knees in line with toes</li>
                    <li>Go as low as you can while maintaining form</li>
                  </ul>
                  Would you like me to analyze your form through video?
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex">
              <input 
                type="text" 
                placeholder="Ask FitBot a question..." 
                className="flex-1 bg-gray-700 border border-gray-600 rounded-l-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        );
      
      case 'analysis':
        return (
          <div className="bg-gray-800 rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Form Analysis</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Squat Analysis</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Depth</span>
                      <span className="text-green-400">92%</span>
                    </div>
                    <div className="h-2 bg-gray-600 rounded-full">
                      <div className="h-2 bg-green-400 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Back Position</span>
                      <span className="text-yellow-400">85%</span>
                    </div>
                    <div className="h-2 bg-gray-600 rounded-full">
                      <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Knee Alignment</span>
                      <span className="text-green-400">95%</span>
                    </div>
                    <div className="h-2 bg-gray-600 rounded-full">
                      <div className="h-2 bg-green-400 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Recommendations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Maintain a more neutral spine throughout the movement
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Keep your weight centered over mid-foot
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Consider mobility work to improve depth further
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'tracking':
        return (
          <div className="bg-gray-800 rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Progress Tracking</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3">Weekly Progress</h4>
                <div className="h-40 bg-gray-800 rounded-lg flex items-end justify-between p-4">
                  {[60, 75, 65, 80, 85, 82, 90].map((height, index) => (
                    <div key={index} className="w-8">
                      <div 
                        className="bg-blue-500 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-gray-400 text-sm">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Personal Records</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Squat</span>
                      <span className="text-blue-400">315 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Bench</span>
                      <span className="text-blue-400">225 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Deadlift</span>
                      <span className="text-blue-400">405 lbs</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Goals</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Squat Goal</span>
                        <span className="text-gray-300">350 lbs</span>
                      </div>
                      <div className="h-2 bg-gray-600 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Bench Goal</span>
                        <span className="text-gray-300">250 lbs</span>
                      </div>
                      <div className="h-2 bg-gray-600 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet FitBot
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Your AI-powered personal trainer for perfect form and consistent progress.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-t-lg shadow border-b border-gray-700">
            <div className="flex">
              <button
                className={`flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'chat' 
                    ? 'border-blue-500 text-blue-400' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('chat')}
              >
                <div className="flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Chat Assistant</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'analysis' 
                    ? 'border-blue-500 text-blue-400' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('analysis')}
              >
                <div className="flex items-center justify-center">
                  <Activity className="h-4 w-4 mr-2" />
                  <span>Form Analysis</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'tracking' 
                    ? 'border-blue-500 text-blue-400' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('tracking')}
              >
                <div className="flex items-center justify-center">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  <span>Progress Tracking</span>
                </div>
              </button>
            </div>
          </div>
          
          {renderTabContent()}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors duration-200">
            Start Training with FitBot
          </button>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. Free 14-day trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;