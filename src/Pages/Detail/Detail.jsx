import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { URL_BASE } from "../../Config/URL_BASE";
import "./Detail.css"
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    loading: true,
    libro: {},
  });
  const getLibro = async () => {
    const url = `${URL_BASE}/archivo/${id}`;
    const token = localStorage.getItem("token");
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const response = await request.json();
    console.log(response);
    setData({
      loading: false,
      libro: response,
    });
  };
  const {
    titulo,
    autor,
    fecha_publicacion,
    imagen,
    materia,
    pdf,
    resumen,
    tipo_publicacion,
  } = data.libro;
  useEffect(() => {
    getLibro();
  }, []);
  return (
    <>
      <Navbar />
      {data.loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* <h1>{titulo}</h1>
          <hr />
          <img src={imagen} alt={titulo} />
          <p>{resumen}</p>
          <h5>{autor}</h5>
          <p>{fecha_publicacion}</p>
          <br />
          <p>{materia}</p>
          <br />
          <p>{tipo_publicacion}</p>
          <button>
            <a href={pdf} target="_blank">
              Leer
            </a>
          </button> */}

          <div className="book-detail">
            <div className="cover">
              <div className="img-wrapper">
                <img alt="tarjeta" src={imagen} />
              </div>
              <div className="author-wrapper">
                <img alt="tarjeta" src={imagen} />
                <span>{autor}</span>
              </div>
            </div>

            <div className="content">
              <h2>{titulo}</h2>
              <p>{resumen}</p>
              <button>
                <a href={pdf} target="_blank">
                  Leer
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
