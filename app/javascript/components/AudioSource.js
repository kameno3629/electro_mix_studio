import React from 'react';

const AudioSource = ({ source }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('sourceId', source.id);
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {source.name}
    </div>
  );
};

export default AudioSource;