import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { clickOnToggle } from 'src/actions/header';


//? plusiuers Reducer => Mettre le nom du reducer correspondant dans le mapStateToProps
const mapStateToProps = (state) => ({ 
  isOpen: state.header.openSettings, 
});

const mapDispatchToProps= (dispatch) => ({
  onClickToggleMenuBurger: () => {
    console.log("Je clique sur mon menu curtain")
    const action = clickOnToggle();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)