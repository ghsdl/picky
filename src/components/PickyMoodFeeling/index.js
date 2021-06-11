import React from 'react';
import Typical from 'react-typical';

import './style.scss';

export default function PickyMoodFeeling() {
  return (
    <div className="moodEmotion">
      <Typical
        className="moodEmotion-question"
        steps={['Vous souhaitez être...', 1000, 'Vous souhaitez être étonné ?', 1000, 'Vous souhaitez être apeuré ?', 1000, 'Vous souhaitez être surpris ?', 1000]}
        loop={Infinity}
       
      />
    </div>
  );
}
