import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return <h1>{data}</h1>;
};

export default Home;
