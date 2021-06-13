import React from 'react';

import './Plateforms.scss';

export default function Plateforms() {
  const plateforms = ['Anime Digital Network', 'Salto', 'Netflix', 'Canal+', 'Amazon Prime Video', 'OCS Go', 'Disney +', 'Apple TV+'];
  const plateformsItem = plateforms.map((plateform) => (
    <li key={plateform} className="plateforms-item">
      {(plateform)}
    </li>
  ));
  return (
    <div>
      <div className="moodPlateform">
        <div className="moodPlateform-question">
          Quelles sont vos plateformes préférées?
        </div>
      </div>
      <ul className="plateforms">
        {plateformsItem}
      </ul>
      <div className="button">
        <div className="button-result">
          Search
        </div>
      </div>
    </div>
  );
}
