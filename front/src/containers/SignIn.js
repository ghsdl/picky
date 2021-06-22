import { connect } from 'react-redux';
import SignIn from 'src/components/SignIn';
import { changeInputValue, login, reset } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isConnected: state.status.isConnected,
  pseudo: state.user.pseudo,
  token: state.user.token,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },

  handleLogin: () => {
    const action = login();
    dispatch(action)
  },

  resetPage: () => {
    const action = reset();
    dispatch(action)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
