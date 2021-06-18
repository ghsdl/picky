import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import SignIn from 'src/components/SignIn';
// eslint-disable-next-line import/no-extraneous-dependencies
import { changeInputValue, login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isConnected: state.user.isConnected,
  pseudo: state.user.pseudo,
  token: state.user.token
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
