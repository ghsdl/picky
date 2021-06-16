import { connect } from 'react-redux';
import ProfileField from 'src/components/ProfileField';
// import {} from 'src/actions/profileuser';

const mapStateToProps = (state) => ({
  email: state.user.email,
  username: state.user.username,
  bio: state.user.bio,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (email, username, bio, password) => {
    dispatch(updateProfile(email, username, bio, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileField);
