import axios from 'axios'; 
import { GET_RANDOM_FOR_PICKY_LUCKY } from 'src/actions/lucky';
import { setPickyToTrue, saveInfoPickyLucky} from 'src/actions/lucky'

const resultPickyLucky = (store) => (next) => (action) => {
  switch (action.type){
    case GET_RANDOM_FOR_PICKY_LUCKY: {
      axios.get('https://projet-picky.herokuapp.com/movies/random')
        .then((response)=> {
          //console.log(response.data[0].movies[0])
          const action = setPickyToTrue()
          const  movie  = response.data[0].movies[0]
          store.dispatch(saveInfoPickyLucky(movie))
          store.dispatch(action)
        })
        .catch((error) => {
          console.log(error)
        })
        break;
    }
    default:
      next(action)
  }
};

export default resultPickyLucky