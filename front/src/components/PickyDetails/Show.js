import React from 'react';
import logoPicky from 'src/assets/logoPicky.png';
import Youtube from 'react-youtube';
import './pickyDetails.scss'

const DetailsShow = ({ title, seasons, episodes, genre, year, trailer, poster, synopsis }) => (
    <div className="pickyDetails">
        <h1 className="pickyDetails-title">
            {title}
        </h1>
        <p className="pickyDetails-nbSeasonEpisod">
        Nombre de saisons : {seasons} &nbsp; &nbsp; Nombre d'épisodes : {episodes}
        </p>
        { genre &&(
            <p className="pickyDetails-genre">
            Genre : <span className="boldChar">{genre}</span>
            </p>
        )}
        { year &&(
            <p className="pickyDetails-release"> 
            Année: <span className="boldChar">{year}</span>
            </p>
        )}              
        { trailer &&(
            <Youtube videoId={trailer} className="pickyDetails-trailer"/>
        )}
        { !trailer && poster && (
            <img src={poster} className="pickyDetails-poster"/>
        )}
        { !trailer && !poster &&(
            <img src={logoPicky} className="pickyDetails-noImage"/>
        )}
        <p className="pickyDetails-synopsis">
            {synopsis}
        </p>

    </div>
);

export default DetailsShow;