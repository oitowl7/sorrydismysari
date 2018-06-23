import React from "react";
import { BrowserRouter as Router, Route, Switch, /*Redirect*/ } from "react-router-dom";
import Home from "./pages/Home"
import Page404 from "./pages/Page404";

class App extends React.Component {

  state = {
    color1: "#FF9933",
    color2: "#006600",
    color3: "#000081",
    color4: "#F42A41",
  };

  render() {
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
                  // facebook_id={this.state.facebook_id}
                  />
                )
              }} 
            />
            <Route path="/home"
              render={(routeProps) => {
                return (
                  <Home
                  // facebook_id={this.state.facebook_id}
                  />
                )
              }} 
            />
          <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
