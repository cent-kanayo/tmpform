import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../feature/movieSlice';

const Movies = () => {
  const [input, setInput] = useState('Avengers');
  const [newValue, setnewValue] = useState('Avengers');
  const dispatch = useDispatch();
  const handlesearch = (e) => {
    e.preventDefault();
    setnewValue(input);
  };
  const url = `https://www.omdbapi.com/?apiKey=${process.env.REACT_APP_MOVIE_DB}&&s=${newValue}&plot=full`;

  const movies = useSelector((state) => state.movies);
  const { loading, error, errMsg, data } = movies;

  useEffect(() => {
    dispatch(fetchMovies(url));
  }, [url]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{errMsg}</h1>;
  return (
    <>
      <form>
        <input
          type="text"
          placeholder=" enter movie"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />{' '}
        <button onClick={handlesearch}>Search</button>
      </form>
      <div className="flex space-x-5 flex-wrap">
        {data.map((movie) => (
          <Link to={`/movies/${movie.imdbID}`}>
            <article className="flex flex-col w-72" key={movie.imdbID}>
              <h2 className="order-2 text-3xl font-bold">{movie?.Title}</h2>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                width={400}
                className="order-1"
              />
            </article>
            <button>Detail</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Movies;
