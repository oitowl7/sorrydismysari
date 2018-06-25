import React from "react";
import { BrowserRouter as Router, Route, Switch, Refresh /*Redirect*/ } from "react-router-dom";
import Home from "./pages/Home"
import Page404 from "./pages/Page404";
import AddGarment from "./pages/AddGarment/AddGarment";
import Login from "./pages/Login/Login";

class App extends React.Component {

  state = {
    color1: "#F42A41",
    color2: "#006A4D",
    color3: "#FF9933",
    color4: "#006600",
  };

  checkLogin = () => {
    // document.cookie = "User= Jordan";
    const cookie = document.cookie;
    let user = cookie.split("User=")[1];
    if (!user) {
      console.log("Not logged in");
      this.setState({loggedIn: false, loggedInCheck: true});
    } else {
      user = user.split(";")[0];
      console.log("under this");
      console.log(user);
      this.setState({loggedIn: true, loggedInCheck: true});
      // window.location.href = "/";
    }

  }

  componentDidMount() {
    this.checkLogin();
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
