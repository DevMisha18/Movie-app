import PropTypes from "prop-types";

export default function MovieListHeading({ heading }) {
  return <h1 className="text-3xl text-white">{heading}</h1>;
}

MovieListHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};
