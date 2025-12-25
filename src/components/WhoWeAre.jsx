
import React, { useState, useEffect, useRef } from 'react';

const WhoWeAre = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = 400;
    const duration = 2500; // 2.5 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white text-black"
      id="whoWeAre"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WHO WE ARE!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our goal is to establish partnerships with companies specializing in colors such as Jotunbell, a contracting company (Radiation World) specializing in interior design.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:text-amber-600 transition group">
              DISCOVER US 
              <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          {/* Right Side - Counter */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="text-center lg:text-right">
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 mb-4" style={{ WebkitTextStroke: '2px #e08f14ff' }}>
                {count}+
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-end text-gray-700 font-semibold">
                <span>COMPLETED PROJECTS TO DATE</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;