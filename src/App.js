import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import { Container } from './components/Container';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetails/Cast'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
