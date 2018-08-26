import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Container, Header, Segment, Image, Grid } from 'semantic-ui-react';
import API from "../../utils/API.js";
import "./HomeInformation.css"


class HomeInformation extends React.Component {

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
      <div>
        <Container textAlign="center">
          <Segment raised style={{backgroundColor: this.props.color1, color: this.props.color5, marginTop: 10}}>
            <Container textAlign="center">
              <Header as="h1" style={{color: this.props.color5}}>
                What is Sari Sorter?
              </Header>
            </Container>
            <Header as="h3" style={{color: this.props.color5}}>
              <Container textAlign="left">
                Sari Sorter is a site that allows you to keep your wardrobes organized. Whether you are an individual trying to keep organize the clothes in your house or an entire family trying to keep track of clothing accross multiple houses, we have you covered. <br/><br/>
                
                Sari Sorter will allow you to add clothing to your inventory based on type, color, size, location, and much more. You may then may use the inventory sorter to filter your clothing so that you can find out what you have at your current location, find appropriate clothing for the event you are attending, or coordinate multiple outfits based off of their colors.
              </Container>
            </Header>
          </Segment>
          <Image src="/images/working/wedding1.jpg" style={{width: "100%"}} />
          <Segment raised style={{backgroundColor: this.props.color1, color: this.props.color5, marginTop: 10}}>
            <Grid columns={2}>
              <Grid.Column style={{backgroundColor: this.props.color1, color: this.props.color5}}>
                <Header as="h1" style={{color:this.props.color5}}>
                  Why Use Sari Sorter?
                </Header>
                <Header as="h3" style={{color:this.props.color5}}>
                  <Container textAlign="left">
                    Earum expedita dolor atque modi dolorem illum quo harum qui. Dolorum vel iure corporis expedita at sed. Voluptate officiis natus deserunt placeat debitis vel nobis tenetur nemo. Veritatis laudantium et sapiente atque autem sit expedita ratione.<br/><br/>
  
                    Nemo in atque vitae laudantium id dolorum dolores vitae. Quo id et expedita nulla nemo expedita rerum aperiam. Sit iusto enim tempora ad. Perspiciatis ipsa amet non non a facilis cum delectus.<br/><br/>
  
                    Officiis quia et quam dolores. Assumenda quaerat omnis eveniet. Assumenda eaque veritatis id voluptatem quia. Voluptates dolor aperiam. Sapiente sit similique illo aliquam inventore nulla. Veritatis natus nisi amet aut doloremque et dolorem.
                  </Container>
                </Header>
              </Grid.Column>
              <Grid.Column style={{backgroundColor: this.props.color3, color: this.props.color4}}>
                <Header as="h1" style={{color:this.props.color4}}>
                  How Use Sari Sorter?
                </Header>
                <Header as="h3" style={{color:this.props.color4}}>
                  <Container textAlign="left">
                    Earum expedita dolor atque modi dolorem illum quo harum qui. Dolorum vel iure corporis expedita at sed. Voluptate officiis natus deserunt placeat debitis vel nobis tenetur nemo. Veritatis laudantium et sapiente atque autem sit expedita ratione.<br/><br/>
  
                    Nemo in atque vitae laudantium id dolorum dolores vitae. Quo id et expedita nulla nemo expedita rerum aperiam. Sit iusto enim tempora ad. Perspiciatis ipsa amet non non a facilis cum delectus.<br/><br/>
  
                    Officiis quia et quam dolores. Assumenda quaerat omnis eveniet. Assumenda eaque veritatis id voluptatem quia. Voluptates dolor aperiam. Sapiente sit similique illo aliquam inventore nulla. Veritatis natus nisi amet aut doloremque et dolorem.
                  </Container>
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default HomeInformation;
