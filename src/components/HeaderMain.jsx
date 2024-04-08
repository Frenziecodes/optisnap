import React from 'react';

const MainHeader = () => {
  return (
    <header className="relative min-h-screen bg-green-300 flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-yellow-200 transform skew-y-12 animate-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Fast and efficient Image compression</h1>
        <p className="text-lg md:text-xl text-center max-w-md p-2 rounded-md my-6 shadow-sm text-teal-800 bg-white">Optimize JPEG, PNG, SVG, GIF and WEBP</p>
      </div>
    </header>
  );
};

export default MainHeader;
