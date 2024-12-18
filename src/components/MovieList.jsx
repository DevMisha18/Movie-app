import PropTypes from "prop-types"

export default function MovieList({ movies }) {
  // bg-dark
  return (
    <div className="movies flex flex-nowrap overflow-x-auto no-scroll">
      {movies.map(movie => 
          <div key={movie.imdbID} className="m-3">
            <img src={movie.Poster}></img>
          </div>)}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}