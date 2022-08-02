import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
