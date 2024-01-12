// app/javascript/components/TrackList.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    axios.get('/tracks')
      .then(response => {
        setTracks(response.data);
        // GSAPアニメーションの追加
        gsap.from(listRef.current, { duration: 1, opacity: 0, y: -20 });
      })
      .catch(error => {
        console.error("Error fetching tracks", error);
      });
  }, []);

  return (
    <div ref={listRef} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tracks</h2>
      <ul className="list-disc pl-5">
        {tracks.map(track => (
          <li key={track.id} className="mb-2">{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;

