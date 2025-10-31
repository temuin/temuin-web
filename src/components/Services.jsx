import React from 'react';
import { Globe, Smartphone, Palette, GitMerge } from 'lucide-react';
import { Card } from './ui/card';
import { services } from '../data/mock';

const iconMap = {
  Globe,
  Smartphone,
  Palette,
  GitMerge
};

const Services = ({ darkMode }) => {
  return (
    <section
      id="services"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-black' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className={`p-8 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:shadow-cyan-400/20'
                    : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-cyan-400/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-cyan-400/10 group-hover:bg-cyan-400 transition-colors duration-300 inline-block">
                    <Icon
                      className={`h-8 w-8 ${
                        darkMode
                          ? 'text-cyan-400 group-hover:text-white'
                          : 'text-cyan-600 group-hover:text-white'
                      } transition-colors duration-300`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-base ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
