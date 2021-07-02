import axios from 'axios'; 
import { FETCH_PLATFORMS, savePlatforms } from 'src/actions/platforms';

const platforms = (store) => (next) => (action) => {
  switch (action.type){
   case FETCH_PLATFORMS: {
     // Request to get all platforms, to be able to get the logos
    axios.get('http://localhost:3000/platform')
      .then((response) => {
        const platforms = response.data[0].platforms.svod;
        store.dispatch(savePlatforms(platforms));
      })
      .catch((error) => {
        console.log(`error`, error)
      });
    break;
  }
    default:
      next(action);
  }
};

export default platforms;
