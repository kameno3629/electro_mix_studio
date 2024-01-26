// Electro_Mix_Studio/app/javascript/components/TrackDropZone.js
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import axios from 'axios';

function TrackDropZone({ onDrop }) {
  const [droppedSampleId, setDroppedSampleId] = useState(null);
  const [sampleDetails, setSampleDetails] = useState(null);

  useEffect(() => {
    if (droppedSampleId) {
      axios.get(`/samples/${droppedSampleId}`)
        .then(response => {
          setSampleDetails(response.data);
        })
        .catch(error => console.error("Error fetching sample details", error));
    }
  }, [droppedSampleId]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "SAMPLE",
    drop: (item, monitor) => {
      onDrop(item.id);
      setDroppedSampleId(item.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={dropRef} style={{ 
        backgroundColor: isOver ? 'lightgreen' : 'white',
        border: '2px dashed gray',
        padding: '10px',
        margin: '10px 0',
        minHeight: '100px'
    }}>
      {sampleDetails && (
        <div>
          <p>Name: {sampleDetails.name}</p>
          <p>Length: {sampleDetails.length}</p>
          {/* その他の詳細情報を表示 */}
        </div>
      )}
    </div>
  );
}

export default TrackDropZone;