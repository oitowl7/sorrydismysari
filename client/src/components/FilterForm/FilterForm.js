import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Button, Divider } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./FilterForm.css"


class FilterForm extends React.Component {

  state = {

  };

  componentDidMount() {

  }
  
  componentDidUpdate() {

  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  render() {
    return(
      <div className="filterForm" style={{marginTop: -15}}>
        <Header as="h2" style={{color: this.props.color1, backgroundColor: this.props.color3, display: "flex", justifyContent: "center", padding: 20, marginBottom: -12}}>Narrow Results</Header>
        <Form style={{backgroundColor: this.props.color3, color: this.props.color1, marginTop: -12}}>
          <Divider style={{color: this.props.color1, backgroundColor: this.props.color1}} >
          </Divider>
          <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center", marginBottom: 0, paddingTop: 20}}>Garment Type</Header>
          <Form.Field  onChange={this.props.handleCheckboxChange} style={{color: this.props.color1, marginLeft: 20}}>
            <br></br>
              <div>
                <Form.Field className="garmentTypeLabel" label='Sari' control='input' type='checkbox' name="garmentType" value="Sari"/>
                <Form.Field className="garmentTypeLabel" label='Salwar Kamese' control='input' type='checkbox' name="garmentType" value="Salwar"/> 
                <Form.Field className="garmentTypeLabel" label='Lehenga' control='input' type='checkbox' name="garmentType" value="Lehenga"/>
                <Form.Field className="garmentTypeLabel" label='Kurta' control='input' type='checkbox' name="garmentType" value="Kurta"/>
                <Form.Field className="garmentTypeLabel" label='Panjabi' control='input' type='checkbox' name="garmentType" value="Panjabi"/>
                <Form.Field className="garmentTypeLabel" label='Blouse' control='input' type='checkbox' name="garmentType" value="Blouse"/>
              </div>
          </Form.Field>
          <Divider style={{color: this.props.color1, backgroundColor: this.props.color1}}>
          </Divider>
          <Header as="h3" style={{color: this.props.color1, display: "flex", justifyContent: "center", marginBottom: 0}}>Fabric</Header>
          <Form.Field  onChange={this.props.handleCheckboxChange} style={{color: this.props.color1, marginLeft: 20}}>
            <br></br>
              <div>
                <Form.Field className="fabricLabel" label='Cotton' control='input' type='checkbox' name="fabric" value="cotton"/>
                <Form.Field className="fabricLabel" label='Silk' control='input' type='checkbox' name="fabric" value="silk"/> 
                <Form.Field className="fabricLabel" label='Crepe' control='input' type='checkbox' name="fabric" value="crepe"/>
                <Form.Field className="fabricLabel" label='Chiffon' control='input' type='checkbox' name="fabric" value="chiffon"/>
                <Form.Field className="fabricLabel" label='Georgette' control='input' type='checkbox' name="fabric" value="georgette"/>
                <Form.Field className="fabricLabel" label='Polyester' control='input' type='checkbox' name="fabric" value="polyester"/>
              </div>
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default FilterForm;
