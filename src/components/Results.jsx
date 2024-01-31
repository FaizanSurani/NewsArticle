import React from "react";

export default function Results({ newsData }) {
  return (
    <>
      {/* <p>
        Found <strong>{newsData.length}</strong> results
      </p> */}
      <div>
        {newsData ? (
          newsData.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <p>No Result Found</p>
        )}
      </div>
    </>
  );
}
