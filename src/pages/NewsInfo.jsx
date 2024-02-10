import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    // console.log(id);
    const fetchData = async () => {
      if (id) {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/everything?sources=${id}&apiKey=470a464d3e6442a2a6c3d847be2d0ee9`
          );
          const data = await res.json();
          console.log(data.articles[0]);
          setNewsData(data.articles[0]);
        } catch (error) {
          toast.error("Couldn't Fetch the data!");
          console.log(error);
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <ul>
          {Array.isArray(newsData) &&
            newsData.map((news) => (
              <li key={news.title}>
                <strong>Title:</strong> {news.title}
                <br />
                <strong>Author:</strong> {news.author}
                <br />
                <strong>Description:</strong> {news.description}
                <br />
                <strong>Source:</strong> {news.source.name}
                <br />
                <strong>URL:</strong>{" "}
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  {news.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
