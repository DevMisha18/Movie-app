import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourite";
import RemoveFavourites from "./components/RemoveFavourites";
import axios from "axios";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (search) => {
    search = "star";
    const url = `https://www.omdbapi.com/?s=${search}&apikey=b2583786`;

    // Another way to use to use axios
    // prettier-ignore
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     if (data.Search) setMovies(data.Search);
    //   });

    const response = await axios.get(url);
    const data = await response.data;
    if (data.Search) setMovies(data.Search);
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
