import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Menu, Image, Icon } from 'semantic-ui-react';
import "./Navbar.css"

const Navbar = props => {
  return (
    <div id="navbarDiv">
      {/* <Segment> */}
        <Menu fluid style={{backgroundColor: props.color3, zIndex: 3, maxHeight: 10}}>
          <Menu.Item name="Home" >
            <Link className="Home" to="/home" style={{color:props.color1, fontFamily:"menuFont", fontSize: 18, fontWeight: "bold"}}>Sorry...My Sari</Link>
          </Menu.Item>
          <Menu.Item name="Home" >
            <Link className="Home" to="/home" style={{color:props.color1, fontFamily:"menuFont", fontSize: 18, fontWeight: "bold"}}><Icon name="home"/>Home</Link>
          </Menu.Item>
          <Menu.Item name="Inventory" >
            <Link className="Inventory" to="/inventory" style={{color:props.color1, fontFamily:"menuFont", fontSize: 18, fontWeight: "bold"}}><Icon name="archive" />Inventory</Link>
          </Menu.Item>
          <Menu.Item name="Add Item" >
            <Link className="Add Item" to="/add" style={{color:props.color1, fontFamily:"menuFont", fontSize: 18, fontWeight: "bold"}}><Icon name="add" />Add Item</Link>
          </Menu.Item>
          <Menu.Item name="Change Household" >
            <Link className="Change Household" to="/select" style={{color:props.color1, fontFamily:"menuFont", fontSize: 18, fontWeight: "bold"}}><Icon name="exchange" />Change Household</Link>
          </Menu.Item>

        </Menu>
      {/* </Segment> */}
    </div>    
  );
}

export default Navbar