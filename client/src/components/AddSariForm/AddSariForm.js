import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';






class AddSariForm extends React.Component {

  state = {

  };

  handleCheckboxChange = event => {
    const { name, value } = event.target;

    const fabric = {...this.state.fabric, [value]: !this.state.fabric[value]};
    this.setState({
      fabric
    });
  };

  handleFormSubmit = event => {
    console.log("WE are hitting this form");
    event.preventDefault();
    const validateProblem = this.frontEndValidation();
    console.log(validateProblem);


    this.props.handleFormSubmit(event);
  }

  frontEndValidation = () => {
    let problem = false;
    let string;
    console.log(this.props);
    this.setState({nameError: null})
    if(!this.props.name) {
      problem = true;
      string += "name"
      this.setState({nameError: "This field is required"});
    }
    if(!this.props.owner) {
      problem = true;
      string += " owner"
      this.setState({ownerError: "This field is required"});
    }
    if(!this.props.location) {
      problem = true;
      string += " location"
      this.setState({locationError: "This field is required"});
    }
    if(!this.props.blouseSize) {
      problem = true;
      string += " size"
      this.setState({sizeError: "This field is required"});
    }
    console.log(string);
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
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="name" placeholder="white top #14" />
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Owner</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="owner" placeholder="Nadia" />
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Location</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="location" placeholder="Mom's House" />
              </Form.Field>
              <Form.Field  onChange={this.props.handleFormChange}>
                <br></br>
                <label style={{color: this.props.color1, fontSize: 15}}>Blouse Size</label>
                <input style={{color: this.props.color5, backgroundColor: this.props.color1}} name="blouseSize" placeholder="30" />
              </Form.Field>
            </Form.Group>
            <Grid columns={3} divided style={{marginTop: 20}}>
              <Grid.Column>
                <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center"}}>Primary Color</Header>
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
                <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center"}}>Secondary Color</Header>
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
                    </div>
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