import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNewMovie } from '../feature/movieSlice';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_MOVIE_DB}&&i=${id}&plot=full`;
  const movies = useSelector((state) => state.movies.newData);

  useEffect(() => {
    dispatch(fetchNewMovie(url));
  }, [url]);
  return (
    <article className="flex flex-col w-72">
      <h2 className="order-2 text-3xl font-bold">{movies?.Title}</h2>
      <img
        src={movies?.Poster}
        alt={movies?.Title}
        width={400}
        className="order-1"
      />
      <h3 className="order-3">{movies.Actors}</h3>
      <p className="order-4">{movies.Plot}</p>
    </article>
  );
};

export default MovieDetail;
