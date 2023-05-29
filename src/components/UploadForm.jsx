// components/UploadForm.js
import React from 'react';

function UploadForm({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className='shadow-xl p-3 h-56'>
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {/* add somewhere that the image chosen will be displayed just a div thats not too tall or too wide. Just a sizeable one that will in the space available.then the picture will fill this div created */}
    </div>
  );
}

export default UploadForm;
