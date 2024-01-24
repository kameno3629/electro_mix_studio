// app/javascript/components/SampleItem.js
import React from 'react';
import { useDrag } from 'react-dnd';

function SampleItem({ id, name, type, length }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'SAMPLE',
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name} - {type} ({length})
    </div>
  );
}

export default SampleItem;
