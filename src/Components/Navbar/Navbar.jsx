import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
          <a href="#!">REPOSITORIO INSTITUCIONAL</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>

              <li>
                <Link to={"/search"}>Search</Link>
              </li>

              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
