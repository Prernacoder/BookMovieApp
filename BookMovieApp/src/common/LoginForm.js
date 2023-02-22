import React from 'react'
import { Button, Typography } from '@material-ui/core';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  changeEventHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello There!{this.state.username}</h1>
      <p>Can I know your name?</p>
      <input
        type='text'
        onChange={this.changeEventHandler}
      />
      <Typography align='center'>
          <Button id="loginbutton" color="primary" variant="contained" > Login </Button>
          <br />
        </Typography>
      
    
      </form>
    );
  }
}

export default Form;