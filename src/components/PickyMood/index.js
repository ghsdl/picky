import React from 'react';

import './style.scss';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import Results from 'src/components/PickyMood/Results';
// eslint-disable-next-line import/no-extraneous-dependencies
import ShowOrSeries from 'src/components/PickyMood/ShowOrSeries';
// eslint-disable-next-line import/no-extraneous-dependencies
import Feelings from 'src/components/PickyMood/Feelings';
// eslint-disable-next-line import/no-extraneous-dependencies
import Plateforms from 'src/components/PickyMood/Plateforms';

export default function PickyMood({
  displayPickyMoodShowOrSerie,
  displayPickyMoodEmotions,
  displayPickyMoodPlateforms,
  displayPickyMoodResults,
  handleDisplayPickyMoodEmotions,
  backToShowOrMovies,
  handleDisplayPickyMoodPlateforms,
  backToEmotions,
  onClickShowOrMovies,
  ShowOrMovie,
  handleDisplayPickyMoodResults,
  newResearch,
  onClickEmotionsMovie,
  onClickEmotionsShows,
  onClickPlateform,
}) {
  return (
    <>
      <Header />
      <ShowOrSeries
        displayPickyMoodShowOrSerie={displayPickyMoodShowOrSerie}
        onClickShowOrMovies={onClickShowOrMovies}
        ShowOrMovie={ShowOrMovie}
        handleDisplayPickyMoodEmotions={handleDisplayPickyMoodEmotions}
      />
      { displayPickyMoodEmotions && (
        <Feelings
          onClickEmotionsMovie={onClickEmotionsMovie}
          onClickEmotionsShows={onClickEmotionsShows}
          ShowOrMovie={ShowOrMovie}
          backToShowOrMovies={backToShowOrMovies}
          handleDisplayPickyMoodPlateforms={handleDisplayPickyMoodPlateforms}
        />
      )}

      { displayPickyMoodPlateforms && (
        <Plateforms
          backToEmotions={backToEmotions}
          handleDisplayPickyMoodResults={handleDisplayPickyMoodResults}
          onClickPlateform={onClickPlateform}
        />
      )}

      { displayPickyMoodResults && (

        <Results
          newResearch={newResearch}
        />
      )}
    </>
  );
}

PickyMood.propTypes = {
  displayPickyMoodShowOrSerie: PropTypes.bool.isRequired,
  displayPickyMoodEmotions: PropTypes.bool.isRequired,
  displayPickyMoodPlateforms: PropTypes.bool.isRequired,
  displayPickyMoodResults: PropTypes.bool.isRequired,
  handleDisplayPickyMoodEmotions: PropTypes.func.isRequired,
  backToShowOrMovies: PropTypes.func.isRequired,
  handleDisplayPickyMoodPlateforms: PropTypes.func.isRequired,
  backToEmotions: PropTypes.func.isRequired,
  onClickShowOrMovies: PropTypes.func.isRequired,
  ShowOrMovie: PropTypes.string.isRequired,
  handleDisplayPickyMoodResults: PropTypes.func.isRequired,
  newResearch: PropTypes.func.isRequired,
  onClickEmotionsMovie: PropTypes.func.isRequired,
  onClickEmotionsShows: PropTypes.func.isRequired,
  onClickPlateform: PropTypes.func.isRequired,
};
