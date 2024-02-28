/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
// import baseURLRequest from "./Axios";

const baseURL = "https://api.themoviedb.org/3";
const corxProxy = "https://corsproxy.org/?";

function Banner(props) {
  const finalURL = corxProxy + encodeURIComponent(baseURL + props.endpoint);

  const [bannerMovie, setBannerMovie] = useState("");
  const img_base_path = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(finalURL);
      console.log(result.data.results);
      setBannerMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" + img_base_path + bannerMovie.backdrop_path + ")",
      }}
    >
      <h1>
        {bannerMovie.title || bannerMovie.name || bannerMovie.original_name}
      </h1>
      <div className="cta">
        <a href="">Play</a>
        <a href="">My List</a>
        <p>{bannerMovie.overview?.substring(0, 100)}</p>
      </div>
    </div>
  );
}

export default Banner;
