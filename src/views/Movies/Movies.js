import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmByQuery } from 'service/api';
import FilmList from 'components/FilmList';
import toast from 'react-hot-toast';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [filmsByQuery, setFilmsByQuery] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getFilmByQuery(query).then(res => {
      if (res.length > 0) {
        setFilmsByQuery(res);
      } else {
        toast.error('Sorry, there are no movies for your request');
      }
    });
  }, [query]);

  return (
    <div>
      <SearchForm
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />

      {filmsByQuery.length > 0 && <FilmList films={filmsByQuery} />}
    </div>
  );
};

export default Movies;
