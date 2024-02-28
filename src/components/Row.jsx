/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
// import baseURLRequest from "./Axios";

// import requests from "./requests";

//useEffect: we need useEffect when:
// - we need to execute a particular code just once
// - we need to execute a particular code whenever a variable is modified

function Row(props) {
  // console.log(props);
  const [movies, setMovies] = useState([]);
  const img_base_path = "https://image.tmdb.org/t/p/original";
  const baseURL = "https://api.themoviedb.org/3";
  const corxProxy = "https://corsproxy.org/?";
  const finalURL = corxProxy + encodeURIComponent(baseURL + props.endpoint);

  useEffect(() => {
    async function fetchData() {
      // const result = await props.endpoint;
      const result = await axios.get(finalURL);
      // console.log(result);
      setMovies(result.data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="row">
      <h1>{props.heading}</h1>
      <div className={props.big === true ? "movieRow big" : "movieRow"}>
        {movies.map((movie, index) => {
          return (
            <img
              key={index}
              src={img_base_path + movie.poster_path}
              title={movie.title || movie.name || movie.original_name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
