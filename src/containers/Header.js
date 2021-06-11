/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import Header from 'src/components/Header';

// plusiuers Reducer => Mettre le nom du reducer correspondant dans le mapStateToProps
const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
