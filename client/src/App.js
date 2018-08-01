import React from "react";
import { BrowserRouter as Router, Route, Switch, Refresh /*Redirect*/ } from "react-router-dom";
import firebase from 'firebase';
import Home from "./pages/Home"
import Page404 from "./pages/Page404";
import AddGarment from "./pages/AddGarment/AddGarment";
import Login from "./pages/Login/Login";
import Inventory from "./pages/Inventory/Inventory"
import firebaseFunctions from './utils/firebase.js'



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
      this.setState({loggedIn: false, loggedInCheck: true});
    } else {
      this.setState({loggedIn: true, loggedInCheck: true});
      // window.location.href = "/";      
    }
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentDidMount() {
    this.checkLogin();
  }

  //reloads to the home page
  userLoggedInSuccessfully = () => {
    this.setState({loggedIn: true});
    // window.location.href = "/";
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
                <Route path="/" 
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
              </Switch>
            </Router>
          </div>
        )
      }
    } else {
      return("");
    }
    
  }
}

export default App;
