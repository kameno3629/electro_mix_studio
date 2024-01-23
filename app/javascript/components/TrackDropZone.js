import React from 'react';
import { useDrop } from 'react-dnd';

function TrackDropZone({ onDrop, droppedTrackId }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TRACK",
    drop: (item, monitor) => onDrop(item.id),
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
      {droppedTrackId && <p>Dropped Track ID: {droppedTrackId}</p>} {/* ドロップされたトラックのIDを表示 */}
    </div>
  );
}

export default TrackDropZone;
