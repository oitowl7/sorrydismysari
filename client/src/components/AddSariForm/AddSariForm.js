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
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Name</label>
            <input style={{color: props.color5, backgroundColor: props.color1}} name="name" placeholder="white top #14" />
          </Form.Field>
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Type</label>
            <input style={{color: props.color5, backgroundColor: props.color1}} name="type" placeholder="Sari" />
          </Form.Field>
          <Grid columns={2} divided style={{marginTop: 20}}>
            <Grid.Column>
              <Header as="h3" style={{color: props.color1}}>Primary Color></Header>
              <CirclePicker
                style={{marginTop: 10}}
                color={ props.primaryColor }
                onChangeComplete={ props.handleChangeCompletePrimary }
                colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
              />
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" style={{color: props.color1}}>Primary Color></Header>
              <CirclePicker
                style={{marginTop: 10}}
                color={ props.secondaryColor }
                onChangeComplete={ props.handleChangeCompleteSecondary }
                colors={["#500202", "#FF0000", "#FF4200", "#FFFB00", "#5DFF00", "#008316", "#00A477", "#00FFD8", "#009EFF", "#001FFF", "#5100FF", "#FF00AE", "#FFFFFF", "#000000", "#7A7976", "#4B100F", "#75502B", "#FFC387"]}
              />
            </Grid.Column>
          </Grid>
        <Form.Button onClick={props.handleFormSubmit} style={{color: "white", backgroundColor: props.color1, marginTop: 35, marginBottom: 50}}>Submit</Form.Button>
        </Form>
      </Container>
    </div>    
  );
}

export default AddSariForm