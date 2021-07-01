import React from 'react';
import logoPicky from 'src/assets/logoPicky.png';
import Youtube from 'react-youtube';
import './pickyDetails.scss'

const DetailsMovie = ({ title, genre, year, director, trailer, backdrop, synopsis }) => (
    <div className="pickyDetails">
        <h1 className="pickyDetails-title">
            {title}
        </h1>
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

        {director &&(
            <p className="pickyDetails-director">
            Réalisateur: <span className="boldChar">{director}</span>
            </p>
        )}
        
        {trailer &&(
            <Youtube videoId= {trailer} className="pickyDetails-trailer"/>
        )}
        { !trailer &&  (
            <img src= {backdrop} className="pickyDetails-poster"/>               
        )}
        { !trailer && !backdrop &&(
            <img src={logoPicky} className="pickyDetails-noImage"/>
        )}
        <p className="pickyDetails-synopsis">
            {synopsis}
        </p>

    </div>
);

export default DetailsMovie;