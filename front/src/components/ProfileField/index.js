import React, { useEffect } from 'react';
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
    borderRadius: '50px',
    alignSelf: 'flex-start',
    marginTop: 50,
    marginRight: 50,
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
  resetPage,
  isConnected,
  getProfil,
  deleteProfil,
  patchProfil
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
      
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    patchProfil();
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
        <p className="form-p"> Modifier vos info's personnelles</p>
        <div className="row"> 
        
          <Field
            type="text"
            name="pseudo"
            placeholder="pseudo"
            onChange={changeField}
            value={pseudo}
          />
          
          <Field
            type="email"
            name="email"
            placeholder="email"
            onChange={changeField}
            value={email}
          />
          <button 
            className="field-update"
            type="submit"
          > 
          Modifer votre profil
          </button>
        </div> 
        </form>
        <form>
          <div className="row">
            <Field
            type="password"
            name="password"
            placeholder="password"
            onChange={changeField}
            value={password}
            />
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
                <h2> Voulez vous vraiment supprimer votre compte ?</h2>
                <button type="button" onClick={deleteProfil}> Oui </button>
                <button type="button"> Non </button>
              </div>
            </Fade>
          </Modal>
    </div>
  </>
  );
};







export default ProfileField;
