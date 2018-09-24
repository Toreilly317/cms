import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: min-content 1fr;
  flex-direction: column;
  & > .sidebar-haze {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SidebarContent = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  background: #f1c15d;

  /* Links */
  & > a {
    font-weight: 800;
    font-size: 2em;
    text-decoration: none;
    text-transform: uppercase;
    color: #2d2d2d;
  }
`;

export default props => (
  <Fragment>
    {props.isOpen && (
      <SideBarMenu>
        <SidebarContent>
          <Link to="/dashboard/posts">Posts</Link>
          <Link to="dashboard//pages">Pages</Link>
          <Link to="dashboard/media">Media</Link>
          <Link to="dashboard/comments">Comments</Link>
        </SidebarContent>
        <div className="sidebar-haze" onClick={props.toggleMenu} />
      </SideBarMenu>
    )}
  </Fragment>
);
