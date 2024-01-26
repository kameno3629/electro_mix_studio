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
        setPlaylists(Array.isArray(response.data) ? response.data : []);
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
      axios.delete(`/playlists/${playlistId}