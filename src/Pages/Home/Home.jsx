import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import BookCard from "../../Components/Card/BookCard";
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
      <h1>Home</h1>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : (
        results.map((element) => (
          <BookCard
            key={element.id}
            titulo={element.titulo}
            imagen={element.imagen}
          />
        ))
      )}
    </>
  );
};

export default Home;
