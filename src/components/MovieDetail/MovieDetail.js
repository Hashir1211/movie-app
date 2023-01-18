import "./MovieDetail.scss";
import React, { useEffect } from "react";
import { getAllMoviesOrShows, removeMoviesorShows } from "../../feature/movies";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMoviesOrShows } from "../../feature/movies";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMoviesOrShows);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShows(imdbID));
    return () => dispatch(removeMoviesorShows())
    
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? 
      <div> ...Loading </div>  : (
      <>
      <div className="section-left">
        <div className="movie-title">{data.title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
        </div>
        <div className="movie-plot"> {data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>

          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />{" "}
      </div>
      </>
      )}
    </div>
  );
};

export default MovieDetail;
