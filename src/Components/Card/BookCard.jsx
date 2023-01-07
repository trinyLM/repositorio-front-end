import React from "react";
import { Link } from "react-router-dom";
const BookCard = ({ id, titulo, imagen, autor }) => {
  return (
    <>
      <hr />
      <h1>{titulo}</h1>
      <img src={imagen} alt={titulo} />
      <p>{autor}</p>
      <button>
        <Link to={`detail/${id}`}>ver mas</Link>
      </button>
      <hr />
    </>
  );
};

export default BookCard;
