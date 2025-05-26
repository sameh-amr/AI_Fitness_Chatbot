import React, { useState } from 'react';
import { MessageSquare, BarChart3, Home, MapPin } from 'lucide-react';

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('chat');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'chat':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 text-xs font-bold">AI</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                  Hello! I'm RealtyBot. How can I assist you with real estate investments today?
                </div>
              </div>
              
              <div className="flex items-start justify-end">
                <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                  I'm interested in investing in rental properties. What should I look for?
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 text-xs font-bold">AI</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                  Great question! When investing in rental properties, focus on these key factors:
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Location quality and neighborhood growth potential</li>
                    <li>Property condition and maintenance requirements</li>
                    <li>Rental income vs. expenses (aim for positive cash flow)</li>
                    <li>Local vacancy rates and rental demand</li>
                    <li>Property appreciation potential</li>
                  </ul>
                  Would you like me to analyze a specific market for you?
                </div>
              </div>
              
              <div className="flex items-start justify-end">
                <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                  Yes, I'd like to know about the Austin, Texas market.
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 text-xs font-bold">AI</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                  Austin is currently a strong rental market with:
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>5.2% average annual appreciation rate</li>
                    <li>Strong job growth driving housing demand</li>
                    <li>Average rental yield of 6.8%</li>
                    <li>Low vacancy rates around 3.2%</li>
                  </ul>
                  The most promising neighborhoods for investment are South Congress, East Austin, and Round Rock. Would you like more specific data about any of these areas?
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex">
              <input 
                type="text" 
                placeholder="Ask RealtyBot a question..." 
                className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Send
              </button>
            </div>
          </div>
        );
      
      case 'analysis':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">Property Appreciation</span>
                <span className="text-green-600 font-medium">+12.4%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-green-500 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">ROI Comparison</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Real Estate</span>
                    <span className="text-sm font-medium">8.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Stocks (S&P 500)</span>
                    <span className="text-sm font-medium">7.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bonds</span>
                    <span className="text-sm font-medium">3.1%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Risk Assessment</h4>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Low Risk</span>
                </div>
                <p className="text-sm text-gray-600">
                  Based on current market conditions, location factors, and economic indicators, this investment carries lower than average risk.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Recommended Actions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Consider multi-family properties in emerging neighborhoods
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Focus on properties with value-add potential
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Implement a regular maintenance schedule to preserve property value
                </li>
              </ul>
            </div>
          </div>
        );
      
      case 'properties':
        return (
          <div className="bg-white rounded-lg shadow-md p-4 h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Property Finder</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Single Family</option>
                  <option>Multi Family</option>
                  <option>Commercial</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Sort: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest ROI</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-200"></div>
                    <div className="p-4 md:w-2/3">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-gray-900">Luxury Apartment Complex</h4>
                        <span className="text-green-600 font-semibold">$1,250,000</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Austin, TX</span>
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">12</span> Units
                        </div>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">8.2%</span> Cap Rate
                        </div>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">$9,200</span> Monthly Income
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        Well-maintained apartment complex in a growing neighborhood with strong rental demand and appreciation potential.
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">View Details</button>
                        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <section id="showcase" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet RealtyBot
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your AI-powered assistant for making smarter real estate investment decisions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-t-lg shadow border-b border-gray-200">
            <div className="flex">
              <button
                className={`flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'chat' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
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
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('analysis')}
              >
                <div className="flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <span>Market Analysis</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'properties' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('properties')}
              >
                <div className="flex items-center justify-center">
                  <Home className="h-4 w-4 mr-2" />
                  <span>Property Finder</span>
                </div>
              </button>
            </div>
          </div>
          
          {renderTabContent()}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200">
            Try RealtyBot Today
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Free 14-day trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;