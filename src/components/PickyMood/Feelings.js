import React from 'react';
import Typical from 'react-typical';

import './Feelings.scss';

export default function Feelings() {
  const emotions = ['Amoureux', 'Effrayé', 'Ébahi', 'Transporté', 'Appeuré', 'Instruit', 'Heureux', 'Surpris', 'Extasié', 'Étonné'];
  const emotionsCard = emotions.map((emotion) => (
    <li key={emotion} className="emotions-item">
      {(emotion)}
    </li>
  ));
  console.log(emotionsCard);
  return (
    <div>
      <div className="moodEmotion">
        <Typical
          className="moodEmotion-question"
          steps={['Vous souhaitez être...', 1000, 'Vous souhaitez être étonné ?', 1000, 'Vous souhaitez être apeuré ?', 1000, 'Vous souhaitez être surpris ?', 1000]}
          loop={Infinity}
        />
      </div>
      <ul className="emotions">
        {emotionsCard}
      </ul>
      <div className="button">
        <div className="button-precedent">
          Précedent
        </div>
        <div className="button-suivant">
          Suivant
        </div>
      </div>
    </div>

  );
}
