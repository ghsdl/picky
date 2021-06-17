import { connect, } from 'react-redux';
import SignUpForm from 'src/components/SignUpForm';

import {
  changeInputValue,
  signUp,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmationPassword: state.user.confirmationPassword,
  isConnected: state.user.isConnected,
  pseudo: state.user.pseudo,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
