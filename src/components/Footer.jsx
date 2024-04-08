import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div>
          <h2 className="text-2xl my-2 font-bold text-center">Optisnap</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} Optisnap. All rights reserved.</p>
        </div>          
      </div>
    </footer>
  );
};

export default Footer;
