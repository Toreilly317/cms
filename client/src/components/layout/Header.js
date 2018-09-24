import React, { Component } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: #f1c15d;
  font-size: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 15rem));
  justify-content: center;
  align-content: center;
  align-items: center;

  & > a {
    font-weight: 800;
    font-size: 2em;
    text-decoration: none;
    color: #2d2d2d;
  }
`;

export default class extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Header>
        <Link to="/dashboard/posts">Posts</Link>
        <Link to="dashboard//pages">Pages</Link>
        <Link to="dashboard/media">Media</Link>
        <Link to="dashboard/comments">comments</Link>
      </Header>
    );
  }
}
