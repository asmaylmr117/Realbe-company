import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Luxury classic pool', image: './IMG/projects/5new.jpg' },
    { id: 2, title: 'Elegant Entrance Hotel - Riyadh', image: './IMG/projects/6new.jpg' },
    { id: 3, title: 'luxury classic palace - Qassim', image: './IMG/projects/7new.jpg' },
    { id: 4, title: 'Newclassic Villa - Jeddah', image: './IMG/projects/8new.jpg' }
  ];

  return (
    <div className="w-full bg-black py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">PORTFOLIO</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Over the past few years, REEL studio has delivered more than 400 projects across the globe, 
          providing our clients with custom solutions in stylish, functional, and well-thought-out designs.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>
            
            {/* Content - في الأسفل */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-semibold">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;