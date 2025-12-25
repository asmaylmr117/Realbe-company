import React, { useState } from 'react';
import { Instagram, Facebook, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const team = [
    {
      name: "Khalid Edris",
      position: "CEO",
      image: "./IMG/projects/IMG-20251220-WA0031.jpg",
      bio: "Welcome to our world, where beautiful spaces come alive! Since 2022, our founder, Khalid Edris, has been creating stunning interiors and architectural designs as well as offering valuable tips and advice in the field in our main branch in Saudi Arabia and other countries. With a keen eye for detail and a commitment to quality, we have built a strong reputation as a top-notch group of interior and architectural designers.",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const currentMember = team[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="team" className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 sm:py-12 lg:py-20 bg-black/80">
   
    
      
      {/* Semi-transparent white overlay container */}
      <div className="relative w-full max-w-[95%] xl:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          
          <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
            
            
            <div className="lg:hidden relative h-80 sm:h-96 md:h-[500px]  bg-white/20 backdrop-blur-sm">
              
                <img 
                  src={currentMember.image} 
                  alt={currentMember.name}
                  className="w-full h-full object-contain rounded-lg"
                />
             
            </div>
            
            {/* Left Side - Information with semi-transparent background */}
            <div className="flex-1 p-6 sm:p-8 lg:p-16 lg:pr-0 flex flex-col justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
              <div className="max-w-xl lg:pr-8">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-12">
                 Founder 
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2">
                      {currentMember.name}
                    </h3>
                    <p className="text-gold text-base sm:text-lg lg:text-2xl font-medium">
                      {currentMember.position}
                    </p>
                  </div>
                  
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {currentMember.bio}
                  </p>
                  
                  
                  
                </div>
                
                {/* View All Button */}
                <button className="mt-6 sm:mt-8 lg:mt-12 bg-transparent  px-6 py-2 sm:px-8 sm:py-3 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium rounded-lg">
                  View All 
                  <span className="text-lg sm:text-xl">→</span>
                </button>

                {/* Navigation Arrows - Desktop */}
                <div className="hidden lg:flex gap-4 mt-12">
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-amber-600 hover:text-white backdrop-blur-sm transition-all duration-300 rounded-lg text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-amber-600 hover:text-white backdrop-blur-sm transition-all duration-300 rounded-lg text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            
            
            <div className="hidden lg:flex flex-1 relative bg-white/20 backdrop-blur-sm">
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <img 
                  src={currentMember.image} 
                  alt={currentMember.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          
          <div className="flex lg:hidden justify-center gap-3 sm:gap-4 py-4 sm:py-6 bg-black/60 backdrop-blur-sm">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-amber-600 hover:text-white backdrop-blur-sm transition-all duration-300 rounded-lg text-white"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex items-center px-3 sm:px-4 text-white font-medium text-sm sm:text-base">
              <span className="text-amber-500 font-bold">{currentIndex + 1}</span>
              <span className="mx-1 sm:mx-2">/</span>
              <span>{team.length}</span>
            </div>
            
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-amber-600 hover:text-white backdrop-blur-sm transition-all duration-300 rounded-lg text-white"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Team;