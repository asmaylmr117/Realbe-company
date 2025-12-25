import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  const projects = [
    {
      id: 1,
      image: "./IMG/projects/01.jpg",
      title: "Architectural design",
      description: "Classic design with a European/French printing technique. Characterized by its quality and elegance."
    },
    {
      id: 2,
      image: "./IMG/projects/2new.jpg",
      title: "Admins Tration Design",
      description: "Luxurious interior design with a simple and flexible neoclassical style in terms of color."
    },
    {
      id: 3,
      image: "./IMG/projects/3new.jpg",
      title: "Residential",
      description: "A sophisticated yet simple interior design that gives a modern impression of luxury."
    },
    {
      id: 4,
      image: "./IMG/projects/4new.jpg",
      title: "Commercial Design",
      description: "A commercial design with a classic, luxurious, and flexible style that reflects the identity of the place."
    }
    
  ];

  // Detect screen size and adjust items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-white">
          RECENT DESIGNS
        </h2>
        <div className="w-20 sm:w-24 lg:w-32 h-1 bg-amber-600 mx-auto"></div>
      </div>

      <div className="relative">
        {/* Navigation Arrows - Top Left */}
        <div className="absolute top-12 left-4 sm:left-20 lg:left-20 z-20 flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white" />
          </button>
        </div>

        {/* Projects Slider with panoramic effect */}
        <div className="flex gap-0.5 h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative transition-all duration-300 ease-out cursor-pointer overflow-hidden flex-1"
              style={{
                backgroundImage: hoveredIndex !== null 
                  ? `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url(${visibleProjects[hoveredIndex].image})`
                  : `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url(${project.image})`,
                backgroundSize: hoveredIndex !== null ? `${itemsPerView * 100}% 100%` : 'cover',
                backgroundPosition: hoveredIndex !== null 
                  ? `${(index * 100 / (itemsPerView - 1))}% center`
                  : 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Title at bottom */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-3 sm:px-4 md:px-6 text-center">
                <h3 className="font-bold text-white text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description Panel */}
              <div
                className={`absolute left-0 right-0 bg-white transition-all duration-300 ease-out ${
                  hoveredIndex === index
                    ? 'bottom-0 h-1/4 opacity-100'
                    : 'bottom-0 h-0 opacity-0'
                }`}
              >
                <div className="p-2 sm:p-3 md:p-4 lg:p-6 h-full flex flex-col justify-start overflow-hidden">
                  <h4 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black mb-1 sm:mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs xs:text-sm sm:text-base md:text-sm text-gray-700 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Overlay gradient when not hovered */}
              {hoveredIndex !== null && hoveredIndex !== index && (
                <div className="absolute inset-0 bg-black/15 sm:bg-black/20 transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 sm:w-10 md:w-12 lg:w-14 bg-amber-600'
                  : 'w-3 sm:w-4 md:w-5 lg:w-6 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current slide indicator */}
      <div className="container mx-auto px-4 mt-3 sm:mt-4 text-center text-gray-400 text-xs sm:text-sm">
        <span className="text-amber-600 font-semibold">{currentIndex + 1}</span> / {maxIndex + 1} 
        <span className="ml-2 text-gray-500">({projects.length} projects total)</span>
      </div>
    </section>
  );
};

export default Projects;