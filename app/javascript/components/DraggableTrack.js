// app/javascript/components/DraggableTrack.js
import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableTrack({ id, name }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TRACK",
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
}

export default DraggableTrack;
