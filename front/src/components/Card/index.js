// Import npm
import React from 'react';
import posterPopcorn from 'src/assets/poster-popcorn.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import scss
import './card.scss';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Display of one card
const Card = ({ id, title, poster, platformsInfos, platforms, addRemoveWish, removeFromWish, program, bookmarksIds, getBookmarksIds, loadBookmark }) => {
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
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="2x"
              className='card__watchlistButton'
              onClick = {() => {
                removeFromWish(id);
                }}
            />
          )}
          {!isInWatchList && (
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="2x"
              className='card__watchlistButton'
              onClick = {() => {
              addRemoveWish(program);
            }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
