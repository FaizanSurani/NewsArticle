import React from "react";

export default function Results({ newsData }) {
  return (
    <>
      <p>
        Found <strong>{newsData.length}</strong> results
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2">
        {newsData.map((data, index) => (
          <ul className="border border-gray-600 shadow-md mb-6 rounded w-full">
            <li key={index}>{data.title}</li>
            <p>{data.description}</p>
          </ul>
        ))}
      </div>
    </>
  );
}
