// app/javascript/components/TrackDropZone.js
import React from 'react';
import { useDrop } from 'react-dnd';

function TrackDropZone({ onDrop }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TRACK",
    drop: (item, monitor) => onDrop(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={dropRef} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
      {/* ここにドロップされたトラックを表示 */}
    </div>
  );
}

export default TrackDropZone;
