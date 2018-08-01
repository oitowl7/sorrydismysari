import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Button } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./SignInButton.css"


class SignInButton extends React.Component {

  state = {

  };

  componentDidMount() {

  }
  
  componentDidUpdate() {

  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  render() {
    return(
      <Button onClick={this.signOut} style={{color: this.props.color3, backgroundColor: this.props.color1}}>
        <Link className="login" to="/login" style={{color: this.props.color3}}>Sign In</Link>
      </Button>
    )
  }
}            


export default SignInButton;
