import React, {useEffect} from 'react';
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
    { emotion: 'Amusé.e', genre: 'comedie' },
    { emotion: 'Amoureux.se', genre: 'romance' },
    { emotion: 'Ébahi.e', genre: 'science-fiction' },
    { emotion: 'Transporté.e', genre: 'aventure' },
    { emotion: 'Apeuré.e', genre: 'horreur' },
    { emotion: 'Instruit.e', genre: 'histoire' },
    { emotion: 'Scotché.e', genre: 'action' },
    { emotion: 'Aventurier.ère', genre: 'western' },
    { emotion: 'Intrigué.e', genre: 'mystere' },
    { emotion: 'Bouleversé.e', genre: 'drame' },
    { emotion: 'Attendri.e', genre: 'animation' },
    { emotion: 'Angoissé.e', genre: 'thriller' },
  ];

  const emotionsShows = [
    { emotion: 'Amusé.e', genre: 'comedy' },
    { emotion: 'Amoureux.se', genre: 'romance' },
    { emotion: 'Ébahi.e', genre: 'science_fiction' },
    { emotion: 'Transporté.e', genre: 'adventure' },
    { emotion: 'Apeuré.e', genre: 'horror' },
    { emotion: 'Instruit.e', genre: 'documentary' },
    { emotion: 'Scotché.e', genre: 'action' },
    { emotion: 'Diverti.e', genre: 'reality' },
    { emotion: 'Bouleversé.e', genre: 'drama' },
    { emotion: 'Attendri.e', genre: 'animation' },
    { emotion: 'Angoissé.e', genre: 'crime' },
    { emotion: 'Rêveur.se', genre: 'anime' },
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
