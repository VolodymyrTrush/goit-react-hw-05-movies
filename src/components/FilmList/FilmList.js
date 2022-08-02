import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, List, ListItem } from './FilmList.styled';
import { Section } from 'components/Container';

const FilmList = ({ films, title }) => {
  const location = useLocation();

  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {films.map(({ title, id }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default FilmList;
