import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.svg"
import { Button } from '@material-ui/core';
// import BookShow from '../../screens/bookshow/BookShow';

export default function Header(props) {
  let name = "login";

  if (props.page === 'detailsPage') {
    return (
      <div className='header1'>

        {/* adding logo image */}
        <img src={logo} alt="" className="logo1" />

        {/* Login ,Logout and BookShow Button */}
        <span className="buttons" >

          {/* <BookShow/> */}
          <Button id="bookshow" color="primary" variant="contained">BOOK SHOW </Button>
          &nbsp; &nbsp;

          <Button id="login" color="default" variant="contained"> {name} </Button>

        </span>
      </div>
    )
  }
  else {
    return (
      <div className='header1'>

        {/* adding logo image */}
        <img src={logo} alt="" className="logo1" />

        {/* Login ,Logout and BookShow Button */}
        <span className="buttons" >

          <Button id="login" color="default" variant="contained"> {name} </Button>

        </span>
      </div>
    )
  }


}
