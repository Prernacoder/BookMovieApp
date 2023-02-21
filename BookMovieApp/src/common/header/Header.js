import React from 'react'
import { useState } from 'react';
import ModalDialog from '../ModalDialog';
import "./Header.css"
import logo from "../../assets/logo.svg"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Header(props) {
  let name = "login";

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  if (props.page === 'detailsPage') {
    return (
      <div className='header1'>

        {/* adding logo image */}
        <img src={logo} alt="" className="logo1" />

        {/* Login ,Logout and BookShow Button */}
        <span className="buttons">
          <Link to = "/bookshow/:id"><Button id="bookshow" color="primary" variant="contained" >BOOK SHOW </Button></Link>
          &nbsp; &nbsp;
          <Button id="login" color="default" variant="contained" onClick={handleOpen}> {name} </Button></span>

        {/*  display the modal and pass props */}
        <ModalDialog open={open} handleClose={handleClose} />

      </div>
    )
  }
  else {
    return (
      <div className='header1'>

        {/* adding logo image */}
        <img src={logo} alt="" className="logo1" />

        {/* Login ,Logout and BookShow Button */}
        <span className="buttons">
          <Button id="login" color="default" variant="contained" onClick={handleOpen}> {name} </Button>
        </span>

        {/*  display the modal and pass props */}
        <ModalDialog open={open} handleClose={handleClose} />

      </div>
    )
  }
}
