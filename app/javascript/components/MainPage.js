import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableTrack from './DraggableTrack';
import TrackDropZone from './TrackDropZone';

function MainPage() {
  const [tracks, setTracks] = useState([]);
  const [droppedTrackId, setDroppedTrackId] = useState(null); // ドロップされたトラックのIDを保存するための状態

  useEffect(() => {
    axios.get('/tracks')
      .then(response => {
        setTracks(response.data);
      })
      .catch(error => {
        console.error("Error fetching tracks", error);
      });
  }, []);

  const handleDrop = (trackId) => {
    console.log("Dropped track ID:", trackId);
    setDroppedTrackId(trackId); // ドロップされたトラックのIDを状態にセット
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div>
          {tracks.map(track => (
            <DraggableTrack key={track.id} id={track.id} name={track.name} />
          ))}
        </div>
        <TrackDropZone onDrop={handleDrop} droppedTrackId={droppedTrackId} />
      </div>
    </DndProvider>
  );
}

export default MainPage;
