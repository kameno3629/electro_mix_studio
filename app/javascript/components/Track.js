// app/javascript/components/Track.js
import React from 'react';
import TrackDropZone from './TrackDropZone';

function Track({ id, sections }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      {sections.map((section, index) => (
        <TrackDropZone key={index} onDrop={handleDrop} />
      ))}
    </div>
  );
}

export default Track;
