import { connect } from 'react-redux';
import SignUpForm from 'src/components/SignUpForm';

import {
  changePseudoInput, changeEmailInput, changePasswordInput, changeConfirmationPasswordInput,
} from 'src/actions/signup';

const mapStateToProps = (state) => ({
  pseudoInput: state.signup.pseudoInput,
  emailInput: state.signup.emailInput,
  passwordInput: state.signup.passwordInput,
  confirmationPasswordInput: state.signup.confirmationPasswordInput,
});

const mapDispatchToProps = (dispatch) => ({
  onPseudoChange: (event) => {
    dispatch(changePseudoInput(event.target.value));
  },
  onEmailChange: (event) => {
    dispatch(changeEmailInput(event.target.value));
  },
  onPasswordChange: (event) => {
    dispatch(changePasswordInput(event.target.value));
  },
  onConfirmationPasswordChange: (event) => {
    dispatch(changeConfirmationPasswordInput(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
