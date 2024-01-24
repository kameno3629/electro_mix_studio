// app/javascript/packs/application.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from '../components/MainPage';
import "../stylesheets/application.scss"

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')));
  root.render(<MainPage />);
});

