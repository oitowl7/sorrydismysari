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
    console.log("form submit handler happened");
    const verify = this.verification();

    if (verify) {
      //if there was a front end verification error, the api calls will not be made and the fxn just returns;
      return;
    }
    else {
      //
      if (!this.state.newHouseName) {
        const objToCreate = {
          username: this.state.newUser,
          pin: this.state.newPin,
          household: this.state.existingHouseName,
          housePin: this.state.existingHousePin
        }
        API.createUserExistingHouse(objToCreate)
          .then(data => {
            this.handleCreateReturn(data);
          }).catch(err => console.log(err))
      } else {
        const objToCreate = {
          username: this.state.newUser,
          pin: this.state.newPin,
          household: this.state.newHouseName,
          housePin: this.state.newHousePin
        }
        API.createUserNewHouse(objToCreate)
          .then(data => {
            this.handleCreateReturn(data);
          }).catch(err => console.log(err))
      }
    }

  }

  handleCreateReturn = (data) => {
    console.log(data);
    if (!data.data.userMessage && !data.data.houseMessage){
      document.cookie = `household= ${data.data.household}`;
      document.cookie = `username= ${data.data.username}`;
      window.location.href = "/";
    } else {
      if(this.state.newHouseName) {
        this.setState({usernameError: data.data.userMessage, newHouseError: data.data.houseMessage});
      } else {
        this.setState({usernameError: data.data.userMessage, existingHouseError: data.data.houseMessage});
      }
    }
  }

  verification = () => {
    let problem;
    this.setState({pinMatchError: null, newHousePinError: null, houseNameError: null, usernameError: null, pinEntryError: null, newHousePinMatchError: null, existingHousePinError: null, newHouseError: null, existingHouseError: null});
    if (this.state.newPin !== this.state.confirmPin) {
      this.setState({pinMatchError: "Pins have to match"});
      problem = true;
    }
    if(this.state.newHouseName && !this.state.existingHouseName && this.state.newHousePin !== this.state.newHousePinConfirm) {
      this.setState({newHousePinMatchError: "Pins have to match"});
      problem = true;
    }
    if(this.state.newHouseName && !this.state.existingHouseName && !this.state.newHousePin){
      this.setState({newHousePinError: "Please enter a pin number"})
      problem = true;
    }
    if(this.state.existingHouseName && !this.state.newHouseName && !this.state.existingHousePin) {
      this.setState({existingHousePinError: "Please enter a pin number"})
      problem = true;
    }
    if(this.state.newHouseName && this.state.existingHouseName) {
      this.setState({houseNameError: "You can only join or create a household"});
      problem = true;
    }
    if(!this.state.newUser){
      this.setState({usernameError: "Must enter a username"});
      problem = true;
    }
    if(!this.state.newPin){
      this.setState({pinEntryError: "Please enter a new pin"});
      problem = true;
    }
    if(!this.state.existingHouseName && !this.state.newHouseName){
      this.setState({houseNameError: "Please join or create a house"});
      problem = true;
    }
    return problem;

  }

  handleLoginSubmit = () => {
    this.setState({userExistError: null, loginError: null})
    const user = {
      username: this.state.username,
      pin: this.state.pin
    }
    if(!this.state.username){
      this.setState({userExistError: "Please enter username"});
      return;
    }
    API.checkLogin(user).then(data => {
      console.log(data);
      if(data.data === "User does not exist") {
        this.setState({userExistError: data.data})
      } else if (data.data === "Incorrect Pin") {
        this.setState({loginError: data.data})
      }else {
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
      <div style={{backgroundColor: this.props.color5, height: "100%"}}>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        />
        <TopImage />
        <LoginForm
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
          handleFormSubmit={this.handleFormSubmit}
          handleLoginSubmit={this.handleLoginSubmit}
          handleFormChange={this.handleFormChange}
          loginError={this.state.loginError}
          pinMatchError={this.state.pinMatchError}
          newHousePinError={this.state.newHousePinError}
          newHousePinMatchError={this.state.newHousePinMatchError}
          pinEntryError={this.state.pinEntryError}
          usernameError={this.state.usernameError}
          houseNameError={this.state.houseNameError}
          existingHousePinError={this.state.existingHousePinError}
          newHouseError={this.state.newHouseError}
          existingHouseError={this.state.existingHouseError}
          userExistError={this.state.userExistError}
        />
      </div>
    )
  }
}

export default Login;
