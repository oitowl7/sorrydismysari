import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import LoginForm from "../../components/LoginForm";
import { Image } from 'semantic-ui-react';
import firebase from 'firebase';
import firebaseFunctions from '../../utils/firebase.js'
import Footer from "../../components/Footer";


class Login extends React.Component {

  state = {
    recoverEmailError: null,
    recoverEmailSuccess: null
  };

  componentDidMount() {
    console.log(firebase.auth().currentUser);
  }

  componentDidUpdate(prevProps, prevState) {
  }

  //runs the front end verification. if it passes with a value of "false" it will try to create a new user. This will be handled by a new page
  // handleCreateUser = event => {
  //   event.preventDefault();

  //   const verification = this.verification();
  //   if (verification) {
  //     return;
  //   }

  //   if (this.state.newHouseName){
  //     firebaseFunctions.createNewUser(this.state.newEmail, this.state.newPassword)
  //     .then(snapshot => {
  //       console.log(snapshot.user);
  //       this.props.userLoggedInSuccessfully();
  //     }).catch(err => {
  //       console.log(err);
  //     })

  //   }
  // }

  verification = () => {
    let problem;
    this.setState({passwordMatchError: null, newHousePasswordError: null, houseNameError: null, usernameError: null, passwordEntryError: null, newHousePasswordMatchError: null, existingHousePasswordError: null, newHouseError: null, existingHouseError: null});
    if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({passwordMatchError: "Passwords have to match"});
      problem = true;
    }
    if(this.state.newHouseName && !this.state.existingHouseName && this.state.newHousePassword !== this.state.newHousePasswordConfirm) {
      this.setState({newHousePasswordMatchError: "Passwords have to match"});
      problem = true;
    }
    if(this.state.newHouseName && !this.state.existingHouseName && !this.state.newHousePassword){
      this.setState({newHousePasswordError: "Please enter a password number"})
      problem = true;
    }
    if(this.state.existingHouseName && !this.state.newHouseName && !this.state.existingHousePassword) {
      this.setState({existingHousePasswordError: "Please enter a password number"})
      problem = true;
    }
    if(this.state.newHouseName && this.state.existingHouseName) {
      this.setState({houseNameError: "You can only join or create a household"});
      problem = true;
    }
    if(!this.state.newEmail){
      this.setState({usernameError: "Must enter a username"});
      problem = true;
    }
    if(!this.state.newPassword){
      this.setState({passwordEntryError: "Please enter a new password"});
      problem = true;
    }
    if(!this.state.existingHouseName && !this.state.newHouseName){
      this.setState({houseNameError: "Please join or create a house"});
      problem = true;
    }
    return problem;

  }

  handleLoginSubmit = event => {
    event.preventDefault();
    this.setState({userExistError: null, loginError: null, passwordError: null})
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    if(!this.state.email || !this.state.email.split("@")[1] || !this.state.email.split(".")[1]){
      if(!this.state.password || this.state.password.length < 6){
        console.log("There was a password error");
        this.setState({userExistError: "please enter valid email", passwordError: "Please enter a valid password"});
      }
      this.setState({userExistError: "Please enter valid email"});
      return;
    }

    if(!this.state.password || this.state.password.length < 6){
      this.setState({passwordError: "Please enter a valid password"});
      return;
    }

      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(snapshot => {
        console.log(snapshot);
        this.props.userLoggedInSuccessfully();
      }).catch(err => {
        this.setState({userExistError: err.message})
        console.log(err.message);
      })
      // window.location.href = "/";
    }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  handleForgotPassword = event => {
    event.preventDefault();
    this.setState({recoverEmailError: null})
    console.log('this shit happened');
    firebase.auth().sendPasswordResetEmail(this.state.recoverEmail).then(response => {
      this.setState({recoverEmailSuccess: true})
    }).catch(error => {
      console.log(error.message)
      if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
        console.log("if");
        this.setState({recoverEmailError: "This email doesn't exist"});
        console.log("else if");
      } else if (error.message == "The email address is badly formatted.") {
        console.log("else");
        this.setState({recoverEmailError: "Please enter a valid email address"})
      } else {
        this.setState({recoverEmailError: "There was an error processing this request"});
      }
    });
  }

  handleCreateNewUser = event => {
    event.preventDefault();
    console.log("Create new user page needs to be made");
  }



  render() {
    return(
      <div style={{backgroundColor: this.props.color5, height: "100%"}}>
        {/* <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        />
        <TopImage /> */}
        <LoginForm
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
          handleCreateUser={this.handleCreateUser}
          handleLoginSubmit={this.handleLoginSubmit}
          handleFormChange={this.handleFormChange}
          loginError={this.state.loginError}
          passwordMatchError={this.state.passwordMatchError}
          newHousePasswordError={this.state.newHousePasswordError}
          newHousePasswordMatchError={this.state.newHousePasswordMatchError}
          passwordEntryError={this.state.passwordEntryError}
          usernameError={this.state.usernameError}
          houseNameError={this.state.houseNameError}
          existingHousePasswordError={this.state.existingHousePasswordError}
          newHouseError={this.state.newHouseError}
          existingHouseError={this.state.existingHouseError}
          userExistError={this.state.userExistError}
          passwordError={this.state.passwordError}
          handleForgotPassword={this.handleForgotPassword}
          recoverEmailError={this.state.recoverEmailError}
          recoverEmailSuccess={this.state.recoverEmailSuccess}
          handleCreateNewUser={this.handleCreateNewUser}
        />
        {/* <Footer 
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        /> */}
      </div>
    )
  }
}

export default Login;
