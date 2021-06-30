import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Prepartion of the curtain menu link
import { Link } from 'react-router-dom';

import ScrollToTop from "src/components/ButtonTop";

// import pour la modal
import {
  Modal,
  Backdrop,
  Fade,
  makeStyles,
  ClickAwayListener,
} from '@material-ui/core';
// ClickAwayListener is here to spot the click outside its parent element
// Import pour les îcones de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEllipsisH, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

// Import de notre logo
import LogoPicky from 'src/assets/logoPicky.png'

// Import css
import './style.scss';

// import everything that concern the Dark Mode
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'src/components//Darkmode';
import { lightTheme, darkTheme, GlobalStyles } from './theme.js';
import Toggle from 'src/components/Toggle';

/* makeStyle = import for modal use, modal: handling placement of the modal, paper: handling style
for the modal, back ground collor, border... backDrop: handling modal background.
-> All those information available in browser's console.
*/
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    outline: 'none',
    padding: '5vh',
    borderRadius: '10px',
    alignSelf: 'flex-start',
    marginTop: '12vh',
    marginRight: '2vh',
  },

  backDrop: {
    backgroundColor: 'rgb(197 197 197 / 84%)',
  },
}));

// Creation of my component Header
export default function Header({ 
  isConnected, 
  deconnect, 
  resetPickyFind, 
  getProfil,
  pseudo,
}) {
  console.log(pseudo)
  // Hook for modal with two function, opening and closing.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    getProfil()
  }, )
  const handleClose = () => {
    setOpen(false);
  };
  // Hook for the curtain menu
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleClickAway = () => setSidebar(false);
  const classes = useStyles();
  const getStarted = <div> Get <br /> started </div>;

// Hook for the Dark Mode - line 141 you have the toggle for the Dark Mode
const [theme, toggleTheme] = useDarkMode();
const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={ themeMode }>
    <ScrollToTop />
      <GlobalStyles/>
        <header className="header">
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className={sidebar ? 'header-ellipsis--onSidebar' : 'header-ellipsis'}
                onClick={showSidebar}
              />

              <nav className={sidebar ? 'sidebar active' : 'sidebar'}>

                <ul onClick={showSidebar}>
                  <li><Link to="/">Picky Find</Link></li>
                  {isConnected && (
                    <li><Link to="/mood">Picky Mood</Link></li>
                  )}
                  {!isConnected && (
                    <li><Link to="/signUp">Picky Mood</Link></li>
                  )}
                  {isConnected && (
                    <li><Link to="/wish">Picky Wish</Link></li>
                  )}
                  {!isConnected && (
                    <li><Link to="/signUp">Picky Wish</Link></li>
                  )}
                  <li><Link to ="/pickyLucky" onClick={()=> window.location.href='/pickyLucky'}>Picky Lucky</Link></li>
                  <li><Link to="/about">Picky About</Link></li>
                </ul>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <div className="separation"></div>
                <div className="brandIcon">
                <a href="https://www.facebook.com/pickyaddict/" target="_blank">
                  <FontAwesomeIcon
                    className="faFacebookSquare"
                    icon={faFacebookSquare}
                  />
                </a>
                <a href="https://twitter.com/pickyaddict" target="_blank">
                  <FontAwesomeIcon
                    className="faTwitterSquare"
                    icon={faTwitterSquare}
                  />
                </a>
                <a href="https://www.instagram.com/pickyaddict/" target="_blank">
                <FontAwesomeIcon
                  className="faInstagramSquare"
                  icon={faInstagramSquare}
                />
                </a>
              </div>
              </nav>
              
            </div>
          </ClickAwayListener>
          <Link to="/" onClick={resetPickyFind}>
            <img src={LogoPicky} className="header-logo" alt="Logo Picky" />
          </Link>
          { !isConnected && (
            <>
              <div className="login">
                <Link
                  to="/signIn"
                  className="linkSignIn"
                >
                  Se connecter 
                </Link>
                <Link
                  to="/signUp"
                  className="linkSignUp"
                >
                  S'inscrire
                </Link>

                <Link
                  className="getStarted"
                  to="/signIn"
                >
                  {getStarted}
                </Link>
              </div>
              <Link
                className="getStarted"
                to="/signIn"
              >
                {getStarted}
              </Link>
            </>
          )}
          { isConnected && (
          <>
          
          <div>
           
            
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
                timeout: 500,
                className: classes.backDrop,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <ul className="test">
                    <li>
                    <p className="helloUser"> Hello {pseudo} </p>
                    </li>
                    <li className="test-Li">
                      <Link to="/profil"> <p>Profil</p> </Link>
                    </li>
                    <li onClick={deconnect} className="test-Li">
                      <Link to="/" onClick={()=> window.location.href='/'}>
                        <p>
                        <FontAwesomeIcon
                          className= "logOutIcon"
                          icon ={faSignOutAlt}>
                        </FontAwesomeIcon>
                        Déconnexion 
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Fade>
            </Modal>
          </div>
          </>
          )}
        </header>
    </ThemeProvider>  
  );
}
Header.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};
