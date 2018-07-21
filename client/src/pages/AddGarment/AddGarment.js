import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header } from 'semantic-ui-react';
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import AddGarmentForm from "../../components/AddGarmentForm";
import AddSariForm from "../../components/AddSariForm";
import "./AddGarment.css"


class AddGarment extends React.Component {

  state = {
    fabric: {
      silk: false,
      cotton: false,
      crepe: false,
      chiffon: false,
      georgette: false,
      polyester: false
    }
  };

  componentDidUpdate(prevProps, prevState) {
    //this only runs after the secondaryColorForObject is created and will only happen if the color changer function runs. This means that everything is ready to be sent and the page should reload after this is completed. If not you may end up storing WAAAAAYYYY to many garments. The second part of the if statement should take care of any potential waits that could case problems.
    if(this.state.secondaryColorForObject && this.state.secondaryColorForObject !== prevState.secondaryColorForObject){
      let fabricArray = [];
      let alterationArray = [this.state.alterationComments];
      //puts fabric with value of "true" into array
      for (var property in this.state.fabric) {
        if (this.state.fabric[property]){
          fabricArray.push(property)
        }
      }

      const garmentToAdd = {
        garmentName: this.state.garmentName,
        type: this.state.garmentType,
        primaryColor: this.state.primaryColorForObject,
        secondaryColor: this.state.secondaryColorForObject,
        fabric: fabricArray,
        location: this.state.location,
        owner: this.state.owner,
        blouseSize: this.state.blouseSize,
        alterationComments: alterationArray,
        eventInformation: this.state.eventInformation
      };
      console.log(garmentToAdd)
      console.log("end form submit");

      API.createGarment(garmentToAdd)
        .then(data => {
          console.log(data);
          if(data.data === "Complete") {
            console.log("Complete");
            this.setState({garmentName: "", garmentType: "", primaryColor: "#500202", secondaryColor: "#500202", fabric: {polyester: false, silk: false, cotton: false, chiffon: false, georgette: false, crepe: false}, location: "", owner: "", blouseSize: "", alterationComments: "", eventInformation: "", garmentAdded: "Your garment has been added to the inventory"})
            this.forceUpdate();
          }
        }).catch(err => console.log(err));
    }
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  handleCheckboxChange = event => {
    const { name, value } = event.target;

    const fabric = {...this.state.fabric, [value]: !this.state.fabric[value]};
    this.setState({
      fabric
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.colorChanger();

    // API.createGarment(garmentToAdd).then(data =>{
    //   console.log("The Garment Has Been Added");
    // }).catch(err => console.log(err));
  }

  //function to change #colors to a word
  colorChanger = () => {
    const colorHashArray = ["#500202", "#ff0000", "#ff4200", "#fffb00", "#5dff00", "#008316", "#00a477", "#00ffd8", "#009eff", "#001fff", "#5100ff", "#ff00ae", "#ffffff", "#000000", "#7a7976", "#4b100f", "#75502b", "#ffc387"];
    const colorDescriptionArray = ["Maroon", "Red", "Orange", "Yellow", "Light Green", "Dark Green", "Jewel", "Teal", "Light Blue", "Dark Blue", "Purple", "Pink", "White", "Black", "Grey", "Auburn", "Brown", "Beige"];
    colorHashArray.forEach((color, id) => {
      if(color === this.state.primaryColor) {
        this.setState({primaryColorForObject: colorDescriptionArray[id]})
      }
    });
    colorHashArray.forEach((color, id) => {
      if(color === this.state.secondaryColor) {
        this.setState({secondaryColorForObject: colorDescriptionArray[id]})
      }
    });
  }

  //start color swatch functions
  handleChangeCompletePrimary = (color) => {
    console.log("we are hitting this");
    this.setState({ primaryColor: color.hex });
  };

  handleChangeCompleteSecondary = (color) => {
    console.log("we are hitting this");
    this.setState({ secondaryColor: color.hex });
  };
  //end color swatch functions

  render() {
    return(
      <div style={{backgroundColor: this.props.color5}}>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
        />
        <TopImage />
        {this.state.garmentAdded ?
          <Container fluid>
            <Header as="h2" style={{color: this.props.color1, display: "flex", justifyContent: "center", marginBottom: 8, backgroundColor: this.props.color3, padding: 20}}>{`${this.state.garmentAdded}`}</Header>
          </Container>
        : ""}
        <Container>
          <Form style={{marginTop: 30}}>
            <Form.Field /*label='Select Garment Type'*/ className="garmentDropdown" name="garmentType" onChange={this.handleFormChange} control='select' style={{color: this.props.color5, backgroundColor: this.props.color1, maxWidth: 250}} value={this.state.garmentType}>
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
          <div>
            {/* <Header as="h2">Sari!!!!</Header> */}
            <AddSariForm
              //boilerplate
              handleFormChange={this.handleFormChange}
              handleFormSubmit={this.handleFormSubmit}
              handleCheckboxChange={this.handleCheckboxChange}
              //colors
              color1={this.props.color1}
              color2={this.props.color2}
              color3={this.props.color3}
              color4={this.props.color4}
              color5={this.props.color5}
              //props to be saved
              garmentName={this.state.garmentName}
              owner={this.state.owner}
              primaryColor={this.state.primaryColor}
              secondaryColor={this.state.secondaryColor}
              blouseSize={this.state.blouseSize}
              fabric={this.state.fabric}
              eventInformation={this.state.eventInformation}
              location={this.state.location}
              alterationComments={this.state.alterationComments}
              otherComments={this.state.otherComments}
              //color swatch stuff
              handleChangeCompletePrimary={this.handleChangeCompletePrimary}
              handleChangeCompleteSecondary={this.handleChangeCompleteSecondary}
            />
          </div>
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
