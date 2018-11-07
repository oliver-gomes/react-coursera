import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends Component {
  state = {
    dishes: DISHES
  };

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
