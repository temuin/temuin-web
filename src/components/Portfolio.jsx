import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioProjects } from '../data/mock';

const Portfolio = ({ darkMode }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="portfolio"
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
            Our <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Showcasing our recent work and successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-cyan-400 hover:shadow-cyan-400/20'
                  : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-cyan-400/20'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredId === project.id
                      ? 'opacity-100'
                      : 'opacity-0'
                  } bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  <ExternalLink className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge
                    className="mb-2 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20"
                  >
                    {project.category}
                  </Badge>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className={`text-xs ${
                        darkMode
                          ? 'border-gray-700 text-gray-300'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div
                  className={`text-sm pt-2 border-t ${
                    darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'
                  }`}
                >
                  {project.client} • {project.year}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
