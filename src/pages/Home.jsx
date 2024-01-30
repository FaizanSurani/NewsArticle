import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState("");

  const apiKey = "470a464d3e6442a2a6c3d847be2d0ee9";

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const res = await fetch(
  //       `https://newsapi.org/v2/everything?q=apple&apiKey=${apiKey}`
  //     );
  //     const data = await res.json();
  //     console.log(data.articles[0]);
  //   };
  //   fetchNews();
  //   // setNewsData(data.articles[0]);
  //   setLoading(false);
  // }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="px-4 py-2 mt-7 mb-2 w-[40%] text-center border-gray-500 hover:border-gray-600 active:border-gray-700 rounded transition duration-150 ease-in-out"
        />
      </div>
      <div></div>
    </>
  );
}
