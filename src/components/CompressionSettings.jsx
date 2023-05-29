// components/CompressionSettings.js
import React from 'react';

function CompressionSettings({ settings, onChange }) {
  const handleQualityChange = (event) => {
    const quality = Number(event.target.value);
    onChange({ ...settings, quality });
  };

  const handleFormatChange = (event) => {
    const format = event.target.value;
    onChange({ ...settings, format });
  };

  return (
    <div className='mb-4'>
      <h2 className="text-lg font-bold mb-2">Compression Settings:</h2>
      <label htmlFor="quality" className="mr-2">
        Quality:
        <input
          type="range"
          id="quality"
          min="1"
          max="100"
          value={settings.quality}
          onChange={handleQualityChange}
          className="ml-2"
        />
      </label>
      <label htmlFor="format" className="ml-4">
        Format:
        <select
          id="format"
          value={settings.format}
          onChange={handleFormatChange}
          className="ml-2"
        >
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
        </select>
      </label>
    </div>
  );
}

export default CompressionSettings;
