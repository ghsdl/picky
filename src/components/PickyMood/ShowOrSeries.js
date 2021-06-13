import React from 'react';
import './ShowOrSeries.scss';

export default function ShowOrSeries() {
  const showOrSeries = ['Une série', 'Un film'];
  const showOrSeriesCard = showOrSeries.map((showOrSerie) => (
    <li key={showOrSerie} className="showOrSeries-item">
      {showOrSerie}
    </li>
  ));
  return (
    <div>
      <div className="moodShowOrSeries">
        <div className="moodShowOrSeries-question">
          Que voulez-vous regarder ?
        </div>
      </div>
      <ul className="showOrSeries">
        {showOrSeriesCard}
      </ul>
      <div className="button">
        <div className="button-suivant">
          Suivant
        </div>
      </div>
    </div>
  );
}
