import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'service/api';

export const useGetTrendingFilms = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    getTrendingFilms().then(res => {
      if (Array.isArray(res)) {
        setTrendingFilms(res);
      }
    });
  }, []);
  return trendingFilms;
};
