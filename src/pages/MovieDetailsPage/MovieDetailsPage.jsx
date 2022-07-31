import { NavLink, Route, Routes, useParams, useNavigate, useLocation, } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import * as Api from './../../api/movies-api';
import {Image, Label, OverviewText, Wrapper, Description, Title, Button} from './MovieDetailsPage.styled';
import placeholderImg from './../../img/poster.jpg';
import  Cast from './../../components/Cast/Cast';
import  Reviews  from 'components/Reviews/Reviews';
import PropTypes from 'prop-types';

const INIT_STATE = {
    init: true,
    title: '',
    poster_path: '',
    vote_average: '',
    overview: '',
    genres: [],
  };

 export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(INIT_STATE);
    const navigate = useNavigate();
    const { state } = useLocation();
    const placeToReturn = useRef(null);

    useEffect(() => {
        if (state) {
            placeToReturn.current = state;
          }
        }, [state]);

    const goBack = () => {
        const returnTo = placeToReturn.current ? placeToReturn.current : '/';
        navigate(returnTo);
      };

    const { slug } = useParams();
    const movieID = slug.match(/[a-z0-9]+$/)[0];



    useEffect(() => {
        Api.fetchMovieById(movieID).then(setMovie);
      }, [movieID]);

      const { title, poster_path, vote_average, overview, genres } = movie;
        const genresList = genres.map(genre => genre.name).join(', ');

    return (
        <>
            <Button type='button' onClick={goBack}>Back{placeToReturn.current?.label}
            </Button>
            {!movie.init && (
     <>
          <Wrapper>
            <Image src={poster_path ? 
                `https://image.tmdb.org/t/p/w300${poster_path}` 
                : placeholderImg} alt={title} 
                />
            <Description>
                <Title>{title}</Title>
                <Label>User score: {vote_average *10} %</Label>
                <Label>Overview</Label>
                <OverviewText>{overview}</OverviewText>
                <Label>Genres</Label>
                <p>{genresList}</p>
            </Description>
            </Wrapper>
             <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>    
             <Suspense fallback={<h1>LOADING THE ROUTE...</h1>}>
                <Routes>
                    <Route path="cast" element={<Cast id={movieID} />} />
                    <Route path="reviews" element={<Reviews id={movieID} />} />
                </Routes>
             </Suspense>
             </>
        )}
    </>
    );
}
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
        id: PropTypes.string,
}
    