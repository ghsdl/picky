import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Plateforms({
  backToEmotions,
  handleDisplayPickyMoodResults,
  onClickPlateform,
}) {
  const plateforms = [
    { name: 'Salto', id: 407 },
    { name: 'Netflix', id: 1 },
    { name: 'Canal+', id: 278 },
    { name: 'Amazon Prime Video', id: 3 },
    { name: 'OCS Go', id: 2 },
    { name: 'Disney +', id: 246 },
    { name: 'Apple TV+', id: 255 },
  ];

  const plateformsItem = plateforms.map((plateform) => (
    <li
      key={plateform.name}
      className="pickMoodContent-item"
      onClick={() => {
        onClickPlateform(plateform.id);
      }}
    >
      {(plateform.name)}
    </li>
  ));

  return (
    <>
      <div className="pickyMood">
        <div className="pickyMood-question">
          Quelles sont vos plateformes préférées?
        </div>
      </div>
      <ul className="pickMoodContent">
        {plateformsItem}
      </ul>

      <div className="button">
        <div className="button-precedent" onClick={backToEmotions}>
          Précedent
        </div>
        <div className="button-suivant" onClick={handleDisplayPickyMoodResults}>
          Search
        </div>
      </div>

    </>
  );
}

Plateforms.propTypes = {
  backToEmotions: PropTypes.func.isRequired,
  handleDisplayPickyMoodResults: PropTypes.func.isRequired,
  onClickPlateform: PropTypes.func.isRequired,
};
