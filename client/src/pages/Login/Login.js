import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import LoginForm from "../../components/LoginForm";
import { Image } from 'semantic-ui-react';


class Login extends React.Component {

  state = {
  };

  handleFormSubmit = () => {
    console.log("Form submit working");
  }

  handleLoginSubmit = () => {
    console.log("Login submit working");
    const user = {
      username: this.state.username,
      pin: this.state.pin
    }
    API.checkLogin(user).then(data => {
      console.log(data);
      if(data.data === "User does not exist" || data.data === "Incorrect Pin") {
        this.setState({newUserError: data.data})
      } else {
        // this.setState({username: data.data.username, household: data.data.household})
        document.cookie = `household= ${data.data.household}`;
        document.cookie = `username= ${data.data.username}`;
        window.location.href = "/";
      }
    }).catch(err => console.log(err))
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };



  render() {
    return(
      <div style={{backgroundColor: this.props.color2, height: "100%"}}>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
        />
        <TopImage />
        <LoginForm
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          handleFormSubmit={this.handleFormSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
          handleFormChange={this.handleFormChange}
        />
      </div>
    )
  }
}

export default Login;
