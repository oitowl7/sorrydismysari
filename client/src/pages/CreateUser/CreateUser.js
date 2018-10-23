import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Image, Segment, Label, Menu, Divider, Grid } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./CreateUser.css";
import firebaseFunctions from '../../utils/firebase.js';
import firebase from 'firebase';


class CreateUser extends React.Component {

  state = {

  };

  componentDidMount() {

  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.userLoggedInSuccessfully){
      this.props.userLoggedInSuccessfully();
    }
  }

  //standard form change function
  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  // semantic ui function for activating menu selectors
  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  handleCreateUserCreateHouseSubmit = event => {
    event.preventDefault();
    console.log("we will create user");
    const error = this.createHouseValidation();
    if (error) {
      return;
    }
    else{
      // check if the housename is already taken
      firebaseFunctions.getHouseholdWhere(this.state.createHouseName.toLowerCase()).then(snapshot => {
        console.log(snapshot);
        //if household exists, throw error
        if(snapshot.docs[0]){
              this.setState({createHouseNameError: "This household name already exists"})
              // if email exists...throw error
              firebaseFunctions.checkUserExists(this.state.email).then(snapshot => {
                if(snapshot.docs[0]){
                  this.setState({emailError: "This email is already in use"});
                }
                return;
              }).catch(err3 => console.log('err3', err3));
        // if household doesn't exist...continue
        } else {
          // if email exists...throw error
          firebaseFunctions.checkUserExists(this.state.email).then(snapshot => {
            if(snapshot.docs[0]){
              this.setState({emailError: "This email is already in use"});
              return;
            }
          }).catch(err3 => console.log('err3', err3));
          //process:
            // 1: create the user auth using firebase functions
            // 2: create the household object and capture household id
            // 3: create user object and add the email and household id and capture user's id
            // 4: add the user id to the household object

          firebaseFunctions.createNewUser(this.state.email.toLowerCase(), this.state.userPassword).catch(err1 => console.log('err1', err1));

          const houseData = {
            name: this.state.createHouseName,
            password: this.state.createHousePassword
          }
          const db = firebase.firestore();
          db.collection('households').add(houseData).then(snapshot2 => {
            console.log('create household', snapshot2);
            const householdID = snapshot2.id;
            const userData = {
              email: this.state.email.toLowerCase(),
              households: [householdID]
            }
            db.collection('users').add(userData).then(snapshot3 => {
              console.log('userdb ' , snapshot3);
              db.collection('households').doc(householdID).update({members: [snapshot3.id]}).then(snapshot4 => {
                console.log('household update', snapshot4);
                this.props.userLoggedInSuccessfully();
                // this.setState({userLoggedInSuccessfully: true})
              }).catch(err4 => console.log('err4', err4));
            }).catch(err3 => console.log('err 3', err3))
          }).catch(err2 => console.log('err 2', err2))
        }
      }).catch(err => console.log('err', err));

    }
  }

  // front end validation to check matching passwords, formatting issues etc before making call to firebase
  createHouseValidation = () => {
    let error = false;
    this.setState({emailError: null, userPasswordConfirmError: null, userPasswordError: null, createHousePasswordError: null, createHousePasswordConfirmError: null, createHouseNameError: null});
    if(!this.state.email){
      this.setState({emailError: "Please enter an email address"});
      error = true;
    } else if (!this.state.email.split("@")[1] || !this.state.email.split(".")[1]){
      this.setState({emailError: "Not a valid email address"});
      error = true;
    }
    if(this.state.userPassword.length < 6){
      this.setState({userPasswordError: "Password must be at least 6 characters"});
      error = true;
    }
    if(this.state.userPassword !== this.state.userPasswordConfirm){
      this.setState({userPasswordConfirmError: "Passwords do not match", userPasswordError: "Passwords do not match"});
      error = true;
    }
    if(this.state.createHousePassword !== this.state.createHousePasswordConfirm){
      this.setState({createHousePasswordError: "Passwords do not match", createHousePasswordConfirmError: "Passwords do not match"})
      error = true;
    }
    return error;
  }

  handleCreateUserJoinHouseSubmit = event => {
    event.preventDefault();
    console.log("we will create user");
    const error = this.joinHouseValidation();
    if (error) {
      return;
    } else {
      firebaseFunctions.getHouseholdWhere(this.state.existingHouseName.toLowerCase()).then(snapshot => {
        // if no household...throw error
        if(!snapshot.docs[0]){
          this.setState({existingHouseNameError: "This household does not exist"});
          // if user exists...throw error
          firebaseFunctions.checkUserExists(this.state.email).then(snapshot5 => {
            if(snapshot5.docs[0]){
              this.setState({emailError: "This email is already in use"});
            }
            return;
          }).catch(err5 => console.log('err5', err5));
          //if household...continue
        } else {
          // if user exists...throw error
          firebaseFunctions.checkUserExists(this.state.email).then(snapshot6 => {
          if(snapshot6.docs[0]){
            console.log("line151ish")
            console.log(snapshot6);
            this.setState({emailError: "This email is already in use"});
            return;
          }
          // process:
            // 1: create user using auth firebase function
            // 2: create user object and add captured houseID and capture user id
            // 3: update household object with new user id
            let householdData;
            snapshot.docs.forEach(doc => householdData = doc.data());
            if(householdData.password !== this.state.joinHousePassword){
              this.setState({joinHousePasswordError: "Incorrect password"});
              return;
            }
            // create the user auth
            firebaseFunctions.createNewUser(this.state.email.toLowerCase(), this.state.userPassword).catch(err7 => console.log("err7", err7));
  
            console.log(householdData);
            const houseId = snapshot.docs[0].id;
            console.log(houseId);
            const userData = {
              email: this.state.email.toLowerCase(),
              households: [snapshot.docs[0].id.toString()]
            }
            const db = firebase.firestore();
            db.collection('users').add(userData).then(snapshot2 => {
              let newMemberList = householdData.members;
              newMemberList.push(snapshot2.id);
              db.collection('households').doc(houseId).update({members: newMemberList}).then(snapshot3 => {
                console.log('household update', snapshot3);
                this.props.userLoggedInSuccessfully();
                // this.props.userLoggedInSuccessfully();
              }).catch(err2 => console.log('err2', err2))
            }).catch(err3 => console.log('err3', err3))
        }).catch(err6 => console.log('err6', err6));
        }
      }).catch(err => console.log('err', err))
    }
  }

  // front end validation to check matching passwords, formatting issues etc before making call to firebase
  joinHouseValidation = () => {

    this.setState({emailError: null, userPasswordConfirmError: null, userPasswordError: null, existingHouseNameError: null, joinHousePasswordError: null});
    let error = false;

    if(!this.state.email){
      this.setState({emailError: "Please enter an email address"});
      error = true;
    } else if (!this.state.email.split("@")[1] || !this.state.email.split(".")[1]){
      this.setState({emailError: "Not a valid email address"});
      error = true;
    }
    if(this.state.userPassword.length < 6){
      this.setState({userPasswordError: "Password must be at least 6 characters"});
      error = true;
    }
    return error;
  }

  render() {
    return(
      <div style={{height: "100vh", width: "100%"}}>
        <div style={{overflow: "hidden"}}>
        <Image src="/images/working/loginImage.jpg" style={{maxHeight: "100vh", minHeight: "900px", width: "100%", position:"fixed", top: 0, left: 0, opacity: "1", }} />
        </div>
        <div style={{display: "flex", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0)", opacity: "1"}}>  
          <Segment style={{marginTop: "5vh", backgroundColor: this.props.color5, opacity: "0.95", width: "90%", maxWidth: 600}} textAlign="center" raised>
            <Header as="h1" style={{color: this.props.color1}}>Create New User</Header>
            <Form style={{marginBottom: 20}}>
              <Form.Group widths="equal">
                <Form.Field onChange={this.props.handleFormChange}>
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>First Name</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="firstName" placeholder="Sokratis" />
                  {/* error message */}
                  <br></br>
                  {this.state.firstNameError ?
                    <Label basic color="red" pointing="above" >{`${this.state.firstNameError}`}</Label>
                  : ""}
                </Form.Field>
                <Form.Field onChange={this.props.handleFormChange}>
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Last Name</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="lastName" placeholder="Papastathopoulos" />
                  {/* error message */}
                  <br></br>
                  {this.state.lastNameError ?
                    <Label basic color="red" pointing="above" >{`${this.state.lastNameError}`}</Label>
                  : ""}
                </Form.Field>
              </Form.Group>

              <Grid columns={2} >
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Field  onChange={this.handleFormChange} >
                      <br/>
                      <label style={{color: this.props.color1, fontSize: 15}}>Email</label>
                      <input style={{color: this.props.color5, backgroundColor: this.props.color1, opacity: "1"}} name="email" placeholder="email@server.com" />
                      <br/> 
                        {this.state.emailError ?
                          <Label basic color="red" pointing="above" >{`${this.state.emailError}`}</Label>
                        : ""}
                    </Form.Field>
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Field  onChange={this.handleFormChange} >
                      <br/>
                      <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                      <input style={{color: this.props.color5, backgroundColor: this.props.color1, opacity: "1"}} type="password" name="userPassword" placeholder="password" />
                      <br/>
                        {this.state.userPasswordError ?
                          <Label basic color="red" pointing="above" >{`${this.state.userPasswordError}`}</Label>
                        : ""}
                    </Form.Field>

                    <Form.Field  onChange={this.handleFormChange} >
                      <br/>
                      <label style={{color: this.props.color1, fontSize: 15}}>Confirm Password</label>
                      <input style={{color: this.props.color5, backgroundColor: this.props.color1, opacity: "1"}} type="password" name="userPasswordConfirm" placeholder="password" />
                      <br/>
                        {this.state.userPasswordConfirmError ?
                          <Label basic color="red" pointing="above" >{`${this.state.userPasswordConfirmError}`}</Label>
                        : ""}
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
                
            </Form>
            
            {/* here begins the menu portion */}
            <Menu attached="top" tabular style={{marginTop: 20, color: this.props.color1}} widths={2}>
              <Menu.Item style={{color: this.props.color1}} name="createHouseSelected" active={this.state.activeItem === "createHouseSelected"} onClick={this.handleMenuClick}>Create New House</Menu.Item>
              <Menu.Item style={{color: this.props.color1}}  name="existingHouseSelected" active={this.state.activeItem === "existingHouseSelected"} onClick={this.handleMenuClick}>Select Existing House</Menu.Item>
            </Menu>

            <Segment attached="bottom" style={{backgroundColor: this.props.color5,}}>

              {/* if the user selects "create house", run this  */}
              {this.state.activeItem === "createHouseSelected" ? 
              <Form style={{marginBottom: 20}}>
                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>House Name</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} name="createHouseName" placeholder="Islam Household" />
                  <br/>
                    {this.state.createHouseNameError ?
                      <Label basic color="red" pointing="above" >{`${this.state.createHouseNameError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="createHousePassword" placeholder="password" />
                  <br/>
                    {this.state.createHousePasswordError ?
                      <Label basic color="red" pointing="above" >{`${this.state.createHousePasswordError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Confirm Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="createHousePasswordConfirm" placeholder="password" />
                  <br/>
                    {this.state.createHousePasswordConfirmError ?
                      <Label basic color="red" pointing="above" >{`${this.state.createHousePasswordConfirmError}`}</Label>
                    : ""}
                </Form.Field>
                <Form.Button onClick={this.handleCreateUserCreateHouseSubmit} style={{color: this.props.color5, backgroundColor: this.props.color1, width: 155, marginTop: 20, opacity: "1"}}>Create User</Form.Button>
              </Form>  
              :

              // if the user selects "join house", run this
              this.state.activeItem === "existingHouseSelected" ?
              <Form style={{marginBottom: 20}}>
                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>House Name</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} name="existingHouseName" placeholder="Islam Household" />
                  <br/>
                    {this.state.existingHouseNameError ?
                      <Label basic color="red" pointing="above" >{`${this.state.existingHouseNameError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="joinHousePassword" placeholder="password" />
                  <br/>
                    {this.state.joinHousePasswordError ?
                      <Label basic color="red" pointing="above" >{`${this.state.joinHousePasswordError}`}</Label>
                    : ""}
                </Form.Field>
                <Form.Button onClick={this.handleCreateUserJoinHouseSubmit} style={{color: this.props.color5, backgroundColor: this.props.color1, width: 155, marginTop: 20, opacity: "1"}}>Create User</Form.Button>

              </Form>  
              :
              // if neither are selected, run this
              <Header as="h3" style={{color: this.props.color1}}>Please Create a New Household or Join an Existing One</Header>
              }
            </Segment>

            <Divider horizontal style={{color: this.props.color1}}><Header as="h4" style={{color: this.props.color1}}>OR</Header></Divider>
            <Link to="/login" style={{color: this.props.color1, marginTop: 10}}><Header style={{color: this.props.color1}}as="h3">Login Existing User</Header></Link>
          </Segment>
        </div>

      </div>
    )
  }
}

export default CreateUser;
