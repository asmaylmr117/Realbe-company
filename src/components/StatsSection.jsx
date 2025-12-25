import React, { useEffect, useState, useRef } from "react";

const stats = [
  { value: 2022, label: "IN BUSINESS SINCE" },
  { value: 410, label: "PROJECTS COMPLETED" },
  { value: 305, label: "SATISFIED CLIENTS" },
  { value: 15, label: "COUNTRIES", suffix: "+" },
];

function CountUp({ end, duration = 2000, suffix = "", startCounting }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [end, duration, startCounting]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
                <CountUp 
                  end={item.value} 
                  suffix={item.suffix} 
                  startCounting={isVisible}
                />
              </h3>
              <p className="mt-2 text-sm tracking-widest text-gold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}