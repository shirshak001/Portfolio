import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import MagicBento from './MagicBento';
import ScrollReveal from './ScrollReveal';
import projects from '../data/projects';

const ProjectSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };
  
  // Get all unique labels from both software and hardware projects
  const categories = useMemo(() => {
    const labels = new Set(['all']);
    [...projects.software, ...projects.hardware].forEach(project => {
      labels.add(project.label);
    });
    return Array.from(labels);
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projects.software, ...projects.hardware];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.label === activeCategory);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'recent':
          return -1; // Assuming projects are already in reverse chronological order
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [activeCategory, sortBy]);

  return (
    <section id="projects" className="relative w-full py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center relative z-10">
          
            <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          
          <div className="h-1 w-32 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Exploring the intersection of software and hardware innovation
          </p>
        </div>

        {/* Filters and Sorting Section */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="recent">Most Recent</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="mt-8">
          <MagicBento 
            cardData={filteredProjects}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
            glowColor="132, 0, 255"
            onCardClick={(project) => handleProjectClick(project.id)}
          />
        </div>
      </div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No projects found for the selected category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
    