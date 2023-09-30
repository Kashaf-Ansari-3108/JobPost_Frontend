import React from "react";
import "../Components/module.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../store/authUtils";

const NavBar = () => {
  const token = getTokenFromLocalStorage();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 list_items">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/categories"
                className="nav-link "
                aria-current="page"
                href="#"
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link active"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            {!token ? (
              <Link to="/login">
                <button className="login">Login</button>{" "}
              </Link>
            ) : (
              <Link to="/dashboard">
                <button className="login">Dashboard</button>{" "}
              </Link>
            )}

            <Link to="/register">
              {" "}
              <button className="signup">Signup</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
