import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { URL_BASE } from "../../Config/URL_BASE";
import { useForm } from "../../hooks/useForm";
import BookCard from "../../Components/Card/BookCard";

const Search = () => {
  const [data, setData] = useState({
    cargado: false,
    results: [],
  });
  const [formValues, handleInputChange] = useForm({
    titulo: "",
    materia: "",
    tipo_de_publicacion: "",
    fecha_publicacion: "",
  });
  const { titulo, materia, tipo_de_publicacion, fecha_publicacion } =
    formValues;

  const emptyValidate = () => {
    if (
      titulo.trim() === "" &&
      fecha_publicacion.trim() === "" &&
      materia.trim() === "" &&
      tipo_de_publicacion.trim() === ""
    ) {
      return false;
    }
    return true;
  };
  const getResults = async (e) => {
    e.preventDefault();

    const url = `${URL_BASE}/archivo/?titulo=${titulo}&materia=${materia}&fecha_publicacion=${fecha_publicacion}&tipo_de_publicacion=${tipo_de_publicacion}`;
    const token = localStorage.getItem("token");
    if (emptyValidate() === true) {
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
        cargado: true,
        results: response.results,
      });
    }else{
      alert("ingrese datos")
    }
  };
  const { cargado, results } = data;
  return (
    <>
      <Navbar />
      <h1>Busqueda</h1>

      <form method="post" onSubmit={getResults}>
        
        <div className ="titulo" />
        <input
          type="text"
          name="titulo"
          placeholder="titulo"
          value={titulo}
          onChange={handleInputChange}
        
        />

          
        <br />

        <div className="materia" />
        <input
          type="text"
          name="materia"
          placeholder="materia"
          value={materia}
          onChange={handleInputChange}
        />
        <br />


        <div className="tipo" />
        <input
          type="text"
          name="tipo_de_publicacion"
          placeholder="Tipo de publicacion"
          value={tipo_de_publicacion}
          onChange={handleInputChange}
        />
        <br />

        <div className="fecha"/>
        <input
          type="date"
          name="fecha_publicacion"
          placeholder="Fecha de publicacion"
          value={fecha_publicacion}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Buscar</button>
      </form>
      {!cargado ? (
        <p></p>
      ) : (
        results.map((element) => (
          <BookCard
            key={element.id}
            titulo={element.titulo}
            imagen={element.imagen}
            id={element.id}
          />
        ))
      )}
    </>
  );
};

export default Search;
