import React, { useState } from 'react';

function UploadForm({ onFileSelect, selectedFile }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="shadow-xl p-3 h-68">
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="w-40 h-40 bg-gray-200 border border-gray-400">
        {selectedFile && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default UploadForm;