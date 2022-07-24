import { NavLink, Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import LogoImg from "../../images/logo/FieldX.png";

const Navbar = () => {
  return (
    <div className="navbar__banner">
      <div className="navbar px-12 pb-3 py-5 flex items-center justify-between">
        <Link to="/">
          <img src={LogoImg} alt="" />
        </Link>
        <nav>
          <NavLink className="login__btn" to="/login">
            Login
          </NavLink>
          <NavLink className="regi__btn" to="/registration">
            Registration
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
