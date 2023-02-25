import React from 'react'
import { Button, Typography, FormControl, Input, InputLabel } from '@material-ui/core';
import "./Form.css";


function RegisterForm()  {
  // constructor(props) {
  //   super(props);
  //   this.state = { username: '' };
  // }
  // changeEventHandler = (event) => {
  //   this.setState({ username: event.target.value });
  // }
  
    return (

      <div>

        <div className="login">

              <FormControl required className="formControl">
                <InputLabel htmlFor="firstname">
                  First Name
                </InputLabel>
                <Input
                  id="firstname"
                // value={tickets !== 0 ? tickets : ""}
                // onChange={ticketsChangeHandler}
                />

              </FormControl>
              <br />
              <br />
              <FormControl required className="formControl">
                <InputLabel htmlFor="lastname">
                  Last Name
                </InputLabel>
                <Input
                  id="lastnam"
                // value={tickets !== 0 ? tickets : ""}
                // onChange={ticketsChangeHandler}
                />

              </FormControl>
              <br />
              <br />
              <FormControl required className="formControl">
                <InputLabel htmlFor="email">
                  Email
                </InputLabel>
                <Input
                  id="email"
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
              <FormControl required className="formControl">
                <InputLabel htmlFor="contactno">
                  Contact No.
                </InputLabel>
                <Input
                  id="contactno"
                // value={tickets !== 0 ? tickets : ""}
                // onChange={ticketsChangeHandler}
                />

              </FormControl>
              <br />
              <br />




              <Typography align='center'>
                <Button id="registerbutton" color="primary" variant="contained" > Register </Button>
                <br />
              </Typography>
            {/* </CardContent> */}
          {/* </Card> */}
        </div>
      </div>



    );
  
}

export default RegisterForm;