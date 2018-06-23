import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import "./Navbar.css"

const Navbar = props => {
  return (
    <div id="navbarDiv">
      {/* <Segment> */}
        <Menu fluid style={{position: "fixed", backgroundColor: props.color1, zIndex: 3}}>
          <Menu.Item name='Sorry...My Sari' style={{color: props.color2}}>
            <Image src="/images/menu/menugreenorange.png" size="small" />
          </Menu.Item>
          <Menu.Item name="Home" >
            <Link className="Home" to="/home" style={{color:props.color2, fontFamily:"menuFont", fontSize: 18}}><Icon name="home"/>Home</Link>
          </Menu.Item>
          <Menu.Item name="Inventory" >
            <Link className="Inventory" to="/inventory" style={{color:props.color2, fontFamily:"menuFont", fontSize: 18}}><Icon name="archive" />Inventory</Link>
          </Menu.Item>
          <Menu.Item name="Add Item" >
            <Link className="Add Item" to="/add" style={{color:props.color2, fontFamily:"menuFont", fontSize: 18}}><Icon name="add" />Add Item</Link>
          </Menu.Item>
          <Menu.Item name="Change Household" >
            <Link className="Change Household" to="/select" style={{color:props.color2, fontFamily:"menuFont", fontSize: 18}}><Icon name="exchange" />Change Household</Link>
          </Menu.Item>

        </Menu>
      {/* </Segment> */}
    </div>    
  );
}

export default Navbar