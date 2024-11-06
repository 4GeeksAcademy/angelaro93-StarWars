import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favsCount = store.favorites.length
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
        <ul>
          <li className="nav-item me-3 me-lg-0 dropdown">
            <i
              className=" text-white btn  dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favorites: {favsCount}
            </i>
            <div
              className="dropdown-menu text-black"
              aria-labelledby="dropdownMenu2"
            >
              <ul>
                {store.favorites.map((favorite, index) => (
                  <li key={index}>
                    {favorite}
                    <RiDeleteBin6Fill
                      className="deleteIcon"
                      onClick={() => actions.deleteFavorite(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
