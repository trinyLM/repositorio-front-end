import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const BookCard = ({ id, titulo, imagen, autor,materia }) => {
  return (
    <>
      {/* <hr />
      <h1>{titulo}</h1>
      <img src={imagen} alt={titulo} />
      <p>{autor}</p>
      <button>
        <Link to={`/detail/${id}`}>ver mas</Link>
      </button>
      <hr /> */}

      <div class="main" >
        
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={imagen} alt={titulo} />
              </div>
              <div class="card_content">
                <h2 class="card_title">{titulo}</h2>
                <p class="card_text">{materia}</p>
                <button class="btn card_btn">
                  <Link to={`/detail/${id}`}>Detalles</Link>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BookCard;
