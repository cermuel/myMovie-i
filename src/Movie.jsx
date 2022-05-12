import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Movie = () => {
  let { id } = useParams();
  const [details, setdetails] = useState({
    Poster: "",
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    Director: "",
    Genre: "",
    Language: "",
    Plot: "",
    Rated: "",
    RatingIMDBSource: "",
    RatingIMDBVal: "",
    RatingRottenSource: "",
    RatingRottenValue: "",
    Release: "",
    RunTime: "",
    Title: "",
    Type: "",
    Writers: "",
    Year: "",
  });
  useEffect(() => {
    Axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4ea4008f`).then(
      (response) => {
        console.log(response.data);
        setdetails({
          Poster: response.data.Poster,
          Actors: response.data.Actors,
          Awards: response.data.Awards,
          BoxOffice: response.data.BoxOffice,
          Country: response.data.Country,
          Director: response.data.Director,
          Genre: response.data.Genre,
          Language: response.data.Language,
          Plot: response.data.Plot,
          Rated: response.data.Rated,
          RatingIMDBSource: response.data.Ratings[0].Source,
          RatingIMDBVal: response.data.Ratings[0].Value,
          // RatingRottenSource: response.data.Ratings[1].Source,
          // RatingRottenValue: response.data.Ratings[1].Value,
          Release: response.data.Released,
          RunTime: response.data.Runtime,
          Title: response.data.Title,
          Type: response.data.Type,
          Writers: response.data.Writer,
          Year: response.data.Year,
        });
      }
    );
  }, []);

  return (
    <div>
      <center>
        <div className="card" style={{ width: "25rem", marginTop: "15px" }}>
          <img
            className="card-img-top"
            src={details.Poster}
            alt="Card image cap"
            style={{ width: "24rem", height: "27rem", borderRadius: "5px" }}
          />
          <div className="card-body">
            <b>
              <h5 className="card-title">{details.Title}</h5>
            </b>
            <p className="card-text">{details.Plot}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Year: {details.Year}</li>
            <li className="list-group-item">Genre: {details.Genre} </li>
            <li className="list-group-item">Type: {details.Type} </li>
            <li className="list-group-item">Rated: {details.Rated} </li>
            <li className="list-group-item">Language: {details.Language} </li>
            <li className="list-group-item">Release Date: {details.Release}</li>
            <li className="list-group-item">Country: {details.Country}</li>
            <li className="list-group-item">Director: {details.Director} </li>
            <li className="list-group-item">Writers: {details.Writers} </li>
            <li className="list-group-item">Main Actors: {details.Actors} </li>
            <li className="list-group-item">Run Time: {details.RunTime} </li>
            <li className="list-group-item">Awards: {details.Awards} </li>
            <li className="list-group-item">
              Box Office Earnings: {details.BoxOffice}
            </li>
            <li className="list-group-item">
              IMDB Ratings: {details.RatingIMDBVal}
            </li>
            {/* <li className="list-group-item">
              RottenTomatoe Ratings: {details.RatingRottenValue}
            </li> */}
          </ul>
        </div>
      </center>
    </div>
  );
};

export default Movie;
