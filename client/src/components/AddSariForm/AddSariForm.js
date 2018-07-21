import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid, Label } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';


class AddSariForm extends React.Component {

  state = {

  };

  handleFormSubmit = event => {
    event.preventDefault();
    const validateProblem = this.frontEndValidation();
    console.log(validateProblem);

    if(!validateProblem){
      this.props.handleFormSubmit(event);
    }
  }

  frontEndValidation = () => {
    let problem = false;
    // reset all the error messages so they don't carry over to the next form submit event
    this.setState({garmentNameError: null, ownerError: null, locationError: null, blouseSizeError: null, primaryColorError: null, secondaryColorError: null, fabricError: null});
    const errorMessage = "This field is required";
    //if things are missing or not the correct data type, create messages
    if(!this.props.garmentName) {
      problem = true;
      this.setState({garmentNameError: errorMessage});
    }
    if(!this.props.owner) {
      problem = true;
      this.setState({ownerError: errorMessage});
    }
    if(!this.props.location) {
      problem = true;
      this.setState({locationError: errorMessage});
    }
    if(!this.props.blouseSize) {
      problem = true;
      this.setState({blouseSizeError: errorMessage});
    }
    if(!Number.isInteger(parseInt(this.props.blouseSize))){
      problem = true;
      this.setState({blouseSizeError: "This needs to be a number"});
    }
    if(!this.props.primaryColor) {
      problem = true;
      this.setState({primaryColorError: errorMessage})
    }
    if(!this.props.secondaryColor) {
      problem = true;
      this.setState({secondaryColorError: errorMessage})
    }
    if(!this.props.fabric.silk && !this.props.fabric.cotton && !this.props.fabric.chiffon && !this.props.fabric.georgette && !this.props.fabric.polyester && !this.props.fabric.crepe) {
      problem = true;
      this.setState({fabricError: errorMessage});
    }
    return problem;
  }

  render() {
    return(
      <div id="addSariForm">
        <Container>
          <Header as="h2" style={{color: this.props.color1, marginTop: 30}}>Add New Sari</Header>
          <Form>
            <Form.Group widths="equal">
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Name</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="garmentName" placeholder="white top #14" />
                {/* error message */}
                  <br></br>
                  {this.state.garmentNameError ?
                    <Label basic color="red" pointing="above" >{`${this.state.garmentNameError}`}</Label>
                  : ""}
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Owner</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="owner" placeholder="Nadia" />
              {/* error message */}
                <br></br>
                {this.state.ownerError ?
                  <Label basic color="red" pointing="above" >{`${this.state.ownerError}`}</Label>
                : ""}
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Location</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="location" placeholder="Mom's House" />
                {/* error message */}
                  <br></br>
                {this.state.locationError ?
                  <Label basic color="red" pointing="above" >{`${this.state.locationError}`}</Label>
                : ""}
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Blouse Size</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="blouseSize" placeholder="30" />
                {/* error message */}
                  <br></br>
                {this.state.blouseSizeError ?
                  <Label basic color="red" pointing="above" >{`${this.state.blouseSizeError}`}</Label>
                : ""}
              </Form.Field>
            </Form.Group>
            <Grid columns={3} divided style={{marginTop: 20}}>
              <Grid.Column>
                {/* error message */}
                {this.state.primaryColorError ?
                  <Label basic color="red" pointing="below" style={{display: "flex", justifyContent: "center", marginBottom: 8}}>{`${this.state.primaryColorError}`}</Label>
                : ""}
                <div>
                <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center", marginBottom: 8}}>Primary Color</Header>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <CirclePicker
                    style={{marginTop: 10}}
                    color={ this.props.primaryColor }
                    onChangeComplete={ this.props.handleChangeCompletePrimary }
                    colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
                  />
                </div>
              </Grid.Column>
              <Grid.Column>
                {/* error message */}
                {this.state.secondaryColorError ?
                  <Label basic color="red" pointing="below" style={{display: "flex", justifyContent: "center", marginBottom: 8}}>{`${this.state.secondaryColorError}`}</Label>
                : ""}
                <div>
                <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center", marginBottom: 8}}>Secondary Color</Header>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <CirclePicker
                    style={{marginTop: 10}}
                    color={ this.props.secondaryColor }
                    onChangeComplete={ this.props.handleChangeCompleteSecondary }
                    colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
                  />
                </div>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center"}}>Fabric</Header>
                <Form.Field  onChange={this.props.handleCheckboxChange} style={{color: this.props.color1, display: "flex", justifyContent: "center"}}>
                  <br></br>
                    <div>
                      <Form.Field className="fabricLabel" label='Cotton' control='input' type='checkbox' name="fabric" value="cotton"/>
                      <Form.Field className="fabricLabel" label='Silk' control='input' type='checkbox' name="fabric" value="silk"/> 
                      <Form.Field className="fabricLabel" label='Crepe' control='input' type='checkbox' name="fabric" value="crepe"/>
                      <Form.Field className="fabricLabel" label='Chiffon' control='input' type='checkbox' name="fabric" value="chiffon"/>
                      <Form.Field className="fabricLabel" label='Georgette' control='input' type='checkbox' name="fabric" value="georgette"/>
                      <Form.Field className="fabricLabel" label='Polyester' control='input' type='checkbox' name="fabric" value="polyester"/>
                    </div>
                    {/* error message */}
                    {this.state.fabricError ?
                      <Label basic color="red" pointing="left"  style={{maxWidth: 130, maxHeight: 30}}>{`${this.state.fabricError}`}</Label>
                    : ""}
                </Form.Field>
              </Grid.Column>
            </Grid>
            <Form.Group widths="equal">
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Alteration Comments</label>
                <textarea style={{color: this.props.color5, backgroundColor: this.props.color1}} name="alterationComments" placeholder="Can be sized up and down..." rows="4"/>
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Event Information</label>
                <textarea style={{color: this.props.color5, backgroundColor: this.props.color1}} name="eventInformation" placeholder="Previous Events, Types of Events this is Proper for, etc." rows="4"/>
              </Form.Field>
            </Form.Group>
            <Form.Button onClick={this/*.props*/.handleFormSubmit} style={{color: "white", backgroundColor: this.props.color1, marginTop: 35, marginBottom: 50}}>Submit</Form.Button>
          </Form>
        </Container>
      </div>  
    )
  }
}

export default AddSariForm