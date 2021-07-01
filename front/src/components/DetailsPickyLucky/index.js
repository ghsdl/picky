import React from 'react';
import propTypes from 'prop-types';
import Youtube from 'react-youtube';
import './index.scss';
import noTrailers from './noTrailers.svg';
import sad from './sad.svg';

const Details = ({ movie }) => {
 const platform = movie.platform_links.length > 0 ? movie.platform_links.map(e => e.platform).join(", ") : [];
 
 const genre = movie.genres.length > 0  ? movie.genres.join(","): []; 
  return (
    <>
    <div className="detailsMovie">
      <h1 className="detailsMovie-title">{movie.title}</h1>
      {movie.platform_links.length === 0 && (
      <p className="detailsMovie-noPlateform"> 
        "{movie.title}" n'est disponible sur aucune plateforme. 
        <img src={sad} alt="sad" className="detailsMovie-noPlateform-sad"/>
      </p>
      )}
      {movie.genres.length > 0 && (
        <p className="detailsMovie-genre"> 
          Genre: {genre}
        </p>
      )}
      {movie.platform_links.length > 0 && (
        <p className="detailsMovie-plateform">
          "{movie.title}" est disponible sur {platform}
        </p>
      )}

      {movie.trailer && (
      <Youtube videoId={movie.trailer} className="detailsMovie-youtube"/>
      )}
      {!movie.trailer && movie.poster  && (
         <img src={movie.poster} alt="noTrailers" className="detailsMovie-noTrailer"/>
      )}
      {!movie.trailer && !movie.poster &&(
        <img src={noTrailers} alt="noTrailers" className="detailsMovie-noTrailer"/>
      )}
      <p className="detailsMovie-synopsis">
        {movie.synopsis}
      </p>
    </div>
    </>
  )
};

export default Details;