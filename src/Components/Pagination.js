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
          <a key={number} onClick={() => paginado(number)}>
            {number}
          </a>
        ))}
    </nav></div>
  );
};

export default Paginado;
