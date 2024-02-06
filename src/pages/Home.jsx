import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Results from "../components/Results";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState("");

  const apiKey = "470a464d3e6442a2a6c3d847be2d0ee9";

  const fetchNews = async (query) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setNewsData(data.articles);
      console.log(data.articles);
    } catch (error) {
      toast.error("Error in fetching News!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query?.trim() !== "") {
      fetchNews(query);
    }
  }, [query]);

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <Search query={query} setQuery={setQuery} onSearch={newsData} />
        </div>
        <div className="text-center">
          {loading ? <Loader /> : <Results newsData={newsData} />}
        </div>
      </div>
    </>
  );
}
