import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./AddFile.css";
import { URL_BASE } from "../../Config/URL_BASE";
const AddAutor = () => {
  const [listCarreras, setlistCarreras] = useState([]);
  const [listCampus, setlistCampus] = useState([]);

  const [nombre, setnombre] = useState("");
  const [apellido_paterno, setapellido_paterno] = useState("");
  const [apellido_materno, setapellido_materno] = useState("");
  const [matricula, setmatricula] = useState("");
  const [asesorInterno, setAsesorInterno] = useState("");
  const [asesorExterno, setAsesorExterno] = useState("");

  const [carrera, setcarrera] = useState(null);
  const [campus, setcampus] = useState(null);

  const getlistCarreras = async () => {
    const url = `${URL_BASE}/gestion/lista/carreras/`;

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    setlistCarreras(response);
  };
  const getlistCampus = async () => {
    const url = `${URL_BASE}/gestion/lista/campus/`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    setlistCampus(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (carrera !== null && campus !== null) {
      const data = {
        archivos: [],
        nombres: nombre,
        apellido_paterno: apellido_paterno,
        apellido_materno: apellido_materno,
        matricula: matricula,
        asesor_interno: asesorInterno,
        asesor_externo: asesorExterno,
        carrera: carrera,
        campus: campus,
      };

      const url = `${URL_BASE}/gestion/autor/create/`;
      const token = localStorage.getItem("token");
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const response = await request.json();
      if (response.id) {
        alert("Autor creado correctamente");
      } else {
        response.matricula && alert(response.matricula);
        alert("Hubo un error intente nuevamente");
      }

      console.log(response);
    }

    //se enviara la informacion al bakend
  };
  useEffect(() => {
    getlistCarreras();
    getlistCampus();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Agregar nuevo Autor</h1>
      <hr />
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <div className="logo">
              {/* <img src={img} alt="ITSZ" style={{ width: "50%"}}/> */}
            </div>
            <h2>Registra la informacion</h2>
            <br></br>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit} method="POST">
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="nombre"
                    placeholder="Nombre(s)"
                    value={nombre}
                    onChange={(e) => {
                      setnombre(e.target.value);
                    }}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="apellido_paterno"
                    placeholder="Apellido Paterno"
                    value={apellido_paterno}
                    onChange={(e) => {
                      setapellido_paterno(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="apellido_materno"
                    placeholder="Apellido Materno"
                    value={apellido_materno}
                    onChange={(e) => {
                      setapellido_materno(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="matricula"
                    placeholder="Matricula"
                    value={matricula}
                    onChange={(e) => {
                      setmatricula(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="asesorInterno"
                    placeholder="Asesor Interno"
                    value={asesorInterno}
                    onChange={(e) => {
                      setAsesorInterno(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="asesorExterno"
                    placeholder="Asesor Externo"
                    value={asesorExterno}
                    onChange={(e) => {
                      setAsesorExterno(e.target.value);
                    }}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="carrera">Carrera</label>
                  <br />
                  <select
                    name="carrea"
                    id="carrera"
                    value={carrera}
                    onChange={(e) => setcarrera(e.target.value)}
                  >
                    {listCarreras.map((item) => {
                      return <option value={item.id}>{item.nombre}</option>;
                    })}
                  </select>
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="campus">Seleccione Campus</label>
                  <br />
                  <select
                    name="campus"
                    id="campus"
                    value={campus}
                    onChange={(e) => {
                      setcampus(e.target.value);
                    }}
                  >
                    {listCampus.map((item) => {
                      return <option value={item.id}>{item.nombre}</option>;
                    })}
                  </select>
                </div>

                <input className="button" type="submit" value="Crear Autor" />
              </form>
            </div>
          </div>
        </div>
      </div>
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
      <br />
      <Footer />
    </>
  );
};

export default AddAutor;
