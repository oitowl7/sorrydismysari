import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./Loading.css";
import Animate from 'react-smooth';

class Loading extends React.Component {

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
    const steps = [
      {
        style: {
          opacity: 0,
        }, duration: 50
      },{
        style: {
          opacity: 1,
        }, duration: 3150
      }, {
        style: {
          backgroundColor: this.props.color5,
          color: this.props.color5
        }, duration: 1050
      }
    ];
    return(
      <Animate steps={steps}>
        <div className="loading" style={{backgroundColor: this.props.color1}}>
            <div className="loading-text">
              <Animate steps={[
                {
                  style: {
                    opacity: 0
                  }, duration: 200
                }, {
                  style: {
                    opacity: 1,
                  }, duration: 3000
                }, {
                  style: {
                    opacity: 0,
                  }, duration: 1050
                }
              ]}>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>S</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>A</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>R</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>I</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}> </span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>S</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>O</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>R</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>T</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>E</span>
                <span className="loading-text-words" style={{fontSize: 30, color: this.props.color3}}>R</span>
              </Animate>
            </div>
        </div>
      </Animate>
    )
  }
}

export default Loading;
