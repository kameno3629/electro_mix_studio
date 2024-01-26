import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SampleItem from './SampleItem';

function SampleList() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    axios.get('/samples')
      .then(response => {
        setSamples(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error("Error fetching samples", error);
      });
  }, []);

  // ドラッグ開始時のイベントハンドラ
  const handleDragStart = (e, sample) => {
    // ドラッグされるデータのidを設定します
    e.dataTransfer.setData('text/plain', sample.id);
  };

  return (
    <div>
      <h2>Samples</h2>
      {samples.map(sample => (
        // draggable属性を追加し、onDragStartイベントにハンドラを設定
        <div 
          key={sample.id} 
          draggable="true" 
          onDragStart={(e) => handleDragStart(e, sample)}
        >
          <SampleItem {...sample} />
        </div>
      ))}
    </div>
  );
}

export default SampleList;