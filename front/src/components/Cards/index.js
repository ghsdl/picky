// Import npm
import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';

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
  }, [])

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
    {// If the current page is home (Picky Find), the results displayed depend on the request of
      // the API
    }
    if (currentPage==="home") {
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        {// The movies are displayed
        }
        {console.log(movies)}
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
    } else if (currentPage === 'wish') {
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

    } else if(currentPage === "mood") {
      if(results.length === 0) {
        return (
          <div className="cards-img">
            <p className="cards">Il n'y a aucun résultat pour votre recherche</p>
          </div>
        )
      } else {
        return (
          <div className="cards">
            {// The programs are displayed
            }
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
