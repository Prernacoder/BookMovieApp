import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.svg"
import { Button } from '@material-ui/core';

export default function Header() {
  let name = "login";
  return (
    <div className='header1'>

      {/* adding logo image */}
      <img src={logo} alt="" className="logo1" />

      {/* Login ,Logout and BookShow Button */}
      <span className="buttons">
        <Button id="bookshow" color="primary" variant="contained">BOOK SHOW </Button>
        &nbsp; &nbsp;
        <Button id="login" color="default" variant="contained"> {name} </Button></span>


    </div>
  )
}
