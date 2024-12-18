import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=b2583786`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) setMovies(responseJSON.Search);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="m-3 flex justify-between items-center">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <MovieList movies={movies} />
    </>
  );
}
