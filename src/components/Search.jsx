import React from "react";

export default function Search({ query, setQuery }) {
  return (
    <>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="px-7 py-3 mt-7 mb-2 w-[40%] text-center border border-black hover:border-gray-600 active:border-gray-700 rounded transition duration-150 ease-in-out"
      />
    </>
  );
}
