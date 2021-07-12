import { connect } from 'react-redux';
import ProfileField from 'src/components/ProfileField';
// import {} from 'src/actions/profileuser';
import {changeInputValue, reset} from 'src/actions/user';
import { resetProfil, getProfil, patchProfil, deleteProfil, patchPswsProfil } from 'src/actions/profil'
import { checkToken } from 'src/actions/profil';

const mapStateToProps = (state) => ({
  email: state.user.email,
  pseudo: state.user.pseudo,
  password: state.user.password,
  isConnected: state.status.isConnected,
  confirmationPassword: state.user.confirmationPassword,
  errorMessageEmailOrPseudo: state.profil.errorMessageEmailOrPseudo,
  errorMessagePswd: state.profil.errorMessagePswd,
  member: state.profil.member,
  profilPseudo: state.profil.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    const action = changeInputValue(value, key)
    dispatch(action)
  },
  
  resetPage: () => {
    const action = reset(); 
    dispatch(action)
  },

  getProfil: () => {
    dispatch(getProfil())
  },

  deleteProfil: () => {
    dispatch(deleteProfil())
  },

  patchProfil: () => {
    dispatch(patchProfil())
  },

  patchPswdProfil: () => {
    dispatch(patchPswsProfil())
  },
  resetProfil: () => {
    dispatch(resetProfil())
  },

  checkTokenValidity: () => {
    dispatch(checkToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileField);
