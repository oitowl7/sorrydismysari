import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button, Grid } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';

const AddSariForm = props => {
  return (
    <div id="addSariForm">
      <Container>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Add New Sari</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Name</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="name" placeholder="white top #14" />
            </Form.Field>
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Owner</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="owner" placeholder="Nadia" />
            </Form.Field>
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Location</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="location" placeholder="Mom's House" />
            </Form.Field>
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Blouse Size</label>
              <input style={{color: props.color5, backgroundColor: props.color1}} name="blouseSize" placeholder="30" />
            </Form.Field>
          </Form.Group>
          <Grid columns={3} divided style={{marginTop: 20}}>
            <Grid.Column>
              <Header as="h3" style={{color: props.color1, display: "flex", justifyContent: "center"}}>Primary Color</Header>
              <div style={{display: "flex", justifyContent: "center"}}>
                <CirclePicker
                  style={{marginTop: 10}}
                  color={ props.primaryColor }
                  onChangeComplete={ props.handleChangeCompletePrimary }
                  colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" style={{color: props.color1, display: "flex", justifyContent: "center"}}>Secondary Color</Header>
              <div style={{display: "flex", justifyContent: "center"}}>
                <CirclePicker
                  style={{marginTop: 10}}
                  color={ props.secondaryColor }
                  onChangeComplete={ props.handleChangeCompleteSecondary }
                  colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" style={{color: props.color1, display: "flex", justifyContent: "center"}}>Fabric</Header>
              <Form.Field  onChange={props.handleCheckboxChange} style={{color: props.color1, display: "flex", justifyContent: "center"}}>
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
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Alteration Comments</label>
              <textarea style={{color: props.color5, backgroundColor: props.color1}} name="alterationComments" placeholder="Can be sized up and down..." rows="4"/>
            </Form.Field>
            <Form.Field  onChange={props.handleFormChange}>
              <br></br>
              <label style={{color: props.color1, fontSize: 15}}>Event Information</label>
              <textarea style={{color: props.color5, backgroundColor: props.color1}} name="eventInformation" placeholder="Previous Events, Types of Events this is Proper for, etc." rows="4"/>
            </Form.Field>
          </Form.Group>
          <Form.Button onClick={props.handleFormSubmit} style={{color: "white", backgroundColor: props.color1, marginTop: 35, marginBottom: 50}}>Submit</Form.Button>
        </Form>
      </Container>
    </div>    
  );
}

export default AddSariForm