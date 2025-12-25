import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const projects = [
    { id: 1, title: 'Luxury classic pool', image: './IMG/projects/5new.jpg' },
    { id: 2, title: 'Elegant Entrance Hotel - Riyadh', image: './IMG/projects/6new.jpg' },
    { id: 3, title: 'luxury classic palace - Qassim', image: './IMG/projects/7new.jpg' },
    { id: 4, title: 'Newclassic Villa - Jeddah', image: './IMG/projects/8new.jpg' }
  ];

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3); // Small Desktop
      } else {
        setSlidesToShow(4); // Large Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-black py-12 sm:py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">PORTFOLIO</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4">
          Over the past few years, Realbe has delivered more than 400 projects across the globe, 
          providing our clients with custom solutions in stylish, functional, and well-thought-out designs.
        </p>
      </div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 -ml-2 sm:-ml-4 lg:-ml-6"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 -mr-2 sm:-mr-4 lg:-mr-6"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slider Overflow Container */}
        <div className="overflow-hidden px-2 sm:px-4 lg:px-8">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                style={{
                  width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)`
                }}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-white w-6 sm:w-8' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="bg-gold text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-semibold text-sm sm:text-base">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Portfolio;