import FilmList from 'components/FilmList';
import { useGetTrendingFilms } from 'hooks/useGetTrendingFilms';

const Home = () => {
  const trendingFilms = useGetTrendingFilms();

  return (
    <div>
      <FilmList films={trendingFilms} title="Trending films" />
    </div>
  );
};

export default Home;
