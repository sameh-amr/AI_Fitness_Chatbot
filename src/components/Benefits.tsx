import React from 'react';
import { DollarSign, LineChart, PiggyBank, Building } from 'lucide-react';
import { BENEFITS } from '../utils/constants';

const benefitIcons = [
  <Building className="h-6 w-6 text-blue-600" />,
  <PiggyBank className="h-6 w-6 text-blue-600" />,
  <DollarSign className="h-6 w-6 text-blue-600" />,
  <LineChart className="h-6 w-6 text-blue-600" />
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits\" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Invest in Real Estate?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real estate remains one of the most reliable investment vehicles available, offering numerous advantages over other investment options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {benefitIcons[index]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Investments Start with Smart Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                RealtyBot leverages advanced AI to analyze market trends, property values, and investment potential to help you make informed decisions.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Market Analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">ROI Projection</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Risk Assessment</span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-blue-600 opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;