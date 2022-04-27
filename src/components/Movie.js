import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={coverImg} alt={title} />
      </div>
      <div className="movie__data">
        <h3 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 320 ? summary.slice(0, 320) : summary}
        </p>
      </div>
    </div>
  );
}

Movie.proTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
