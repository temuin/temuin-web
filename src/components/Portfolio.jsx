import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioProjects } from '../data/mock';

const Portfolio = ({ darkMode }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleProjectClick = (project) => {
    if (project.link && project.status === 'deployed') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

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
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                project.status === 'deployed' 
                  ? 'cursor-pointer' 
                  : 'cursor-default'
              } ${
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
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`text-xs font-medium ${
                      project.status === 'deployed'
                        ? 'bg-green-500/90 text-white hover:bg-green-600/90'
                        : 'bg-yellow-500/90 text-white hover:bg-yellow-600/90'
                    }`}
                  >
                    {project.status === 'deployed' ? 'Live' : 'In Development'}
                  </Badge>
                </div>
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
                  {project.status === 'deployed' ? (
                    <div className="text-center">
                      <ExternalLink className="h-12 w-12 text-white mx-auto mb-2" />
                      <p className="text-white font-medium">Visit Site</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="h-12 w-12 mx-auto mb-2 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full border-t-2 border-white animate-spin"></div>
                      </div>
                      <p className="text-white font-medium">Coming Soon</p>
                    </div>
                  )}
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
                  className={`text-sm pt-2 border-t flex items-center justify-between ${
                    darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'
                  }`}
                >
                  <span>{project.client} • {project.year}</span>
                  {project.status === 'deployed' && project.link && (
                    <span className="text-cyan-400 font-medium text-xs">
                      Click to visit →
                    </span>
                  )}
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
