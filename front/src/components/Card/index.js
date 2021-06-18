// Import npm
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Import scss
import './card.scss';

// Display of one card
const Card = ({ inWatchList, title }) => (
  // TODO: make the content of the card dynamic
  <div className="card">
    { // Poster of the program
    }
    <img
      className="card__poster"
      src="https://images.affiches-et-posters.com//albums/3/50249/affiche-friends-.jpg"
      alt="Affiche du programme"
    />
    { // Infos on the program (title, platforms and button to add it to/delete from watchlist)
    }
    <div className="card__infos">
      <p className="card__infos__title">{title}</p>
      <div className="card__infos__elements">
        <div className="card__platforms">
          { // TODO: make the display of the platforms dynamic
          }
          <img
            className="card__platform"
            src="https://www.numerama.com/content/uploads/2016/06/13502130_10153696123838870_522765110773053650_n-796x796-2.png"
            alt="Logo de la plateforme"
          />
          <img
            className="card__platform"
            src="https://play-lh.googleusercontent.com/VojafVZNddI6JvdDGWFrRmxc-prrcInL2AuBymsqGoeXjT4f9sv7KnetB-v3iLxk_Koi=w300"
            alt="Logo de la plateforme"
          />
        </div>
        {// If the program is in the watchlist, a button to delete it from it is displayed.
          // Otherwise, a button to add it to the watchlist is displayed.
          // TODO: Add the action to the button
        }
        <button
          className={classNames('card__watchlistButton', { 'card__watchlistButton--delete': inWatchList })}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  inWatchList: PropTypes.bool.isRequired,
};

export default Card;
