import React from 'react'
import { Button, Typography, FormControl, Input, InputLabel } from '@material-ui/core';
import "./LoginForm.css";


class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { username: '' };
  // }
  // changeEventHandler = (event) => {
  //   this.setState({ username: event.target.value });
  // }
  render() {
    return (

      <div>

        <div className="login">

              <FormControl required className="formControl">
                <InputLabel htmlFor="username">
                  Username
                </InputLabel>
                <Input
                  id="username"
                // value={tickets !== 0 ? tickets : ""}
                // onChange={ticketsChangeHandler}
                />

              </FormControl>
              <br />
              <br />
              <FormControl required className="formControl">
                <InputLabel htmlFor="password">
                  Password
                </InputLabel>
                <Input
                  id="password"
                // value={tickets !== 0 ? tickets : ""}
                // onChange={ticketsChangeHandler}
                />

              </FormControl>
              <br />
              <br />




              <Typography align='center'>
                <Button id="loginbutton" color="primary" variant="contained" > Login </Button>
                <br />
              </Typography>
            {/* </CardContent> */}
          {/* </Card> */}
        </div>
      </div>



    );
  }
}

export default Form;