import React from 'react';
// import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Image } from 'semantic-ui-react';

const TopImage = props => {
  return (
    <div id="topImage">
      <Image src="/images/topImage/main.png" style={{width: "100%"}} />
    </div>    
  );
}

export default TopImage