import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/everything?q=${id}&apiKey=470a464d3e6442a2a6c3d847be2d0ee9`
          );
          const data = await res.json();

          if (data.status === "ok") {
            const foundNews = data.articles.find((news) => news.title === id);

            if (foundNews) {
              setNewsData(foundNews);
            }
          }
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
        {/* {newsData && (
          <ul>
            {newsData.map((news) => (
              <li>{news.title}</li>
            ))}
          </ul>
        )} */}
        {newsData.title}
      </div>
    </>
  );
}
