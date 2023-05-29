import React from 'react';

function UploadForm({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="shadow-xl p-3 h-56">
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="w-40 h-40 bg-gray-200 border border-gray-400"></div>
      {/* Placeholder div for displaying the chosen image */}
    </div>
  );
}

export default UploadForm;
