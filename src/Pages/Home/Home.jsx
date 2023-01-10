import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import BookCard from "../../Components/Card/BookCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState({
    loading: true,
    results: [],
  });
  const getLibros = async () => {
    const url = `${URL_BASE}/archivo/`;
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
      results: response.results,
    });
  };
  const { loading, results } = data;
  useEffect(() => {
    getLibros();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        results.map((element) => (
          <div>
            <div className="book">
              <BookCard
                key={element.id}
                titulo={element.titulo}
                imagen={element.imagen}
                id={element.id}
                materia={element.materia}


              />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
