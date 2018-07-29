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
      <Button onClick={this.signOut} style={{position: "fixed", right: 20, top: 3, color: this.props.color3, backgroundColor: this.props.color1}}>Sign Out</Button>
    )
  }
}

export default SignOutButton;
