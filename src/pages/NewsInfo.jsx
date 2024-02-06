import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/sources?id=${id}&apiKey=470a464d3e6442a2a6c3d847be2d0ee9`
          );
          const data = await res.json();
          console.log(data.sources);
          setNewsData(data.sources);
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
        {newsData.map((news) => (
          <ul>
            <li>{news.name}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
