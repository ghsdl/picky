// Import npm
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';
import 'react-toastify/dist/ReactToastify.css';
import logoPicky from 'src/assets/logoPicky.png';
import sadPopcorn from 'src/assets/sadpopcorn.jpg';
import Modal from 'react-modal';

// Import of components
import Card from 'src/containers/Card';
import DetailsMovie from 'src/components/PickyDetails/Movie';
import DetailsShow from 'src/components/PickyDetails/Show';
import Youtube from 'react-youtube';

// Import of scss
import './cards.scss';

// Display of the cards


Modal.setAppElement('#root')

const Cards = ({
  movies,
  shows, 
  loading, 
  currentPage, 
  results, 
  wish, 
  getBookmarksIds,
  genre,
  getDetails,
  getDetailsWish,
  genreDetails,
  details,
 }) => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./movieloading.json')
    });
    getBookmarksIds();
  }, [loading]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const genreOf = Object.keys(details) !==0 && details.genres && details.genres.length> 0  ? details.genres.join(", "): []; 
  
  const genreShow = details.length >0 ? Object.values(details.genres) : null
  const finalGenre = genreShow !== null ? genreShow.join(', ') : null
  const images = details.length > 0 && details.images ? details.images.show : null
  {// When the results are loading, "Loading" is displayed
  }

  if (loading === true) {
    return (
  <div>
    <p className="cards">Loading</p>
    <div className="cards-container" ref={container}></div>
  </div>
    )
  }
  {// When the results are not loading anymore, they are displayed
  }
  if (loading === false) {
    if (currentPage==="home") {
      // If the cards display the results of Picky Find
      if(movies.length === 0 && shows.length === 0) {
        // If there is no result, a message is displayed
        return (
          <div className="cards cards__result--empty">
            <div className="result--empty">
              <img className="cards__img__sadpopcorn" src={sadPopcorn} alt="Logo de Picky" />
              <p>Il n'y a aucun résultat pour votre recherche</p>
            </div>
          </div>
        )
      } else {
        return (
          <>
          <div className="cards">
          {// The movies are displayed
          }
          {movies.map((movie) => (
           <div onClick={() =>{openModal();getDetails(movie.id, 'movie')}} key={movie.id}>
              <Card 
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                platformsInfos={movie.svods}
                key= {movie.id}
                program={movie}
                genre= "movie"
              />
            </div>
            
          ))}
          {// The shows are displayed
          }
          {shows.map((show) => (
            <div onClick={() => {openModal();getDetails(show.id, 'show')}} key={show.id}>
              <Card
                id={show.id}
                title={show.title}
                poster={show.poster}
                platformsInfos={show.svods}
                key= {show.id}
                program={show}
                genre='show'
              />
            </div>
          ))}
          </div>
          {genreDetails==='movie'&&(
            <Modal     
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
            className="modal"
            >
              <DetailsMovie
                title = {details.title} 
                genre={genreOf} 
                year={details.production_year} 
                director={details.director} 
                trailer={details.trailer}  
                backdrop={details.backdrop} 
                synopsis={details.synopsis}
              />
            </Modal>
             )}

            {genreDetails==='show'&&(
              <Modal     
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
              className="modal"
              >
                <DetailsShow 
                  title={details.title}
                  seasons={details.seasons}
                  episodes={details.episodes}
                  genre={finalGenre}
                  year={details.creation}
                  trailer={details.next_trailer}
                  poster={images}
                  synopsis={details.description}
                />
            </Modal>
             )}
          </>
        );
      }
    } else if (currentPage === 'wish') {
      // If the cards display the watchlist of Picky Wish
      if(wish.length === 0) {
        // If there is no program in the watchlist, a message is displayed
        return (
          <div className="cards cards--empty">
            <div className="watchlist--empty">
              <img className="cards__img" src={logoPicky} alt="Logo de Picky" />
              <p> Vous n'avez pas encore de programme dans votre watchlist.</p>
            </div>
          </div>
        )
      } else {
        return (
         
        <div className="cards">
        {wish.map((program) => (
          <div onClick={() => {openModal();getDetailsWish(program.betaseries_id, program.title)}} key={program.betaseries_id} >
          <Card
            id={program.betaseries_id}
            title={program.title}
            poster={program.poster}
            platformsInfos={program.platforms}
            key= {program.id}
            program={program}
          />
          </div>
        ))}
        {genreDetails==='movie'&&(
        <Modal     
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
          className="modal"
          >
          <DetailsMovie
            title = {details.title} 
            genre={genreOf} 
            year={details.production_year} 
            director={details.director} 
            trailer={details.trailer}  
            backdrop={details.backdrop} 
            synopsis={details.synopsis}
          />
        </Modal>
   )}

      {genreDetails==='show'&&(
        <Modal     
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
          className="modal"
        >
          <DetailsShow 
            title={details.title}
            seasons={details.seasons}
            episodes={details.episodes}
            genre={finalGenre}
            year={details.creation}
            trailer={details.next_trailer}
            poster={images}
            synopsis={details.description}
          />
        </Modal>
      )}
        
    </div>
        );
      };

    } else if(currentPage === "mood") {
      // If the cards display the results of Picky Mood
      if(results.length === 0) {
        // If there is no result, a message is displayed
        return (
          <div className="cards cards__result--empty">
            <div className="result--empty">
              <img className="cards__img__sadpopcorn" src={sadPopcorn} alt="Logo de Picky" />
              <p>Il n'y a aucun résultat pour votre recherche</p>
            </div>
          </div>
        )
      } else {
        return (
          <>
          <div className="cards">
            {results.map((result) => (
              <div onClick={() => {openModal();getDetails(result.id, genre)}} key={result.id}>
                <Card
                  id={result.id}
                  title={result.title}
                  poster={result.poster}
                  platformsInfos={result.svods}
                  key= {result.id}
                  program={result}
                  
                />
              </div>
            ))}
            {genreDetails==='movie'&&(
        <Modal     
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
          className="modal"
          >
          <DetailsMovie
            title = {details.title} 
            genre={genreOf} 
            year={details.production_year} 
            director={details.director} 
            trailer={details.trailer}  
            backdrop={details.backdrop} 
            synopsis={details.synopsis}
          />
        </Modal>
   )}

      {genreDetails==='show'&&(
        <Modal     
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
          className="modal"
        >
          <DetailsShow 
            title={details.title}
            seasons={details.seasons}
            episodes={details.episodes}
            genre={finalGenre}
            year={details.creation}
            trailer={details.next_trailer}
            poster={images}
            synopsis={details.description}
          />
        </Modal>
   )}
            </div>
          </>
        )
      }
    }
    
  }      
};

export default Cards;
