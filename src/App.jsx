import { Routes, Route, Navigate } from "react-router-dom";
import {lazy, Suspense} from "react";
import { Container, Header, Link } from "./App.styled";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));


export const App = () => {
 
  return (
    <Container>
      <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<h1>LOADING THE ROUTE...</h1>}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies/:slug/*" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      </Suspense>
    </Container>
  );
  }
  