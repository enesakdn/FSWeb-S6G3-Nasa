import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/Title";
import Image from "./components/İmage";
import Explanation from "./components/Explanation";

function App() {
  const [apiData, setApiData] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=l9D4Rx0IM0uFmHM9xXZ7hFvmYKxPm6L0xezcIphX"
      )
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Nasa api</h1>
        <h2>Tarih: {date.toLocaleDateString()}</h2>
      </header>
      {apiData && (
        <>
          <Title title={apiData.title} />
          <Image source={apiData.url} />
          <Explanation explanation={apiData.explanation} />
        </>
      )}
    </div>
  );
}

export default App;
