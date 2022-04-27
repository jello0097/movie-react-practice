import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    if (json.status === 'ok') {
      setMovie(json.data.movie);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <div>평점(⭐): {movie.rating} 점</div>
          <div>상영시간: {movie.runtime} 분</div>
          <div>줄거리: {movie.description_intro || '정보 없음'}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
