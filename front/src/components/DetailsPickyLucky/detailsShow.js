import React from 'react';
import './index.scss';
import noTrailers from './noTrailers.svg';
import sad from './sad.svg';
import Youtube from 'react-youtube';

const Detailshow = ({ show }) => {
  const images = show.length > 0 ? show.images.show : null
  const poster = show.length >0 ? show.images.poster : null
  const genreShow = show.length >0 ? Object.values(show.genres) : null
  const finalGenre = genreShow !== null ? genreShow.join(', ') : null
  
  return (
    <>
    <div className="detailsMovie">
      <h1 className="detailsMovie-title">{show.title}</h1>
      <p className="detailsMovie-genre">
        Nombre de saison : <span className="bold">{show.seasons}</span> &nbsp; &nbsp; Nombre d'épisodes : <span className="bold">{show.episodes}</span>
      </p>
      {show.country !== null && show.creation && (
        <p className="detailsMovie-genre">
          <span className="bold">{show.country}</span> &nbsp; &nbsp; <span className="bold">{show.creation}</span>
        </p>
      )}
       {show.country === null && show.creation && (
        <p className="detailsMovie-genre">
         <span className="bold"> {show.creation} </span>
        </p>
      )}
      {finalGenre !== null && finalGenre.length > 0 && (
         <p className="detailsMovie-genre">
          Genre : <span className="bold">{finalGenre}</span>
        </p>
      )}
      {show.next_trailer &&(
        <Youtube videoId={show.next_trailer} className="detailsMovie-youtube"/>
      )}
      { !show.next_trailer && images && (
         <img src={images} alt="noTrailers" className="detailsMovie-noTrailerShow"/>
      )}
      {!show.next_trailer && !images && poster &&(
        <img src={poster} alt="noTrailers" className="detailsMovie-noTrailerShow"/>
      )}
      { !show.next_trailer && !images && !poster &&(
        <img src={noTrailers} alt="noTrailers" className="detailsMovie-noTrailer"/>
      )}
      <p className="detailsMovie-synopsis">
        {show.description}
      </p>
    </div>
    </>
  )
};

export default Detailshow;