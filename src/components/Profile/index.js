import React from 'react';
import { Modal, Backdrop, Fade, makeStyles} from '@material-ui/core';

import Header from 'src/components/Header';
import ProfileField from 'src/components/ProfileField';

import './profile.scss';

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

export default function Profile () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Header />
    <div className="profile">  
      <h2 className="profile-title"> Mon Profil</h2>
      <ProfileField />
      <div className="profile-modal">
        <button className="profile-delete" onClick={handleOpen}> Supprimer mon compte </button>
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
                  <h2> Voulez vous vraiment supprimer votre compte ?</h2>
                  <button> Oui </button>
                  <button> Non </button>
                </div>
              </Fade>
            </Modal>
          </div>
    </div>
    </>
  );
};
