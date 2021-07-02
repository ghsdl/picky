import axios from 'axios'; 
import { GET_PICKY_DETAILS, GET_PICKY_DETAILS_WISH, savePickyDetails } from '../actions/details';


const pickyDetails = (store) => (next) => (action) => {
  switch(action.type){
    case GET_PICKY_DETAILS: {
      const genre = action.genre;
      const id = action.id;

        if(genre==='movie'){
          axios.get(`http://localhost:3000/movie/${id}`)
          .then((response)=> {
            const program = response.data[0].movie;
            const genreDetails = response.data[0];
            const genre = (Object.keys(genreDetails)[0]);
            /*
            if (Object.keys(program)[0] === "movie") {

            }
            {(Object.keys(program)[0] === "movie" && (

            ))}
            */
            store.dispatch(savePickyDetails(program, genre));
          })
          .catch((error) => {
            console.log(error)
          })
          break;
        }else{
          axios.get(`http://localhost:3000/show/${id}`)
          .then((response)=> {
            
            const program = response.data[0].show;
            const genreDetails = response.data[0]
            const genre =(Object.keys(genreDetails)[0])
            store.dispatch(savePickyDetails(program, genre));
          })
          .catch((error) => {
            console.log(error)
          })
          break;
        }
    };
    case GET_PICKY_DETAILS_WISH: {
      const id = action.id;
      const title = action.title;

      axios.get(`http://localhost:3000/movie/${id}`)
      
      .then((response)=> {
        const titleCheck = response.data[0].movie.title;

        if(titleCheck !== title) {
          axios.get(`http://localhost:3000/show/${id}`)

          .then((response)=> {
            const program = response.data[0].show;
            const genreDetails = response.data[0]
            const genre =(Object.keys(genreDetails)[0])
            store.dispatch(savePickyDetails(program, genre));
          })
          .catch((error) => {
            console.log(error)
          })
        } else {
          const program = response.data[0].movie;
          const genreDetails = response.data[0];
          const genre = (Object.keys(genreDetails)[0]);
          store.dispatch(savePickyDetails(program, genre));
        }
      })
      .catch((error) => {
        axios.get(`http://localhost:3000/show/${id}`)

          .then((response)=> {
            const program = response.data[0].show;
            const genreDetails = response.data[0];
            const genre = (Object.keys(genreDetails)[0]);
            store.dispatch(savePickyDetails(program, genre));
          })
          .catch((error) => {
            console.log(error)
          })
      })
      break;
    }
      default: 
      next(action)
    }
};
export default pickyDetails;