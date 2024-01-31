import React from "react";

export default function Results({ newsData }) {
  return (
    <>
      <p>
        Found <strong>{newsData.length}</strong> results
      </p>
    </>
  );
}
