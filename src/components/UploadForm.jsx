// components/UploadForm.js
import React from 'react';

function UploadForm({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
    </div>
  );
}

export default UploadForm;
