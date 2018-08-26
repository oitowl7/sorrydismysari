import React from "react";
import { BrowserRouter as Router, Route, Switch, Refresh /*Redirect*/ } from "react-router-dom";
import firebase from 'firebase';
import Home from "./pages/Home"
import Page404 from "./pages/Page404";
import AddGarment from "./pages/AddGarment/AddGarment";
import Login from "./pages/Login/Login";
import Inventory from "./pages/Inventory/Inventory"
import firebaseFunctions from './utils/firebase.js'
import Loading from "./components/Loading/Loading";
import Animate from "react-smooth";
import CreateUser from "./pages/CreateUser/CreateUser";



class App extends React.Component {

  state = {
    // color1: "#F42A41",
    color1: "#082C51",
    color2: "#328cc1",
    color3: "#D9B310",
    color4: "#1D2731",
    color5: "#A6A6A6"
  };

  //checks login status...if status is logged in and checked it returns the logged in router. If checked but not logged in it loads the login router
  checkLogin = () => {
    const user = firebaseFunctions.getUserInfo();
    console.log(user);
    if(!user){
      console.log("Not logged in");
      this.setState({loggedIn: false});
    } else {
      this.setState({loggedIn: true});
      // window.location.href = "/";      
    }
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentDidMount() {
    //runs the checkLogin() function after 2 seconds. The app needs a few seconds to mount before this request can be made and get a true response.
    setTimeout(() => {
      this.checkLogin();
    }, 2000)
    //shows the loading screen for 4 seconds
    setTimeout(() => { 
      this.setState({loggedInCheck: true})
    }, 4000);
  }

  //reloads to the home page
  userLoggedInSuccessfully = () => {
    this.setState({loggedIn: true});
    window.location.href = "/";
  }

  render() {
    if(this.state.loggedInCheck) {
      if(this.state.loggedIn){
        return(
          <div>
            <Router>
              <Switch>
                <Route exact path="/" 
                  render={(routeProps) => {
                    return (
                      <Home
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        loggedIn={true}
                      />
                    )
                  }} 
                />
                <Route exact path="/home" 
                  render={(routeProps) => {
                    return (
                      <Home
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        loggedIn={true}
                      />
                    )
                  }} 
                />
                <Route path="/add"
                render={routeProps => {
                  return(
                    <AddGarment
                      color1={this.state.color1}
                      color2={this.state.color2}
                      color3={this.state.color3}
                      color4={this.state.color4}
                      color5={this.state.color5}
                    />
                  )
                }}
                />
                <Route path="/login" 
                  render={(routeProps) => {
                    return (
                      <Login
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        userLoggedInSuccessfully={this.userLoggedInSuccessfully}
                        userAlreadyLoggedIn={true}
                      />
                    )
                  }} 
                />
                <Route path="/inventory"
                render={routeProps => {
                  return(
                    <Inventory
                      color1={this.state.color1}
                      color2={this.state.color2}
                      color3={this.state.color3}
                      color4={this.state.color4}
                      color5={this.state.color5}
                    />
                  )
                }}
                />
                <Route component={Page404} />
              </Switch>
            </Router>
          </div>
        )
      } else {
        return (
          <div>
            <Router>
              <Switch>
                <Route path="/login" 
                  render={(routeProps) => {
                    return (
                      <Login
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        userLoggedInSuccessfully={this.userLoggedInSuccessfully}
                      />
                    )
                  }} 
                />
                <Route path="/createuser" 
                  render={(routeProps) => {
                    return (
                      <CreateUser
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        userLoggedInSuccessfully={this.userLoggedInSuccessfully}
                      />
                    )
                  }} 
                />
                <Route path="/" 
                  render={(routeProps) => {
                    return (
                      <Home
                        color1={this.state.color1}
                        color2={this.state.color2}
                        color3={this.state.color3}
                        color4={this.state.color4}
                        color5={this.state.color5}
                        loggedIn={false}
                      />
                    )
                  }} 
                />
              </Switch>
            </Router>
          </div>
        )
      }
    } else {
      return(
          <div style={{backgroundColor: this.state.color5, width: "100%", height: "100%"}}>
          <Loading
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            color5={this.state.color5}
          />

          </div>
      );
    }
    
  }
}

export default App;
