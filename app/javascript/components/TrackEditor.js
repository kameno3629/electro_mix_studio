import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';

import AudioSource from './AudioSource';
import AudioEffectControl from './AudioEffectControl';
import AudioVisualizer from './AudioVisualizer';
import Track from './Track'; // 新しいTrackコンポーネントをインポート

const TrackEditor = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleDrop = useCallback((item, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.initialLeft + delta.x);
    const top = Math.round(item.initialTop + delta.y);
    // 音源の長さに基づいてトラックの長さを設定
    const length = item.length || 100; // 仮の長さを設定
    setTracks(tracks.map(track => {
      if (track.id === item.id) {
        return { ...track, left, top, length };
      }
      return track;
    }));
  }, [tracks]);

  const [, drop] = useDrop({
    accept: 'audio',
    drop(item, monitor) {
      handleDrop(item, monitor);
    },
  });

  // 新しいトラックを作成するハンドラー
  const handleCreateTrack = () => {
    const newTrack = {
      id: Date.now(),
      audioSource: null,
      audioData: null,
      left: 0,
      top: 0,
      length: 100, // 仮の長さを設定
    };
    setTracks([...tracks, newTrack]);
  };

  // 既存の関数は省略しています...

  return (
    <div ref={drop} className="track-editor">
      {tracks.map((track) => (
        <Track key={track.id} track={track} setSelectedTrack={setSelectedTrack} />
      ))}
      <button onClick={handleSaveTrack}>Save</button>
      <button onClick={handleExportTrack}>Export</button>
      <button onClick={handleCreateTrack}>Create New Track</button>
    </div>
  );
};

export default TrackEditor;