// HomeSlider.jsx
import React, { useState, useEffect, useRef } from 'react';

const HomeSlider = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const lastScrollTop = useRef(0);
  const autoPlayIntervalRef = useRef(null);

  const slides = [
    {
      image: "/IMG/home/01.jpg",
      title: "DESIGN",
      subtitle: "We excel in producing luxurious designs and creating spaces with a realism that distinguishes our team."
    },
    {
      image: "/IMG/home/02.jpg",
      title: "INNOVATION",
      subtitle: "We design luxurious interiors with a realistic feel that evokes a sense of grandeur and magnificence through modern, contemporary designs."
    },
    {
      image: "/IMG/home/05.jpg",
      title: "ELEGANCE",
      subtitle: "We design to make you feel luxurious and sophisticated through modern, classic designs in a French European style."
    },
    {
      image: "/IMG/home/04.jpg",
      title: "EXCELLENCE",
      subtitle: "We innovate for you and create modern spaces with creative designs."
    },
    {
      image: "/IMG/home/05.jpg",
      title: "VISION",
      subtitle: "Transforming dreams into architectural masterpieces"
    },
    {
      image: "/IMG/home/06.jpg",
      title: "PERFECTION",
      subtitle: "We design to make you feel luxurious and sophisticated through modern, classic designs in a French European style."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // 5 seconds
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Check if we're in the home section
      if (sectionTop <= 0 && sectionTop > -sectionHeight) {
        const scrolled = Math.abs(sectionTop);
        const progress = scrolled / sectionHeight;
        setScrollProgress(progress);

        // Calculate which slide to show based on scroll
        const slideIndex = Math.min(
          Math.floor(progress * slides.length * 1.5),
          slides.length - 1
        );

        // Update slide and pause auto-play when user scrolls
        if (slideIndex !== currentSlide) {
          setCurrentSlide(slideIndex);
          setIsAutoPlaying(false);
          
          // Resume auto-play after 10 seconds of no scrolling
          if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
          }
          setTimeout(() => {
            setIsAutoPlaying(true);
          }, 10000);
        }

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        lastScrollTop.current = currentScrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide, slides.length]);

  // Manual slide change handler
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[600vh] mt-16"
    >
      <div className="sticky top-16 h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div
                className={`w-full max-w-3xl transition-all duration-1000 ${index === currentSlide
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-20 opacity-0'
                  }`}
                style={{
                  transitionDelay: index === currentSlide ? '200ms' : '0ms'
                }}
              >
                
                <div className="w-12 xs:w-14 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-amber-600 mb-4 xs:mb-5 sm:mb-6"></div>

                
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-amber-600 mb-4 xs:mb-5 sm:mb-6 leading-tight xs:leading-snug sm:leading-normal">
                  {slide.title}
                </h1>

                
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 xs:mb-7 sm:mb-8 leading-relaxed sm:leading-normal w-full break-words md:max-w-2xl">
                  {slide.subtitle}
                </p>

                
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-transparent text-4xl hover:bg-amber-600 transition-all duration-300 flex items-center gap-2 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 text-sm xs:text-base sm:text-lg group"
                >
                  PROJECTS
                  <span className="text-lg xs:text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Numbered Slide Indicators */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 xs:right-6 sm:right-8 md:right-16 flex flex-col gap-4 sm:gap-6 text-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`text-right transition-all duration-300 ${index === currentSlide
                ? 'text-amber-600 scale-110 sm:scale-125 font-bold'
                : 'text-gray-400 hover:text-gray-200'
                }`}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`h-px transition-all duration-300 ${index === currentSlide
                    ? 'w-10 xs:w-12 sm:w-16 bg-amber-600'
                    : 'w-6 xs:w-8 bg-gray-600'
                    }`}
                ></div>
                <span className="text-lg sm:text-xl md:text-2xl font-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Auto-play Progress Indicator */}
        {isAutoPlaying && (
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-600 rounded-full animate-progress"
              style={{
                animation: 'progress 5s linear infinite'
              }}
            ></div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="animate-bounce">
            <div className="text-xs mb-2">SCROLL</div>
            <div className="w-px h-10 sm:h-12 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 5s linear infinite;
        }

        @media (max-width: 360px) {
          .text-3xl {
            font-size: 0.75rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSlider;