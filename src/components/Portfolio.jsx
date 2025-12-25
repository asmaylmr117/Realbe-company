import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3);
        setIsMobile(false);
      } else {
        setSlidesToShow(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesToShow);

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev >= projects.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      handleNext();
    }
    
    if (distance < -minSwipeDistance) {
      handlePrev();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
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
      {isMobile ? (
        // Mobile: Single Card View
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-300 -ml-2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-300 -mr-2"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
          <div 
            className="relative overflow-hidden rounded-lg shadow-2xl mx-4 select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-64">
              {/* Image with fade animation */}
              <img 
                key={projects[currentIndex].id}
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover animate-fadeIn"
                draggable="false"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div 
                key={`title-${projects[currentIndex].id}`}
                className="absolute bottom-0 left-0 right-0 p-6 animate-slideUp"
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {projects[currentIndex].title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span>{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{projects.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-gray-500 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop & Tablet: Multiple Cards View
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 -ml-4 lg:-ml-6"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all duration-300 -mr-4 lg:-mr-6"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Overflow Container */}
          <div className="overflow-hidden px-4 lg:px-8">
            <div
              className="flex gap-6 transition-all duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
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
                    className="w-full h-72 lg:h-80 xl:h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg lg:text-xl font-semibold">
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* View All Button */}
      <div className="text-center">
        <button className="bg-gold text-white px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-semibold">
          View All Projects
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out 0.2s backwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;