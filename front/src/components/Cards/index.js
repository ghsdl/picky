// Import npm
import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import 'react-toastify/dist/ReactToastify.css';
import logoPicky from 'src/assets/logoPicky.png';
import sadPopcorn from 'src/assets/sadpopcorn.jpg';

// Import of components
import Card from 'src/containers/Card';


// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows, loading, currentPage, results, wish, getBookmarksIds }) => {
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
  }, [loading])

 
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
          <div className="cards">
          {// The movies are displayed
          }
          {movies.map((movie) => (
            <Card
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              platformsInfos={movie.svods}
              key= {movie.id}
              program={movie}
            />
          ))}
          {// The shows are displayed
          }
          {shows.map((show) => (
            <Card
              id={show.id}
              title={show.title}
              poster={show.poster}
              platformsInfos={show.svods}
              key= {show.id}
              program={show}
            />
          ))}
          </div>
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
          <Card
            id={program.betaseries_id}
            title={program.title}
            poster={program.poster}
            platformsInfos={program.platforms}
            key= {program.id}
            program={program}
          />
        ))}
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
          // If there is at least one result, it is displayed
          <div className="cards">
            {results.map((result) => (
              <Card
                id={result.id}
                title={result.title}
                poster={result.poster}
                platformsInfos={result.svods}
                key= {result.id}
                program={result}
              />
            ))}
            </div>
        )
      }
    }
  }
};

export default Cards;
