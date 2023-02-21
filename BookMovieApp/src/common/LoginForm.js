import React from 'react'
import { Button, Typography } from '@material-ui/core';

export default function LoginForm() {
  return (
    <div>

      <form action="" className="loginform">
        <input id="username" className='input-control' type='text' name='name' /><br /><br />
        <input id="password" className='input-control' type='text' name='password' /><br /><br />

        <Typography align='center'>
          <Button id="loginbutton" color="primary" variant="contained" > Login </Button>
          <br />
        </Typography>
      </form>

    </div>
  )
}
