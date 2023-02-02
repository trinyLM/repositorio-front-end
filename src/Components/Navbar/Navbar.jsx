import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {


  const is_staff = (localStorage.getItem("is_staff") === 'true') ? true : false
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
                <Link to={"/home"}>TESIS ITSZ</Link>
              </li>
              <li>
                <Link to={"/about"}>ACERCA DE</Link>
              </li>

              <li>
                <Link to={"/search"}>BUSQUEDA</Link>
              </li>

              <li>
                <Link to={"/profile"}>MI PERFIL</Link>
              </li>
              {is_staff && (
                <li>
                  <Link to={"/admin"}>ADMINISTRADORES</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
