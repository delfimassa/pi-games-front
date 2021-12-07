import React from "react";
import "../styles/Pagination.css";

const Paginado = ({ gamesPerpage, allVideoGames, paginado }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allVideoGames / gamesPerpage); i++) {
    pageNumbers.push(i);
  }
  return (
      <div className="pagWrapper">
    <nav className="pagination">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginado(number)}>
            {number}
          </button>
        ))}
    </nav></div>
  );
};

export default Paginado;
