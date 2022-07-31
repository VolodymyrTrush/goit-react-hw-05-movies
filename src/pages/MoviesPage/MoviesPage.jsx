import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Api from '../../api/movies-api';
import {Input, Button, StyledLink} from './MoviesPage.styled';
import PropTypes from 'prop-types';
import slugify from 'slugify';

const makeSlug = (id, title) => slugify(`${title} ${id}`, { lower: true });


export const MoviesPage = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Api.fetchWithSearch(search).then(setMovies);
        setSearch('');
    }

    const { pathname } = useLocation();

    return (
        <>
           <form onSubmit={handleSubmit}>
                <Input type="text" 
                value={search} 
                onChange={e => 
                setSearch(e.target.value)} />
                <Button type="submit">Search</Button>
            </form>
            <ul>
                {movies.map(({id, title}) => (
                    <li key={id}>
                        <StyledLink to={`${makeSlug(id, title)}`}
                         state={{ label: ' to movie search', 
                         pathname }}>{title}
                         </StyledLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MoviesPage;

MoviesPage.propTypes = {
    search: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
    }))
}
