import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Button } from 'semantic-ui-react';
import Firebase from "../../utils/firebase.js";
import "./SignOutButton.css"


class SignOutButton extends React.Component {

  state = {

  };

  componentDidMount() {

  }
  
  componentDidUpdate() {

  }

  signOut = event => {
    event.preventDefault();
    Firebase.signUserOut();
    window.location.href = "/";
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  render() {
    return(
      <Button onClick={this.signOut} style={{color: this.props.color3, backgroundColor: this.props.color1, position: "absolute", right: "30px", top: "3px"}}>Sign Out</Button>
    )
  }
}

export default SignOutButton;
