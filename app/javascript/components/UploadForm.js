// app/javascript/components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios.post('/upload', formData) // Rails APIのエンドポイントに合わせて変更
      .then(response => {
        console.log("File uploaded successfully");
      })
      .catch(error => {
        console.error("Error uploading file", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Upload a Track</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={e => setFile(e.target.files[0])} className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:border-0 file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Upload</button>
      </form>
    </div>
  );
}

export default UploadForm;

