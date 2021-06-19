import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Plateforms({
  backToEmotions,
  handleDisplayPickyMoodResults,
  lookForPickyMoodResult,
  onClickPlateform,
  platforms,
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

  const plateformsItem = plateforms.map((plateform) => {
    const classNameCliked = platforms.includes(plateform.id) ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
    return (
      <li
        key={plateform.name}
        className={classNameCliked}
        onClick={() => {
          onClickPlateform(plateform.id);
        }}
      >
        {(plateform.name)}
      </li>
    );
  });
  const className = platforms.length <= 0 ? 'button-suivant  button-suivant--hidden' : 'button-suivant';
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
        <div className={className} onClick={handleDisplayPickyMoodResults, lookForPickyMoodResult}>
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
  platforms: PropTypes.array,
  lookForPickyMoodResult: PropTypes.func.isRequired,
};

Plateforms.defaultProps = {
  platforms: PropTypes.null,
};
