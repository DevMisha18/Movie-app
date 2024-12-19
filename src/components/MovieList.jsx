import PropTypes from "prop-types";

export default function MovieList({
  movies,
  handleFavouritesClick,
  AddToFavourites,
}) {
  // bg-dark
  return (
    <div className="movies flex flex-nowrap overflow-x-auto no-scroll">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="relative m-3 flex-shrink-0 border-2 border-white group"
        >
          <img
            src={movie.Poster}
            className="h-80 transition-transform duration-200 ease-in-out
                       hover:scale-110"
          ></img>
          <div
            onClick={() => handleFavouritesClick(movie)}
            className="overlay hover:cursor-pointer group-hover:opacity-100"
          >
            <AddToFavourites />
          </div>
        </div>
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleFavouritesClick: PropTypes.func.isRequired,
  AddToFavourites: PropTypes.element.isRequired,
};
