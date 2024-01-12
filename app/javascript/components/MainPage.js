// app/javascript/components/MainPage.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableTrack from './DraggableTrack';
import TrackDropZone from './TrackDropZone';

function MainPage() {
  const tracks = [
    { id: 1, name: 'Track 1' },
    { id: 2, name: 'Track 2' },
    // 他のテスト用トラック
  ];

  const handleDrop = (trackId) => {
    console.log("Dropped track ID:", trackId);
    // ここでドロップされたトラックの処理を実装
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          {tracks.map(track => (
            <DraggableTrack key={track.id} id={track.id} name={track.name} />
          ))}
        </div>
        <TrackDropZone onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}

export default MainPage;

