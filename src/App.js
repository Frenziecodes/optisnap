import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import CompressionSettings from './components/CompressionSettings';
import CompressButton from './components/CompressButton';
import ImageCompressor from 'image-compressor.js';
import AdvertBanner from './components/AdvertBanner';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressionSettings, setCompressionSettings] = useState({
    quality: 80,
    format: 'jpeg',
  });
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalFileSize, setOriginalFileSize] = useState(null);
  const [compressedFileSize, setCompressedFileSize] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setOriginalFileSize(file.size);
  };

  const handleCompressionSettingsChange = (settings) => {
    setCompressionSettings(settings);
  };

  const handleCompress = () => {
    if (selectedFile) {
      const compressor = new ImageCompressor();
      compressor.compress(selectedFile, {
        quality: compressionSettings.quality / 100,
        mimeType: `image/${compressionSettings.format}`,
        success(result) {
          const reader = new FileReader();
          reader.onload = () => {
            setCompressedImage(reader.result);
            setCompressedFileSize(result.size);
          };
          reader.readAsDataURL(result);
        },
        error(error) {
          console.error('Image compression failed:', error);
        },
      });
    } else {
      // Handling the case when no file is selected
    }
  };

  const handleDownload = () => {
    if (compressedImage) {
      const link = document.createElement('a');
      link.href = compressedImage;
      link.download = 'compressed_image.jpg';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  };

  return (
    <div className="container min-h-screen bg-white">
      <div className="flex items-center p-4 justify-between shadow-lg mb-1">
        <h1 className="text-2xl font-bold mr-2">OptiSnap</h1>
        <a href="https://github.com/Frenziecodes/optisnap" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" height="30">
            <path d="M16.29,0A16.29,16.29,0,0,0,.42,17.54c0,7.29,4.72,13.49,11.28,15.67.82.15,1.11-.36,1.11-.79,0-.39,0-1.42,0-2.79-4.59,1-5.56-2.21-5.56-2.21A4.39,4.39,0,0,0,4.2,25.17c-1.51-.84.11-.82.11-.82a3.47,3.47,0,0,1,2.53,1.71,3.48,3.48,0,0,0,4.77,1.36,3.49,3.49,0,0,1,1-2.19c-3.6-.41-7.4-1.8-7.4-8a6.28,6.28,0,0,1,1.68-4.34,5.81,5.81,0,0,1,.16-4.29s1.36-.43,4.45,1.66a15.3,15.3,0,0,1,8.12,0C22.77,6.43,24.13,7.86,24.13,7.86a5.8,5.8,0,0,1,.16,4.29,6.27,6.27,0,0,1,1.68,4.34c0,6.23-3.81,7.58-7.44,7.98a3.9,3.9,0,0,1,1.12,3,.79.79,0,0,0,.09.32c0,.38.09,1.4,0,2.79,0,.43.29.94,1.12.79A16.29,16.29,0,0,0,16.29,0Z" />
          </svg>
        </a>
      </div>
      <AdvertBanner/>

      <div className="flex flex-col md:flex-row mb-2">
        <div className="p-4 w-full">
          <UploadForm onFileSelect={handleFileSelect} selectedFile={selectedFile} />
          <div className="h-52 shadow-2xl p-4 pt-6 mt-2">
            <CompressionSettings
              settings={compressionSettings}
              onChange={handleCompressionSettingsChange}
            />
            <CompressButton onClick={handleCompress} />
          </div>
        </div>

        <div className="bg-white w-full p-4">
          <div className='shadow-xl p-4'>
            <h2 className="text-lg font-bold mb-2">Compressed Image:</h2>
            <div className="w-40 h-40 bg-gray-200 border border-gray-400">
              {compressedImage ? (
                <img src={compressedImage} alt="Compressed" className="w-full h-full object-cover" />
              ) : (
                'No image compressed'
              )}
            </div>
            {compressedFileSize && (
              <p className="text-sm mt-2">
                Compressed File Size: {(compressedFileSize / 1024).toFixed(2)} KB
              </p>
            )}
            {selectedFile && (
              <p className="text-sm mt-2">
                Original File Size: {(originalFileSize / 1024).toFixed(2)} KB
              </p>
            )}
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleDownload}>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* <div className="bg-blue-500 p-4 text-white text-center">
        <h2 className="text-xl font-bold">Promote Your Business Here!</h2>
        <p className="text-lg">Interested in advertising with us?</p>
        <p className="text-lg">Fill out our <a href="https://forms.gle/gfKxb65UKHBVzxbj8" target="_blank" rel="noopener noreferrer" className="underline">advertising inquiry form</a> to get started.</p>
      </div> */}
    </div>
  );
}

export default App;
