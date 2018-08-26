import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid, Divider, Label, Image, Segment } from 'semantic-ui-react';
import Popup from "reactjs-popup";
import "./LoginForm.css";

const LoginForm = props => {
  return (
    <div id="loginForm" style={{height: "100vh", width: "100%", overflow: "hidden"}}>
      <Image src="/images/working/loginImage.jpg" style={{maxHeight: "100vh", width: "100%", position:"absolute", top: 0, left: 0, opacity: "1", }} />
      {/* <Container textAlign="center" text> */}
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0)", opacity: "1"}}>

        <Segment style={{marginTop: "20vh", backgroundColor: props.color5, opacity: "0.9", width: 400}} textAlign="center" raised>
          <Form>
            <Form.Field  onChange={props.handleFormChange} >
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Email</label>
              <input style={{color: props.color5, backgroundColor: props.color1, maxWidth: 300, opacity: "1"}} name="email" placeholder="email@server.com" />
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
              <input style={{color: props.color5, backgroundColor: props.color1, maxWidth: 300, opacity: "1"}} name="password" placeholder="password" />
                {props.loginError ?
                  <Label basic color="red" pointing="above" >{`${props.loginError}`}</Label>
                : ""}
                {props.passwordError ?
                  <Label basic color="red" pointing="above" >{`${props.passwordError}`}</Label>
                : ""}
            </Form.Field>
            <Form.Button onClick={props.handleLoginSubmit} style={{color: props.color5, backgroundColor: props.color1, width: 155, marginTop: 20, opacity: "1"}}>Login</Form.Button>

          </Form>
          <Popup modal trigger={<Form.Button style={{color: props.color5, backgroundColor: props.color1, marginTop: 10, width: 155}}>Forgot Password?</Form.Button>} position="right center">
            {props.recoverEmailSuccess ? 
              <Header as="h3" style={{color: props.color1, padding: 50}}>Please check your email to create new password</Header>
            :
              <Form style={{backgroundColor: props.color5}}>
                <Form.Field  onChange={props.handleFormChange} >
                  <br></br>
                  <label style={{color: props.color1, fontSize: 15}}>Enter Email Address</label>
                  <input style={{color: props.color5, backgroundColor: props.color1, maxWidth: 300}} name="recoverEmail" placeholder="email@server.com" />
                    {props.loginError ?
                      <Label basic color="red" pointing="above" >{`${props.loginError}`}</Label>
                    : ""}
                    {props.userExistError ?
                      <Label basic color="red" pointing="above" >{`${props.userExistError}`}</Label>
                    : ""}
                </Form.Field>
                <Form.Button onClick={props.handleForgotPassword} style={{color: props.color5, backgroundColor: props.color1}}>Send Email</Form.Button> 
              </Form>                    
            }
          </Popup>
          
          <Divider horizontal style={{color: props.color1}}><Header as="h4" style={{color: props.color1}}>OR</Header></Divider>
          <Link to="/createuser" style={{color: props.color1, marginTop: 10}}><Header style={{color: props.color1}}as="h3">Create New User</Header></Link>
        </Segment>
      </div>
      {/* </Container> */}
        {/* this is where the create user stuff was removed and placed at the bottom of this page */}

    </div>    
  );
}

export default LoginForm


        {/* <Divider horizontal style={{color: props.color1}}><Header as="h3" style={{color: props.color1}}>OR</Header></Divider>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Create New User</Header> */}
        {/* <Form>
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
        </Form> */}