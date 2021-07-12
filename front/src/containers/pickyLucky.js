import { connect } from 'react-redux';
import PickyLucky from 'src/components/pickyLucky';

import {getRandomForPickyLucky, cleanUpPickyLucky, getRandomForPickyLuckyShow} from 'src/actions/lucky';
import { checkToken } from 'src/actions/profil';

const mapStateToProps = (state) => ({
lucky: state.pickyLucky.lucky,
loading: state.pickyLucky.loadingPicky,
movie: state.pickyLucky.movie,
luckyShow: state.pickyLucky.luckyShow,
show: state.pickyLucky.shows,
isConnected: state.status.isConnected
});
  

const mapDispatchToProps = (dispatch) => ({
  getLucky: () => {
    const action = getRandomForPickyLucky()
    dispatch(action)
  },

  getPicky: () => {
    const action = getRandomForPickyLuckyShow()
    dispatch(action)
  },

  resetPickyLucky: () => {
    const action = cleanUpPickyLucky()
    dispatch(action)
  },

  checkTokenValidity: () => {
    dispatch(checkToken());
  },
  
})


export default connect(mapStateToProps, mapDispatchToProps)(PickyLucky);
