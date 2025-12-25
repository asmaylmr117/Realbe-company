// App.jsx
import React from 'react';
import Header from './components/Header';
import HomeSlider from './components/HomeSlider';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Statistics from './components/Statistics';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header scrollToSection={scrollToSection} />
      <CustomCursor />
      <section id="home">
        <HomeSlider scrollToSection={scrollToSection} />
        
      </section>

     <section id="whoWeAre">
        <WhoWeAre />
      </section>


      <section id="whatWeDo">
        <WhatWeDo />
      </section>
        

      <section id="projects">
        <Projects />
      </section>
      
    
      
      <section id="team">
        <Team />
        <Statistics />
      </section>
       <section id="portfolio">
        <Portfolio />
      </section>
      <Footer />
    </div>
  );
};

export default App;