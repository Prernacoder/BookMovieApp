import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Tab, Tabs } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// import { formatMs } from '@material-ui/core/styles/transitions';

import LoginForm from './LoginForm';

const ModalDialog = ({ open, handleClose }) => {
const [value,setValue]=React.useState(0);
 const handleTabs =(e,val)=>{
  console.warn(val);
  setValue(val);
 }
  return (
    // props received from App.js

    <Dialog open={open} onClose={handleClose}>
      

      {/* Tab changing */}

      
        <Tabs value={value} onChange ={handleTabs}>
          <Tab label="LOGIN" />
          <Tab label="Register" />
        </Tabs>
      
      <TabPanel value={value} index={0}>Item 1 detail</TabPanel>
      <TabPanel value={value} index={1}>Item 2 details</TabPanel>
       
      <LoginForm handleClose={handleClose} />

    </Dialog>
  );
};

function TabPanel(props)
{
const {children,value,index}=props

  
  return(
    <div>
      {
        value ===index &&
        (<h1>{children}</h1>)
      }
      
      
      </div>
  )
}

export default ModalDialog;