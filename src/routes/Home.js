import React from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import axios from 'axios';
import '../style/Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?minimum_rating=8.0&sort_by=new',
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
