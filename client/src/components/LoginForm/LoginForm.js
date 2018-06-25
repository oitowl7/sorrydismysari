import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid } from 'semantic-ui-react';

const LoginForm = props => {
  return (
    <div id="loginForm">
      <Container>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Login</Header>
        <Form>
          <Form.Group widths="equal">

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Username</label>
              <input style={{color: "white", backgroundColor: props.color1}} name="username" placeholder="Nadia" />
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Pin</label>
              <input style={{color: "white", backgroundColor: props.color1}} name="pin" placeholder="password" />
            </Form.Field>
          </Form.Group>
          <Form.Button onClick={props.handleLoginSubmit} style={{color: "white", backgroundColor: props.color1}}>Login</Form.Button>
        </Form>


        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Create New User</Header>
        <Form>
          <Form.Group widths="equal">

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Username</label>
              <input style={{color: "white", backgroundColor: props.color1}} name="newUser" placeholder="Nadia" />
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Pin</label>
              <input style={{color: "white", backgroundColor: props.color1}} name="newPin" placeholder="password" />
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Confirm Pin</label>
              <input style={{color: "white", backgroundColor: props.color1}} name="confirmPin" placeholder="password" />
            </Form.Field>
          </Form.Group>

          <Header as="h3" style={{color: props.color1, marginTop: 30}}>Create New House</Header>
          <Form.Group widths="equal">
            <div>
              <Form.Field  onChange={props.handleFormChange}>
                <br></br>
                <label style={{color: props.color1, fontSize: 15}}>House Name</label>
                <input style={{color: "white", backgroundColor: props.color1}} name="newHouseName" placeholder="Islam Household" />
              </Form.Field>
              <Form.Field  onChange={props.handleFormChange}>
                <br></br>
                <label style={{color: props.color1, fontSize: 15}}>House Pin</label>
                <input style={{color: "white", backgroundColor: props.color1}} name="newHousePin" placeholder="password" />
              </Form.Field>
              <Form.Field  onChange={props.handleFormChange}>
                <br></br>
                <label style={{color: props.color1, fontSize: 15}}>Confirm House Pin</label>
                <input style={{color: "white", backgroundColor: props.color1}} name="newHousePinConfirm" placeholder="password" />
              </Form.Field>
            </div>
          </Form.Group>
          <Form.Button onClick={props.handleFormSubmit} style={{color: "white", backgroundColor: props.color1}}>Submit</Form.Button>
        </Form>
      </Container>
    </div>    
  );
}

export default LoginForm