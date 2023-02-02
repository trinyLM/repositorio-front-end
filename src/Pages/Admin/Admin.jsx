import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Admin.css";
const Admin = () => {
  return (
    <>
      <Navbar />
      <h1>Bienvenido al sitio de administracion</h1>
      <hr />
      <button className="button-add-files">
        <Link to={`/addfile`}>Agregar archivos</Link>
      </button>
      <br />
      <br />
      <button className="button-add-files">
      <Link to={`/addautor`}>Agregar Autor</Link>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Admin;
