import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';


const mapStateToProps = (state) => ({
  
  isConnected: state.status.isConnected,
  
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
