import React from 'react';
import Typical from 'react-typical';

import './style.scss';

export default function Feelings() {
  const emotions = ['Amoureux', 'Effrayé', 'Ébahi', 'Transporté', 'Appeuré', 'Instruit', 'Heureux', 'Surpris', 'Extasié', 'Étonné'];
  const emotionsCard = emotions.map((emotion) => (
    <li key={emotion} className="pickMoodContent-item">
      {(emotion)}
    </li>
    
  return (
    
  );
}
