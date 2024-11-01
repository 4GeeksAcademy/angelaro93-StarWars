import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000000" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Distant+Galaxy&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div
          className="navbar-brand mx-auto" // centrar el texto
          style={{
            fontFamily: "'SF Distant Galaxy', sans-serif",
            color: "yellow",
            fontSize: "32px", // Tamaño de la fuente
          }}
        >
          Star Wars
        </div>
        <div className="ml-auto d-flex">
          <button className="btn btn-light" style={{ marginLeft: "10px" }}>
            FAVORITES
          </button>
        </div>
      </div>
    </nav>
  );
};



