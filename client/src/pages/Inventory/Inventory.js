import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import { Form, Container, Header, Grid, Button } from 'semantic-ui-react';
// import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import FilterForm from "../../components/FilterForm";
import { fallDown as SideMenu } from 'react-burger-menu';
import "./Inventory.css"


class InventoryPage extends React.Component {

  state = {
    menuVisibility: false,



  };

  componentDidMount() {
    
  }
  
  componentDidUpdate() {

  }

  testFxn = () => {
    console.log("Your test succeeded");
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };

  toggleMenuVisibility = () => this.setState({ menuVisibility: !this.state.visible })

  render() {
    return(
      <div className="Inventory" style={{backgroundColor: this.props.color3}}>
        <div id="outer-container" >
          <SideMenu pageWrapId={ "page-wrap"} isOpen={this.state.menuVisibility} outerContainerId={ "outer-container" } style={{color: this.props.color1, backgroundColor: this.props.color3}}>
            <FilterForm
              color1={this.props.color1}
              color2={this.props.color2}
              color3={this.props.color3}
              color4={this.props.color4}
              color5={this.props.color5}
              testFxn={this.testFxn}
            />
          </SideMenu>

          <main id="page-wrap" style={{backgroundColor: this.props.color5}}>
            {/* <span>shits happening yo</span> */}
            <Navbar
              color1={this.props.color1}
              color2={this.props.color2}
              color3={this.props.color3}
              color4={this.props.color4}
              color5={this.props.color5}
            />
            <TopImage />
            <Button content='Filter' icon='filter' labelPosition='left' onClick={this.toggleMenuVisibility} style={{color: this.props.color1, backgroundColor: this.props.color3}}/>
            <Container>
              <Header as="h2">Inventory</Header>
              <span>Consequuntur assumenda optio omnis. Labore nostrum et eum suscipit et quidem quia nemo omnis. Dolor est consequatur eum numquam necessitatibus eius quam et. Vero est consectetur odit est quisquam molestiae libero et alias.

  Consequatur quibusdam eaque aliquam quasi qui id exercitationem. Tempore nesciunt sed est soluta omnis quia omnis ut accusamus. Veritatis amet adipisci. Quia nihil maiores consectetur.

  At cupiditate totam sed accusamus ut placeat reiciendis eos. Hic nobis aut voluptatem. Beatae sit et soluta nihil. Officia dolorem quo non repellat et veniam unde non. Dolor praesentium ut vero ut.
              </span>
              <Button style={{backgroundColor: this.props.color1}}>Shit</Button>
              <Button style={{backgroundColor: this.props.color2}}>Shit</Button>
              <Button style={{backgroundColor: this.props.color3}}>Shit</Button>
              <Button style={{backgroundColor: this.props.color4}}>Shit</Button>
              <Button style={{backgroundColor: this.props.color5}}>Shit</Button>
            </Container>
          </main>
        </div>
      </div>
    )
  }
}

export default InventoryPage;
