import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default function ShowOrSeries({
  displayPickyMoodShowOrSerie,
  onClickShowOrMovies,
  ShowOrMovie,
  handleDisplayPickyMoodEmotions,
}) {
  const showOrMovies = [
    { name: 'Série', apiName: 'shows' },
    { name: 'Films', apiName: 'movies' },
  ];

  const showOrMovieCard = showOrMovies.map((showOrMovie) => {
    const classNameClicked = ShowOrMovie === showOrMovie.apiName ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
    return (
      <li
        key={showOrMovie.apiName}
        className={classNameClicked}
        onClick={() => {
          onClickShowOrMovies(showOrMovie.apiName);
        }}
      >
        {showOrMovie.name}
      </li>
    );
  });

  return (
    displayPickyMoodShowOrSerie && (
      <div>
        <div className="pickyMood">
          <div className="pickyMood-question">
            Vous êtes plutôt...
          </div>
        </div>
        <ul className="pickMoodContent">
          {showOrMovieCard}
        </ul>
        { ShowOrMovie !== '' && (
          <div className="search">
            <div className="search-button" onClick={handleDisplayPickyMoodEmotions}>
              Suivant
            </div>
          </div>
        )}
      </div>
    )
  );
}

ShowOrSeries.propTypes = {
  displayPickyMoodShowOrSerie: PropTypes.bool.isRequired,
  handleDisplayPickyMoodEmotions: PropTypes.func.isRequired,
  onClickShowOrMovies: PropTypes.func.isRequired,
  ShowOrMovie: PropTypes.string.isRequired,
};
