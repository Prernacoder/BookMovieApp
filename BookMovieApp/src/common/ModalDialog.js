import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Tab,Tabs,AppBar} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// import { formatMs } from '@material-ui/core/styles/transitions';

import LoginForm from './LoginForm';

const ModalDialog = ({ open, handleClose }) => {

    
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {/* form to be created */}

      <AppBar>
            <Tabs>
                <Tab label ="LOGIN"/>
                <Tab label ="Register"/>
            </Tabs>
        </AppBar>
      <LoginForm handleClose={handleClose} />
     
    </Dialog>
  );
};

export default ModalDialog;