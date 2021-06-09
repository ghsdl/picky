import React from 'react';
//import pour la modal
import {
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types';
//Import pour les îcones de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
//Import de notre logo
import logo from 'src/assets/logo_PopCorn.png' 
//Import css
import './style.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Header({isOpen, onClickToggleMenuBurger }){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classnames = isOpen ? 'header-ellipsis header-ellipsis--open' : 'header-ellipsis';
  console.log(isOpen)
  
  return (
    <header className='header'>

      <FontAwesomeIcon 
        icon={faEllipsisH}
        className={classnames}
        onClick={onClickToggleMenuBurger}
      />

      <img src={logo} className="header-logo" alt="Logo Picky"/>

      <FontAwesomeIcon 
        onClick={handleOpen}
        icon={faUserCircle}
        className="header-iconProfil" 
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>

    </header>
  )
};

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickToggleMenuBurger: PropTypes.func.isRequired,
};
