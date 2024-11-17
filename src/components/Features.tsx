import React from 'react';
import { Bot, Shield, Clock, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Analysis',
    description: 'Advanced AI algorithms analyze regulatory documents and requirements in minutes, not days.'
  },
  {
    icon: Shield,
    title: 'Compliance Assurance',
    description: 'Stay compliant with automated updates and real-time monitoring of regulatory changes.'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce regulatory processing time by up to 80% with our streamlined approach.'
  },
  {
    icon: FileCheck,
    title: 'Smart Documentation',
    description: 'Automatically generate compliant documentation and maintain digital audit trails.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Regulatory Excellence
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Streamline your compliance process with our cutting-edge AI technology
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-6">
                <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}