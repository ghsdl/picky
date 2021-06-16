import { connect } from 'react-redux';
import SignUpForm from 'src/components/SignUpForm';

const mapStateToProps = (state) => ({
  pseudoInput: state.signup.pseudo,
  emailInput: state.signup.email,
  passwordInput: state.signup.password,
  passwordConfirmation: state.signup.passwordConfirmation,
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
