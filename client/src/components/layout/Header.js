import React, { Component } from "react";
import Sidebar from "./Sidebar";

import styled from "styled-components";

const Header = styled.header`
  background: #f1c15d;

  font-size: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 15rem));
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default class extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <Header>
        <div onClick={this.toggleMenu}>Menu</div>
        <Sidebar isOpen={this.state.menuOpen} toggleMenu={this.toggleMenu} />
      </Header>
    );
  }
}
