// app/javascript/components/TrackDropZone.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function TrackDropZone({ onDrop }) {
  const [droppedTrackId, setDroppedTrackId] = useState(null);
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TRACK",
    drop: (item, monitor) => {
      onDrop(item.id);
      setDroppedTrackId(item.id); // ドロップされたトラックのIDを状態に保存
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
      {droppedTrackId && <p>Dropped Track ID: {droppedTrackId}</p>}
    </div>
  );
}

export default TrackDropZone;




