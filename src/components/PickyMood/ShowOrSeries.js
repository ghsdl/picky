import React from 'react';
import './style.scss';

export default function ShowOrSeries() {
  const showOrSeries = ['Une série', 'Un film'];
  const showOrSeriesCard = showOrSeries.map((showOrSerie) => (
    <li key={showOrSerie} className="pickMoodContent-item">
      {showOrSerie}
    </li>
  ));
  return (
    <div>
      <div className="pickyMood">
        <div className="pickyMood-question">
          Que voulez-vous regarder ?
        </div>
      </div>
      <ul className="pickMoodContent">
        {showOrSeriesCard}
      </ul>
      <div className="search">
        <div className="search-button">
          Suivant
        </div>
      </div>
    </div>
  );
}
