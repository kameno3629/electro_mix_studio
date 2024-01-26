import React from 'react';

const AudioSourceUploader = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onUpload(file);
  };

  return (
    <input type="file" accept="audio/*" onChange={handleFileChange} />
  );
};

export default AudioSourceUploader;