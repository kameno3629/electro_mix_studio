import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackEditor = () => {
  const [audioSources, setAudioSources] = useState([]);
  const [selectedAudioSource, setSelectedAudioSource] = useState('');

  // データベースから音源リストを取得する
  useEffect(() => {
    const fetchAudioSources = async () => {
      try {
        const response = await axios.get(`/api/audio_sources?_=${new Date().getTime()}`);
        // response.dataが配列であることを確認し、そうでなければ空の配列を設定する
        setAudioSources(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching audio sources', error);
      }
    };

    fetchAudioSources();
  }, []);

  // 音源を選択するハンドラー
  const handleAudioSourceChange = (event) => {
    setSelectedAudioSource(event.target.value);
  };

  // トラックを保存するハンドラー（実装は省略）
  const handleSaveTrack = () => {
    // ...
  };

  return (
    <div className="track-editor">
      <select value={selectedAudioSource} onChange={handleAudioSourceChange}>
        {audioSources.map((source) => (
          <option key={source.id} value={source.id}>
            {source.name}
          </option>
        ))}
      </select>
      <button onClick={handleSaveTrack}>Save Track</button>
      {/* 他のボタンや機能は省略 */}
    </div>
  );
};

export default TrackEditor;