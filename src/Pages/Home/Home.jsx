import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import BookCard from "../../Components/Card/BookCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  const [url, setUrl] = useState(`${URL_BASE}/archivo/`);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [actualPage, setActualPage] = useState(null);
  const [data, setData] = useState({
    loading: true,
    results: [],
  });
  const getLibros = async () => {
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
    setNextPage(response.info.next);
    setPrevPage(response.info.prev);
    setActualPage(response.info.page_number);
    setData({
      loading: false,
      results: response.results,
    });
  };
  const { loading, results } = data;

  const handlePrevPage = () => {
    if (prevPage !== null) {
      setUrl(prevPage);
    }
  };
  const handleNextPage = () => {
    if (nextPage !== null) {
      setUrl(nextPage);
    }
  };
  useEffect(() => {
    getLibros();
  }, [url]);

  return (
    <>
      <Navbar />

      <div className="main-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          {
            /* results.map((element) => (
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
        )) */
          }(
            <>
              <table>
                <caption>Team Information</caption>
                <thead>
                  <tr class="thead">
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Website</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Name">Jeevan Kumar</td>
                    <td data-label="Title">Front-end Expert</td>
                    <td data-label="Website">jeevankaree.com</td>
                    <td data-label="Role">Admin</td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Name">
                      Lindsay Walton
                    </td>
                    <td data-label="Title">Designer</td>
                    <td data-label="Website">lindawalton.com</td>
                    <td data-label="Role">Member</td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Name">
                      Tom Cook
                    </td>
                    <td data-label="Title">Marketer</td>
                    <td data-label="Website">tom.in</td>
                    <td data-label="Role">Admin</td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Name">
                      Floyd Miles
                    </td>
                    <td data-label="Title">Principal Designer</td>
                    <td data-label="Website">floydmiles.com</td>
                    <td data-label="Role">Member</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        )}

        <form className="form-pagina">
          <button className="button-prev" onClick={handlePrevPage}>
            Anterior
          </button>
          <label className="label-pagina">Pagina actual: {actualPage}</label>
          <button className="button-next" onClick={handleNextPage}>
            Siguiente
          </button>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
