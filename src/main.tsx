import * as React from "react";
import {
  BrowserRouter,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./home";
import Contact from "./contact";

class Main extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 style={{color: "white"}}>Test</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
