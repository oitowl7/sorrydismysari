import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./Footer.css"


class Footer extends React.Component {

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
    return(
      <div>
        <Container textAlign="center" style={{backgroundColor: this.props.color3, color: this.props.color1, height: "100px", width: "100%", marginTop: 10}} fluid>
          <Header as="h2" style={{color: this.props.color1, marginTop: 50}}>
            Copywrite SariSorter
          </Header>
        </Container>
      </div>
    )
  }
}

export default Footer;
