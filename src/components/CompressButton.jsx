// components/CompressButton.js
import React from 'react';

function CompressButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Compress Image
    </button>
  );
}

export default CompressButton;
