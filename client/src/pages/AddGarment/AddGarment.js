import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header } from 'semantic-ui-react';
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import AddGarmentForm from "../../components/AddGarmentForm";
import "./AddGarment.css"


class AddGarment extends React.Component {

  state = {
    house: null,
  };

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const garmentToAdd = {
      name: this.state.name,
      type: this.state.type,
      primaryColor: this.state.primaryColor,
      secondaryColor: this.state.secondaryColor
    };
    console.log(garmentToAdd)
    API.createGarment(garmentToAdd).then(data =>{
      console.log("The Garment Has Been Added");
    }).catch(err => console.log(err));
  }

  render() {
    return(
      <div style={{backgroundColor: this.props.color2}}>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
        />
        <TopImage />
        <Container>
          <Form style={{marginTop: 30}}>
            <Form.Field label='Select Garment Type' className="garmentDropdown" name="garmentType" onChange={this.handleFormChange} control='select' style={{color: this.props.color2, backgroundColor: this.props.color1}}>
              <option value=''>Please Select a Garment Type</option>
              <option value='Sari'>Sari</option>
              <option value='Salwar'>Salwar Kamese</option>
              <option value='Lehenga'>Lehenga</option>
              <option value='Kurta'>Kurta</option>
              <option value='Panjabi'>Panjabi</option>
              <option value='Blouse'>Blouse</option>
            </Form.Field>
          </Form>
        </Container>
        {this.state.garmentType === "Sari" ?
          <Header as="h2">Sari!!!!</Header>
          : ""
        }
        {this.state.garmentType === "Salwar" ?
          <Header as="h2">Salwar!!!!</Header>
          : ""
        }
        {this.state.garmentType === "Lehenga" ?
          <Header as="h2">Lehenga!!!!</Header>
          : ""
        }
        {this.state.garmentType === "Kurta" ?
          <Header as="h2">Kurta!!!!</Header>
          : ""
        }
        {this.state.garmentType === "Panjabi" ?
          <Header as="h2">Panjabi!!!!</Header>
          : ""
        }
        {this.state.garmentType === "Blouse" ?
          <Header as="h2">Blouse!!!!</Header>
          : ""
        }
      </div>
    )
  }
}

export default AddGarment;
