import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import './profilefield.scss';
import Header from 'src/containers/Header';
import {
  Modal, Backdrop, Fade, makeStyles,
} from '@material-ui/core';
import Field from './Field.js'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    outline: 'none',
    padding: '5vh',
    borderRadius: '5px',
  },

  backDrop: {
    backgroundColor: 'rgb(197 197 197 / 84%)',
  },
}));

const ProfileField = ({
  email,
  changeField,
  pseudo,
  password,
  confirmationPassword,
  resetPage,
  isConnected,
  getProfil,
  deleteProfil,
  patchProfil,
  patchPswdProfil,
  errorMessageEmailOrPseudo,
  errorMessagePswd,
  member,
  profilPseudo,
  resetProfil,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    getProfil();
  }, [])

  useEffect(() => {
    return () => {
      resetPage();
      resetProfil();
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    patchProfil();
  }
  
  const handlePswdSubmit = (evt) => {
    evt.preventDefault();
    patchPswdProfil();
  }
  return (
    
  <> 
  {!isConnected && (
      <Redirect to="/signUp"/>
     )}
  <Header />
    <div className="profile">
      <h2 className="profile-title"> Mon Profil</h2>
    </div>
      <div className="form">
        <div className="form-input"> 
          <form onSubmit={handleSubmit}> 
            <div className="row"> 
            
              <Field
                namebis="Pseudo"
                type="text"
                name="pseudo"
                placeholder={profilPseudo}
                onChange={changeField}
                value={pseudo}
              />
              
              <Field
                namebis="Email"
                type="email"
                name="email"
                placeholder={member}
                onChange={changeField}
                value={email}
              />

              {errorMessageEmailOrPseudo.length > 1 &&  <p className="row-error"> 
                {errorMessageEmailOrPseudo}
              </p>
              }

              <button 
                className="updateEmailPseudo"
                type="submit"
              > 
              Modifier mon profil
              </button>
              <div>
              <ToastContainer
                className="toast-Container"
                color="black"
                position="top-center"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              </div>
            </div> 
          </form>
          
          <form onSubmit={handlePswdSubmit}>
            <div className="form-input">
              <div className="row">
                <Field
                  namebis="Nouveau mot de passe"
                  type="password"
                  name="password"
                  placeholder="Nouveau mot de passe"
                  onChange={changeField}
                  value={password}
                  required
                />
                <Field
                  namebis="Confirmation"
                  type="password"
                  name="confirmationPassword"
                  placeholder="Confirmation"
                  onChange={changeField}
                  value={confirmationPassword}
                  required
                />
                {errorMessagePswd.length > 1 &&  
                <p className="row-error"> 
                  {errorMessagePswd} 
                </p>
                }
                <button 
                  className="updateEmailPseudo"
                  type="submit"
                > 
                Modifier mon mot de passe
                </button>
              </div>
            </div>
          </form>
        </div>
    </div>
    <div className="profile-modal">
          <button type="button" className="profile-delete" onClick={handleOpen}> Supprimer mon compte </button>
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
            <Fade in={open} onClick={handleClose}>
              <div className={classes.paper}>
                <div className="modal-title">
                  <p className="p-modal"> Voulez allez supprimer votre compte.</p>
                  <p className="p-modal-confirm">  Voulez-vous continuer?</p>
                </div>
                
                <div className="button-modal">
                <button className="back-button" type="button"> Non </button>
                <button className="delete-button" type="button" onClick={deleteProfil}> Oui </button>
                  
                </div>
              </div>
            </Fade>
          </Modal>
    </div>
  </>
  );
};







export default ProfileField;
