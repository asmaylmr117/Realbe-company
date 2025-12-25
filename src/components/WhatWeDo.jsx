// Partnership.jsx
import React from 'react';

const WhatWeDo = () => {
  return (
    <section id="WhatWeDo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">  What We Do </h2>
        <div className="w-32 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
           REAL BE Company specializes in interior design, architectural works, facades, landscaping, and contracting.
          </p>
          <button className="bg-amber-600 px-8 py-3 hover:bg-amber-700 transition">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;