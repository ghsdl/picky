import React from 'react';
import Typical from 'react-typical';
import PropTypes from 'prop-types';
import './style.scss';

export default function Feelings({
  onClickEmotionsMovie,
  onClickEmotionsShows,
  ShowOrMovie,
  backToShowOrMovies,
  handleDisplayPickyMoodPlateforms,
  movieEmotions,

}) {
  const emotionsMovies = [
    { emotion: 'Amusé', genre: 'comedie' },
    { emotion: 'Amoureux', genre: 'romance' },
    { emotion: 'Ébahi', genre: 'science-fiction' },
    { emotion: 'Transporté', genre: 'aventure' },
    { emotion: 'Apeuré', genre: 'horreur' },
    { emotion: 'Instruit', genre: 'histoire' },
    { emotion: 'Scotché', genre: 'action' },
    { emotion: 'Aventurier', genre: 'western' },
    { emotion: 'Intrigué', genre: 'mystere' },
    { emotion: 'Bouleversé', genre: 'drame' },
    { emotion: 'Attendri', genre: 'animation' },
    { emotion: 'Angoissé', genre: 'thriller' },
  ];

  const emotionsShows = [
    { emotion: 'Amusé', genre: 'comedy' },
    { emotion: 'Amoureux', genre: 'romance' },
    { emotion: 'Ébahi', genre: 'science-fiction' },
    { emotion: 'Transporté', genre: 'aventure' },
    { emotion: 'Apeuré', genre: 'horror' },
    { emotion: 'Instruit', genre: 'documentary' },
    { emotion: 'Scotché', genre: 'action' },
    { emotion: 'Diverti', genre: 'reality' },
    { emotion: 'Bouleversé', genre: 'drame' },
    { emotion: 'Attendri', genre: 'animation' },
    { emotion: 'Angoissé', genre: 'crime' },
    { emotion: 'Rêveur', genre: 'anime' },
  ];

  const emotionsCardforMovie = emotionsShows.map((emotion) => {
    const classNameCliked = movieEmotions.includes(emotion.genre) ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
    return (
      <li
        key={emotion.emotion}
        className={classNameCliked}
        onClick={() => {
          onClickEmotionsShows(emotion.genre);
        }}
      >
        {(emotion.emotion)}
      </li>
    );
  });
  const emotionsCardforShows = emotionsMovies.map((emotion) => {
    const classNameCliked = movieEmotions.includes(emotion.genre) ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
    return (
      <li
        key={emotion.emotion}
        className={classNameCliked}
        onClick={() => {
          onClickEmotionsMovie(emotion.genre);
        }}
      >
        {(emotion.emotion)}
      </li>
    );
  });
  const className = movieEmotions.length <= 3 ? 'button-suivant' : 'button-suivant button-suivant--hidden';
  return (
    <>
      <div className="pickyMood">
        <Typical
          className="pickyMood-question"
          steps={['Vous souhaitez être...', 100, 'Vous souhaitez être amusé ?', 1000, 'Vous souhaitez être bouleversé ?', 1000, 'Vous souhaitez être attendri ?', 1000]}
          loop={Infinity}
        />
      </div>
      <ul className="pickMoodContent">
        { ShowOrMovie === 'shows' && (
          [emotionsCardforShows]
        )}
        { ShowOrMovie === 'movies' && (
          [emotionsCardforMovie]
        )}

      </ul>
      <div className="button">
        <div className="button-precedent" onClick={backToShowOrMovies}>
          Précedent
        </div>
        <div
          className={className}
          onClick={handleDisplayPickyMoodPlateforms}
        >
          Suivant
        </div>
      </div>
    </>
  );
}

Feelings.propTypes = {
  backToShowOrMovies: PropTypes.func.isRequired,
  handleDisplayPickyMoodPlateforms: PropTypes.func.isRequired,
  ShowOrMovie: PropTypes.string.isRequired,
  onClickEmotionsMovie: PropTypes.func.isRequired,
  onClickEmotionsShows: PropTypes.func.isRequired,
  movieEmotions: PropTypes.array,
};

Feelings.defaultProps = {
  movieEmotions: null,
};