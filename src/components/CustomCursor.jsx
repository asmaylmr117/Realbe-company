import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-20 h-20 rounded-full bg-white backdrop-blur-md border border-white flex items-center justify-center text-black/50 font-bold text-1/2xl pointer-events-none z-50 transition-transform duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)', 
      }}
    >
      Explore
    </div>
  );
};

export default CustomCursor;