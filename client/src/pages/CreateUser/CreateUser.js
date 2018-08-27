import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Image, Segment, Label, Menu } from 'semantic-ui-react';
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
        // snapshot.docs.forEach(doc => {
        //   console.log('data', doc.data());
        //   if(doc.data()){
        //   }
        // })
        if(snapshot.docs[0]){
              this.setState({createHouseNameError: "This household name already exists"})
              return;
        } else {
          firebaseFunctions.createNewUser(this.state.email, this.state.userPassword).catch(err1 => console.log('err1', err1));
          const houseData = {
            name: this.state.createHouseName,
            password: this.state.createHousePassword
          }
          const db = firebase.firestore();
          db.collection('households').add(houseData).then(snapshot2 => {
            console.log('create household', snapshot2);
            const householdID = snapshot2.id;
            const userData = {
              email: this.state.email,
              households: [householdID]
            }
            db.collection('users').add(userData).then(snapshot3 => {
              console.log('userdb ' , snapshot3);
              db.collection('households').doc(householdID).update({members: [snapshot3.id]}).then(snapshot4 => {
                console.log('household update', snapshot4);
                // this.props.userLoggedInSuccessfully();
                // this.setState({userLoggedInSuccessfully: true})
              }).catch(err4 => console.log('err4', err4));
            }).catch(err3 => console.log('err 3', err3))
          }).catch(err2 => console.log('err 2', err2))
        }
      }).catch(err => console.log('err', err));

    }
  }

  handleCreateUserJoinHouseSubmit = event => {
    event.preventDefault();
    console.log("we will create user");
    const error = this.joinHouseValidation();
    if (error) {
      return;
    } else {
      console.log("We really gonna do shit here");
    }
  }

  // front end validation to check matching passwords, formatting issues etc before making call to firebase
  createHouseValidation = () => {
    let error = false;
    this.setState({emailError: null, userPasswordConfirmError: null, userPasswordError: null, createHousePasswordError: null, createHousePasswordConfirmError: null, createHouseNameError: null})
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
      this.setState({userPasswordConfirmError: "Passwords don't match", userPasswordError: "Passwords don't match"});
      error = true;
    }
    if(this.state.createHousePassword !== this.state.createHousePasswordConfirm){
      this.setState({createHousePasswordError: "Passwords do not match", createHousePasswordConfirmError: "Passwords do not match"})
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
              <Form.Field  onChange={this.handleFormChange} >
                <br/>
                <label style={{color: this.props.color1, fontSize: 15}}>Email</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} name="email" placeholder="email@server.com" />
                <br/> 
                  {this.state.emailError ?
                    <Label basic color="red" pointing="above" >{`${this.state.emailError}`}</Label>
                  : ""}
              </Form.Field>
              
              <Form.Field  onChange={this.handleFormChange} >
                <br/>
                <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="userPassword" placeholder="password" />
                <br/>
                  {this.state.userPasswordError ?
                    <Label basic color="red" pointing="above" >{`${this.state.userPasswordError}`}</Label>
                  : ""}
              </Form.Field>

              <Form.Field  onChange={this.handleFormChange} >
                <br/>
                <label style={{color: this.props.color1, fontSize: 15}}>Confirm Password</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="userPasswordConfirm" placeholder="password" />
                <br/>
                  {this.state.userPasswordConfirmError ?
                    <Label basic color="red" pointing="above" >{`${this.state.userPasswordConfirmError}`}</Label>
                  : ""}
              </Form.Field>
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

          </Segment>
        </div>

      </div>
    )
  }
}

export default CreateUser;
