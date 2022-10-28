import Movies from './components/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
