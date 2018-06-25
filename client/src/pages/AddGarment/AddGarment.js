import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import AddGarmentForm from "../../components/AddGarmentForm";


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
        <AddGarmentForm
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          handleFormChange={this.handleFormChange}
          handleFormSubmit={this.handleFormSubmit}
          name={this.state.name}
          type={this.state.type}
          primaryColor={this.state.primaryColor}
          secondaryColor={this.state.secondaryColor}
        />
        <div>This is the add garment page</div>
      </div>
    )
  }
}

export default AddGarment;
