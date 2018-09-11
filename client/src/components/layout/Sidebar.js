import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/posts">
        Posts
      </Link>
      <Link className="nav-link" to="/pages">
        Pages
      </Link>
      <Link className="nav-link" to="/media">
        Media
      </Link>
      <Link className="nav-link" to="/comments">
        Comments
      </Link>
      <Link className="nav-link" to="/style">
        style
      </Link>
      <Link className="nav-link" to="/users">
        /Users
      </Link>
      <Link className="nav-link" to="/settings">
        settings
      </Link>
    </div>
  );
};

export default Sidebar;
