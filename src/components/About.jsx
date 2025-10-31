import React from 'react';
import { Lightbulb, Award, Users } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ darkMode }) => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Transforming ideas into smart digital systems'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Building reliable, high-performance solutions'
    },
    {
      icon: Users,
      title: 'Reliability',
      description: 'Partnering with clients for long-term impact'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1568952433726-3896e3881c65"
                alt="Technology Innovation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-400 rounded-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className={`text-4xl lg:text-5xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Building Digital <span className="text-cyan-400">Futures</span>
              </h2>
              <p
                className={`text-lg lg:text-xl ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                TEMUIN is a creative tech company blending artistry and
                engineering to build scalable, beautiful digital experiences.
              </p>
              <p
                className={`text-base lg:text-lg ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                We bridge imagination and technology — crafting digital products
                that combine creativity, engineering, and meaningful user
                experience.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className={`p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 hover:border-cyan-400'
                        : 'bg-gray-50 border-gray-200 hover:border-cyan-400'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400 transition-colors duration-300">
                        <Icon
                          className={`h-6 w-6 ${
                            darkMode
                              ? 'text-cyan-400 group-hover:text-white'
                              : 'text-cyan-600 group-hover:text-white'
                          } transition-colors duration-300`}
                        />
                      </div>
                      <h3
                        className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
