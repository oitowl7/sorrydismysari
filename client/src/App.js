import React from "react";
import { BrowserRouter as Router, Route, Switch, /*Redirect*/ } from "react-router-dom";
import Home from "./pages/Home"
import Page404 from "./pages/Page404";
import AddGarment from "./pages/AddGarment/AddGarment";

class App extends React.Component {

  state = {
    color1: "#F42A41",
    color2: "#006A4D",
    color3: "#FF9933",
    color4: "#006600",
  };

  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" 
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
  }
}

export default App;
