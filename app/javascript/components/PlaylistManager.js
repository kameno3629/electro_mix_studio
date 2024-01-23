// app/javascript/components/PlaylistManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import PlaylistDetail from './PlaylistDetail';

function PlaylistManager() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [editingPlaylist, setEditingPlaylist] = useState(null);
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    axios.get('/playlists')
      .then(response => {
        setPlaylists(response.data);
      })
      .catch(error => {
        console.error("Error fetching playlists", error);
      });
  }, []);

  const createPlaylist = () => {
    axios.post('/playlists', { name: "New Playlist" })
      .then(response => {
        setPlaylists([...playlists, response.data]);
      })
      .catch(error => {
        console.error("Error creating playlist", error);
      });
  };

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleEdit = (playlist) => {
    setEditingPlaylist(playlist);
    setEditingName(playlist.name);
  };

  const cancelEditing = () => {
    setEditingPlaylist(null);
    setEditingName('');
  };

  const saveEditing = () => {
    axios.put(`/playlists/${editingPlaylist.id}`, { name: editingName })
      .then(response => {
        setPlaylists(playlists.map(playlist => playlist.id === editingPlaylist.id ? response.data : playlist));
        cancelEditing();
      })
      .catch(error => console.error("Error updating playlist", error));
  };

  const handleDelete = (playlistId) => {
    if (window.confirm("Are you sure you want to delete this playlist?")) {
      axios.delete(`/playlists/${playlistId}`)
        .then(() => {
          setPlaylists(playlists.filter(playlist => playlist.id !== playlistId));
        })
        .catch(error => console.error("Error deleting playlist", error));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Playlists</h2>
      <button onClick={createPlaylist} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create New Playlist
      </button>
      <div>
        {playlists.map(playlist => (
          <div key={playlist.id}>
            <Playlist {...playlist} onClick={() => handleSelectPlaylist(playlist)} />
            <button onClick={() => handleEdit(playlist)}>Edit</button>
            <button onClick={() => handleDelete(playlist.id)}>Delete</button>
          </div>
        ))}
      </div>
      {selectedPlaylist && <PlaylistDetail playlist={selectedPlaylist} />}
      {editingPlaylist && (
        <div>
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
          <button onClick={saveEditing}>Save</button>
          <button onClick={cancelEditing}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default PlaylistManager;





