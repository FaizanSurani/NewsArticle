import React from "react";
import { Link } from "react-router-dom";

export default function Results({ newsData }) {
  return (
    <>
      <p>
        Found <strong>{newsData.length}</strong> results
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2">
        {newsData.map((data, index) => (
          <ul className="border border-gray-600 shadow-lg mb-6 rounded w-full px-7 py-3 hover:shadow-xl">
            <Link to={`/newsInfo/${data.source.id}`}>
              <h3 className="mb-4 font-bold text-2xl">{`Author : ${data.author}`}</h3>
              <li
                key={index}
                className="mb-2 font-serif flex items-center justify-center text-xl">
                {data.title}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </>
  );
}
