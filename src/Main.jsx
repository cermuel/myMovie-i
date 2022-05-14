import "./App.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  const [result, setresult] = useState({
    Poster: "",
    Title: "",
    Type: "",
    Year: "",
    id: "",
  });
  const [amount, setamount] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const find = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=4ea4008f`)
      .then((response) => {
        console.log(response.data.Search[amount]);
        setresult({
          Poster: response.data.Search[amount].Poster,
          Title: response.data.Search[amount].Title,
          Type: response.data.Search[amount].Type,
          Year: response.data.Search[amount].Year,
          id: response.data.Search[amount].imdbID,
        });
      });
    setshowResult(true);
  };

  console.log(result.id);

  const navigate = useNavigate();

  const input = useRef("");

  const [search, setsearch] = useState("");
  let SearchValue;

  return (
    <div className="App">
      <center>
        <div className="container">
          <center>
            <h1 className="header">MOVIE INFO</h1>
            <a href="" className="siteTwo">
              Movie Info 2.0
            </a>
          </center>
          <div className="search">
            <input
              type="search"
              ref={input}
              placeholder="Movie Title..."
              className="inputText"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <button
              onClick={find}
              style={{
                marginTop: 20,
                padding: "10px",
                width: "4%",
                height: "50px",
                backgroundColor: "rgb(62, 62, 224)",
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <br />
          {showResult ? (
            <div className="card" style={{ width: "18rem" }}>
              <img src={result.Poster} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{result.Title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{result.Type}</li>
                <li className="list-group-item">{result.Year}</li>
              </ul>
              <a
                href=""
                onClick={() => {
                  navigate(`/movie/${result.id}`);
                }}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Learn More
              </a>
            </div>
          ) : null}
        </div>
      </center>
    </div>
  );
};

export default Main;
