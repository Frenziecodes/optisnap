import React from "react";

function UploadForm({ onFileSelect, selectedFiles, setSelectedFiles }) {
  const handleFileChange = (event) => {
    const files = [...event.target.files];
    onFileSelect(files);
  };

  const removeImage = (file) => {
    const files = selectedFiles.filter((selectedFile) => {
      return selectedFile.name !== file.name;
    });

    setSelectedFiles(files);
  };

  return (
    <div className="shadow-xl p-3">
      <h2 className="text-lg font-bold mb-2">Select an Image to Compress:</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
        multiple
      />

      {selectedFiles && selectedFiles.length ? (
        <div className="w-full bg-gray-200 border border-gray-400 grid grid-cols-2 gap-4 p-3">
          {selectedFiles.map((selectedFile) => {
            return (
              <div className="relative flex" key={selectedFile.name}>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="w-40 h-40 object-cover mr-2"
                />

                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="cursor-pointer hover:fill-red-600"
                  onClick={() => {
                    removeImage(selectedFile);
                  }}
                >
                  <title>delete</title>
                  <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
                </svg>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default UploadForm;
