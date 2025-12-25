
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'whoWeAre', 'projects', 'portfolio',  'team'];
            const scrollPosition = window.scrollY + 100; 

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
         { id: 'whoWeAre', label: 'Who We Are' },
        { id: 'projects', label: 'Projects' },
        { id: 'team', label: 'Team' },
        { id: 'portfolio', label: 'Portfolio' }
        
    ];

    return (
        <header className="fixed top-0 w-full z-40 bg-black backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img
                        src=".\IMG\Logo.jpg"
                        alt="Logo"
                        className="w-15 h-14 object-cover "
                    />
                </div>


                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <div key={item.id} className="relative">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-gold transition pb-3 ${activeSection === item.id ? 'text-gold' : 'text-white'
                                    }`}
                            >
                                {item.label}
                            </button>

                            {activeSection === item.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col items-center gap-2 text-gold"
                >
                    {/* Hamburger Lines */}
                    <div className="flex flex-col gap-1">
                        <span className="w-6 h-[2px] bg-gold "></span>
                        <span className="w-4 h-[2px] bg-gold self-end"></span>
                        <span className="w-5 h-[2px] bg-gold self-end "></span>
                    </div>

                    
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 border-t border-gray-800">
                    <nav className="flex flex-col p-4 gap-1">
                        {navItems.map((item) => (
                            <div key={item.id} className="relative">
                                <button
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setMenuOpen(false);
                                    }}
                                    className={`text-left transition py-3 px-4 w-full rounded-lg ${activeSection === item.id
                                            ? 'text-gold bg-gold'
                                            : 'text-white hover:text-gold hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{item.label}</span>
                                        {activeSection === item.id && (
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        )}
                                    </div>
                                </button>

                                {activeSection === item.id && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-amber-600 rounded-r"></div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;