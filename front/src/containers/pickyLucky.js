import { connect } from 'react-redux';
import PickyLucky from 'src/components/pickyLucky';

import {getRandomForPickyLucky, cleanUpPickyLucky, getRandomForPickyLuckyShow} from 'src/actions/lucky';

const mapStateToProps = (state) => ({
lucky: state.pickyLucky.lucky,
loading: state.pickyLucky.loadingPicky,
movie: state.pickyLucky.movie,
luckyShow: state.pickyLucky.luckyShow,
show: state.pickyLucky.shows,
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
  }
  
})


export default connect(mapStateToProps, mapDispatchToProps)(PickyLucky);
