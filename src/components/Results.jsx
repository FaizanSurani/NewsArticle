import React from "react";

export default function Results({ newsData }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 text-center px-7 py-3 my-3 mx-3">
        {newsData?.map((data, index) => (
          <div
            key={index}
            className="border border-gray-600 shadow-lg mb-6 rounded w-full hover:shadow-xl bg-gray-900 text-white">
            <div className="flex justify-center items-center mt-4">
              <img
                src={data.urlToImage}
                alt="..."
                style={{ height: "200px", width: "360px" }}
                className="rounded mb-6 border border-white"
              />
            </div>
            <div>
              <h3 className="mb-4 font-bold text-2xl">{`Author : ${data.author}`}</h3>
              <div className="mb-2 font-serif flex items-center justify-center text-xl">
                {data.title}
              </div>
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 px-7 py-3 rounded text-white hover:bg-blue-700 active:to-blue-800 transition duration-150 ease-in-out uppercase mt-3 mb-3">
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
