import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./ChangeThisName.css"


class ChangeThisName extends React.Component {

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
  }
}

export default ChangeThisName;
