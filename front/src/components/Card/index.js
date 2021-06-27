// Import npm
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import posterPopcorn from 'src/assets/poster-popcorn.jpg';

// Import scss
import './card.scss';

// Display of one card
const Card = ({ inWatchList, id, title, poster, platformsInfos, platforms, addRemoveWish, program, bookmarksIds, getBookmarksIds }) => {
  let isInWatchList = false;
  
  return (
    <div className="card">
      { // Poster of the program
      }
      <img
        className="card__poster"
        src={poster ? poster : posterPopcorn}
        alt="Affiche du programme"
      />
      { // Infos on the program (title, platforms and button to add it to/delete from watchlist)
      }
      <div className="card__infos">
        <p className="card__infos__title">{title}</p>
        <div className="card__infos__elements">
          <div className="card__platforms">
            {platformsInfos.map((platformInfo) => (
              platforms.map((platform) => {
                if(platformInfo.id === platform.id) {
                  return (
                    <img
                    key={platform.id}
                    className="card__platform"
                    src={platform.logo}
                    alt="Logo de la plateforme"
                  />
                  )
                }
              })
            ))}
          </div>
          {// If the program is in the watchlist, a button to delete it from it is displayed.
            // Otherwise, a button to add it to the watchlist is displayed.
          }
          {
            bookmarksIds.map((bookmarkId) => {
              if (bookmarkId === id) {
                isInWatchList = true;
              }
            })
          }
          {isInWatchList && (
            <button
            className='card__watchlistButton, card__watchlistButton--delete'
            type="button"
            onClick = {() => {
              removeFromWish(program);
              getBookmarksIds();
              }}
          >
            +
          </button>
          )}
          {!isInWatchList && (
            <button
            className='card__watchlistButton'
            type="button"
            onClick = {() => {
              addRemoveWish(program);
              getBookmarksIds();
            }}
          >
            +
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  inWatchList: PropTypes.bool.isRequired,
};

export default Card;
