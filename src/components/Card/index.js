import React from 'react';

import './card.scss';

const Card = () => (
  <div className="card">
    <img
      className="card__poster"
      src="https://images.affiches-et-posters.com//albums/3/50249/affiche-friends-.jpg"
      alt="Affiche du programme"
    />
    <div className="card__infos">
      <p className="card__infos__title">Friends</p>
      <div className="card__infos__elements">
        <div className="card__platforms">
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
        <button
          className="card__watchlistButton"
          type="button"
        >
          +
        </button>
      </div>
    </div>
  </div>
);

export default Card;
