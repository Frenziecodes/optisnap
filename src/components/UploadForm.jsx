import React from "react";

function UploadForm({ onFileSelect, selectedFiles, setSelectedFiles }) {
  const handleFileChange = (event) => {

    // hide the error message, if generated in past by drop feature 
    const errorMessage = document.querySelector("#invalidFiles");
    errorMessage.style.display = "none";

    const files = [...event.target.files];
    onFileSelect(files);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    // Access the dropped files 
    const files = [...event.dataTransfer.files];
    const reviewedFiles = [];
    let inValidFileCount = 0;
   
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isImage = file.type.startsWith('image/');
  
      if (isImage) {
        reviewedFiles.push(file);
      } else {
        inValidFileCount++;
      }
    }

    // display error message if invalid file received, else hide the message 
    const errorMessage = document.querySelector("#invalidFiles");
    if(inValidFileCount > 0)
    {
      errorMessage.style.display = "block";
      errorMessage.textContent = `Error: Invalid file format. Excluded ${inValidFileCount} files.`;
    }
    else
      errorMessage.style.display = "none";

    // pass only the images and exclude other files 
    onFileSelect(reviewedFiles);
  };

  const removeImage = (file) => {
    const files = selectedFiles.filter((selectedFile) => {
      return selectedFile.name !== file.name;
    });

    setSelectedFiles(files);
  };

  return (
    <div className="shadow-xl p-3" id="dropContainer" onDragOver={allowDrop} onDrop={handleDrop}>
      <h2 className="text-lg font-bold mb-2">Select / Drag Image(s) to Compress:</h2>
      <p id="invalidFiles" className="mb-4 font-bold text-red-500 hidden"></p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
        title="Upload Images"
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
