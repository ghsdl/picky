import { connect } from 'react-redux';
import PickyLucky from 'src/components/pickyLucky';

import {getRandomForPickyLucky, cleanUpPickyLucky} from 'src/actions/lucky';

const mapStateToProps = (state) => ({
lucky: state.pickyLucky.lucky,
loading: state.pickyLucky.loadingPicky,
movie: state.pickyLucky.movie,
isConnected: state.status.isConnected
});
  

const mapDispatchToProps = (dispatch) => ({
  getLucky: () => {
    const action = getRandomForPickyLucky()
    dispatch(action)
  },

  resetPickyLucky: () => {
    const action = cleanUpPickyLucky()
    dispatch(action)
  }
  
})


export default connect(mapStateToProps, mapDispatchToProps)(PickyLucky);
