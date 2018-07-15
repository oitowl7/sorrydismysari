import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Form, Header, Container, Button } from 'semantic-ui-react';

const AddSariForm = props => {
  return (
    <div id="addSariForm">
      <Container>
        <Header as="h2" style={{color: props.color1, marginTop: 30}}>Add New Sari</Header>
        <Form>
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Name</label>
            <input style={{color: props.color5, backgroundColor: props.color2}} name="name" placeholder="white top #14" />
          </Form.Field>
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Type</label>
            <input style={{color: props.color5, backgroundColor: props.color2}} name="type" placeholder="Sari" />
          </Form.Field>
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Primary Color</label>
            <input style={{color: props.color5, backgroundColor: props.color2}} name="primaryColor" placeholder="Blue" />
          </Form.Field>
          <Form.Field  onChange={props.handleFormChange}>
            <br></br>
            <label style={{color: props.color1, fontSize: 15}}>Secondary Color</label>
            <input style={{color: props.color5, backgroundColor: props.color2}} name="secondaryColor" placeholder="Green" />
          </Form.Field>
        <Form.Button onClick={props.handleFormSubmit} style={{color: "white", backgroundColor: props.color1}}>Submit</Form.Button>


        </Form>
      </Container>
    </div>    
  );
}

export default AddSariForm