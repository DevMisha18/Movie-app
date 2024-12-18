import PropTypes from "prop-types";

export default function SearchBox({ searchValue, setSearchValue }) {
  return (
    <div>
      <input
        className="search-box"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to search.."
      ></input>
    </div>
  );
}

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
