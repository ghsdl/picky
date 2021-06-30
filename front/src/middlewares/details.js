import axios from 'axios'; 
import { GET_PICKY_DETAILS, GET_PICKY_DETAILS_WISH } from '../actions/details';


const pickyDetails = (store) => (next) => (action) => {
  switch(action.type){
    case GET_PICKY_DETAILS: {
      const genre = action.genre
      const id = action.id

        if(genre==='movie'){
          axios.get(`https://projet-picky.herokuapp.com/movie/${id}`)
          .then((response)=> {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
          break;
        }else{
          axios.get(`https://projet-picky.herokuapp.com/show/${id}`)
          .then((response)=> {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
          break;
        }
    };
    case GET_PICKY_DETAILS_WISH: {
      const id = action.id
      const title = action.title

      axios.get(`https://projet-picky.herokuapp.com/movie/${id}`)
      
      .then((response)=> {
        const titleCheck = response.data[0].movie.title

        if(titleCheck !== title) {
          axios.get(`https://projet-picky.herokuapp.com/show/${id}`)

          .then((response)=> {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
        }
      })
      .catch((error) => {
        axios.get(`https://projet-picky.herokuapp.com/show/${id}`)

          .then((response)=> {
            console.log(response)
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