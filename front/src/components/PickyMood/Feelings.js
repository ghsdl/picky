import React, {useEffect} from 'react';
import Typical from 'react-typical';
import PropTypes from 'prop-types';
import './style.scss';

export default function Feelings({
  onClickEmotionsMovie,
  onClickEmotionsShows,
  ShowOrMovie,
  backToShowOrMovies,
  handleDisplayPickyMoodPlateforms,
  emotions,

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
    { emotion: 'Ébahi', genre: 'science_fiction' },
    { emotion: 'Transporté', genre: 'adventure' },
    { emotion: 'Apeuré', genre: 'horror' },
    { emotion: 'Instruit', genre: 'documentary' },
    { emotion: 'Scotché', genre: 'action' },
    { emotion: 'Diverti', genre: 'reality' },
    { emotion: 'Bouleversé', genre: 'drama' },
    { emotion: 'Attendri', genre: 'animation' },
    { emotion: 'Angoissé', genre: 'crime' },
    { emotion: 'Rêveur', genre: 'anime' },
  ];
  
  const emotionsCardforMovie = emotionsMovies.map((emotion) => {
    const classNameCliked = emotions.includes(emotion.genre) ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
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
  const emotionsCardforShows = emotionsShows.map((emotion) => {
    const classNameCliked = emotions.includes(emotion.genre) ? 'pickMoodContent-item pickMoodContent-item-clicked' : 'pickMoodContent-item';
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
  const className = emotions.length < 1 ? 'button-suivant  button-suivant--hidden' : 'button-suivant';
  return (
    <>
      <div className="pickyMood">
        <h2 className="pickyMood-question">
          Vous souhaitez être...
        </h2>
          
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
  emotions: PropTypes.array,
};

Feelings.defaultProps = {
  emotions: null,
};
