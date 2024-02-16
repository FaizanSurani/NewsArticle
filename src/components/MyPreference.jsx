import React, { useState } from "react";

export default function MyPreference({ title, description, src, url }) {
  return (
    <>
      <div className="" style={{ maxWidth: "345px", maxHeight: "500px" }}>
        <div className="mt-6 mb-6 border border-gray-300 bg-gray-900 text-white px-7 py-3">
          <img src={src} alt="..." />
          <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 mb-3 bg-blue-600 px-7 py-3 uppercase rounded text-center">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
