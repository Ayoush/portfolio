import React, { useEffect, useRef, useState } from 'react';

const BorderGlowButton = ({displayText}) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: '-100%', y: '-100%' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <button
      className="relative overflow-hidden rounded-lg bg-[#e5e7eb] transform transition-transform ease-in-out active:scale-90 w-48 h-30"
      ref={ref}
    >
      <span
        className={`absolute z-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fb3b53cc_70%,transparent_90%)]`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></span>
      <div className="font-pacifico relative z-10 rounded-lg bg-white/90 px-4 py-1 backdrop-blur-sm text-stroke-none">
        {displayText}
      </div>
    </button>
  );
};

export default BorderGlowButton;
