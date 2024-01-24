// app/javascript/components/TrackDropZone.js
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import axios from 'axios';

function TrackDropZone({ onDrop }) {
  const [droppedTrackId, setDroppedTrackId] = useState(null);
  const [trackDetails, setTrackDetails] = useState(null);

  useEffect(() => {
    if (droppedTrackId) {
      axios.get(`/tracks/${droppedTrackId}`)
        .then(response => {
          setTrackDetails(response.data);
        })
        .catch(error => console.error("Error fetching track details", error));
    }
  }, [droppedTrackId]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "SAMPLE",
    drop: (item, monitor) => {
      onDrop(item.id);
      setDroppedTrackId(item.id);
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
      {trackDetails && (
        <div>
          <p>Name: {trackDetails.name}</p>
          <p>Length: {trackDetails.length}</p>
          {/* その他の詳細情報を表示 */}
        </div>
      )}
    </div>
  );
}

export default TrackDropZone;
