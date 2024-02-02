import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { id } = useParams();
  const [newsData, setNewsData] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <div></div>
    </>
  );
}
