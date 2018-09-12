import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Link className="nav-link" className="sidebar-item" to="/home">
          Home
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/posts">
          Posts
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/pages">
          Pages
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/media">
          Media
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/comments">
          Comments
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/style">
          style
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/users">
          Users
        </Link>
        <Link className="nav-link" className="sidebar-item" to="/settings">
          settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
