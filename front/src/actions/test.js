import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  makeStyles,
} from '@material-ui/core';

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

const modal = ({ }) => {

  const [open, setOpen] = react.useState
    const handleOpen = () => {
    console.log('je suis dans handleOpen');
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
    <div className={handleOpen}>
      test
    </div>
    <div>
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
         test
        </div>
      </Fade>
    </Modal>
  </div>
  </>
  )
}

export default modal;