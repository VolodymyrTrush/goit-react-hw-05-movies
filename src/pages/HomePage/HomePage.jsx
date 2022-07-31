import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './HomePage.styled';
import slugify from 'slugify';
import * as Api from '../../api/movies-api';
import PropTypes from 'prop-types';

const makeSlug = (id, title) => slugify(`${title} ${id}`, { lower: true });

export const HomePage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        Api.fetchPopularMovies().then(setItems);
    }
    , []);

    const { pathname } = useLocation();

return (
    <>
    <h1>Trending this week</h1>
    <ul>
        {items.map(({ id, title }) => (
            <li key={id}>
                <StyledLink 
                  to={`/movies/${makeSlug(id, title)}`}
                  state={{ label: ' to home page', pathname }}>
                    {title}
                </StyledLink>
            </li>
        ))}
    </ul>
    </>
);
}

export default HomePage;

HomePage.propTypes = {
    id: PropTypes.number,
}

