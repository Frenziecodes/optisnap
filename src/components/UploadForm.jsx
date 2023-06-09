import React, { useState, useEffect } from "react";

function UploadForm({ onFileSelect, selectedFiles }) {
  const [imageURLS, setImageURLs] = useState([]);
  const handleFileChange = (event) => {
    const files = [...event.target.files];
    onFileSelect(files);
  };

  return (
    <div className="shadow-xl p-3 h-68">
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
        multiple
      />
      <div className="w-40 h-40 bg-gray-200 border border-gray-400">
        {selectedFiles &&
          selectedFiles.length &&
          selectedFiles.map((selectedFile) => {
            console.log({ selectedFile });

            return (
              <img
                key={selectedFile.name}
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="w-full h-full object-cover"
              />
            );
          })}
      </div>
    </div>
  );
}

export default UploadForm;
