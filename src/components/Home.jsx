import Row from "./Row";
import Banner from "./Banner";
import Header from "./Header";
import requests from "./requests";

import "./netflix.css";

function Home() {
  return (
    <div className="netflix">
      <Header />
      <Banner endpoint={requests.fetchTrending} />
      <Row
        endpoint={requests.fetchNetflixOriginals}
        heading="Netflix Originals"
        big={true}
      />
      <Row endpoint={requests.fetchTrending} heading="Trending" />
      <Row endpoint={requests.fetchTopRated} heading="Top Rated" />
      <Row endpoint={requests.fetchActionMovies} heading="Action Movies" />
      <Row endpoint={requests.fetchComedyMovies} heading="Comedy Movies" />
      <Row endpoint={requests.fetchHorrorMovies} heading="Horror Movies" />
      <Row endpoint={requests.fetchRomanceMovies} heading="Romantic Movies" />
      <Row endpoint={requests.fetchDocumentaries} heading="Documentaries" />
    </div>
  );
}

export default Home;
