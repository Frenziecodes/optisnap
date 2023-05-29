// App.js
import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import CompressionSettings from './components/CompressionSettings';
import CompressButton from './components/CompressButton';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressionSettings, setCompressionSettings] = useState({
    quality: 80,
    format: 'jpeg',
  });

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleCompressionSettingsChange = (settings) => {
    setCompressionSettings(settings);
  };

  const handleCompress = () => {
    // Perform compression logic using selectedFile and compressionSettings
    // Update the UI with the compressed image or display an error message
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">OptiSnap - Image Compression Tool</h1>
      <UploadForm onFileSelect={handleFileSelect} />
      <CompressionSettings
        settings={compressionSettings}
        onChange={handleCompressionSettingsChange}
      />
      <CompressButton onClick={handleCompress} />
    </div>
  );
}

export default App;
