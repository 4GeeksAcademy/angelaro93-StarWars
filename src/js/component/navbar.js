import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="ml-auto d-flex">
        <button className="btn btn-light" style={{ marginLeft: "10px" }}>
          FAVORITES
        </button>
      </div>
    </nav>
  );
};
