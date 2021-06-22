import { connect, } from 'react-redux';
import SignUpForm from 'src/components/SignUpForm';

import {
  changeInputValue,
  signUp,
  reset,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmationPassword: state.user.confirmationPassword,
  isConnected: state.status.isConnected,
  pseudo: state.user.pseudo,
  errorMessage: state.user.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },

  handleSignUp: (value, key) => {
    const action = signUp(value, key);
    dispatch(action)
  },
  resetPage: () => {
    dispatch(reset())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
