import React from 'react';

import './style.scss';

export default function Plateforms() {
  const plateforms = ['Anime Digital Network', 'Salto', 'Netflix', 'Canal+', 'Amazon Prime Video', 'OCS Go', 'Disney +', 'Apple TV+'];
  const plateformsItem = plateforms.map((plateform) => (
    <li key={plateform} className="pickMoodContent-item">
      {(plateform)}
    </li>
  ));
  return (
    <div>
      <div className="pickyMood">
        <div className="pickyMood-question">
          Quelles sont vos plateformes préférées?
        </div>
      </div>
      <ul className="pickMoodContent">
        {plateformsItem}
      </ul>
      <div className="result">
        <div className="result-button">
          Search
        </div>
      </div>
    </div>
  );
}
