import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Image, Segment, Label, Menu } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./CreateUser.css"


class CreateUser extends React.Component {

  state = {

  };

  componentDidMount() {

  }
  
  componentDidUpdate() {

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
  }

  handleCreateUserJoinHouseSubmit = event => {
    event.preventDefault();
    console.log("we will create user");
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
                  {this.state.emailError ?
                    <Label basic color="red" pointing="above" >{`${this.state.emailError}`}</Label>
                  : ""}
              </Form.Field>
              
              <Form.Field  onChange={this.handleFormChange} >
                <br/>
                <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="userPassword" placeholder="password" />
                  {this.state.userPasswordError ?
                    <Label basic color="red" pointing="above" >{`${this.state.userPasswordError}`}</Label>
                  : ""}
              </Form.Field>

              <Form.Field  onChange={this.handleFormChange} >
                <br/>
                <label style={{color: this.props.color1, fontSize: 15}}>Confirm Password</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="userPasswordConfirm" placeholder="password" />
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
                    {this.state.createHouseNameError ?
                      <Label basic color="red" pointing="above" >{`${this.state.createHouseNameError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="createHousePassword" placeholder="password" />
                    {this.state.createHousePasswordError ?
                      <Label basic color="red" pointing="above" >{`${this.state.createHousePasswordError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Confirm Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="createHousePasswordConfirm" placeholder="password" />
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
                    {this.state.existingHouseNameError ?
                      <Label basic color="red" pointing="above" >{`${this.state.existingHouseNameError}`}</Label>
                    : ""}
                </Form.Field>

                <Form.Field  onChange={this.handleFormChange} >
                  <br/>
                  <label style={{color: this.props.color1, fontSize: 15}}>Password</label>
                  <input style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 300, opacity: "1"}} type="password" name="joinHousePassword" placeholder="password" />
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
