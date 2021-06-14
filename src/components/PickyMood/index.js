import React from 'react';
import Typical from 'react-typical';
import './style.scss';
import PropTypes from 'prop-types';

export default function PickyMood({
  displayPickyMoodShowOrSerie,
  displayPickyMoodEmotions,
  displayPickyMoodPlateforms,
  handleDisplayPickyMoodEmotions,
  backToShowOrMovies,
  handleDisplayPickyMoodPlateforms,
  backToEmotions,
  onClickShowOrMovies,

}) {
// ? Envoyer un objet au back construit via correspondance back
// ! Exemple d'api requête : https://api.betaseries.com/search/shows?v=3.0&=&genres+=action%2Cromance%2Ccomedy&svods+=1%2C2%2C3&limit=35&key=e7da6c21d678&
// TODO Dynamiser les tableaux d'object avec API via axios?
  const showOrMovies = [
    { name: 'Série', apiName: 'shows' },
    { name: 'Films', apiName: 'movies' },
  ];
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
    { emotion: 'Angoissé', genre: 'Thriller' },
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

  const plateforms = [
    { name: 'Salto', id: 407 },
    { name: 'Netflix', id: 1 },
    { name: 'Canal+', id: 278 },
    { name: 'Amazon Prime Video', id: 3 },
    { name: 'OCS Go', id: 2 },
    { name: 'Disney +', id: 246 },
    { name: 'Apple TV+', id: 255 },
  ];

  const showOrMovieCard = showOrMovies.map((showOrMovie) => (
    <li
      key={showOrMovie.name}
      className="pickMoodContent-item"
      onClick={() => {
        onClickShowOrMovies(showOrMovie.apiName);
      }}
    >
      {showOrMovie.name}
    </li>
  ));
  const emotionsCardforMovie = emotionsMovies.map((emotion) => (
    <li key={emotion.emotion} className="pickMoodContent-item">
      {(emotion.emotion)}
    </li>
  ));

  const emotionsCardforShows = emotionsShows.map((emotion) => (
    <li key={emotion.emotion} className="pickMoodContent-item">
      {(emotion.emotion)}
    </li>
  ));
  const plateformsItem = plateforms.map((plateform) => (
    <li key={plateform.name} className="pickMoodContent-item">
      {(plateform.name)}
    </li>
  ));
  return (
    <>
      { displayPickyMoodShowOrSerie && (
        <div>
          <div className="pickyMood">
            <div className="pickyMood-question">
              Vous êtes plutôt...
            </div>
          </div>
          <ul className="pickMoodContent">
            {showOrMovieCard}
          </ul>
          <div className="search">
            <div className="search-button" onClick={handleDisplayPickyMoodEmotions}>
              Suivant
            </div>
          </div>
        </div>
      )}
      { displayPickyMoodEmotions && (
        <>
          <div className="pickyMood">
            <Typical
              className="pickyMood-question"
              steps={['Vous souhaitez être...', 1000, 'Vous souhaitez être amusé ?', 1000, 'Vous souhaitez être bouleversé ?', 1000, 'Vous souhaitez être attendri ?', 1000]}
              loop={Infinity}
            />
          </div>
          <ul className="pickMoodContent">
            {emotionsCardforMovie}
          </ul>
          <div className="button">
            <div className="button-precedent" onClick={backToShowOrMovies}>
              Précedent
            </div>
            <div className="button-suivant" onClick={handleDisplayPickyMoodPlateforms}>
              Suivant
            </div>
          </div>
        </>
      )}

      { displayPickyMoodPlateforms && (

      <div>
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
          <div className="button-suivant">
            Search
          </div>
        </div>

      </div>
      )}
    </>
  );
}

PickyMood.propTypes = {
  displayPickyMoodShowOrSerie: PropTypes.bool.isRequired,
  displayPickyMoodEmotions: PropTypes.bool.isRequired,
  displayPickyMoodPlateforms: PropTypes.bool.isRequired,
  handleDisplayPickyMoodEmotions: PropTypes.func.isRequired,
  backToShowOrMovies: PropTypes.func.isRequired,
  handleDisplayPickyMoodPlateforms: PropTypes.func.isRequired,
  backToEmotions: PropTypes.func.isRequired,
  onClickShowOrMovies: PropTypes.func.isRequired,
};
