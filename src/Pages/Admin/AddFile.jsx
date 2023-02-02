import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./AddFile.css";
import { URL_BASE } from "../../Config/URL_BASE";
const AddFile = () => {
  const [listAutors, setListAutors] = useState([]);
  const [listTypesPosts, setListTypesPosts] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [materia, setMateria] = useState("");
  const [resumen, setResumen] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState(null);
  const [tipoPublicacion, setTipoPublicacion] = useState(null);
  const [autor, setAutor] = useState(null);

  const [imagen, setImagen] = useState(null);
  const [pdf, setPdf] = useState(null);

  const getListAutors = async () => {
    const url = `${URL_BASE}/gestion/lista/autores/`;

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    setListAutors(response);
  };
  const getListTypesPosts = async () => {
    const url = `${URL_BASE}/gestion/lista/tiposdepublicacion/`;

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    console.log(response);
    setListTypesPosts(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imagen !== null && pdf !== null) {
      const data = new FormData();
      data.append("titulo", titulo);
      data.append("imagen", imagen);
      data.append("materia", materia);
      data.append("fecha_publicacion", fechaPublicacion);
      data.append("resumen", resumen);
      data.append("tipo_de_publicacion", tipoPublicacion);
      data.append("autor", autor);
      data.append("pdf", pdf);

      const url = `${URL_BASE}/gestion/book/create/`;
      const token = localStorage.getItem("token");
      const request = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
          'Authorization' : `Token ${token}`,
        },
      });
      const response = await request.json();
      response.id?alert("archivo creado correctamente "):alert("hubo un error");
      console.log(response);
    }

    //se enviara la informacion al bakend
  };
  useEffect(() => {
    getListAutors();
    getListTypesPosts();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Agregar nuevo archivo</h1>
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
              <form onSubmit={handleSubmit} method= "POST">
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    required
                    type="text"
                    name="titulo"
                    placeholder="Titulo"
                    value={titulo}
                    onChange={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="imagen">Selecciona una imagen</label>
                  <br />
                  <input
                    type="file"
                    name="imagen"
                    accept=".jpg,.png,.jpeg"
                    placeholder="Imagen"
                    onChange={(e) => {
                      setImagen(e.target.files[0]);
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
                    name="materia"
                    placeholder="Materia"
                    value={materia}
                    onChange={(e) => {
                      setMateria(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="fecha">Fecha de Publbicacion</label>
                  <br />
                  <input
                    required
                    type="date"
                    name="fecha"
                    placeholder="Fecha de publicacion"
                    onChange={(e) => {
                      setFechaPublicacion(e.target.value);
                    }}
                    value={fechaPublicacion}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="pdf">Seleccionar archivo</label>
                  <br />
                  <input
                    type="file"
                    name="pdf"
                    placeholder="pdf"
                    accept=".pdf"
                    onChange={(e) => {
                      setPdf(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="resumen ">Resumen</label>
                  <br />
                  <textarea
                    required
                    name="resumen"
                    id="resumen"
                    cols="30"
                    rows="10"
                    value={resumen}
                    onChange={(e) => {
                      setResumen(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="typePostd">Tipo de Publicacion</label>
                  <br />
                  <select
                    name="typePostd"
                    id="typePostd"
                    value={tipoPublicacion}
                    onChange={(e) => setTipoPublicacion(e.target.value)}
                  >
                    {listTypesPosts.map((item) => {
                      return <option value={item.id}>{item.nombre}</option>;
                    })}
                  </select>
                </div>
                <div className="input_field">
                  {" "}
                  {/* <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span> */}
                  <label htmlFor="autor">Autor</label>
                  <br />
                  <select
                    name="autor"
                    id="autor"
                    value={autor}
                    onChange={(e) => {
                      setAutor(e.target.value);
                    }}
                  >
                    {listAutors.map((item) => {
                      return <option value={item.id}>{item.nombres}</option>;
                    })}
                  </select>
                </div>

                <input className="button" type="submit" value="Crear Archivo" />
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

export default AddFile;
