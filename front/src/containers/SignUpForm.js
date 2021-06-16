import { connect } from 'react-redux';
import SignUpForm from 'src/components/SignUpForm';

import {
  changeInputValue,
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

  handleSignUp: () => {
    console.log('Jattend patiemment mon heure pour minscrire, MAIS LE BACK, QUE FAITES VOUS?');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
