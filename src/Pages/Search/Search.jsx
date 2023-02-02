import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { URL_BASE } from "../../Config/URL_BASE";
import { useForm } from "../../hooks/useForm";
import BookCard from "../../Components/Card/BookCard";
import "./Search.css";
import Footer from "../../Components/Footer/Footer";

const Search = () => {
  const [data, setData] = useState({
    cargado: false,
    results: [],
  });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const getResults = async (e) => {
    e.preventDefault();
    const url = `${URL_BASE}/archivo/?page=${page}&search=${query}`;
    const token = localStorage.getItem("token");
    if (query.trim() !== "") {
      const request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      const response = await request.json();
      console.log(response);
      if (page < response.info.pages) {
        setPage(page + 1);
      }
      setData({
        cargado: true,
        results: [results, ...response.results],
      });
    } else {
      alert("ingrese datos");
    }
  };
  const { cargado, results } = data;
  return (
    <>
      <Navbar />
    <div className="fondillo">
      <div className="search">
        <form method="Post" onSubmit={getResults}>
          <div>
            <input
              type="text"
              name="Buscar"
              placeholder="buscar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input class="fa fa-search" type="submit" value="Buscar" />
          </div>
        </form>
      </div>

      <br />
      <br />
      <div>
        {!cargado ? (
          <p></p>
        ) : (
          results.map((element) => (
            <BookCard
              key={element.id}
              titulo={element.titulo}
              imagen={element.imagen}
              id={element.id}
              autor={element.autor}
            />
          ))
        )}
        {cargado && <button className="button-buscar" onClick={getResults}>Ver mas resultados</button>}
      </div>
     

      </div>
           
      <Footer></Footer>
    </>
  );
};

export default Search;
