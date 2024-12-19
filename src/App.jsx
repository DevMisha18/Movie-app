import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourite";
import RemoveFavourites from "./components/RemoveFavourites";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=b2583786`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) setMovies(responseJSON.Search);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };
  const addFavouriteMovie = (movie) => {
    for (const favourite of favourites) {
      if (movie.imdbID === favourite.imdbID) return;
    }
    const favouriteList = [...favourites, movie];
    setFavourites(favouriteList);
    saveToLocalStorage(favouriteList);
  };
  const removeFavouriteMovie = (remMovie) => {
    const filteredFavourites = favourites.filter(
      (movie) => movie.imdbID !== remMovie.imdbID
    );
    setFavourites(filteredFavourites);
    saveToLocalStorage(filteredFavourites);
  };

  return (
    <>
      <div className="m-3 flex justify-between items-center">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieList
        movies={movies}
        handleFavouritesClick={addFavouriteMovie}
        AddToFavourites={AddToFavourites}
      />
      <div className="m-3 flex justify-between items-center">
        <MovieListHeading heading="Favourites" />
      </div>
      <MovieList
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        AddToFavourites={RemoveFavourites}
      />
    </>
  );
}
