import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid, Divider, Label } from 'semantic-ui-react';

const LoginForm = props => {
  return (
    <div id="loginForm">
      <Container>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Login</Header>
        <Form>
          <Form.Group widths="equal">

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Email</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="email" placeholder="email@server.com" />
                {props.loginError ?
                  <Label basic color="red" pointing="above" >{`${props.loginError}`}</Label>
                : ""}
                {props.userExistError ?
                  <Label basic color="red" pointing="above" >{`${props.userExistError}`}</Label>
                : ""}
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Password</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="password" placeholder="password" />
                {props.loginError ?
                  <Label basic color="red" pointing="above" >{`${props.loginError}`}</Label>
                : ""}
                {props.passwordError ?
                  <Label basic color="red" pointing="above" >{`${props.passwordError}`}</Label>
                : ""}
            </Form.Field>
          </Form.Group>
          <Form.Button onClick={props.handleLoginSubmit} style={{color: props.color5, backgroundColor: props.color1}}>Login</Form.Button>
        </Form>

        <Divider horizontal style={{color: props.color1}}><Header as="h3" style={{color: props.color1}}>OR</Header></Divider>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Create New User</Header>
        <Form>
          <Form.Group widths="equal">

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Email</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="newEmail" placeholder="email@domain.com" />
                {props.usernameError ?
                  <Label basic color="red" pointing="above" >{`${props.usernameError}`}</Label>
                : ""}
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Password</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="newPassword" placeholder="password" />
                {props.passwordEntryError ?
                  <Label basic color="red" pointing="above" >{`${props.passwordEntryError}`}</Label>
                : ""}
            </Form.Field>

            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Confirm Password</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="confirmPassword" placeholder="password" />
                {props.passwordMatchError ?
                  <Label basic color="red" pointing="above" >{`${props.passwordMatchError}`}</Label>
                : ""}
            </Form.Field>
          </Form.Group>

          <Grid columns={2} divided style={{marginTop: 20}}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" style={{color: props.color1, marginTop: 30}}>Create New House</Header>
                <Form.Field  onChange={props.handleFormChange}>
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>House Name</label>
                  <input style={{color: props.color5, backgroundColor: props.color1}} name="newHouseName" placeholder="Islam Household" />
                  {props.houseNameError ?
                    <Label basic color="red" pointing="above" >{`${props.houseNameError}`}</Label>
                  : ""}
                  {props.newHouseError ?
                    <Label basic color="red" pointing="above" >{`${props.newHouseError}`}</Label>
                  : ""}
                </Form.Field>
                <Form.Field  onChange={props.handleFormChange}>
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>House Password</label>
                  <input style={{color: props.color5, backgroundColor: props.color1}} name="newHousePassword" placeholder="password" />
                  {props.newHousePasswordError ?
                    <Label basic color="red" pointing="above" >{`${props.newHousePasswordError}`}</Label>
                  : ""}
                </Form.Field>
                <Form.Field  onChange={props.handleFormChange}>
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>Confirm House Password</label>
                  <input style={{color: props.color5, backgroundColor: props.color1}} name="newHousePasswordConfirm" placeholder="password" />
                {props.newHousePasswordMatchError ?
                  <Label basic color="red" pointing="above" >{`${props.newHousePasswordMatchError}`}</Label>
                : ""}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" style={{color: props.color1, marginTop: 30}}>Join Existing House</Header>
                <Form.Field  onChange={props.handleFormChange}>
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>House Name</label>
                  <input style={{color: props.color5, backgroundColor: props.color1}} name="existingHouseName" placeholder="Islam Household" />
                {props.houseNameError ?
                  <Label basic color="red" pointing="above" >{`${props.houseNameError}`}</Label>
                : ""}
                {props.existingHouseError ?
                  <Label basic color="red" pointing="above" >{`${props.existingHouseError}`}</Label>
                : ""}
                </Form.Field>
                <Form.Field  onChange={props.handleFormChange}>
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>House Password</label>
                  <input style={{color: props.color5, backgroundColor: props.color1}} name="existingHousePassword" placeholder="password" />
                  {props.existingHousePasswordError ?
                    <Label basic color="red" pointing="above" >{`${props.existingHousePasswordError}`}</Label>
                  : ""}
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Form.Button onClick={props.handleCreateUser} style={{color: props.color5, backgroundColor: props.color1, marginTop: 20}}>Create User</Form.Button>
        </Form>
      </Container>
    </div>    
  );
}

export default LoginForm