import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getFilmById } from 'service/api';
import { Section } from 'components/Container';
import {
  GoBackLink,
  Image,
  FilmDetailsbox,
  FilmInfoBox,
  PageTitle,
  FilmText,
  FilmSubTitle,
  StyledLink,
  LinkBox,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [filmDetails, setАilmDetails] = useState('');

  console.log(location);

  useEffect(() => {
    getFilmById(movieId).then(res => {
      if (res) {
        return setАilmDetails(res);
      }
    });
  }, [movieId]);

  const { genres, title, vote_average, overview, release_date, poster_path } =
    filmDetails;

  return (
    <>
      <GoBackLink to={location?.state?.from ?? '/'}>Go back</GoBackLink>
      {filmDetails && (
        <div>
          <Section>
            <FilmDetailsbox>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster"
              />
              <FilmInfoBox>
                <PageTitle>
                  {title} ({release_date.substring(0, 4)})
                </PageTitle>
                <FilmText>User Score: {vote_average * 10}%</FilmText>
                <FilmSubTitle>Overview</FilmSubTitle>
                <FilmText>{overview}</FilmText>
                <FilmSubTitle>Genres</FilmSubTitle>
                <FilmText>{genres.map(genre => genre.name).join(' ')}</FilmText>
              </FilmInfoBox>
            </FilmDetailsbox>
          </Section>
          <Section>
            <PageTitle>Additional information</PageTitle>
            <LinkBox>
              <StyledLink state={{ from: location.state.from }} to={`cast`}>
                Cast
              </StyledLink>
              <StyledLink state={{ from: location.state.from }} to={`reviews`}>
                Reviews
              </StyledLink>
            </LinkBox>

            <Suspense fallback="">
              <Outlet />
            </Suspense>
          </Section>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
