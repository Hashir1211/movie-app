import "./MovieListing.scss";
import { getAllMovies, getAllShows } from "../../feature/movies";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows)
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3> {movies.Error} </h3>
      </div>
    );

    let renderShows = "";
    renderShows =
      shows.Response === "True" ? (
        shows.Search.map((show, index) => (
          <MovieCard key={index} data={show} />
        ))
      ) : (
        <div className="movie-error">
          <h3> {movies.Error} </h3>
        </div>
      );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
